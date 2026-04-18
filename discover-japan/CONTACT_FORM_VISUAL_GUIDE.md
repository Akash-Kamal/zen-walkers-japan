# 📧 Contact Form Visual Setup Guide

## How to Configure in 3 Steps

### Step 1️⃣: Get Your Credentials from EmailJS

**Visit:** https://www.emailjs.com/

**Follow this visual flow:**
```
EmailJS Dashboard
├── Account (top right menu)
│   └── Scroll to "API Keys"
│       └── Copy: Public Key ← YOUR_EMAILJS_PUBLIC_KEY
│
├── Email Services (left sidebar)
│   └── Click Gmail
│       └── Copy: Service ID ← YOUR_SERVICE_ID
│
└── Email Templates (left sidebar)
    └── Create New
        └── Copy: Template ID ← YOUR_TEMPLATE_ID
```

### Step 2️⃣: Update the Configuration File

**Open:** `src/components/ContactModal.tsx`

**Find and replace these 2 locations:**

**Location A - Line ~20:**
```tsx
// BEFORE:
emailjs.init({
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
});

// AFTER (Example):
emailjs.init({
  publicKey: "xxx_abc123xyz456",
});
```

**Location B - Line ~105-106:**
```tsx
// BEFORE:
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  {
```

// AFTER (Example):
await emailjs.send(
  "service_abc123xyz",
  "template_xyz456abc",
  {
```

### Step 3️⃣: Test It!

```bash
npm run dev
```

1. Navigate to Contact section
2. Click "Send Message" button
3. Fill in the form:
   - Name: John Doe
   - Email: john@example.com
   - Phone: 9163006922
   - Message: I want to visit Tokyo and Kyoto
4. Click "Send Message"
5. ✅ Check your email inbox!

---

## Form Fields & Validation

```
┌─────────────────────────────────────┐
│         CONTACT US MODAL            │
├─────────────────────────────────────┤
│                                     │
│  Full Name *                        │
│  [_____________________]            │
│  Error: "Name is required"          │
│                                     │
│  Email Address *                    │
│  [_____________________]            │
│  Error: "Invalid email"             │
│                                     │
│  Phone Number *                     │
│  [_____________________]            │
│  Error: "10+ digits required"       │
│                                     │
│  Message / Query *                  │
│  [________________________]         │
│  [________________________]         │
│  Error: "Min 10 characters"         │
│                                     │
│        [SEND MESSAGE]               │
│                                     │
│  Privacy notice...                  │
│                                     │
└─────────────────────────────────────┘
```

## Validation Rules

| Field | Rule | Example |
|-------|------|---------|
| **Name** | Required, non-empty | "Rajesh Kumar" |
| **Email** | Required, valid format | "rajesh@email.com" |
| **Phone** | Required, 10+ digits | "9163006922" or "+91-9163006922" |
| **Message** | Required, min 10 chars | "I want to book a 6-day Japan tour" |

## Email Example

**What You'll Receive:**

```
Subject: New Contact from Rajesh Kumar

---

Name: Rajesh Kumar
Email: rajesh@email.com
Phone: 9163006922

Message:
I want to book a 6-day Japan tour. I'm interested in Tokyo, Kyoto, and Osaka.
Can you provide a custom package?

---
Reply To: rajesh@email.com
```

## Error Messages & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| "Failed to send message" | Wrong credentials | Check Service ID, Template ID, Public Key |
| "Invalid email" | Bad format | Use: name@domain.com |
| "Phone number invalid" | Less than 10 digits | Add all digits, remove special chars |
| "Message too short" | Less than 10 characters | Write more details |
| Module not found | EmailJS not installed | Run: npm install @emailjs/browser |

## Response Messages

### ✅ Success
```
✨
Thank You!
We'll contact you shortly with more details about your Japan journey.
```
*Modal auto-closes after 2 seconds*

### ❌ Error
```
Failed to send message. Please try again.
```
*Check browser console for details*

## Mobile View

```
┌──────────────────┐
│ Get in Touch  ✕  │
├──────────────────┤
│ Full Name        │
│ [_____________]  │
│                  │
│ Email            │
│ [_____________]  │
│                  │
│ Phone            │
│ [_____________]  │
│                  │
│ Message          │
│ [____________]   │
│ [____________]   │
│                  │
│ [SEND MESSAGE]   │
│                  │
│ Privacy note...  │
└──────────────────┘
```

## Troubleshooting Flow

```
Contact Form Not Working?
│
├─ Email not arriving?
│  ├─ Check spam folder
│  └─ Verify credentials
│
├─ Form validation errors?
│  ├─ Check email format
│  ├─ Check phone length (10+ digits)
│  └─ Check message length (10+ characters)
│
├─ "Failed to send" message?
│  ├─ Open browser DevTools (F12)
│  ├─ Check Console tab for error
│  ├─ Verify Service ID
│  ├─ Verify Template ID
│  └─ Verify Public Key
│
└─ Still not working?
   └─ Read CONTACT_FORM_README.md in project root
```

## EmailJS Dashboard Map

```
https://www.emailjs.com/

┌─ DASHBOARD ─────────────────────────┐
│                                     │
│  [Account ▼] (top right)           │
│  ├─ API Keys ← GET CREDENTIALS    │
│  ├─ Settings                       │
│  └─ ...                            │
│                                     │
│  Left Sidebar:                      │
│  ├─ Email Services ← SERVICE ID   │
│  ├─ Email Templates ← TEMPLATE ID │
│  ├─ Contacts                       │
│  └─ ...                            │
│                                     │
└─────────────────────────────────────┘
```

## File Locations

```
Your Project
│
├── src/components/
│   ├── CTA.tsx ✅ (Button that opens modal)
│   ├── ContactModal.tsx ✅ (The form itself)
│   └── ...
│
└── CONTACT_FORM_README.md
   (Full documentation)
```

## One-Minute Setup Checklist

- [ ] Sign up on EmailJS (free)
- [ ] Create Email Service (connect Gmail)
- [ ] Get Public Key
- [ ] Create Email Template
- [ ] Get Template ID, Service ID
- [ ] Open `src/components/ContactModal.tsx`
- [ ] Replace 3 values (Public Key, Service ID, Template ID)
- [ ] Save file
- [ ] Run `npm run dev`
- [ ] Test the form
- [ ] ✅ Done!

**Total time: ~5 minutes**

## Success Indicators

✅ You'll know it's working when:
- Modal opens when you click "Send Message"
- Form validates (shows errors for empty fields)
- Loading spinner appears during submission
- Success message displays
- Email arrives in your inbox
- Modal closes automatically

---

## Need More Help?

📖 **Full Guides Available:**
- `CONTACT_FORM_README.md` - Complete setup
- `EMAILJS_SETUP.md` - Detailed EmailJS guide
- `EMAILJS_CONFIG_TEMPLATE.js` - Configuration reference
- `BACKEND_ALTERNATIVE.js` - Backend option

**Still stuck? Check:**
1. Browser console (F12) for JavaScript errors
2. Network tab for failed requests
3. EmailJS dashboard for service status
4. Email spam folder

🎉 **That's it! Your contact form is ready!**
