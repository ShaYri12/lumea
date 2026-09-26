"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "@/types";

const faqList: FAQItem[] = [
  {
    question: "What does LUMÉA smell like?",
    answer:
      "LUMÉA opens with a crisp, dew-drenched burst of wild Calabrian bergamot and crushed green leaves. As it warms upon your skin, it unfolds into a luminous heart of night-blooming white jasmine and wild iris, before settling into an intimate, sensual drydown of clean amber and sun-warmed cedarwood musk. It smells like crisp morning mist in an untamed alpine meadow.",
  },
  {
    question: "What inspired the fragrance?",
    answer:
      "LUMÉA was born from an expedition across untouched high-altitude valleys in the Maritime Alps. The perfumer sought to bottle the emotional sensation of wilderness—the quiet, untouched beauty of nature before civilization intrudes. 'Born from the wild' is both our mantra and our formulation principle.",
  },
  {
    question: "How long does the fragrance last?",
    answer:
      "LUMÉA is formulated at a 24% Eau de Parfum (Extrait-grade) concentration. It provides 10 to 14 hours of persistent yet intimate sillage on skin, and up to 24 hours on natural fabric fibers like cashmere and linen.",
  },
  {
    question: "Is LUMÉA available in different sizes?",
    answer:
      "Yes, LUMÉA is available in our signature 50 ML French crystal flacon ($185) and an extended 100 ML flacon ($260). Every order includes a complimentary 2 ML tester vial so you can experience the scent before breaking the wax seal on the main box.",
  },
  {
    question: "Is LUMÉA unisex?",
    answer:
      "Absolutely. Wild nature has no gender. The interplay between bright citrus, ethereal jasmine, and grounding smoked cedar adapts distinctively to each individual's unique skin chemistry.",
  },
  {
    question: "What is your approach to sustainability and ethics?",
    answer:
      "All botanicals are wild-harvested following regenerative cycles in small batches. Our formula is 100% vegan, cruelty-free, and formulated without phthalates or parabens. Our flacons are made from heavyweight recyclable crystal glass with FSC-certified hemp paper packaging.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-28 sm:py-36 bg-[#F3ECE2] text-[#1C1B19] border-t border-[#E6DFD6]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-light tracking-widest-luxury uppercase text-[#79736B]"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#C29F68]" />
            <span>Frequently Inquired</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#10100F] tracking-wide"
          >
            Questions & Answers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-[#4A4640] font-light max-w-lg mx-auto leading-relaxed"
          >
            Everything you wish to know regarding the composition, wear, and
            artisanal heritage of LUMÉA.
          </motion.p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#C29F68]/70 shadow-sm"
                    : "bg-white/70 border-[#E6DFD6] hover:border-[#C29F68]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                >
                  <div className="py-5 px-4 sm:py-6 sm:px-6 lg:px-8 flex items-center gap-4">
                    <span className="font-serif text-base sm:text-lg lg:text-xl font-light text-[#10100F] tracking-wide flex-1 min-w-0">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 min-w-[2rem] rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#10100F] text-[#FAF7F2]"
                          : "bg-[#F3ECE2] text-[#79736B]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-6 pt-1 text-sm sm:text-base text-[#4A4640] font-light leading-relaxed border-t border-[#F3ECE2]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
