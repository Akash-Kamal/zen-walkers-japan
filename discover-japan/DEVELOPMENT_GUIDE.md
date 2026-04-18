# Development Guide - Discover Japan

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (installed during setup)

### Setup & Run

```bash
# From project root
cd artifacts/discover-japan

# Set environment variables
export PORT=5173
export BASE_PATH=/

# Start development server
pnpm dev

# Server will be available at http://localhost:5173
```

## 📂 Project Structure Quick Reference

```
src/
├── components/          # React components
│   ├── sections/       # Reusable sub-components
│   ├── ui/             # Radix UI components
│   ├── *.tsx           # Page-level sections
│   └── index.ts        # Component exports
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/
│   ├── constants.ts    # Data and configuration
│   ├── types.ts        # TypeScript interfaces
│   └── utils.ts        # Utility functions
├── App.tsx             # Root app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🧩 Component Development Workflow

### Step 1: Add Data to Constants

Edit `src/lib/constants.ts`:

```tsx
export const MY_ITEMS = [
  {
    id: 1,
    name: "Item 1",
    description: "Description",
    image: "url"
  },
  // ...
];
```

### Step 2: Create Sub-Component

Create `src/components/sections/MyCard.tsx`:

```tsx
import { motion } from "framer-motion";

interface MyCardProps {
  name: string;
  description: string;
  index: number;
}

export default function MyCard({ name, description, index }: MyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
```

### Step 3: Use in Page Component

Update or create `src/components/MySection.tsx`:

```tsx
import MyCard from "./sections/MyCard";
import SectionHeader from "./sections/SectionHeader";
import { MY_ITEMS } from "@/lib/constants";

export default function MySection() {
  return (
    <section id="my-section" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Label"
          title="My Section"
          description="Description of the section"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MY_ITEMS.map((item, index) => (
            <MyCard
              key={item.id}
              name={item.name}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 4: Add to Home Page

Update `src/pages/Home.tsx`:

```tsx
import MySection from "@/components/MySection";

export default function Home() {
  return (
    <div>
      {/* ... other sections ... */}
      <MySection />
      {/* ... */}
    </div>
  );
}
```

## 🎨 Styling with Tailwind

### Common Patterns

```tsx
// Container with max-width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Card styling
<div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">

// Text styling
<h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
  Title
</h2>
<p className="text-muted-foreground text-lg">Description</p>

// Button styling
<button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground 
  font-medium hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 
  transition-all duration-300">
  Click me
</button>
```

## ✨ Animations with Framer Motion

### Basic Animation Pattern

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}      // Starting state
  whileInView={{ opacity: 1, y: 0 }}   // State when in view
  viewport={{ once: true }}             // Only animate once
  transition={{ duration: 0.5 }}        // Animation duration
  className="..."
>
  Content
</motion.div>
```

### Staggered Animation

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.1  // ← Stagger effect
    }}
  >
    {/* ... */}
  </motion.div>
))}
```

### Hover Animations

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="cursor-pointer"
>
  Hover me
</motion.div>
```

## 🧪 Component Tips

### Do's ✅
- Keep components focused and small
- Use TypeScript interfaces for all props
- Extract data to constants
- Use Framer Motion for smooth animations
- Keep styling consistent with Tailwind
- Add meaningful comments for complex logic

### Don'ts ❌
- Don't hardcode data in JSX
- Don't create deeply nested components
- Don't skip TypeScript types
- Don't mix responsibilities in one component
- Don't create wrapper divs unnecessarily

## 🔍 Debugging

### Enable Debug Output

```tsx
// Add to component
useEffect(() => {
  console.log("MyComponent mounted", props);
}, [props]);
```

### Check TypeScript Errors

```bash
pnpm typecheck
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Component not rendering | Check import paths, ensure component is exported |
| Styling not applied | Check class names, ensure Tailwind in CSS |
| Animation not working | Check Framer Motion version, viewport settings |
| Data not showing | Check constants file, import path |
| HMR not working | Restart dev server, check file paths |

## 📦 Adding Dependencies

### Install Package

```bash
# From project root (travel-site-creator/)
pnpm add package-name
# or dev dependency
pnpm add -D package-name
```

### Common Packages

```bash
# HTTP client
pnpm add axios

# Form validation
pnpm add zod @hookform/resolvers

# Date handling
pnpm add date-fns

# State management
pnpm add zustand
```

## 🔄 Workflow Commands

```bash
# Development
pnpm dev              # Start dev server

# Building
pnpm build            # Build for production
pnpm serve            # Preview production build

# Type checking
pnpm typecheck        # Check TypeScript errors

# Formatting
pnpm format           # Format code with Prettier

# Linting
pnpm lint             # Run ESLint
```

## 📱 Responsive Design

### Breakpoints

```tsx
// Mobile first approach
<div className="text-base md:text-lg lg:text-xl">
  Text that grows on larger screens
</div>

// Hide on mobile, show on desktop
<div className="hidden md:block">
  Desktop only
</div>

// Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Items
</div>
```

## 🌓 Dark Mode Support

Dark mode is handled with CSS variables:

```tsx
// Update color in constants or theme
// All components automatically support dark mode
// via Tailwind's dark: prefix

<div className="bg-background text-foreground">
  Automatically adapts to theme
</div>
```

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Output

```
artifacts/discover-japan/dist/
├── index.html
├── assets/
│   ├── *.js
│   ├── *.css
│   └── *
└── ...
```

### Deploy

Copy `dist/` contents to your hosting provider.

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Radix UI Docs](https://www.radix-ui.com/docs/primitives/overview/introduction)

## 💡 Tips & Tricks

### Useful Tailwind Classes

```tsx
// Flexbox
className="flex items-center justify-between gap-4"

// Grid
className="grid grid-cols-3 gap-4"

// Spacing
className="p-4 m-2 py-6 px-8"

// Colors
className="bg-primary text-primary-foreground border-border"

// Responsive padding
className="px-4 sm:px-6 lg:px-8"

// Hover states
className="hover:bg-primary/90 hover:shadow-lg transition-all"

// Truncate text
className="truncate" // Single line
className="line-clamp-2" // Multiple lines
```

### Quick Component Template

```tsx
import { motion } from "framer-motion";

interface MyComponentProps {
  title: string;
  content: string;
  index: number;
}

export default function MyComponent({
  title,
  content,
  index,
}: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </motion.div>
  );
}
```

## ❓ FAQ

**Q: How do I add a new section?**
A: Follow the 4-step workflow above (Add data → Create component → Use in page → Add to Home)

**Q: Where do I put shared utility functions?**
A: In `src/lib/utils.ts`

**Q: How do I share state between components?**
A: Create a custom hook in `src/hooks/` or use React Context

**Q: Can I modify styling?**
A: Yes, edit Tailwind classes directly or modify `tailwind.config.js`

**Q: How do I add animations?**
A: Use Framer Motion's `motion` components and animations

---

Happy coding! 🚀
