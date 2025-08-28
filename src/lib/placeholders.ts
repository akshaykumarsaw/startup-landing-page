// Asset configuration for optimized media files
// Using WebP images with SVG fallbacks

export const placeholders = {
  // Hero section assets (WebP with SVG fallbacks)
  heroPoster: '/images/hero-poster.webp', // Hero poster image
  heroMobile: '/images/hero-mobile.webp', // Mobile optimized image
  
  // Feature section assets (WebP with SVG fallbacks)
  feature1: '/images/feature-1.webp',     // Innovation feature image
  feature2: '/images/feature-2.webp',     // Performance feature image
  
  // Video assets
  heroVideo: '/videos/hero-background.mp4', // Main hero video
} as const;

// SVG fallbacks for corrupted or missing WebP files (currently unused but kept for future use)
// export const svgFallbacks = {
//   heroPoster: '/images/hero-poster-professional.svg',
//   heroMobile: '/images/hero-mobile.svg', 
//   feature1: '/images/feature-1.svg',
//   feature2: '/images/feature-2.svg',
// } as const;

// Asset metadata for optimization
export const assetConfig = {
  hero: {
    video: {
      src: '/videos/hero-background.mp4', // Main hero video
      poster: '/images/hero-poster.webp', // Using actual WebP poster image
      maxSize: 5 * 1024 * 1024, // 5MB limit
    },
    mobile: {
      src: '/images/hero-mobile.webp', // Using actual WebP image
      width: 768,
      height: 1024,
    },
    desktop: {
      src: '/images/hero-poster.webp', // Using actual WebP poster image
      width: 1920,
      height: 1080,
    }
  },
  features: [
    {
      id: 'innovation',
      image: {
        src: '/images/feature-1.webp', // Using actual WebP image
        width: 800,
        height: 600,
        alt: 'Innovative technology solutions'
      }
    },
    {
      id: 'performance', 
      image: {
        src: '/images/feature-2.webp', // Using actual WebP image
        width: 800,
        height: 600,
        alt: 'High performance web applications'
      }
    }
  ]
} as const;
