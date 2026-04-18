# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS for the contact form functionality.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email service)
4. Connect your email account
5. Note your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use the following template:

```
Subject: New Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply To: {{from_email}}
```

4. Click **Save**
5. Note your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account**
2. Scroll down to **API Keys**
3. Copy your **Public Key** (starts with `xxx_...`)

## Step 5: Update ContactModal.tsx

Open `src/components/ContactModal.tsx` and replace the placeholder values:

```tsx
// Line ~20: Replace YOUR_EMAILJS_PUBLIC_KEY
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY_HERE", // Replace with your actual public key
});

// Line ~100-110: Replace service and template IDs
await emailjs.send(
  "YOUR_SERVICE_ID_HERE",      // Replace with your service ID
  "YOUR_TEMPLATE_ID_HERE",     // Replace with your template ID
  {
    to_email: "info@zenwalkersjp.com",
    from_name: formData.fullName,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    reply_to: formData.email,
  }
);
```

## Step 6: Install EmailJS (if not already installed)

```bash
# Using npm
npm install @emailjs/browser

# Using yarn
yarn add @emailjs/browser

# Using pnpm
pnpm add @emailjs/browser
```

## Step 7: Test the Contact Form

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Click "Send Message"
4. Fill out the form and submit
5. Check your email for the contact message

## Important Notes

- **Free Tier Limits**: EmailJS free tier allows 200 emails/month
- **Security**: Your public key is visible in client-side code, but EmailJS restricts sending based on domain
- **Production**: Add authorized domains in EmailJS dashboard under **Security**
- **Rate Limiting**: Implement rate limiting on your frontend if needed
- **Error Handling**: Currently shows generic error messages. Customize as needed

## Alternative: Backend Solution

If you prefer server-side email sending instead:

1. Use Node.js + Express + Nodemailer
2. Create an endpoint: `POST /api/send-email`
3. Update ContactModal to call your backend API instead of EmailJS

Example backend code would be provided separately.

## Troubleshooting

**"Failed to send message" error:**
- Check your Service ID, Template ID, and Public Key are correct
- Verify your email service is properly connected
- Check browser console for detailed error messages
- Ensure your domain is whitelisted in EmailJS security settings

**Emails not arriving:**
- Check spam/junk folder
- Verify template variables match form data
- Test with EmailJS dashboard first

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Contact Form Code: See `src/components/ContactModal.tsx`
- CTA Component: See `src/components/CTA.tsx`
