"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, ShieldCheck, Sparkles, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
  onUpdateCount: (newCount: number) => void;
  selectedSize: string;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartCount,
  onUpdateCount,
  selectedSize,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkedOutSuccess, setCheckedOutSuccess] = useState(false);

  const price = selectedSize === "100 ML" ? 260 : 185;
  const subtotal = cartCount * price;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckedOutSuccess(true);
      setTimeout(() => {
        setCheckedOutSuccess(false);
        onUpdateCount(0);
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />

          {/* Slide Over Content */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-50 w-full max-w-md bg-[#FAF7F2] text-[#1C1B19] h-full shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#E6DFD6] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest-luxury text-[#79736B]">
                  Your Selection
                </span>
                <h2 className="text-xl font-serif font-light text-[#10100F]">
                  Shopping Bag ({cartCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#E6DFD6]/60 transition-colors text-[#1C1B19]"
                aria-label="Close bag"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Bag Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartCount === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E6DFD6]/50 flex items-center justify-center text-[#79736B]">
                    <Sparkles className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-serif font-light text-[#10100F]">
                    Your bag is currently empty
                  </h3>
                  <p className="text-xs text-[#79736B] max-w-xs leading-relaxed font-light">
                    Explore the wild botanical notes of LUMÉA and add a fragrance to your collection.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-4 px-6 py-2.5 rounded-full border border-[#1C1B19] text-xs uppercase tracking-widest hover:bg-[#1C1B19] hover:text-[#FAF7F2] transition-colors"
                  >
                    Discover the scent
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Cart Item Card */}
                    <div className="p-4 rounded-xl bg-white border border-[#E6DFD6] shadow-sm flex gap-4 items-start">
                    <div className="w-20 h-24 relative bg-[#F3ECE2] rounded-lg overflow-hidden shrink-0 border border-[#E6DFD6]/70">
                      <Image
                        src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80"
                        alt="LUMÉA Eau de Parfum"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between min-h-[96px]">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-base text-[#10100F] font-light">
                            LUMÉA Eau de Parfum
                          </h4>
                          <button
                            type="button"
                            onClick={() => onUpdateCount(0)}
                            className="text-[#79736B] hover:text-red-600 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-[#79736B] font-light mt-0.5">
                          {selectedSize} • Flacon Crystal
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-[#F3ECE2]">
                        <div className="flex items-center space-x-2 border border-[#E6DFD6] rounded-full px-2 py-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateCount(Math.max(1, cartCount - 1))}
                            className="text-xs text-[#79736B] hover:text-[#10100F] px-1 font-mono"
                          >
                            -
                          </button>
                          <span className="text-xs font-medium font-serif px-1">
                            {cartCount}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateCount(cartCount + 1)}
                            className="text-xs text-[#79736B] hover:text-[#10100F] px-1 font-mono"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-serif text-sm font-medium text-[#10100F]">
                          ${subtotal} USD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Included Perks */}
                  <div className="p-4 rounded-xl bg-[#F3ECE2]/70 border border-[#E6DFD6] space-y-2.5 text-xs text-[#4A4640]">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C29F68] shrink-0" />
                      <span>Includes complimentary 2ml discovery vial to test</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7A8977] shrink-0" />
                      <span>Free carbon-neutral worldwide priority shipping</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {cartCount > 0 && (
              <div className="p-6 bg-white border-t border-[#E6DFD6] space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-widest text-[#79736B] font-light">
                    Estimated Total
                  </span>
                  <span className="text-xl font-serif font-light text-[#10100F]">
                    ${subtotal} USD
                  </span>
                </div>

                <button
                  type="button"
                  disabled={isCheckingOut || checkedOutSuccess}
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-full bg-[#10100F] text-[#FAF7F2] text-xs uppercase tracking-widest font-light flex items-center justify-center space-x-2 hover:bg-[#2B2826] active:scale-[0.99] transition-all cursor-pointer shadow-md disabled:opacity-75"
                >
                  {checkedOutSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Order Confirmed (Portfolio Demo)</span>
                    </>
                  ) : isCheckingOut ? (
                    <span>Processing Luxury Order...</span>
                  ) : (
                    <>
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-[#79736B] font-light">
                  Tax included. Fictional portfolio experience.
                </p>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
