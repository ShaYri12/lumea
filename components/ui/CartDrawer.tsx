"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, ShieldCheck, Sparkles, ArrowRight, Check, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartItem {
  size: string;
  quantity: number;
  price: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);
  const [checkedOutSuccess, setCheckedOutSuccess] = React.useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckedOutSuccess(true);
      setTimeout(() => {
        setCheckedOutSuccess(false);
        onUpdateCart([]);
        onClose();
      }, 2500);
    }, 1200);
  };

  const updateItemQuantity = (size: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      onUpdateCart(cartItems.filter((item) => item.size !== size));
    } else {
      onUpdateCart(
        cartItems.map((item) =>
          item.size === size ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (size: string) => {
    onUpdateCart(cartItems.filter((item) => item.size !== size));
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
            <div className="px-4 md:px-6 py-5 md:py-6 border-b border-[#E6DFD6] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest-luxury text-[#79736B]">
                  Your Selection
                </span>
                <h2 className="text-xl font-serif font-medium text-[#10100F]">
                  Shopping Bag <span className="font-mono text-lg">({totalItems})</span>
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
            <div className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 space-y-6">
              {totalItems === 0 ? (
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
                <div className="space-y-4">
                  {/* Cart Items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.size}
                      className="p-4 rounded-xl bg-white border border-[#E6DFD6] shadow-sm flex gap-4 items-start"
                    >
                      <div className="w-20 h-24 relative bg-[#F3ECE2] rounded-lg overflow-hidden shrink-0 border border-[#E6DFD6]/70">
                        <Image
                          src="/images/lumea-white-daisy-pedals.png"
                          alt={`LUMÉA Eau de Parfum ${item.size}`}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between min-h-[96px]">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif text-base text-[#10100F] font-bold">
                              LUMÉA Eau de Parfum
                            </h4>
                            <button
                              type="button"
                              onClick={() => removeItem(item.size)}
                              className="text-[#79736B] hover:text-red-600 transition-colors p-1"
                              title="Remove"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-[#79736B] font-light mt-0.5">
                            {item.size} • Flacon Crystal
                          </p>
                        </div>

                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-[#F3ECE2]">
                          <div className="flex items-center space-x-1 md:space-x-2 border border-[#E6DFD6] rounded-full px-2 py-0.5">
                            <button
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.size, item.quantity - 1)
                              }
                              className="text-[#79736B] hover:text-[#10100F] px-1"
                            >
                              <Minus size={14} strokeWidth={3}/>
                            </button>
                            <span className="text-sm font-medium px-1">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.size, item.quantity + 1)
                              }
                              className="text-[#79736B] hover:text-[#10100F] px-1"
                            >
                              <Plus size={14} strokeWidth={3}/>
                            </button>
                          </div>
                          <span className="text-sm font-medium text-[#10100F]">
                            ${item.price * item.quantity} USD
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Included Perks */}
                  <div className="p-4 rounded-xl bg-[#F3ECE2]/70 border border-[#E6DFD6] space-y-2.5 text-xs text-[#4A4640]">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#C29F68] shrink-0" />
                      <span>Includes complimentary 2ml discovery vial to test</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-[#7A8977] shrink-0" />
                      <span>Free carbon-neutral worldwide priority shipping</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {totalItems > 0 && (
              <div className="px-4 md:px-6 py-5 md:py-6 bg-white border-t border-[#E6DFD6] space-y-4">
                <div className="flex justify-between items-baseline font-medium">
                  <span className="text-sm uppercase tracking-widest text-[#79736B]">
                    Estimated Total
                  </span>
                  <span className="text-xl text-[#10100F]">
                    ${subtotal} USD
                  </span>
                </div>

                <button
                  type="button"
                  disabled={isCheckingOut || checkedOutSuccess}
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-full bg-[#10100F] text-[#FAF7F2] text-sm uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#2B2826] active:scale-[0.99] transition-all cursor-pointer shadow-md disabled:opacity-75"
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
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#79736B]">
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
