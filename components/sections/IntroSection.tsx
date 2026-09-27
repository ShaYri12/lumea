"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Compass, Wind } from "lucide-react";

export default function IntroSection() {
  return (
    <section
      id="fragrance"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] text-[#1C1B19] overflow-hidden z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-medium tracking-widest-luxury uppercase text-[#79736B]"
          >
            <Sparkles className="w-5 h-5 text-[#C29F68]" />
            <span>The Fragrance Story</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10100F] tracking-wide leading-tight"
          >
            A scent shaped by nature.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg text-[#4A4640] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Born from wild landscapes and delicate white daisy petals, LUMÉA captures 
            the feeling of discovering something untouched. A luminous symphony of 
            crisp bergamot, night-blooming jasmine, and sun-warmed cedarwood musk.
          </motion.p>
        </div>

        {/* Editorial Layout: Large Imagery & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Large Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative h-[480px] sm:h-[600px] overflow-hidden bg-[#E6DFD6] group"
          >
            <Image
              src="/images/intro-flowers-garden.png"
              alt="Wild mountain meadow at dawn"
              fill
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-[#FAF7F2]">
              <span className="text-[10px] uppercase tracking-widest-luxury text-[#f9e1c3] block mb-1">
                Alpine Meadow Collection
              </span>
              <p className="font-serif text-xl sm:text-2xl font-light italic">
                “Where white daisies meet the cold morning mist.”
              </p>
            </div>
          </motion.div>

          {/* Secondary Editorial Column */}
          <div className="lg:col-span-5 flex flex-col justify-center divide-y divide-[#DCD3C7]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="py-8 lg:pl-10 space-y-4 first:pt-0 lg:first:pt-8"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#C29F68]/40 text-[#C29F68]">
                <Wind className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#10100F]">
                Born from the Wild
              </h3>
              <p className="text-sm text-[#4A4640] font-light leading-relaxed">
                Inspired by untouched alpine meadows where wild white daisies bloom at dawn. 
                We capture the ephemeral moment when morning dew clings to delicate petals, 
                blending nature's purest essences with deep reverence for their wild origins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="py-8 lg:pl-10 space-y-4"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#7A8977]/40 text-[#7A8977]">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-serif font-light text-[#10100F]">
                Artisan Craft in Grasse
              </h3>
              <p className="text-sm text-[#4A4640] font-light leading-relaxed">
                Matured for six months in small batches by master perfumers in 
                southern France. Our 24% Eau de Parfum concentration creates an 
                intimate sillage that evolves beautifully on the skin, lasting 
                10-14 hours with a whisper of wild elegance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
