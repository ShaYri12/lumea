"use client";

import React from "react";
import { Clock, Droplets, FlaskConical, Leaf, Sparkles } from "lucide-react";

const cards = [
  {
    eyebrow: "01 / The vessel",
    title: "A quiet object of desire.",
    description:
      "Hand-finished crystal, weighted in the palm and shaped to let the fragrance take center stage.",
    icon: FlaskConical,
    className: "md:col-span-7 min-h-[340px] md:min-h-[390px]",
    tone: "bg-[#f8f7f3] text-[#292a27]",
    image:
      "/images/lumea-macro-closeup.png",
    imageStyle: "object-cover object-center",
    layout: "split",
  },
  {
    eyebrow: "02 / The ritual",
    title: "Made slowly. Worn often.",
    description:
      "A considered composition of wild jasmine, bergamot, and warm woods that settles close to skin.",
    icon: Droplets,
    className: "md:col-span-5 md:row-span-2 min-h-[420px] md:min-h-[690px]",
    tone: "bg-[#1d1e1c] text-[#f5f3ed]",
    image:
      "/images/bento-grid-2.png",
    imageStyle: "object-cover object-center",
    layout: "full-bleed",
  },
  {
    eyebrow: "03 / The formula",
    title: "Nothing unnecessary.",
    description: "Vegan, cruelty-free, and distilled without compromise.",
    icon: Leaf,
    className: "md:col-span-4 min-h-[285px]",
    tone: "bg-[#ebeae5] text-[#292a27]",
    image:
      "/images/bento-grid-3.png",
    imageStyle: "object-cover object-center",
    layout: "texture",
  },
  {
    eyebrow: "04 / The finish",
    title: "A presence that lingers.",
    description:
      "An intimate sillage designed to stay with you from first light to last call.",
    icon: Clock,
    className: "md:col-span-3 min-h-[285px]",
    tone: "bg-[#f8f7f3] text-[#292a27]",
    image:
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&q=80&w=800",
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
        <header className="mb-10 max-w-xl text-[#f5f3ed] sm:mb-14">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#c9a979]">
            <Sparkles className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
            <span>The LUMÉA ritual</span>
          </div>
          <h2
            id="craft-heading"
            className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-6xl"
          >
            The art of a lasting impression.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#bebdb7] sm:text-base">
            A closer look at the details that make every LUMÉA fragrance feel personal.
          </p>
        </header>

        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
          {cards.map(
            (
              {
                icon: Icon,
                eyebrow,
                title,
                description,
                className,
                tone,
                image,
                imageStyle,
                layout,
              },
              index
            ) => {
              const isDark = layout === "full-bleed";

              return (
                <article
                  key={eyebrow}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.35rem] p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8 ${tone} ${className}`}
                >
                  {/* ─── Full-bleed: image covers card, gradient ensures text contrast ─── */}
                  {image && layout === "full-bleed" && (
                    <>
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        className={`absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-105 ${imageStyle}`}
                      />
                      {/* Strong gradient at top AND bottom — text is at both ends */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/85" />
                    </>
                  )}

                  {/* ─── Split: image anchored right, text stays left with safe space ─── */}
                  {image && layout === "split" && (
                    <div className="pointer-events-none absolute bottom-0 right-0 top-16 hidden w-[45%] overflow-hidden rounded-bl-[1.35rem] sm:block md:top-12 md:w-[48%]">
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        className={`size-full transition-transform duration-700 ease-out group-hover:scale-105 ${imageStyle}`}
                      />
                      {/* Soft fade into card background on the left edge */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f3] via-transparent to-transparent" />
                    </div>
                  )}

                  {/* ─── Texture: image fades out via mask so text is always readable ─── */}
                  {image && layout === "texture" && (
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className={`absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-105 ${imageStyle}`}
                      style={{
                        maskImage:
                          "radial-gradient(ellipse at top right, black 20%, transparent 65%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at top right, black 20%, transparent 65%)",
                      }}
                    />
                  )}

                  {/* ─── Top row: icon + eyebrow ─── */}
                  <div className="relative z-10 flex items-start justify-between">
                    <Icon
                      className={`size-7 ${
                        isDark ? "text-[#f5f3ed]" : "text-[#30312e]"
                      }`}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] ${
                        isDark ? "text-[#c9a979]" : "text-[#87867f]"
                      }`}
                    >
                      {eyebrow}
                    </span>
                  </div>

                  {/* ─── Bottom: title + description ─── */}
                  <div
                    className={`relative z-10 ${
                      layout === "split" ? "max-w-full sm:max-w-[52%]" : "max-w-[22rem]"
                    }`}
                  >
                    <h3 className="font-serif text-2xl font-light leading-tight tracking-[-0.02em] sm:text-3xl">
                      {title}
                    </h3>
                    <p
                      className={`mt-3 max-w-sm text-sm leading-5 ${
                        isDark ? "text-[#bebdb7]" : "text-[#5a5a54]"
                      }`}
                    >
                      {description}
                    </p>
                  </div>

                  {/* ─── Big background number ─── */}
                  <span
                    className={`pointer-events-none absolute -bottom-14 -right-8 font-serif text-[11rem] font-light leading-none transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-3 ${
                      isDark ? "text-white/[0.06]" : "text-black/[0.05]"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}