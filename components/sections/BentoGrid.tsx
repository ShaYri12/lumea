"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const cards = [
  {
    eyebrow: "01 / The vessel",
    title: "A quiet object of desire.",
    description:
      "Hand-finished crystal, weighted in the palm and shaped to let the fragrance take center stage.",
    className: "md:col-span-7 min-h-[340px] md:min-h-[390px]",
    tone: "bg-[#f8f7f3] text-[#292a27]",
    image: "/images/bento-grid-1.jpg",
    imageStyle: "object-cover object-center",
    layout: "split",
  },
  {
    eyebrow: "02 / The ritual",
    title: "Made slowly. Worn often.",
    description:
      "A considered composition of wild jasmine, bergamot, and warm woods that settles close to skin.",
    className: "md:col-span-5 md:row-span-2 min-h-[420px] md:min-h-[690px]",
    tone: "bg-[#1d1e1c] text-[#f5f3ed]",
    image: "/images/bento-grid-2.png",
    imageStyle: "object-cover object-center",
    layout: "full-bleed",
  },
  {
    eyebrow: "03 / The formula",
    title: "Nothing unnecessary.",
    description: "Vegan, cruelty-free, and distilled without compromise.",
    className: "md:col-span-4 min-h-[285px]",
    tone: "bg-[#ebeae5] text-[#292a27]",
    image: "/images/bento-grid-3.png",
    imageStyle: "object-cover object-center",
    layout: "texture",
  },
  {
    eyebrow: "04 / The finish",
    title: "Lasting Impression",
    description:
      "An intimate sillage designed to stay with you from first light to last call.",
    className: "md:col-span-3 min-h-[285px]",
    tone: "bg-[#f8f7f3] text-[#292a27]",
    image: "/images/bento-grid-4.jpg",
    imageStyle: "object-cover object-center",
    layout: "texture",
  },
];

export default function BentoGrid() {
  return (
    <section
      id="craft"
      aria-labelledby="craft-heading"
      className="min-h-screen bg-[#242523] px-4 py-16 text-[#292a27] sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <header className="mb-10 max-w-xl text-[#f5f3ed] sm:mb-14">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#bdbbb4]">
            <Sparkles
              className="size-3.5 text-[#d8d5cc]"
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <span>The LUMÉA ritual</span>
          </div>

          <h2
            id="craft-heading"
            className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-6xl"
          >
            The art of a lasting impression.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-[#bebdb7] sm:text-base">
            A closer look at the details that make every LUMÉA fragrance feel
            personal.
          </p>
        </header>

        {/* =====================================================
            GRID
        ====================================================== */}

        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
          {cards.map(
            (
              {
                eyebrow,
                title,
                description,
                className,
                tone,
                image,
                imageStyle,
                layout,
              },
              index,
            ) => {
              const isDark = layout === "full-bleed";

              return (
                <article
                  key={eyebrow}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.35rem] px-5 py-6 transition-transform duration-500 hover:-translate-y-1 md:px-6 md:py-8 ${tone} ${className}`}
                >
                  {/* =================================================
                      FULL BLEED IMAGE
                  ================================================== */}

                  {image && layout === "full-bleed" && (
                    <>
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        className={`absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-105 ${imageStyle}`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/85" />
                    </>
                  )}

                  {/* =================================================
                      SPLIT IMAGE
                  ================================================== */}

                  {/* =================================================
    SPLIT IMAGE
================================================= */}

                  {image && layout === "split" && (
                    <>
                      {/* Mobile image */}
                      <div className="absolute inset-x-0 top-0 h-[280px] overflow-hidden sm:hidden">
                        <img
                          src={image}
                          alt=""
                          aria-hidden="true"
                          className={`size-full ${imageStyle}`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f7f3]" />
                      </div>

                      {/* Desktop image */}
                      <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[45%] overflow-hidden rounded-bl-[1.35rem] sm:block md:w-[48%]">
                        <img
                          src={image}
                          alt=""
                          aria-hidden="true"
                          className={`size-full transition-transform duration-700 ease-out group-hover:scale-105 ${imageStyle}`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f3] via-transparent to-transparent" />
                      </div>
                    </>
                  )}

                  {/* =================================================
                      TEXTURE IMAGE
                  ================================================== */}

                  {image && layout === "texture" && (
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className={`absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-105 ${imageStyle}`}
                      style={{
                        maskImage:
                          "radial-gradient(ellipse at top right, black 40%, transparent 60%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at top right, black 40%, transparent 60%)",
                      }}
                    />
                  )}

                  {/* =================================================
                      EDITORIAL TOP LABEL
                  ================================================== */}

                  <div className="relative z-20">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.22em] backdrop-blur-md transition-colors duration-300 sm:text-[10px] ${
                        isDark
                          ? "border-white/15 bg-black/45 text-[#F5F3ED]"
                          : "border-black/5 bg-white/80 text-black/90"
                      }`}
                    >
                      {eyebrow}
                    </span>
                  </div>

                  {/* =================================================
                      BOTTOM CONTENT
                  ================================================== */}

                  <div
                    className={`relative z-10 mt-auto ${
                      layout === "split"
                        ? "max-w-full sm:max-w-[52%]"
                        : "max-w-[22rem]"
                    }`}
                  >
                    <h3
                      className={`font-serif text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl ${
                        isDark ? "text-[#f5f3ed]" : "text-[#10100F]"
                      }`}
                      style={
                        isDark
                          ? {
                              textShadow: "0 3px 16px rgba(0,0,0,.55)",
                            }
                          : undefined
                      }
                    >
                      {title}
                    </h3>

                    <p
                      className={`mt-3 max-w-sm text-sm leading-5 ${
                        isDark ? "text-[#d0cec7]" : "text-[#5a5a54]"
                      }`}
                      style={
                        isDark
                          ? {
                              textShadow: "0 2px 10px rgba(0,0,0,.55)",
                            }
                          : undefined
                      }
                    >
                      {description}
                    </p>
                  </div>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
