# Project Component Architecture

## Overview
This is a fully React-based travel website for Japan (Discover Japan) built with:
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Wouter** for routing
- **React Query** for data fetching
- **React Hook Form** for forms
- **Radix UI** for accessible components

## Directory Structure

```
src/
├── components/
│   ├── sections/          # Reusable sub-components organized by section
│   │   ├── DestinationCard.tsx       # Card component for destination listings
│   │   ├── SectionHeader.tsx         # Reusable section header component
│   │   ├── HeroContent.tsx           # Hero section content
│   │   ├── HeroBackground.tsx        # Hero background with decorative elements
│   │   ├── NavLink.tsx               # Navigation link component
│   │   ├── CultureCard.tsx           # Card for culture items
│   │   ├── FoodCard.tsx              # Card for food items
│   │   ├── FooterLinkColumn.tsx      # Footer link column component
│   │   └── SocialLinks.tsx           # Social media links component
│   ├── ui/                # Radix UI components
│   ├── Navbar.tsx         # Navigation bar (page-level component)
│   ├── Hero.tsx           # Hero section (page-level component)
│   ├── Destinations.tsx   # Destinations section (page-level component)
│   ├── Culture.tsx        # Culture section (page-level component)
│   ├── Food.tsx           # Food section (page-level component)
│   ├── TravelTips.tsx     # Travel tips section (page-level component)
│   ├── Gallery.tsx        # Gallery section (page-level component)
│   ├── CTA.tsx            # Call-to-action section (page-level component)
│   └── Footer.tsx         # Footer (page-level component)
├── pages/
│   ├── Home.tsx           # Home page - orchestrates all sections
│   └── not-found.tsx      # 404 page
├── hooks/                 # Custom React hooks
├── lib/
│   ├── constants.ts       # Centralized data and constants
│   ├── utils.ts           # Utility functions
│   └── types.ts           # TypeScript type definitions
├── App.tsx                # Root app component with routing
├── main.tsx               # Entry point
└── index.css              # Global styles

vite.config.ts             # Vite configuration
tsconfig.json              # TypeScript configuration
tailwind.config.js         # Tailwind CSS configuration
```

## Component Hierarchy

### Page Level (Full Page Sections)
- **Navbar** - Fixed navigation header with mobile menu
- **Hero** - Landing hero section with background
- **Destinations** - Grid of destination cards
- **Culture** - Culture items showcase with icons
- **Food** - Food gallery with hover effects
- **TravelTips** - Travel tips section
- **Gallery** - Photo gallery
- **CTA** - Call-to-action section
- **Footer** - Footer with links and social media

### Sub-Components (Sections/)
Reusable, focused components used within page-level sections:

1. **DestinationCard** - Individual destination card
   - Props: name, description, image, index
   - Features: Hover animations, gradient overlay

2. **SectionHeader** - Consistent section header
   - Props: label, title, description
   - Usage: Used in multiple sections for consistency

3. **HeroContent** - Hero section content wrapper
   - Props: badge, title, description, buttons
   - Features: Motion animations, CTA buttons

4. **HeroBackground** - Hero background with decorative elements
   - Props: imageUrl, imageAlt
   - Features: Gradient overlay, decorative sun effect

5. **NavLink** - Individual navigation link
   - Props: name, href, isScrolled
   - Features: Dynamic styling based on scroll state, underline animation

6. **CultureCard** - Individual culture item card
   - Props: title, subtitle, icon, description, index
   - Features: Icon with background, hover effects

7. **FoodCard** - Food item card
   - Props: name, image, index
   - Features: Image with gradient overlay, scale animations

8. **FooterLinkColumn** - Footer link column
   - Props: title, links
   - Features: Reusable link column for different link groups

9. **SocialLinks** - Social media icons
   - Props: icons (array of Icon components and hrefs)
   - Features: Hover effects on social links

## Data Management

### Constants (`lib/constants.ts`)
Centralized data storage for:
- `NAV_LINKS` - Navigation menu items
- `DESTINATIONS_DATA` - Destination information
- `CULTURE_ITEMS` - Culture items with icons
- `FOOD_ITEMS` - Food items with images
- `SOCIAL_LINKS` - Social media icons and links
- `FOOTER_QUICK_LINKS` - Quick footer links
- `FOOTER_SUPPORT_LINKS` - Support footer links

## Key Features

### Animations
- **Framer Motion** for:
  - Page scroll animations (whileInView)
  - Staggered card animations
  - Smooth transitions and hover effects
  - Background decorative elements

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints: sm, md, lg, xl, 2xl
- Mobile hamburger menu in Navbar
- Responsive grid layouts

### Styling
- **Tailwind CSS** utility-first approach
- Custom design tokens (colors, fonts, spacing)
- Dark/light mode support via CSS variables
- Custom fonts for display (Geist font family)

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements

## Adding New Features

### To Add a New Section:
1. Create a new component in `components/`
2. Create sub-components in `components/sections/` if needed
3. Add data to `lib/constants.ts`
4. Import and use in `pages/Home.tsx`

### To Add New Sub-Components:
1. Create component in `components/sections/`
2. Accept data via props with TypeScript interfaces
3. Keep components focused and reusable
4. Use Framer Motion for animations

### To Modify Styling:
1. Edit `tailwind.config.js` for global changes
2. Update component classes for specific changes
3. Use CSS variables for color schemes

## Best Practices

✅ **Do:**
- Keep components small and focused
- Use TypeScript interfaces for props
- Store data in constants file
- Use Framer Motion for animations
- Maintain component hierarchy
- Keep styling consistent with Tailwind

❌ **Don't:**
- Store data inline in components
- Mix multiple responsibilities in one component
- Use CSS modules (use Tailwind instead)
- Create deeply nested component structures
- Hardcode strings/values (use constants)

## Available Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve

# Type checking
pnpm typecheck
```

## Environment Variables

```
PORT=5173
BASE_PATH=/
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components
- **React Hook Form** - Form management
- **React Query** - Server state management
- **Wouter** - Lightweight routing
