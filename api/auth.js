const crypto = require('crypto');

// Default credentials specified by owner (can be overridden via Vercel env vars)
const DEFAULT_USERNAME = process.env.ADMIN_USERNAME || 'Jay Soni';
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || 'Jaysoni@777';
const JWT_SECRET = process.env.ADMIN_SECRET || 'dz-jewellery-master-secret-key-2026-gandhinagar';

function createToken(username) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    sub: username,
    role: 'admin',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // 7 days
  })).toString('base64url');
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest('base64url');
  return `${header}.${payload}.${signature}`;
}

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

module.exports = async function handler(req, res) {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { action } = req.query || {};

  // 1. Verify endpoint
  if (req.method === 'GET' || action === 'verify') {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '') || (req.cookies && req.cookies.dz_token);
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ authenticated: false, error: 'Invalid or expired session' });
    }
    return res.status(200).json({
      authenticated: true,
      user: { username: decoded.sub, role: decoded.role }
    });
  }

  // 2. Login endpoint
  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { username, password, action: bodyAction } = body;

    if (bodyAction === 'logout') {
      return res.status(200).json({ success: true, message: 'Logged out successfully' });
    }

    // Strict credential check against owner's configuration
    if (
      username &&
      username.trim().toLowerCase() === DEFAULT_USERNAME.toLowerCase() &&
      password === DEFAULT_PASSWORD
    ) {
      const token = createToken(DEFAULT_USERNAME);
      return res.status(200).json({
        success: true,
        token,
        user: { username: DEFAULT_USERNAME, role: 'admin' }
      });
    }

    return res.status(401).json({ success: false, error: 'Invalid username or password' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
