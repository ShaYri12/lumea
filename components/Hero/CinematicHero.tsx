"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const TOTAL_FRAMES = 123;

const framePath = (index: number) =>
  `/frames/frame_${String(index).padStart(4, "0")}.jpg`;

interface CinematicHeroProps {
  onProgress?: (progress: number) => void;
}

export default function CinematicHero({ onProgress }: CinematicHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const [frame, setFrame] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHeroActive, setIsHeroActive] = useState(false); // Start as false to prevent flash
  const [isMounted, setIsMounted] = useState(false); // Track if component mounted
  const [isLoading, setIsLoading] = useState(true); // Loading state for preload
  const [loadProgress, setLoadProgress] = useState(0); // Loading progress percentage
  const loadedCount = useRef(0);

  // For smooth interpolation
  const [smoothFrame, setSmoothFrame] = useState(0);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const imageRef = useRef<HTMLImageElement>(null);

  const loadedFramesRef = useRef<HTMLImageElement[]>([]);

  const onProgressRef = useRef(onProgress);

  useEffect(() => {
    onProgressRef.current = onProgress;
  }, [onProgress]);

  // =========================================================
  // PRELOAD FRAMES - PROGRESSIVE LOADING STRATEGY
  // =========================================================

  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    const priorityFrames = [0, 1, 2, 3, 4, 5, 10, 20, 30, 40, 60, 80, 100, 120, 121, 122]; // Key frames to load first
    const criticalFrames = [0, 1, 2, 3, 4, 5]; // Frames needed before showing content
    let criticalLoaded = 0;

    // Function to load a single frame
    const loadFrame = (i: number, priority: boolean = false) => {
      const image = new Image();
      
      // Add fetchpriority for critical frames
      if (priority && i < 10) {
        image.fetchPriority = 'high';
      }
      
      image.src = framePath(i);

      image.onload = () => {
        loadedFramesRef.current[i] = image;
        loadedCount.current++;

        // Track critical frame loading
        if (criticalFrames.includes(i)) {
          criticalLoaded++;
          const progress = (criticalLoaded / criticalFrames.length) * 100;
          setLoadProgress(progress);
          
          // Once all critical frames are loaded, hide loading screen
          if (criticalLoaded === criticalFrames.length) {
            setTimeout(() => setIsLoading(false), 300); // Small delay for smooth transition
          }
        }

        // If this is the frame we're currently on, immediately use the loaded image
        if (currentFrameRef.current === i && imageRef.current) {
          imageRef.current.src = image.src;
        }
      };

      image.onerror = () => {
        console.error(`Failed to load frame ${i}`);
        // Still count as loaded to prevent infinite loading
        if (criticalFrames.includes(i)) {
          criticalLoaded++;
          setLoadProgress((criticalLoaded / criticalFrames.length) * 100);
          if (criticalLoaded === criticalFrames.length) {
            setTimeout(() => setIsLoading(false), 300);
          }
        }
      };

      images[i] = image;
    };

    // Step 1: Load priority frames first (first few frames and key points)
    priorityFrames.forEach((frameIndex) => {
      if (frameIndex < TOTAL_FRAMES) {
        loadFrame(frameIndex, true);
      }
    });

    // Step 2: Load remaining frames in batches with slight delay
    setTimeout(() => {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!priorityFrames.includes(i)) {
          // Stagger the loading slightly
          setTimeout(() => loadFrame(i), Math.floor(i / 10) * 50);
        }
      }
    }, 100);

    return () => {
      loadedFramesRef.current = [];
    };
  }, []);

  // =========================================================
  // SMOOTH FRAME INTERPOLATION
  // =========================================================

  useEffect(() => {
    const animate = () => {
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;

      // Smooth lerp (linear interpolation) with easing
      const diff = target - current;
      const step = diff * 0.15; // Smoothness factor (lower = smoother)

      if (Math.abs(diff) > 0.1) {
        currentFrameRef.current = current + step;
        setSmoothFrame(Math.round(currentFrameRef.current));
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        currentFrameRef.current = target;
        setSmoothFrame(target);
      }

      // Update image if frame changed
      const frameToShow = Math.round(currentFrameRef.current);
      const loadedImage = loadedFramesRef.current[frameToShow];

      if (
        loadedImage &&
        imageRef.current &&
        imageRef.current.src !== loadedImage.src
      ) {
        imageRef.current.src = loadedImage.src;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [frame]);

  // =========================================================
  // SCROLL -> FRAME
  // =========================================================

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;

        const section = sectionRef.current;

        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
         * Determine whether the hero is currently
         * covering the viewport.
         */
        const visible = rect.bottom > 0 && rect.top < window.innerHeight;

        // Hero should hide when scrolled completely past
        const hasScrolledPast = rect.bottom < 0;

        setIsHeroActive(visible && !hasScrolledPast);
        setIsMounted(true); // Mark as mounted after first scroll calculation

        /*
         * FRAME CALCULATION WITH HOLD AT END
         * - Frames play through first 75% of scroll
         * - Last 25% holds the final frame for reading
         */
        const animationDistance = section.offsetHeight - window.innerHeight;

        const scrolled = Math.max(0, -rect.top);

        const nextProgress = Math.min(1, scrolled / animationDistance);

        // Stop frame progression at 75% to hold final frame
        const frameProgress = Math.min(0.75, nextProgress) / 0.75;

        const nextFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(frameProgress * TOTAL_FRAMES),
        );

        setProgress(nextProgress);

        onProgressRef.current?.(nextProgress);

        /*
         * Update target frame for smooth interpolation
         */
        if (nextFrame !== targetFrameRef.current) {
          targetFrameRef.current = nextFrame;

          setFrame(nextFrame);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // =========================================================
  // TEXT OPACITY
  // =========================================================

  const introOpacity = Math.max(0, 1 - progress / 0.24);

  // End content appears when we reach frame 121 (second to last frame)
  const endContentOpacity = frame >= 121 ? 1 : 0;

  // Slide in from right when frame 121 is reached
  const endContentTranslateX = frame >= 121 ? 0 : 100;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      {/* =====================================================
          LOADING SCREEN
      ====================================================== */}
      {isLoading && (
        <div
          className="fixed inset-0 z-[100] bg-[#11130f] flex items-center justify-center transition-opacity duration-500"
          style={{
            opacity: isLoading ? 1 : 0,
            pointerEvents: isLoading ? "auto" : "none",
          }}
        >
          <div className="text-center space-y-8 px-6">
            {/* Brand Logo */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-serif tracking-[0.25em] text-[#FAF7F2]">
                LUMÉA
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-light">
                Born from the Wild
              </p>
            </div>

            {/* Loading Progress Bar */}
            <div className="w-64 sm:w-80 mx-auto space-y-3">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C29F68] to-[#D4AF37] transition-all duration-300 ease-out"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-xs text-[#FAF7F2]/60 font-light tracking-wider">
                Loading experience... {Math.round(loadProgress)}%
              </p>
            </div>

            {/* Subtle Animation */}
            <div className="flex justify-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#C29F68]"
                style={{
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: "0s",
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#C29F68]"
                style={{
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: "0.2s",
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full bg-[#C29F68]"
                style={{
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: "0.4s",
                }}
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes pulse {
              0%,
              100% {
                opacity: 0.3;
                transform: scale(0.8);
              }
              50% {
                opacity: 1;
                transform: scale(1.2);
              }
            }
          `}</style>
        </div>
      )}

      <section
        ref={sectionRef}
        className="relative h-[460vh] bg-[#11130f]"
        aria-label="LUMÉA cinematic fragrance film"
      >
      {/* =====================================================
          FIXED CINEMATIC VIEWPORT
      ====================================================== */}

      {isMounted && (
        <div
          className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#11130f] transition-opacity duration-300"
          style={{
            opacity: isHeroActive ? 1 : 0,
            visibility: isHeroActive ? "visible" : "hidden",
            display: isHeroActive ? "block" : "none",
            pointerEvents: "none",
            zIndex: 1, // Changed from -10 to 1
          }}
        >
        {/* ===================================================
            CURRENT FRAME
        ==================================================== */}

        <img
          ref={imageRef}
          src={framePath(0)}
          alt=""
          aria-hidden="true"
          draggable={false}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* ===================================================
            SUBTLE VIGNETTE OVERLAY for better framing
        ==================================================== */}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                ellipse 130% 110% at 50% 50%,
                transparent 0%,
                transparent 50%,
                rgba(17, 19, 15, 0.15) 80%,
                rgba(17, 19, 15, 0.25) 100%
              )
            `,
          }}
          aria-hidden="true"
        />
      </div>
      )}

      {/* =====================================================
          CONTENT OVERLAYS - INTRO & SCROLL (Fixed)
      ====================================================== */}

      {isMounted && (
        <div
          className="fixed inset-0 h-screen w-screen overflow-hidden transition-opacity duration-300"
          style={{
            opacity: isHeroActive ? 1 : 0,
            visibility: isHeroActive ? "visible" : "hidden",
            display: isHeroActive ? "block" : "none",
            pointerEvents: "none",
            zIndex: 2, // Changed from -5 to 2, above background but below sections
          }}
        >
        {/* ===================================================
            INTRO SECTION - Centered hero message
        ==================================================== */}

        <div
          style={{
            opacity: introOpacity,
          }}
          className="absolute left-4 right-4 top-0 bottom-0 flex items-center justify-center text-center"
        >
          <div className="relative">
            {/* Compact glass backdrop - only behind text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl" />

            <div className="relative z-10 px-6 sm:px-12 py-8 sm:py-12">
              <p
                className="mb-2 text-xs font-extrabold uppercase tracking-[.38em] text-[#D4AF37] sm:mb-4"
                style={{
                  textShadow:
                    "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 18px rgba(0, 0, 0, 0.55)",
                }}
              >
                LUMÉA · EAU DE PARFUM
              </p>

              <h1
                className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[1.1] tracking-[.06em] text-[#FAF7F2]"
                style={{
                  textShadow: `
                    0 3px 15px rgba(0, 0, 0, 0.5),
                    0 6px 30px rgba(0, 0, 0, 0.4),
                    0 0 60px rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                Born from the wild.
              </h1>

              <p
                className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 tracking-[.12em] text-[#F5E6D3] sm:text-base sm:leading-8"
                style={{
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 18px rgba(0, 0, 0, 0.55)",
                }}
              >
                A fragrance inspired by landscapes untouched by time, where
                nature speaks its ancient language.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            END CONTENT - Fixed on the frame area
        ==================================================== */}

        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-end px-4">
            <div
              className="max-w-sm relative w-full"
              style={{
                opacity: endContentOpacity,
                visibility:
                  endContentOpacity > 0 && isHeroActive ? "visible" : "hidden",
                transform: `translateX(${endContentTranslateX}px)`,
                transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              }}
            >
              {/* Compact glass card backdrop - no transition delay */}
              <div
                className="absolute inset-0 -inset-x-6 -inset-y-8 rounded-3xl border border-white/10 shadow-2xl"
                style={{
                  background: "rgba(0, 0, 0, 0.75)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}
              />

              <div className="relative z-10 p-2">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[.38em] text-[#D4AF37] drop-shadow-lg">
                  The awakening
                </p>

                <h2
                  className="font-serif text-4xl font-medium leading-[1.1] text-[#FAF7F2] sm:text-5xl"
                  style={{
                    textShadow:
                      "0 3px 15px rgba(0, 0, 0, 0.6), 0 6px 30px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  A scent shaped by nature.
                </h2>

                <p
                  className="mt-5 max-w-sm text-sm font-light leading-7 text-[#F5E6D3] sm:text-base"
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Born from wild landscapes and delicate flowers, LUMÉA captures
                  the feeling of discovering something untouched.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("fragrance")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="pointer-events-auto group mt-7 inline-flex items-center gap-4 border-2 border-[#FAF7F2]/50 bg-black/30 backdrop-blur-sm px-7 py-3.5 text-[10px] uppercase tracking-[.25em] text-[#FAF7F2] transition-all duration-300 hover:bg-[#FAF7F2] hover:text-[#11130f] hover:border-[#FAF7F2] hover:shadow-xl"
                >
                  Explore the fragrance
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
    </>
  );
}
