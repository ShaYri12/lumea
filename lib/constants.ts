/**
 * Application-wide constants for LUMÉA
 */

export const SITE_CONFIG = {
  name: "LUMÉA",
  description:
    "Luxury fragrance brand inspired by nature, wildflower meadows, and untouched landscapes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const BRAND_VALUES = {
  premium: "High-end luxury positioning",
  minimal: "Clean, uncluttered design",
  editorial: "Magazine-quality aesthetics",
  cinematic: "Rich, immersive visuals",
  natural: "Inspired by wildflower meadows",
  elegant: "Refined and sophisticated",
} as const;
