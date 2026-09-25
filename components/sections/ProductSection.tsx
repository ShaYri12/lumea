"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw } from "lucide-react";

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
  const [isAdded, setIsAdded] = useState(false);

  const price = selectedSize === "100 ML" ? 260 : 185;

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart(selectedSize);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <section
      id="product"
      className="py-28 sm:py-36 bg-[#FAF7F2] text-[#1C1B19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Product Visual Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[500px] sm:h-[620px] w-full rounded-3xl overflow-hidden bg-[#F3ECE2] border border-[#E6DFD6] shadow-2xl group">
              <Image
                src="/images/lumea-white-daisy-pedals.png"
                alt="LUMÉA Eau de Parfum 50ml luxury bottle"
                fill
                priority
                className="object-cover object-center transform group-hover:scale-104 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Floating Batch Badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-[10px] uppercase tracking-widest text-[#10100F] shadow-sm">
                Batch No. 042 • Hand-Poured
              </div>

              {/* Fragrance Concentration Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E6DFD6]/80 block">
                    Concentration
                  </span>
                  <p className="font-serif text-lg font-light">Eau de Parfum (24%)</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#E6DFD6]/80 block">
                    Origin
                  </span>
                  <p className="font-serif text-lg font-light">Grasse, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Product Narrative & Acquisition */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-light tracking-widest-luxury uppercase text-[#79736B]">
                <Sparkles className="w-3 h-3 text-[#C29F68]" />
                <span>The Signature Creation</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10100F] tracking-wide">
                LUMÉA
              </h2>

              <p className="text-sm uppercase tracking-widest-luxury text-[#79736B]">
                EAU DE PARFUM
              </p>

              <div className="flex items-baseline space-x-3 pt-2">
                <span className="text-3xl font-serif font-light text-[#10100F]">
                  ${price}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#79736B]">
                  USD • Taxes Included
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm sm:text-base text-[#4A4640] font-light leading-relaxed"
            >
              An intimate fragrance born from wild mountain meadows. Opening with
              vibrant wild bergamot, unfurling into dewy night-blooming white jasmine,
              and drying down into a warm, sensual skin musk that lingers like a sacred
              memory.
            </motion.p>

            {/* Size Selector */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3"
            >
              <label className="text-xs uppercase tracking-widest text-[#79736B] block font-light">
                Select Flacon Size
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => onSelectSize("50 ML")}
                  className={`py-3.5 px-4 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedSize === "50 ML"
                      ? "border-[#10100F] bg-white shadow-sm ring-1 ring-[#10100F]"
                      : "border-[#E6DFD6] bg-[#FAF7F2] hover:border-[#79736B]"
                  }`}
                >
                  <span className="font-serif text-base block text-[#10100F]">50 ML</span>
                  <span className="text-[11px] text-[#79736B] font-light">$185 USD • Travel & Daily</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectSize("100 ML")}
                  className={`py-3.5 px-4 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedSize === "100 ML"
                      ? "border-[#10100F] bg-white shadow-sm ring-1 ring-[#10100F]"
                      : "border-[#E6DFD6] bg-[#FAF7F2] hover:border-[#79736B]"
                  }`}
                >
                  <span className="font-serif text-base block text-[#10100F]">100 ML</span>
                  <span className="text-[11px] text-[#79736B] font-light">$260 USD • Extended Vessel</span>
                </button>
              </div>
            </motion.div>

            {/* Add to Cart CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 pt-2"
            >
              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-4 sm:py-5 px-8 rounded-full bg-[#10100F] text-[#FAF7F2] text-xs sm:text-sm uppercase tracking-widest font-light flex items-center justify-center space-x-3 hover:bg-[#2B2826] active:scale-[0.99] transition-all duration-300 shadow-xl cursor-pointer"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag • Enjoy Complimentary Sample</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                    <span>Add to Bag — ${price} USD</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#79736B] font-light">
                *Fictional portfolio preview. Experience our interactive bag drawer.
              </p>
            </motion.div>

            {/* Luxury Service Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E6DFD6] text-xs text-[#4A4640]"
            >
              <div className="flex items-center space-x-2.5">
                <Truck className="w-4 h-4 text-[#79736B] shrink-0" />
                <span>Free Carbon-Neutral Express Shipping</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#C29F68] shrink-0" />
                <span>Complimentary 2ml Sample Included</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#7A8977] shrink-0" />
                <span>100% Recyclable Luxury Packaging</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
