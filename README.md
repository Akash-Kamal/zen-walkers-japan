# 🗾 Zen Walkers Japan - Travel Website

A modern, responsive travel website showcasing Japan's beautiful destinations, culture, cuisine, and travel tips. Built with React, TypeScript, and Tailwind CSS.

![Website Preview](./discover-japan/public/opengraph.jpg)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Navigation** - Smooth scrolling between sections
- **Testimonials Section** - Customer reviews with ratings
- **Contact Form** - Functional email integration with EmailJS
- **Modern UI** - Framer Motion animations and Radix UI components
- **Dark Mode Ready** - Tailwind CSS with custom color schemes
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Vite for fast builds and bundle splitting

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool (lightning-fast development server)
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing

### Components & UI
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Query** - Data fetching and caching

### Email & Services
- **EmailJS** - Client-side email sending

### Package Manager
- **pnpm** - Fast, disk space-efficient package manager

## 📁 Project Structure

```
Travel-Site-Creator/
├── discover-japan/              # Main React application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── sections/        # Page section components
│   │   │   └── ui/              # Reusable UI components
│   │   ├── pages/               # Page components
│   │   ├── lib/                 # Utilities and constants
│   │   ├── hooks/               # Custom React hooks
│   │   ├── index.css            # Global styles
│   │   └── main.tsx             # App entry point
│   ├── public/                  # Static assets
│   ├── dist/                    # Production build (ignored in git)
│   ├── vite.config.ts           # Vite configuration
│   ├── netlify.toml             # Netlify deployment config
│   ├── vercel.json              # Vercel deployment config
│   ├── tsconfig.json            # TypeScript config
│   └── package.json             # Project dependencies
├── package.json                 # Root workspace package.json
├── pnpm-workspace.yaml          # pnpm monorepo config
└── tsconfig.base.json           # Base TypeScript config

```

## 🚀 Installation

### Prerequisites
- Node.js 18.x or higher
- pnpm 8.x or npm 9.x

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/zen-walkers-japan.git
cd Travel-Site-Creator
```

2. **Install dependencies**
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

3. **Configure EmailJS (Optional)**
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Get your Public Key, Service ID, and Template ID
- These are already configured in `discover-japan/src/components/ContactModal.tsx`

## 💻 Development

### Start Development Server
```bash
# From project root
pnpm dev

# Or navigate to discover-japan
cd discover-japan
pnpm dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Build
pnpm build            # Create production build
pnpm build:prod       # Build with production optimizations

# Preview
pnpm preview          # Preview production build locally

# Type Checking
pnpm typecheck        # Run TypeScript compiler check

# Serve
pnpm serve            # Serve production build
```

### Code Structure

- **Components** are organized by purpose:
  - `sections/` - Major page sections (Hero, Culture, Food, etc.)
  - `ui/` - Reusable UI components (buttons, cards, modals, etc.)
- **Hooks** - Custom React hooks for state management
- **Lib** - Utility functions, constants, and types

### Styling

Uses **Tailwind CSS** with custom configuration:
```bash
# Color Scheme
- Primary: Japanese Red (#E60023)
- Burgundy Gradients for premium sections
- Dark backgrounds with contrasting text
```

## 🔧 Build & Deployment

### Production Build

```bash
pnpm build
```

This creates an optimized production build in `dist/public/`:
- CSS: 17.47 kB (gzipped)
- JS: 152.40 kB (gzipped)
- Total: ~170 kB gzipped

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Netlify will auto-detect `netlify.toml` configuration
4. Deploy automatically on push to main branch

**Netlify Configuration:**
```toml
Build command: npm run build
Publish directory: dist/public
```

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel will auto-detect `vercel.json` configuration
4. Deploy automatically

### Environment Variables

For production deployments, add these to your platform:

```env
# Optional - if you change EmailJS credentials
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 📧 Contact Form Setup

The contact form uses **EmailJS** for email delivery:

1. **Service ID:** `service_836lhxi`
2. **Template ID:** `template_uvd5dhj`
3. **Public Key:** `6vEOQMEmVHwwXK-gK`

Form collects:
- Full Name
- Email
- Phone
- Message

All fields are validated before sending. Emails are sent to your configured email address.

## 📱 Responsive Design

The website is fully responsive:
- **Mobile** - 320px and up
- **Tablet** - 768px and up
- **Desktop** - 1024px and up

Tested on:
- Chrome, Firefox, Safari, Edge
- iOS Safari, Android Chrome

## 🎨 Color Scheme

```
Primary Red:        #E60023
Burgundy Dark:      #4a1a2e
Burgundy Light:     #2a0f1f
Text Primary:       #000000
Text Secondary:     #666666
Background Light:   #f5f5f5
Background Dark:    #1a1a1a
```

## 🔐 Security

- EmailJS Public Key is intentionally public (frontend)
- EmailJS protects requests by authorized domains
- No sensitive credentials in source code
- Environment variables for production secrets
- HTTPS enforced on deployment platforms

## 📊 Performance

- **Build Time:** ~3 seconds
- **Bundle Size:** 152.40 kB JS + 17.47 kB CSS (gzipped)
- **Lighthouse Score:** 90+
- **Page Load:** < 2 seconds on average connection

## 🐛 Troubleshooting

### Development Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Build Fails
```bash
# Check Node version
node --version  # Should be 18.x or higher

# Clear build cache
rm -rf dist/
pnpm build
```

### Contact Form Not Sending
1. Check browser console for errors (F12)
2. Verify EmailJS credentials are correct
3. Add your domain to EmailJS authorized domains
4. Check email spam folder

## 📚 Documentation

Additional documentation:
- [NETLIFY_DEPLOYMENT_GUIDE.md](./discover-japan/NETLIFY_DEPLOYMENT_GUIDE.md) - Deployment instructions
- [DEVELOPMENT_GUIDE.md](./discover-japan/DEVELOPMENT_GUIDE.md) - Development setup
- [COMPONENT_ARCHITECTURE.md](./discover-japan/COMPONENT_ARCHITECTURE.md) - Component structure
- [START_HERE.md](./discover-japan/START_HERE.md) - Quick start guide

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation in `/discover-japan` folder
- Review component comments for implementation details

## 🚀 Live Demo

- **Netlify:** [zen-walkers-japan.netlify.app](https://zen-walkers-japan.netlify.app)
- **Vercel:** [zen-walkers-japan.vercel.app](https://zen-walkers-japan.vercel.app)

---

**Last Updated:** April 18, 2026

Made with ❤️ for Japan travel enthusiasts
