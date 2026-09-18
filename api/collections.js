const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const JWT_SECRET = process.env.ADMIN_SECRET || 'dz-jewellery-master-secret-key-2026-gandhinagar';

function verifyToken(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, payload, signature] = parts;
  const expectedSig = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest('base64url');
  if (signature !== expectedSig) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (data.exp && data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch (e) {
    return null;
  }
}

// Default collections helper
function getInitialCollections() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'collections.json');
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading collections.json:', e);
  }
  return [];
}

// In-memory cache for fast serverless responses
let collectionsCache = null;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!collectionsCache) {
    collectionsCache = getInitialCollections();
  }

  // Optional: Cloud KV integration if configured
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;

  async function getFromKV() {
    if (!kvUrl || !kvToken) return null;
    try {
      const resp = await fetch(`${kvUrl}/get/dz_collections`, {
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      const data = await resp.json();
      if (data && data.result) {
        return typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
      }
    } catch (err) {
      console.warn('KV read failed, falling back:', err);
    }
    return null;
  }

  async function saveToKV(items) {
    if (!kvUrl || !kvToken) return false;
    try {
      await fetch(`${kvUrl}/set/dz_collections`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
      });
      return true;
    } catch (err) {
      console.warn('KV save failed:', err);
      return false;
    }
  }

  // GET: Fetch collections
  if (req.method === 'GET') {
    const cloudItems = await getFromKV();
    if (cloudItems && Array.isArray(cloudItems)) {
      collectionsCache = cloudItems;
    }
    return res.status(200).json({ success: true, data: collectionsCache });
  }

  // MUTATIONS (Protected by Admin Auth)
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    const user = verifyToken(token);

    if (!user) {
      return res.status(401).json({ success: false, error: 'Unauthorized: Valid admin token required' });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { action, item, id, items } = body;

    let updated = [...collectionsCache];

    if (action === 'save_all' && Array.isArray(items)) {
      updated = items;
    } else if (action === 'add' && item) {
      const newItem = {
        ...item,
        id: item.id || `col-${Date.now()}`,
        displayOrder: item.displayOrder || updated.length + 1,
        status: item.status || 'active',
        featured: !!item.featured
      };
      updated.unshift(newItem);
    } else if (action === 'edit' && item && item.id) {
      const idx = updated.findIndex(c => c.id === item.id);
      if (idx !== -1) {
        updated[idx] = { ...updated[idx], ...item };
      }
    } else if (action === 'delete' && id) {
      updated = updated.filter(c => c.id !== id);
    } else if (action === 'toggle' && id) {
      const idx = updated.findIndex(c => c.id === id);
      if (idx !== -1) {
        updated[idx].status = updated[idx].status === 'active' ? 'disabled' : 'active';
      }
    } else if (action === 'feature' && id) {
      const idx = updated.findIndex(c => c.id === id);
      if (idx !== -1) {
        updated[idx].featured = !updated[idx].featured;
      }
    } else if (action === 'reorder' && Array.isArray(items)) {
      updated = items;
    }

    collectionsCache = updated;

    // Try persisting to disk if writable
    try {
      const filePath = path.join(process.cwd(), 'data', 'collections.json');
      fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf8');
    } catch (e) {
      // Ephemeral disk in serverless is expected
    }

    // Persist to Cloud KV if configured
    await saveToKV(updated);

    return res.status(200).json({ success: true, data: updated });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
