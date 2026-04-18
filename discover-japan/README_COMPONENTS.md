# Discover Japan - React Component-Based Travel Website

## 🎨 Project Overview

A modern, fully React-based single-page application showcasing destinations, culture, food, and travel tips for Japan. Built with React, TypeScript, Vite, and Tailwind CSS with beautiful animations and a responsive design.

## ✨ Features

- **Modular Component Architecture** - Reusable components with clear separation of concerns
- **Type-Safe Development** - Full TypeScript support with comprehensive type definitions
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessible UI** - Radix UI components with ARIA support
- **Modern Tooling** - Vite for fast builds, HMR, and optimized bundles
- **Dark/Light Mode** - CSS variable-based theming support
- **Performance Optimized** - Lazy loading, optimized images, efficient rendering

## 🏗️ Architecture

### Component Organization

The project follows a component-based architecture with clear separation:

1. **Page-Level Components** (`/components/*.tsx`)
   - Full-width sections that compose the page
   - Examples: Navbar, Hero, Destinations, Footer

2. **Sub-Components** (`/components/sections/*.tsx`)
   - Reusable, focused components used within sections
   - Examples: DestinationCard, SectionHeader, NavLink

3. **UI Components** (`/components/ui/*.tsx`)
   - Radix UI-based accessible components
   - Examples: Button, Dialog, Toast, etc.

### Directory Structure

```
src/
├── components/
│   ├── sections/          # Sub-components
│   │   ├── DestinationCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── HeroContent.tsx
│   │   ├── HeroBackground.tsx
│   │   ├── NavLink.tsx
│   │   ├── CultureCard.tsx
│   │   ├── FoodCard.tsx
│   │   ├── FooterLinkColumn.tsx
│   │   └── SocialLinks.tsx
│   ├── ui/               # Radix UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Destinations.tsx
│   ├── Culture.tsx
│   ├── Food.tsx
│   ├── TravelTips.tsx
│   ├── Gallery.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── index.ts          # Component exports & types
├── pages/
│   ├── Home.tsx          # Main page orchestrator
│   └── not-found.tsx
├── hooks/                # Custom React hooks
├── lib/
│   ├── constants.ts      # Data & configuration
│   ├── utils.ts          # Utility functions
│   ├── types.ts          # TypeScript type definitions
│   └── api-client.ts     # API integration (future)
├── App.tsx               # Root component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🧩 Component Reference

### Page-Level Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Navbar** | Fixed navigation header with mobile menu | `components/Navbar.tsx` |
| **Hero** | Landing section with background image | `components/Hero.tsx` |
| **Destinations** | Grid of destination cards | `components/Destinations.tsx` |
| **Culture** | Cultural items showcase | `components/Culture.tsx` |
| **Food** | Food gallery section | `components/Food.tsx` |
| **TravelTips** | Travel tips and advice | `components/TravelTips.tsx` |
| **Gallery** | Photo gallery section | `components/Gallery.tsx` |
| **CTA** | Call-to-action section | `components/CTA.tsx` |
| **Footer** | Footer with links | `components/Footer.tsx` |

### Sub-Components (Reusable)

| Component | Props | Usage |
|-----------|-------|-------|
| **DestinationCard** | `name`, `description`, `image`, `index` | Destinations section |
| **SectionHeader** | `label`, `title`, `description` | Multiple sections |
| **HeroContent** | `badge`, `title`, `description`, buttons | Hero section |
| **HeroBackground** | `imageUrl`, `imageAlt` | Hero section |
| **NavLink** | `name`, `href`, `isScrolled` | Navbar |
| **CultureCard** | `title`, `subtitle`, `icon`, `description`, `index` | Culture section |
| **FoodCard** | `name`, `image`, `index` | Food section |
| **FooterLinkColumn** | `title`, `links` | Footer |
| **SocialLinks** | `icons` | Footer |

## 💾 Data Management

All data is centralized in `lib/constants.ts`:

- **NAV_LINKS** - Navigation menu items
- **DESTINATIONS_DATA** - Destination details
- **CULTURE_ITEMS** - Cultural attractions
- **FOOD_ITEMS** - Food specialties
- **SOCIAL_LINKS** - Social media links
- **FOOTER_QUICK_LINKS** - Quick navigation links
- **FOOTER_SUPPORT_LINKS** - Support links

## 🎯 Usage Examples

### Using a Sub-Component

```tsx
// In Destinations.tsx
import DestinationCard from "./sections/DestinationCard";
import { DESTINATIONS_DATA } from "@/lib/constants";

export default function Destinations() {
  return (
    <section className="py-24">
      {DESTINATIONS_DATA.map((dest, index) => (
        <DestinationCard
          key={dest.name}
          name={dest.name}
          description={dest.description}
          image={dest.image}
          index={index}
        />
      ))}
    </section>
  );
}
```

### Creating a New Sub-Component

```tsx
// components/sections/NewCard.tsx
interface NewCardProps {
  title: string;
  content: string;
  index: number;
}

import { motion } from "framer-motion";

export default function NewCard({ title, content, index }: NewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg border bg-card"
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </motion.div>
  );
}
```

### Adding New Data

```tsx
// lib/constants.ts
export const NEW_ITEMS = [
  {
    id: 1,
    title: "Item Title",
    content: "Item content",
    // ... other properties
  },
  // ... more items
];
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Required environment variables
PORT=5173
BASE_PATH=/
```

### Development

```bash
# Start development server
pnpm dev

# Server runs at http://localhost:5173
```

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm serve
```

## 📝 Best Practices

### ✅ Do

- Keep components focused and single-responsibility
- Use TypeScript interfaces for all props
- Store data in `constants.ts`
- Use Framer Motion for animations
- Maintain consistent styling with Tailwind
- Write meaningful component names
- Use semantic HTML

### ❌ Don't

- Store data inline in components
- Create deeply nested components
- Mix multiple responsibilities in one component
- Use CSS modules (use Tailwind)
- Hardcode strings/values
- Skip TypeScript types
- Create unnecessary wrapper divs

## 🎨 Styling Guide

### Color System
- **Primary** - Brand color (red)
- **Foreground** - Text color
- **Background** - Page background
- **Card** - Card background
- **Border** - Border color
- **Muted** - Secondary text color
- **Accent** - Accent color

### Breakpoints
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

## 📦 Dependencies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components
- **React Hook Form** - Form management
- **React Query** - Server state management
- **Wouter** - Routing

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS customization
- `components.json` - shadcn/ui configuration

## 📚 Documentation

- [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md) - Detailed architecture guide
- [components/index.ts](./src/components/index.ts) - Component exports and types
- [lib/types.ts](./src/lib/types.ts) - Global type definitions

## 🤝 Contributing

When adding new features:

1. Create components in the appropriate directory
2. Add TypeScript interfaces for props
3. Store data in `lib/constants.ts`
4. Update component documentation
5. Follow the established code style
6. Test responsive design on mobile

## 📄 License

MIT

## 🙋 Support

For issues or questions about the component structure, refer to [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md).
