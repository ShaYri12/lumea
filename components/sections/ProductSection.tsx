"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, ShoppingBag, Check, ShieldCheck, Truck } from "lucide-react";

interface ProductSectionProps {
  onAddToCart: (size: string) => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export default function ProductSection({
  onAddToCart,
  selectedSize,
  onSelectSize,
}: ProductSectionProps) {
  const [isAdded, setIsAdded] = useState<{ [key: string]: boolean }>({
    "50 ML": false,
    "100 ML": false,
  });

  const handleAdd = (size: string) => {
    setIsAdded((prev) => ({ ...prev, [size]: true }));
    onAddToCart(size);
    setTimeout(() => {
      setIsAdded((prev) => ({ ...prev, [size]: false }));
    }, 2000);
  };

  return (
    <section
      id="product"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#FAF7F2] text-[#1C1B19] z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Product Visual Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[620px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F3ECE2] border border-[#E6DFD6] shadow-2xl group">
              <Image
                src="/images/lumea-white-daisy-pedals.png"
                alt="LUMÉA Eau de Parfum luxury bottle"
                fill
                priority
                className="object-cover object-center transform group-hover:scale-104 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Floating Batch Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-[9px] sm:text-[10px] uppercase tracking-widest text-[#10100F] shadow-sm">
                Limited Edition • Artisan Batch
              </div>

              {/* Fragrance Concentration Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3">
                <div className="flex-1">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#fde1bd] block">
                    Concentration
                  </span>
                  <p className="font-serif text-sm sm:text-lg">Eau de Parfum (24%)</p>
                </div>
                <div className="text-right flex-1">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#fde1bd] block">
                    Origin
                  </span>
                  <p className="font-serif text-sm sm:text-lg">Grasse, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Product Narrative & Acquisition */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-medium tracking-widest-luxury uppercase text-[#79736B]">
                <Sparkles className="w-5 h-5 text-[#C29F68]" />
                <span>Born from the Wild</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-[#10100F] tracking-wide">
                LUMÉA
              </h2>

              <p className="text-xs sm:text-sm uppercase tracking-widest-luxury text-[#79736B]">
                EAU DE PARFUM
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm sm:text-base text-[#4A4640] font-light leading-relaxed"
            >
              A luminous fragrance inspired by untouched alpine meadows at dawn. 
              Crisp wild bergamot and fresh green leaves open into a heart of delicate 
              white daisy petals and night-blooming jasmine, settling into a warm embrace 
              of sun-warmed cedarwood and clean amber musk.
            </motion.p>

            {/* Size Options with Individual Add to Cart */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <label className="text-xs uppercase tracking-widest text-[#79736B] block font-light">
                Choose Your Flacon
              </label>
              
              {/* 50 ML Option */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#E6DFD6] bg-white/50 hover:border-[#C29F68]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2 text-base md:text-lg text-[#10100F]">
                      50 ML · $185
                    </div>
                    <span className="text-xs text-[#79736B]">Discovery Size</span>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleAdd("50 ML")}
                  style={{ boxSizing: 'border-box', maxWidth: '100%' }}
                  className="block w-full py-3 px-4 rounded-full bg-[#10100F] text-[#FAF7F2] text-xs uppercase tracking-widest font-light text-center hover:bg-[#2B2826] active:scale-[0.98] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {isAdded["50 ML"] ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Added</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2">
                      <ShoppingBag className="w-4 h-4 stroke-[1.5] shrink-0" />
                      <span>Add to Bag</span>
                    </span>
                  )}
                </button>
              </div>

              {/* 100 ML Option */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#E6DFD6] bg-white/50 hover:border-[#C29F68]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2 text-base md:text-lg text-[#10100F]">
                      100 ML · $260
                    </div>
                    <span className="text-xs text-[#79736B]">Signature Vessel</span>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleAdd("100 ML")}
                  style={{ boxSizing: 'border-box', maxWidth: '100%' }}
                  className="block w-full py-3 px-4 rounded-full bg-[#10100F] text-[#FAF7F2] text-xs uppercase tracking-widest font-light text-center hover:bg-[#2B2826] active:scale-[0.98] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {isAdded["100 ML"] ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Added</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2">
                      <ShoppingBag className="w-4 h-4 stroke-[1.5] shrink-0" />
                      <span>Add to Bag</span>
                    </span>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-[#79736B]">
                Includes complimentary 2 ML sample vial with every order
              </p>
            </motion.div>

            {/* Luxury Service Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#E6DFD6] text-xs text-[#4A4640]"
            >
              <div className="flex items-center space-x-2.5">
                <Truck className="w-4 h-4 text-[#79736B] shrink-0" />
                <span className="text-xs">Complimentary Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#C29F68] shrink-0" />
                <span className="text-xs">Free 2 ML Discovery Vial Included</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#7A8977] shrink-0" />
                <span className="text-xs">Vegan & Cruelty-Free Formula</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
