module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const { name, phone, email, interestedIn, message } = body;

  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, error: 'Full name is required' });
  }

  if (!phone || !phone.trim() || phone.replace(/\D/g, '').length < 10) {
    return res.status(400).json({ success: false, error: 'Valid 10-digit phone number is required' });
  }

  // Record timestamp and format enquiry
  const enquiry = {
    id: `enq-${Date.now()}`,
    name: name.trim(),
    phone: phone.trim(),
    email: (email || '').trim(),
    interestedIn: interestedIn || 'General Jewellery Enquiry',
    message: (message || '').trim(),
    receivedAt: new Date().toISOString()
  };

  console.log('New Jewellery Enquiry Received:', enquiry);

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out to Deepkrishna Zaveri. Jay Soni and our team will get in touch with you promptly.',
    enquiryId: enquiry.id
  });
};
