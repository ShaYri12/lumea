"use client";

import React, { useState } from "react";
import { ArrowUp, ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#10100F] text-[#FAF7F2] pt-10 pb-6 border-t border-white/10 px-6 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Grand Editorial Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-10 border-b border-white/10 items-start">
          {/* Brand Manifesto */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-ultra-wide text-[#FAF7F2]">
              LUMÉA
            </h2>
            <p className="text-xl sm:text-2xl font-medium font-serif italic text-[#C29F68] font-light">
              Born from the wild.
            </p>
            <p className="text-sm text-[#E6DFD6]/90 font-light leading-relaxed max-w-md">
              A tribute to untamed landscapes and untouched flora. Crafted with
              regenerative botanicals in Grasse, France.
            </p>
          </div>

          {/* Newsletter / Circle Sign-up */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest-luxury text-[#C29F68] block">
              The LUMÉA Journal
            </span>
            <h3 className="text-2xl font-serif font-light text-[#FAF7F2]">
              Receive Private Harvest Notices & Notes
            </h3>
            <p className="text-xs text-[#E6DFD6]/75 font-light">
              Be the first to know when limited numbered batches are released.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 flex max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3.5 text-xs text-[#FAF7F2] placeholder:text-white/40 focus:outline-none focus:border-[#C29F68] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#10100F] text-xs uppercase tracking-widest font-light hover:bg-[#C29F68] hover:text-[#10100F] transition-all flex items-center space-x-1 cursor-pointer shrink-0"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Join</span>
                    <ArrowRight className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-b border-white/10">
          {/* Col 1 */}
          <div className="space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest-luxury text-[#C29F68] block">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-light text-[#E6DFD6]/90">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("fragrance")}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Fragrance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("notes")}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Notes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("story")}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("craft")}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Craft
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("product")}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Acquire 50ml
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest-luxury text-[#C29F68] block">
              Information
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-light text-[#E6DFD6]/90">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("faq")}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FAF7F2] transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FAF7F2] transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FAF7F2] transition-colors">
                  Sample Program
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest-luxury text-[#C29F68] block">
              Atelier
            </span>
            <div className="text-xs text-[#E6DFD6]/90 font-light space-y-1 leading-relaxed">
              <p>Maison LUMÉA</p>
              <p>18 Rue des Capucins</p>
              <p>06130 Grasse, France</p>
              <p className="pt-2 text-[#C29F68]">concierge@lumea-parfums.com</p>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest-luxury text-[#C29F68] block mb-4">
                Return to Top
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors cursor-pointer"
                aria-label="Scroll to top of page"
              >
                <ArrowUp className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <span className="text-[10px] text-white/40 tracking-widest uppercase">
              Edition 2026 • 24% Extrait
            </span>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E6DFD6]/75 font-light">
          <p>© {new Date().getFullYear()} LUMÉA Haute Parfumerie. Fictional Portfolio Project.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
