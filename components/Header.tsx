"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
  cinematicComplete?: boolean;
}

export default function Header({ cartCount = 0, onOpenCart, cinematicComplete = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLightHeader = cinematicComplete;

  const navLinks = [
    { label: "Fragrance", href: "#fragrance" },
    { label: "Notes", href: "#notes" },
    { label: "Story", href: "#story" },
    { label: "Craft", href: "#craft" },
    { label: "Product", href: "#product" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-700 ${
          isLightHeader
            ? "bg-[#FAF7F2]/95 border-b border-[#E6DFD6]/60"
            : "bg-transparent"
        }`}
      >
        {/* Subtle dark backdrop only during hero */}
        {!isLightHeader && (
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}
        
        <div className="px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex items-center justify-between h-20 sm:h-22">
              {/* Brand Logo - Left aligned */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex flex-col group cursor-pointer"
              >
                <span
                  className={`text-2xl sm:text-3xl font-bold font-serif tracking-[0.18em] transition-colors duration-300 ${
                    isLightHeader ? "text-[#10100F]" : "text-[#FAF7F2]"
                  }`}
                  style={!isLightHeader ? {
                    textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 4px 24px rgba(0, 0, 0, 0.6)'
                  } : undefined}
                >
                  LUMÉA
                </span>
                <span className={`text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mt-0.5 transition-colors duration-300 ${
                  isLightHeader ? "text-[#79736B]" : "text-white"
                }`}>
                  Born in Nature
                </span>
              </a>

              {/* Center Navigation (Desktop) */}
              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 relative group cursor-pointer ${
                      isLightHeader
                        ? "text-[#79736B] hover:text-[#10100F]"
                        : "text-[#FAF7F2]/80 hover:text-[#FAF7F2]"
                    }`}
                    style={!isLightHeader ? {
                      textShadow: "0 3px 12px rgba(0, 0, 0, 0.8), 0 -3px 18px rgba(0, 0, 0, 0.8)",
                    } : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                        isLightHeader ? "bg-[#C29F68]" : "bg-[#D4AF37]"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              {/* Right Section - Cart & Menu */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Bag Button */}
                <button
                  type="button"
                  onClick={onOpenCart}
                  aria-label="Shopping Bag"
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    isLightHeader
                      ? "text-[#10100F]"
                      : "text-[#FAF7F2]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <ShoppingBag className="w-5 h-5 stroke-[1.5] transition-transform group-hover:scale-110" 
                      style={!isLightHeader ? {
                        filter: 'drop-shadow(0 2px 0px rgba(0, 0, 0, 0.8))'
                      } : undefined}
                    />
                    {cartCount > 0 && (
                      <span className={`min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-[10px] font-medium transition-all ${
                        isLightHeader
                          ? "bg-[#10100F] text-[#FAF7F2]"
                          : "bg-[#FAF7F2] text-[#10100F]"
                      }`}>
                        {cartCount}
                      </span>
                    )}
                  </div>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`lg:hidden p-2 transition-colors cursor-pointer ${
                    isLightHeader ? "text-[#10100F]" : "text-[#FAF7F2]"
                  }`}
                  aria-label="Toggle navigation menu"
                  style={!isLightHeader ? {
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))'
                  } : undefined}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 stroke-[1.5]" />
                  ) : (
                    <Menu className="w-6 h-6 stroke-[1.5]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#FAF7F2] shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#E6DFD6]">
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold font-serif tracking-[0.18em] transition-colors duration-300">
                      LUMÉA
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mt-0.5 transition-colors duration-300">
                      Born in Nature
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#10100F] hover:bg-[#F3ECE2] rounded-full transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-4">
                  <div className="space-y-1">
                    {navLinks.map((link, idx) => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left rounded-lg transition-all duration-200 hover:bg-[#F3ECE2] group"
                      >
                        <div className="flex items-center justify-between gap-4 py-4 px-4">
                          <span className="text-lg font-serif font-light text-[#1C1B19] group-hover:text-[#10100F] flex-1 min-w-0">
                            {link.label}
                          </span>
                          <span className="text-xs text-[#79736B] group-hover:text-[#C29F68] transition-colors flex-shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}