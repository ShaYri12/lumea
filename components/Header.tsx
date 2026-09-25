"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isLightHeader
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DFD6]/60 py-3.5 shadow-sm text-[#1C1B19]"
            : "py-5 sm:py-6 text-[#FAF7F2]"
        }`}
      >
        {/* Subtle dark backdrop only during hero */}
        {!isLightHeader && (
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent"
            aria-hidden="true"
          />
        )}
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between relative z-10">
          {/* Left Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.slice(0, 3).map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-bold uppercase tracking-widest-luxury transition-all duration-300 relative group cursor-pointer ${
                  isLightHeader
                    ? "text-[#4A4640] hover:text-[#10100F]"
                    : "text-[#E6DFD6]/90 hover:text-[#FAF7F2]"
                }`}
                style={!isLightHeader ? {
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.5)'
                } : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isLightHeader ? "bg-[#10100F]" : "bg-[#FAF7F2]"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Center Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <span
              className={`text-2xl sm:text-3xl font-serif tracking-ultra-wide transition-colors duration-300 ${
                isLightHeader ? "text-[#10100F]" : "text-[#FAF7F2]"
              }`}
              style={!isLightHeader ? {
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 4px 24px rgba(0, 0, 0, 0.6)'
              } : undefined}
            >
              LUMÉA
            </span>
            <span
              className="text-xs uppercase tracking-widest-luxury font-medium text-[#D4AF37] opacity-85 transition-all duration-300 group-hover:opacity-100">
              Parfums Paris
            </span>
          </a>

          {/* Right Navigation & Cart */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-bold uppercase tracking-widest-luxury transition-all duration-300 relative group cursor-pointer ${
                    isLightHeader
                      ? "text-[#4A4640] hover:text-[#10100F]"
                      : "text-[#E6DFD6]/90 hover:text-[#FAF7F2]"
                  }`}
                  style={!isLightHeader ? {
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.5)'
                  } : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                      isLightHeader ? "bg-[#10100F]" : "bg-[#FAF7F2]"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Bag Button */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Shopping Bag"
              className={`relative flex items-center space-x-2 text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer py-1.5 px-3 rounded-full border ${
                isLightHeader
                  ? "border-[#10100F]/15 text-[#10100F] hover:border-[#10100F] hover:bg-[#10100F]/5"
                  : "border-white/30 bg-black/20 text-[#FAF7F2] hover:border-white/60 hover:bg-black/30"
              }`}
              style={!isLightHeader ? {
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)'
              } : undefined}
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5]" />
              <span className="hidden sm:inline font-light">Bag</span>
              <span className="font-serif italic font-medium ml-0.5">({cartCount})</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-1.5 transition-colors cursor-pointer ${
                isLightHeader ? "text-[#10100F]" : "text-[#FAF7F2]"
              }`}
              aria-label="Toggle navigation menu"
              style={!isLightHeader ? {
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)'
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
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#10100F]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-28 pb-12 px-8 text-[#FAF7F2]"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] uppercase tracking-widest-luxury text-[#C29F68]">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-serif font-light text-[#FAF7F2] hover:text-[#C29F68] transition-colors flex items-center justify-between py-2 border-b border-white/10"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans text-white/40">0{idx + 1}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick("#product");
                }}
                className="w-full py-4 bg-[#FAF7F2] text-[#10100F] text-xs uppercase tracking-widest font-light flex items-center justify-center space-x-2 rounded-full cursor-pointer hover:bg-[#E6DFD6] transition-colors"
              >
                <span>Acquire LUMÉA 50ml</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-center text-[10px] text-white/40 tracking-widest uppercase">
                Free Worldwide Shipping & Discovery Sample Included
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}