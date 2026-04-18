#!/bin/bash

# Contact Form Setup Script
# This script helps set up the contact form with EmailJS

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     Zen Walkers Japan - Contact Form Setup Script            ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ npm is installed"
echo ""

# Install @emailjs/browser
echo "📦 Installing EmailJS package..."
npm install @emailjs/browser

if [ $? -eq 0 ]; then
    echo "✅ EmailJS installed successfully"
else
    echo "❌ Failed to install EmailJS"
    echo "Try running: npm install @emailjs/browser manually"
    exit 1
fi

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║              NEXT STEPS - CONFIGURE EMAILJS                  ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "1. Go to: https://www.emailjs.com/"
echo "2. Sign up and verify your email"
echo "3. Create Email Service (connect Gmail)"
echo "4. Create Email Template with these variables:"
echo "   - {{from_name}}"
echo "   - {{from_email}}"
echo "   - {{phone}}"
echo "   - {{message}}"
echo ""
echo "5. Copy your credentials:"
echo "   - Public Key (API Key)"
echo "   - Service ID"
echo "   - Template ID"
echo ""
echo "6. Open: src/components/ContactModal.tsx"
echo "   Replace the following in the file:"
echo "   - Line ~20: YOUR_EMAILJS_PUBLIC_KEY"
echo "   - Line ~105: YOUR_SERVICE_ID"
echo "   - Line ~106: YOUR_TEMPLATE_ID"
echo ""
echo "7. Save and test!"
echo ""
echo "📚 For detailed setup: Read CONTACT_FORM_README.md"
echo "📚 For setup guide: Read EMAILJS_SETUP.md"
echo ""
echo "✅ Installation complete! Your contact form is ready to configure."
