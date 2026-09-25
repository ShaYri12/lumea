# LUMÉA — Luxury Fragrance Experience

A premium fragrance brand website featuring an immersive cinematic scroll experience, built with Next.js 16 and modern web technologies.

![LUMÉA](public/frames/frame_0122.jpg)

## ✨ Features

### 🎬 Cinematic Hero Section
- **123-frame scroll animation** — Immersive frame-by-frame video sequence
- **Smooth interpolation** — Buttery transitions between frames
- **Progress-based content** — Dynamic text overlays that fade in/out based on scroll
- **GPU-accelerated** — Optimized for performance with hardware acceleration
- **Responsive design** — Adapts beautifully to all screen sizes

### 🛍️ E-commerce Ready
- **Product selection** — Multiple size options (50 ML / 100 ML)
- **Shopping cart** — Slide-over drawer with cart management
- **Add to cart functionality** — Instant feedback and smooth transitions
- **Real-time updates** — Dynamic cart count in header

### 🎨 Premium Design System
- **Editorial aesthetics** — Magazine-quality layout and typography
- **Glass morphism** — Modern backdrop blur effects
- **Smooth animations** — Motion-powered interactions
- **Custom color palette** — Warm, luxurious tones
- **Responsive typography** — Fluid scaling with clamp()

### 📱 Sections Included
1. **Cinematic Hero** — 123-frame scroll experience with dynamic overlays
2. **Intro Section** — Product introduction with hero imagery
3. **Fragrance Notes** — Top, heart, and base notes breakdown
4. **Brand Story** — Narrative-driven content
5. **Bento Grid** — Visual storytelling (The Flacon, Extraction, Sillage)
6. **Product Section** — Size selection and add-to-cart
7. **FAQ Section** — Clean accordion interface
8. **Footer** — Brand information and links

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety and better DX
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first styling
- **[Motion](https://motion.dev/)** (Framer Motion) — Smooth animations
- **[Lucide React](https://lucide.dev/)** — Beautiful icon system
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Conditional class management

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd lumea

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📂 Project Structure

```
lumea/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Home page with all sections
│   ├── globals.css             # Global styles and Tailwind directives
│   └── favicon.ico             # Brand favicon
├── components/
│   ├── Header.tsx              # Fixed luxury header with cart
│   ├── Footer.tsx              # Brand footer
│   ├── Hero/
│   │   └── CinematicHero.tsx   # 123-frame scroll animation
│   ├── sections/
│   │   ├── IntroSection.tsx    # Product introduction
│   │   ├── FragranceNotes.tsx  # Notes breakdown
│   │   ├── BrandStory.tsx      # Brand narrative
│   │   ├── BentoGrid.tsx       # Visual grid layout
│   │   ├── ProductSection.tsx  # Product selection & CTA
│   │   └── FAQSection.tsx      # Accordion FAQs
│   └── ui/
│       ├── button.tsx          # Reusable button component
│       ├── CartDrawer.tsx      # Shopping cart drawer
│       └── index.ts            # UI exports
├── lib/
│   ├── constants.ts            # App-wide constants
│   └── utils/
│       ├── cn.ts               # Class name utility
│       └── index.ts            # Utility exports
├── types/
│   └── index.ts                # TypeScript type definitions
├── public/
│   └── frames/                 # 123 JPG frames (frame_0000.jpg - frame_0122.jpg)
└── README.md
```

## 🎨 Design Philosophy

**LUMÉA** embodies:

- ✨ **Premium** — High-end luxury positioning with attention to detail
- 🎯 **Minimal** — Clean, uncluttered design language
- 📖 **Editorial** — Magazine-quality aesthetics and typography
- 🎬 **Cinematic** — Rich, immersive visual storytelling
- 🌿 **Natural** — Inspired by wild landscapes and untouched nature
- 💎 **Elegant** — Refined, sophisticated interactions

## 🛠️ Development Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎯 Key Features Deep Dive

### Cinematic Hero Animation

The hero section uses a custom scroll-driven frame animation system:

- **123 preloaded frames** for seamless playback
- **Smooth interpolation** with easing for buttery transitions
- **Progress tracking** to trigger content overlays
- **Optimized loading** with lazy frame loading
- **Responsive scaling** adapts to viewport size

```typescript
// Progress-based opacity calculations
const introOpacity = Math.max(0, 1 - progress / 0.24);
const endContentOpacity = climaxOpacity * Math.max(0, 1 - (progress - 0.88) / 0.12);
```

### State Management

Simple, effective React state management:

```typescript
const [cartCount, setCartCount] = useState<number>(0);
const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
const [selectedSize, setSelectedSize] = useState<string>("50 ML");
const [cinematicProgress, setCinematicProgress] = useState(0);
```

## 🎨 Color Palette

```css
Background:    #FAF7F2  /* Warm cream */
Text:          #1C1B19  /* Deep charcoal */
Dark BG:       #11130f  /* Near black */
Accent Gold:   #D4AF37  /* Bright gold */
Light Text:    #F5E6D3  /* Soft cream */
```

## 📱 Responsive Breakpoints

Built with mobile-first approach using Tailwind's default breakpoints:

- **sm:** 640px — Small tablets
- **md:** 768px — Tablets
- **lg:** 1024px — Laptops
- **xl:** 1280px — Desktops
- **2xl:** 1536px — Large screens

## 🚀 Performance Optimizations

- **Frame preloading** — All 123 frames loaded on mount
- **GPU acceleration** — `transform: translateZ(0)` for smooth rendering
- **Lazy rendering** — Visibility-based content mounting
- **Optimized images** — JPG compression for hero frames
- **RequestAnimationFrame** — Smooth scroll handling
- **Debounced events** — Efficient scroll listeners

## 🔮 Future Enhancements

- [ ] Add product detail pages
- [ ] Integrate payment gateway
- [ ] Implement user authentication
- [ ] Add wishlist functionality
- [ ] Multi-language support (i18n)
- [ ] Analytics integration
- [ ] SEO optimization with metadata
- [ ] WebP/AVIF image formats
- [ ] Progressive Web App (PWA)
- [ ] Dark mode support

## 📄 License

Private — All rights reserved

---

**Built with ❤️ for luxury fragrance enthusiasts**
