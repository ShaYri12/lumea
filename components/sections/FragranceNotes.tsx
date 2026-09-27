"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Droplets, Sun, Moon } from "lucide-react";
import { FragranceNote } from "@/types";

const notesData: FragranceNote[] = [
  {
    level: "TOP NOTES",
    name: "White Daisy",
    subtitle: "Fresh & Luminous",
    description:
      "Fresh white petals and morning dew open LUMÉA with a soft, luminous floral impression.",
    ingredients: [
      "White Daisy Petals",
      "Morning Dew",
      "Fresh Green Stems",
    ],
    image: "/images/white-daisy.png",
  },
  {
    level: "HEART NOTES",
    name: "Violet Bloom",
    subtitle: "Delicate & Ethereal",
    description:
      "Soft violet blooms unfold through the heart, bringing a delicate floral depth with a gentle powdery character.",
    ingredients: [
      "Violet Bloom",
      "Soft Green Leaves",
      "Powdery Floral Accord",
    ],
    image: "/images/violet-bloom.jpg",
  },
  {
    level: "BASE NOTES",
    name: "Soft Musk",
    subtitle: "Warm & Sensual",
    description:
      "A clean, velvety musk settles beneath the florals, leaving a warm and intimate impression on the skin.",
    ingredients: [
      "White Musk",
      "Green Moss",
      "Soft Skin Accord",
    ],
    image: "/images/soft-musk.jpg",
  },
];

export default function FragranceNotes() {
  const [activeNote, setActiveNote] = useState<number>(0);

  return (
    <section
      id="notes"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#F3ECE2] text-[#1C1B19] border-y border-[#E6DFD6] z-10"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-medium tracking-widest-luxury uppercase text-[#79736B]"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span>Olfactory Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10100F] tracking-wide"
          >
            The Fragrance Notes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-[#4A4640] font-light max-w-xl mx-auto leading-relaxed"
          >
            A carefully orchestrated three-stage evolution on your skin. From the
            sparkling morning opening to an intimate, long-lasting drydown.
          </motion.p>
        </div>

        {/* 3-Column Editorial Note Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {notesData.map((note, index) => (
            <motion.div
              key={note.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setActiveNote(index)}
              className={`border-t border-b p-0 py-7 transition-all duration-500 flex flex-col justify-between group cursor-pointer ${
                activeNote === index
                  ? "border-[#C29F68]"
                  : "border-[#DCD3C7] hover:border-[#C29F68]/60"
              }`}
            >
              <div>
                {/* Note Level Badge */}
                <div className="flex items-center justify-between pb-5">
                  <span className="text-[10px] sm:text-xs font-medium tracking-widest-luxury uppercase text-[#C29F68]">
                    {note.level}
                  </span>
                  <span className="text-2xl font-serif italic text-[#79736B]">
                    0{index + 1}
                  </span>
                </div>

                {/* Botanical Visual */}
                <div className="mt-1 relative h-56 sm:h-64 w-full overflow-hidden bg-[#F3ECE2]">
                  <Image
                    src={note.image}
                    alt={note.name}
                    fill
                    className="object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Note Details */}
                <h3 className="mt-6 text-2xl sm:text-3xl font-serif text-[#10100F]">
                  {note.name}
                </h3>
                <p className="mt-1 text-xs text-[#79736B] tracking-wide">
                  {note.subtitle}
                </p>

                <p className="mt-4 text-sm text-[#4A4640] font-light leading-relaxed">
                  {note.description}
                </p>
              </div>

              {/* Ingredients Pills */}
                <div className="mt-6 pt-5 border-t border-[#F3ECE2]">
                <span className="text-[10px] uppercase tracking-widest text-[#79736B] block mb-2">
                  Key Accords
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {note.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[11px] px-2.5 py-1 border border-[#DCD3C7] text-[#4A4640]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Duration Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 border-y border-[#DCD3C7] py-6 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-3">
            <Droplets className="w-6 h-6 text-[#C29F68]" />
            <div>
              <span className="text-base font-serif italic text-[#10100F]">
                24% High-Concentration Extrait
              </span>
              <p className="text-xs text-[#79736B]">
                Provides 12+ hours of subtle, evolving sillage
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-xs font-light uppercase tracking-wider text-[#79736B] md:gap-x-6">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Sun className="h-5 w-5 shrink-0 text-[#C29F68]" />
              <span>0h - 2h: Bergamot</span>
            </div>

            <span className="shrink-0">•</span>

            <div className="flex items-center whitespace-nowrap">
              <span>2h - 6h: Jasmine</span>
            </div>

            <span className="shrink-0">•</span>

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Moon className="h-5 w-5 shrink-0 text-[#7A8977]" />
              <span>6h - 12h+: Warm Musk</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
