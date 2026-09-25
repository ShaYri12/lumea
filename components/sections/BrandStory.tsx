"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Feather, Compass, Award } from "lucide-react";

export default function BrandStory() {
  return (
    <section
      id="story"
      className="py-28 sm:py-36 bg-[#FAF7F2] text-[#1C1B19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-light tracking-widest-luxury uppercase text-[#79736B]"
            >
              <Compass className="w-3 h-3 text-[#C29F68]" />
              <span>The Origin Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10100F] tracking-wide leading-tight"
            >
              Some places stay with you.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-5 text-sm sm:text-base text-[#4A4640] font-light leading-relaxed"
            >
              <p>
                LUMÉA began on an unmapped ridge high in the maritime Alps. At
                sunrise, as the fog lifted from the limestone valleys, the air was
                charged with something rare: the sharp tang of wild citrus foliage,
                the sweetness of blooming white jasmine, and the ancient warmth of
                cedar heated by the early sun.
              </p>
              <p>
                It was an emotion before it was a scent—the realization that true
                luxury is not manufactured opulence, but the pristine stillness of
                places untouched by time and human hands.
              </p>
              <p>
                We spent three years formulating LUMÉA with master perfumers,
                refusing synthetic shortcuts. Every vial is an invitation to carry
                that untamed wilderness wherever you go.
              </p>
            </motion.div>

            {/* Story Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E6DFD6]"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#C29F68]">
                  <Feather className="w-4 h-4 stroke-[1.5]" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#10100F]">
                    Wild Harvested
                  </span>
                </div>
                <p className="text-xs text-[#79736B] font-light leading-relaxed">
                  Botanicals hand-collected following regenerative biodynamic seasons.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#7A8977]">
                  <Award className="w-4 h-4 stroke-[1.5]" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#10100F]">
                    Grasse Artisan
                  </span>
                </div>
                <p className="text-xs text-[#79736B] font-light leading-relaxed">
                  Compounded in small limited batches in the historic perfume capital of France.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative h-[540px] sm:h-[620px] overflow-hidden bg-[#E6DFD6]"
            >
              <Image
                src="/images/brand-story.png"
                alt="Untouched landscape coastal nature"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Editorial Quote Inset Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#10100F]/75 text-[#FAF7F2]">
                <p className="font-serif italic text-base sm:text-lg text-[#FAF7F2] leading-snug">
                  “Fragrance is the invisible garment that speaks directly to memory.”
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#79736B]">
                  <span>Atelier LUMÉA</span>
                  <span>Provence, France</span>
                </div>
              </div>
            </motion.div>

            {/* Small floating detail photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="hidden sm:block absolute -top-8 -left-8 w-44 h-44 overflow-hidden border-8 border-[#FAF7F2] z-20"
            >
              <Image
                src="/images/lumea-macro-closeup.png"
                alt="Delicate white petals"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
