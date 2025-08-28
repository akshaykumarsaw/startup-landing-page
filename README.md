# Startup Landing Page

A modern, high-performance startup landing page built with Next.js 15, featuring video backgrounds, animated sections, and conversion-optimized components.

## 🚀 Features

- **Hero Section**: Video background with compelling headline and dual CTAs
- **Features Grid**: 6-card grid showcasing platform capabilities  
- **About Section**: Mission statement with stats and team focus
- **Testimonials**: Social proof from satisfied customers
- **CTA Section**: Email capture with multiple conversion paths
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Performance Optimized**: Lazy loading, image optimization, and efficient rendering

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the startup landing page.

## 🎨 Customization

### Content
Update the following for your startup:
- Hero headline and subtext in `src/components/StartupHero.tsx`
- Feature descriptions in `src/components/FeaturesGrid.tsx`
- About section stats in `src/components/AboutSection.tsx`
- Testimonials in `src/components/TestimonialsSection.tsx`
- Company name and branding throughout

### Images & Videos
Replace placeholder assets in `/public`:
- `/videos/hero-background.mp4` - Hero video background
- `/images/` - Feature section images and other assets

## 🔧 Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Performance**: Web Vitals optimized
- **Accessibility**: WCAG 2.1 AA compliance
- **Images**: Next.js Image optimization

## 📱 Responsive Design

- **Mobile**: < 768px (single column, stacked CTAs)
- **Tablet**: 768px - 1024px (2-column grids)  
- **Desktop**: > 1024px (full 3-column layouts)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO optimization
│   ├── page.tsx            # Startup landing page
│   └── globals.css         # Global styles with animations
├── components/
│   ├── StartupHero.tsx     # Hero section with video background
│   ├── FeaturesGrid.tsx    # 6-feature grid with animations
│   ├── AboutSection.tsx    # About section with stats
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── CTASection.tsx      # Email capture and final CTA
│   ├── Navigation.tsx      # Fixed header navigation
│   ├── VideoBackground.tsx # Video component with fallbacks
│   └── AccessibilityEnhancements.tsx # A11y improvements
├── lib/
│   ├── hooks.ts            # Custom hooks (device detection, intersection observer)
│   └── placeholders.ts     # Asset configuration
└── public/
    ├── videos/             # Video assets (hero-background.mp4)
    └── images/             # Optimized images (WebP/SVG)
```

Perfect for launching your startup's online presence!