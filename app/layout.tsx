import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-lumea-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-lumea-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMÉA — Born from the wild | Luxury Fragrance",
  description:
    "LUMÉA is a luxury fragrance inspired by wildflower meadows, wild landscapes, and places untouched by time. Featuring Wild Bergamot, White Jasmine, and Warm Musk.",
  keywords: [
    "LUMÉA",
    "luxury perfume",
    "eau de parfum",
    "wild bergamot",
    "white jasmine",
    "warm musk",
    "artisan fragrance",
  ],
  openGraph: {
    title: "LUMÉA — Born from the wild",
    description:
      "A fragrance inspired by places untouched by time. Discover LUMÉA Eau de Parfum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1E1D1B] font-sans selection:bg-[#C29F68]/20 selection:text-[#121211]">
        {children}
      </body>
    </html>
  );
}
