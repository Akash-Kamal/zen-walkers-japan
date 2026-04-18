// Backend Alternative: Express + Nodemailer
// File: backend/routes/contact.js

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,      // your-email@gmail.com
    pass: process.env.GMAIL_PASSWORD,  // your app password from Google
  },
});

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    // Validation
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'info@zenwalkersjp.com',
      replyTo: email,
      subject: `New Contact from ${fullName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;

// ===================================
// To use this backend:
// ===================================
//
// 1. Install dependencies:
//    npm install express nodemailer cors dotenv
//
// 2. Create .env file:
//    GMAIL_USER=your-email@gmail.com
//    GMAIL_PASSWORD=your-app-password
//
// 3. Create main server file (server.js):
//    const express = require('express');
//    const cors = require('cors');
//    require('dotenv').config();
//    const contactRoutes = require('./routes/contact');
//
//    const app = express();
//    app.use(cors());
//    app.use(express.json());
//    app.use('/api', contactRoutes);
//
//    app.listen(5000, () => {
//      console.log('Server running on port 5000');
//    });
//
// 4. Update ContactModal.tsx to call backend:
//    Replace the emailjs.send() call with:
//
//    const response = await fetch(
//      'http://localhost:5000/api/contact',
//      {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(formData),
//      }
//    );
//
//    if (!response.ok) throw new Error('Failed to send');
//    const data = await response.json();
