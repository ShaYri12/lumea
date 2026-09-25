/**
 * Common types for LUMÉA application
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FragranceNote {
  level: "TOP NOTES" | "HEART NOTES" | "BASE NOTES";
  name: string;
  subtitle: string;
  description: string;
  ingredients: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  concentration: string;
  size: string;
  price: number;
  currency: string;
  tagline: string;
  description: string;
  details: string[];
  inStock: boolean;
}
