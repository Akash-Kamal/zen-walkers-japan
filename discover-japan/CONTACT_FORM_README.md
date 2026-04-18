# Contact Form Implementation Guide

## Overview

The contact form is fully implemented with client-side validation, modal UI, and email integration. Follow the setup steps below.

## Components Created

### 1. **ContactModal.tsx** (`src/components/ContactModal.tsx`)
- Modal popup with contact form
- Form fields: Full Name, Email, Phone, Message
- Client-side validation with error messages
- Loading state during submission
- Success message on completion
- Premium styling with red gradient theme

### 2. **Updated CTA.tsx** (`src/components/CTA.tsx`)
- "Send Message" button that opens modal
- Contact information display
- Japan map background silhouette
- Responsive layout

## Features

✅ **Form Validation**
- Full Name: Required
- Email: Required + Email format validation
- Phone: Required + 10+ digit validation
- Message: Required + Minimum 10 characters

✅ **User Experience**
- Smooth modal animations
- Error messages display inline
- Loading state during submission
- Success message with auto-close
- Mobile responsive design
- Premium dark theme matching brand

✅ **Email Integration**
- Two options provided:
  - **EmailJS** (Client-side, easier setup)
  - **Backend API** (Node.js + Nodemailer, more secure)

## Quick Start

### Option 1: EmailJS (Recommended for Quick Setup)

1. **Create EmailJS Account**
   - Visit https://www.emailjs.com/
   - Sign up with email
   - Verify email

2. **Setup Email Service**
   - Dashboard → Email Services → Add New Service
   - Connect Gmail (or your preferred service)
   - Copy your **Service ID**

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Use this template:
   ```
   Subject: New Contact from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   ```
   - Copy your **Template ID**

4. **Get Public Key**
   - Account → API Keys
   - Copy your **Public Key**

5. **Update ContactModal.tsx**
   Replace in line ~20 and ~100-110:
   ```tsx
   // Line 20
   emailjs.init({
     publicKey: "YOUR_PUBLIC_KEY_HERE",
   });

   // Line 105-115
   await emailjs.send(
     "YOUR_SERVICE_ID_HERE",
     "YOUR_TEMPLATE_ID_HERE",
     { /* ... */ }
   );
   ```

6. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   # or
   yarn add @emailjs/browser
   # or
   pnpm add @emailjs/browser
   ```

7. **Test**
   ```bash
   npm run dev
   ```
   - Navigate to Contact section
   - Click "Send Message"
   - Fill form and submit
   - Check your email!

### Option 2: Backend API (More Secure)

See `BACKEND_ALTERNATIVE.js` for complete backend implementation.

**Quick Steps:**
1. Create Node.js/Express server
2. Set up Nodemailer with Gmail
3. Create `/api/contact` POST endpoint
4. Update ContactModal to call backend instead of EmailJS

Benefits:
- More secure (API key hidden)
- Better spam prevention
- Server-side validation
- Rate limiting possible

## File Structure

```
src/components/
├── CTA.tsx                 # Contact section with button
├── ContactModal.tsx        # Modal form component (NEW)
└── ...

Root/
├── EMAILJS_SETUP.md        # EmailJS setup guide
└── BACKEND_ALTERNATIVE.js  # Backend implementation example
```

## Customization

### Styling
- Modal colors: Update gradient colors in `ContactModal.tsx`
- Input styling: Modify Tailwind classes in form fields
- Button colors: Change `from-[#E60023] to-[#c40020]` to your brand colors

### Validation Rules
Edit validation in `validateForm()` function:
```tsx
// Example: Change phone validation
if (!/^(\+\d{1,3}[- ]?)?\d{10,}$/.test(formData.phone)) {
  newErrors.phone = "Invalid phone format";
}
```

### Email Template
Update your EmailJS template to match your needs or customize the `emailjs.send()` call with different variables.

### Error Messages
Customize error messages by editing the validation logic in `validateForm()`.

## Environment Variables (Backend Option)

Create `.env` file in backend directory:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password
EMAIL_TO=info@zenwalkersjp.com
PORT=5000
```

## Troubleshooting

### "Module not found: @emailjs/browser"
```bash
npm install @emailjs/browser
```

### "Failed to send message"
- Verify Service ID, Template ID, Public Key are correct
- Check browser console for detailed error
- Ensure your domain is whitelisted in EmailJS Security settings

### Emails going to spam
- Check Gmail spam folder
- Add your email to contacts
- Update SPF/DKIM records (advanced)

### Form not submitting
- Check that all required fields are filled
- Verify email format
- Check phone number is 10+ digits (numbers only or with formatting)

## Production Checklist

- [ ] Update placeholder EmailJS credentials
- [ ] Test email delivery
- [ ] Add rate limiting (prevent spam)
- [ ] Set up error tracking/logging
- [ ] Add CAPTCHA for spam prevention (optional)
- [ ] WhiteList domain in EmailJS security settings
- [ ] Test on mobile devices
- [ ] Monitor email quota usage

## Email Quota

**EmailJS Free Tier:**
- 200 emails/month
- Upgrade to paid for more

**Backend Option:**
- Gmail free tier: Limited by Gmail sending limits
- Consider paid email service for production

## Additional Resources

- EmailJS Docs: https://www.emailjs.com/docs/
- Nodemailer Docs: https://nodemailer.com/
- Form Validation: MDN Web Docs

## Support

For issues or questions:
1. Check browser console for errors
2. Review setup guide in EMAILJS_SETUP.md
3. Test with backend alternative if needed
4. Check service documentation

---

**Last Updated:** April 2026
**Version:** 1.0
