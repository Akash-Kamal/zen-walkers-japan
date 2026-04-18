# 🎯 QUICK SETUP - Copy & Paste Instructions

## This is the FASTEST way to get your contact form working

---

## STEP 1: Open this file in your project
```
src/components/ContactModal.tsx
```

## STEP 2: Find this line (around line 20-25)
```tsx
// LOOK FOR THIS:
emailjs.init({
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
});
```

## STEP 3: Go to EmailJS and get your Public Key

1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (if not already signed in)
3. Verify your email
4. Once logged in, click "Account" (top right)
5. Scroll down to "API Keys"
6. Copy the value next to "Public Key" (it looks like: `xxx_abc123...`)

## STEP 4: Replace in the code

**Copy this template:**
```tsx
emailjs.init({
  publicKey: "PASTE_YOUR_PUBLIC_KEY_HERE",
});
```

Replace `PASTE_YOUR_PUBLIC_KEY_HERE` with your actual Public Key

**Example (what it should look like):**
```tsx
emailjs.init({
  publicKey: "abc123xyz_1a2b3c4d5e6f7g8h9i0j1k2l",
});
```

---

## STEP 5: Create Email Service in EmailJS

1. Go to: https://www.emailjs.com/
2. In the left sidebar, click "Email Services"
3. Click "Add New Service"
4. Select "Gmail" 
5. Connect your Gmail account
6. Click "Create Service"
7. Copy the **Service ID** (looks like: `service_xxxxx`)

---

## STEP 6: Create Email Template in EmailJS

1. In the left sidebar, click "Email Templates"
2. Click "Create New Template"
3. Fill in like this:

**Template Name:** Contact Form

**Subject:**
```
New Contact from {{from_name}} - Zen Walkers Japan
```

**Content (Body):**
```
Subject: New Contact Inquiry from {{from_name}}

---

Hi Zen Walkers Team,

You have received a new contact inquiry:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---

Reply To: {{from_email}}

Best regards,
Zen Walkers Contact System
```

4. Click "Save"
5. Copy the **Template ID** (looks like: `template_xxxxx`)

---

## STEP 7: Update ContactModal.tsx with Service ID and Template ID

Find this section (around line 100-115):
```tsx
// LOOK FOR THIS:
await emailjs.send(
  "YOUR_SERVICE_ID",      // ← REPLACE THIS
  "YOUR_TEMPLATE_ID",     // ← AND THIS
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

Replace with your actual IDs:

**Example (what it should look like):**
```tsx
await emailjs.send(
  "service_abc123xyz",
  "template_xyz456abc",
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

---

## STEP 8: Install EmailJS Package

Run this command in your terminal:
```bash
npm install @emailjs/browser
```

---

## STEP 9: Test It!

1. Save all changes
2. Run your dev server:
   ```bash
   npm run dev
   ```
3. Go to your website
4. Scroll to "Contact Us" section
5. Click "Send Message" button
6. Fill in the form:
   - Name: Your Name
   - Email: your@email.com
   - Phone: 9163006922
   - Message: Test message from the contact form
7. Click "Send Message"
8. Check your inbox for the email!

---

## TROUBLESHOOTING

### Email not arriving?
- Check spam folder
- Verify Service ID is correct (no extra spaces)
- Verify Template ID is correct (no extra spaces)
- Verify Public Key is correct (no extra spaces)

### "Failed to send message" error?
- Open browser DevTools (Press F12)
- Go to Console tab
- Look for error message
- Check your credentials in step 3, 5, and 6

### Module not found error?
```bash
npm install @emailjs/browser
```

### Still not working?
Read the detailed guides:
- CONTACT_FORM_README.md
- EMAILJS_SETUP.md
- CONTACT_FORM_VISUAL_GUIDE.md

---

## WHAT YOU NEED (3 Things Only)

Copy these 3 values from EmailJS:

1. **Public Key**
   - From: Account → API Keys
   - Insert at: ContactModal.tsx line ~20

2. **Service ID**
   - From: Email Services → Your Gmail Service
   - Insert at: ContactModal.tsx line ~105

3. **Template ID**
   - From: Email Templates → Your Template
   - Insert at: ContactModal.tsx line ~106

---

## CHECKLIST

- [ ] Created EmailJS account
- [ ] Created Email Service (Gmail)
- [ ] Created Email Template
- [ ] Got Public Key
- [ ] Got Service ID
- [ ] Got Template ID
- [ ] Installed @emailjs/browser
- [ ] Updated ContactModal.tsx (3 values)
- [ ] Ran `npm run dev`
- [ ] Tested form
- [ ] Received email ✅

**Total Time: ~10 minutes**

---

## DONE! 🎉

Your contact form is now fully functional!

Users can:
✅ Click "Send Message" button
✅ Fill out the form
✅ See validation errors if fields are wrong
✅ Submit the form
✅ Get a success message
✅ Receive emails from their inquiries

**Celebrate your new contact form! 🎊**
