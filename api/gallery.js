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

function getInitialGallery() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'gallery.json');
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading gallery.json:', e);
  }
  return [];
}

let galleryCache = null;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!galleryCache) {
    galleryCache = getInitialGallery();
  }

  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;

  async function getFromKV() {
    if (!kvUrl || !kvToken) return null;
    try {
      const resp = await fetch(`${kvUrl}/get/dz_gallery`, {
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      const data = await resp.json();
      if (data && data.result) {
        return typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
      }
    } catch (err) {
      console.warn('KV read failed for gallery:', err);
    }
    return null;
  }

  async function saveToKV(items) {
    if (!kvUrl || !kvToken) return false;
    try {
      await fetch(`${kvUrl}/set/dz_gallery`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
      });
      return true;
    } catch (err) {
      console.warn('KV save failed for gallery:', err);
      return false;
    }
  }

  // GET: Fetch gallery
  if (req.method === 'GET') {
    const cloudItems = await getFromKV();
    if (cloudItems && Array.isArray(cloudItems)) {
      galleryCache = cloudItems;
    }
    return res.status(200).json({ success: true, data: galleryCache });
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

    let updated = [...galleryCache];

    if (action === 'save_all' && Array.isArray(items)) {
      updated = items;
    } else if (action === 'add' && item) {
      const newItem = {
        ...item,
        id: item.id || `gal-${Date.now()}`,
        displayOrder: item.displayOrder || updated.length + 1,
        status: item.status || 'active',
        featured: !!item.featured
      };
      updated.unshift(newItem);
    } else if (action === 'edit' && item && item.id) {
      const idx = updated.findIndex(g => g.id === item.id);
      if (idx !== -1) {
        updated[idx] = { ...updated[idx], ...item };
      }
    } else if (action === 'delete' && id) {
      updated = updated.filter(g => g.id !== id);
    } else if (action === 'toggle' && id) {
      const idx = updated.findIndex(g => g.id === id);
      if (idx !== -1) {
        updated[idx].status = updated[idx].status === 'active' ? 'hidden' : 'active';
      }
    } else if (action === 'feature' && id) {
      const idx = updated.findIndex(g => g.id === id);
      if (idx !== -1) {
        updated[idx].featured = !updated[idx].featured;
      }
    } else if (action === 'reorder' && Array.isArray(items)) {
      updated = items;
    }

    galleryCache = updated;

    try {
      const filePath = path.join(process.cwd(), 'data', 'gallery.json');
      fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf8');
    } catch (e) {
      // Ephemeral disk in serverless is expected
    }

    await saveToKV(updated);

    return res.status(200).json({ success: true, data: updated });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
