// 📧 EMAILJS CONFIGURATION TEMPLATE
// 
// Follow these steps to get your credentials:
// 
// 1. Visit: https://www.emailjs.com/
// 2. Create a free account
// 3. Add Email Service → Connect Gmail
// 4. Create Email Template (see template below)
// 5. Get API Key from Account → API Keys
// 
// ============================================
// REPLACE THESE VALUES IN src/components/ContactModal.tsx
// ============================================

// ✅ Step 1: Find this line (around line 20-25) and replace YOUR_EMAILJS_PUBLIC_KEY:
emailjs.init({
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY_HERE", // 👈 Replace with your Public Key
  // Get it from: https://www.emailjs.com/ → Account → API Keys
});

// ✅ Step 2: Find this section (around line 100-115) and replace SERVICE_ID and TEMPLATE_ID:
await emailjs.send(
  "YOUR_SERVICE_ID_HERE",      // 👈 Replace with your Service ID (e.g., service_xxxxx)
  "YOUR_TEMPLATE_ID_HERE",     // 👈 Replace with your Template ID (e.g., template_xxxxx)
  {
    to_email: "info@zenwalkersjp.com",
    from_name: formData.fullName,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    reply_to: formData.email,
  }
);

// ============================================
// EMAIL TEMPLATE SETUP
// ============================================
// 
// When creating your EmailJS template, use these exact variable names:
// 
// Subject Line:
// 📧 New Contact from {{from_name}} - Zen Walkers Japan
// 
// Email Body (HTML):
// ============================================

Subject: New Contact Inquiry from {{from_name}}

---

Hi Zen Walkers Team,

You have received a new contact inquiry:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Phone:** {{phone}}

**Message:**
{{message}}

---

**Reply To:** {{from_email}}

Best regards,
Zen Walkers Contact System

// ============================================
// WHERE TO FIND YOUR CREDENTIALS
// ============================================
//
// 🔑 PUBLIC KEY:
//    1. Login to https://www.emailjs.com/
//    2. Click on "Account" in the sidebar
//    3. Scroll to "API Keys" section
//    4. Copy the value under "Public Key"
//    Format: xxx_xxxxxxxxxxxxxxxxxxxxxxxx
//
// 📮 SERVICE ID:
//    1. Login to https://www.emailjs.com/
//    2. Click on "Email Services" in the sidebar
//    3. Your service will be listed (e.g., Gmail)
//    4. Click on it to see the Service ID
//    Format: service_xxxxxxxxxxxxxxx
//
// 📋 TEMPLATE ID:
//    1. Login to https://www.emailjs.com/
//    2. Click on "Email Templates" in the sidebar
//    3. Click on the template you created
//    4. The Template ID is shown at the top
//    Format: template_xxxxxxxxxxxxxxx

// ============================================
// EXAMPLE (What it looks like):
// ============================================
//
// emailjs.init({
//   publicKey: "xxx_1a2b3c4d5e6f7g8h9i0j1k2l",
// });
//
// await emailjs.send(
//   "service_abc123xyz",
//   "template_xyz789abc",
//   {
//     // ... form data
//   }
// );

// ============================================
// TESTING
// ============================================
// 
// After setup:
// 1. npm run dev
// 2. Go to Contact section
// 3. Click "Send Message"
// 4. Fill the form with test data
// 5. Submit and check your email
// 
// If you don't receive the email:
// - Check spam/junk folder
// - Verify Service ID and Template ID are correct
// - Check browser console for error messages
// - Re-verify your Gmail connection in EmailJS
//
// ============================================
// COMMON ISSUES
// ============================================
// 
// ❌ "Failed to send message"
//    → Check that all credentials are correctly copied (no extra spaces)
//    → Verify your email service is connected in EmailJS
//
// ❌ "Template not found"
//    → Check Template ID is correct
//    → Make sure template is saved and published
//
// ❌ "Invalid Public Key"
//    → Copy the FULL public key from API Keys section
//    → Check for extra spaces
//
// ❌ Email in spam folder
//    → Add your sender email to contacts
//    → Mark as "Not Spam"
//    → Consider setting up SPF/DKIM records
//
// ============================================
// NEED HELP?
// ============================================
// 
// 📖 EmailJS Docs: https://www.emailjs.com/docs/
// 📖 Setup Guide: See EMAILJS_SETUP.md in project root
// 📖 Implementation: See CONTACT_FORM_README.md in project root
// 
// ============================================

// 🎉 That's it! Your contact form will be fully functional once configured.
// 
// The form includes:
// ✅ Client-side validation
// ✅ Error message display
// ✅ Loading state during submission
// ✅ Success confirmation
// ✅ Mobile responsive design
// ✅ Premium styling matching brand
// ✅ Smooth animations
