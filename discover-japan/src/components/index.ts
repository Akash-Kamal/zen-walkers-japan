// Component Index and Type Definitions

/**
 * PAGE-LEVEL COMPONENTS
 * Full-width sections that make up the page
 */

export { default as Navbar } from "./Navbar";
export { default as Hero } from "./Hero";
export { default as Destinations } from "./Destinations";
export { default as Culture } from "./Culture";
export { default as Food } from "./Food";
export { default as TravelTips } from "./TravelTips";
export { default as Gallery } from "./Gallery";
export { default as CTA } from "./CTA";
export { default as Footer } from "./Footer";

/**
 * SUB-COMPONENTS (Sections)
 * Reusable components used within page sections
 */

export { default as DestinationCard } from "./sections/DestinationCard";
export { default as SectionHeader } from "./sections/SectionHeader";
export { default as HeroContent } from "./sections/HeroContent";
export { default as HeroBackground } from "./sections/HeroBackground";
export { default as NavLink } from "./sections/NavLink";
export { default as CultureCard } from "./sections/CultureCard";
export { default as FoodCard } from "./sections/FoodCard";
export { default as FooterLinkColumn } from "./sections/FooterLinkColumn";
export { default as SocialLinks } from "./sections/SocialLinks";

/**
 * TYPE DEFINITIONS
 */

export interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

export interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export interface HeroContentProps {
  badge: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface HeroBackgroundProps {
  imageUrl: string;
  imageAlt: string;
}

export interface NavLinkProps {
  name: string;
  href: string;
  isScrolled: boolean;
}

export interface CultureCardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  description: string;
  index: number;
}

export interface FoodCardProps {
  name: string;
  image: string;
  index: number;
}

export interface FooterLinkColumnProps {
  title: string;
  links: string[];
}

export interface SocialLinksProps {
  icons: Array<{
    Icon: React.ComponentType<{ size: number }>;
    href: string;
  }>;
}
