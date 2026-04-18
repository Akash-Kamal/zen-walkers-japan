// Global Type Definitions

/**
 * Navigation and Layout Types
 */

export interface NavigationLink {
  name: string;
  href: string;
}

/**
 * Content Types
 */

export interface Destination {
  name: string;
  description: string;
  image: string;
  comment: string;
}

export interface CultureItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  description: string;
}

export interface FoodItem {
  name: string;
  image: string;
  comment: string;
}

export interface SocialLink {
  Icon: React.ComponentType<{ size: number }>;
  href: string;
}

/**
 * API Response Types (for future use with React Query)
 */

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ErrorResponse {
  status: number;
  message: string;
  error: string;
}

/**
 * Component Prop Types
 */

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
}
