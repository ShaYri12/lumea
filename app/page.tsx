"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CinematicHero from "@/components/Hero/CinematicHero";
import IntroSection from "@/components/sections/IntroSection";
import FragranceNotes from "@/components/sections/FragranceNotes";
import BrandStory from "@/components/sections/BrandStory";
import BentoGrid from "@/components/sections/BentoGrid";
import ProductSection from "@/components/sections/ProductSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/ui/CartDrawer";

interface CartItem {
  size: string;
  quantity: number;
  price: number;
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("50 ML");
  const [cinematicProgress, setCinematicProgress] = useState(0);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (size: string) => {
    const price = size === "100 ML" ? 260 : 185;
    
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.size === size);
      
      if (existingItem) {
        // Increment quantity if item exists
        return prevItems.map((item) =>
          item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { size, quantity: 1, price }];
      }
    });
    
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1C1B19] relative selection:bg-[#C29F68]/20 selection:text-[#10100F]">
      {/* Fixed Luxury Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        cinematicComplete={cinematicProgress >= 1}
      />

      {/* 1. CINEMATIC HERO (Pinned 123-frame sequence scroll experience) */}
      <CinematicHero onProgress={setCinematicProgress} />

      {/* 2. INTRO / FRAGRANCE SECTION */}
      <IntroSection />

      {/* 3. FRAGRANCE NOTES (Top, Heart, Base notes) */}
      <FragranceNotes />

      {/* 4. BRAND STORY ("Some places stay with you") */}
      <BrandStory />

      {/* 5. CRAFT / BENTO GRID (The Flacon, Extraction, Sillage) */}
      <BentoGrid />

      {/* 6. PRODUCT SECTION (LUMÉA EAU DE PARFUM 50 ML / 100 ML) */}
      <ProductSection
        onAddToCart={handleAddToCart}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
      />

      {/* 7. FAQ SECTION (Clean accordion) */}
      <FAQSection />

      {/* 8. FOOTER */}
      <Footer />

      {/* Interactive Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateCart={setCartItems}
      />
    </main>
  );
}
