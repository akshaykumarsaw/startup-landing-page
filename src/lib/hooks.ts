'use client';

import { useState, useEffect } from 'react';

// Hook for detecting mobile devices and screen size
export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [prefersReducedData, setPrefersReducedData] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    const checkPreferences = () => {
      // Check for reduced data preference
      if ('connection' in navigator) {
        const connection = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
        setPrefersReducedData(
          connection?.saveData || 
          connection?.effectiveType === 'slow-2g' || 
          connection?.effectiveType === '2g'
        );
      }

      // Check for reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(reducedMotion.matches);
    };

    checkDevice();
    checkPreferences();

    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    prefersReducedData,
    prefersReducedMotion,
    shouldUseVideo: !isMobile && !prefersReducedData && !prefersReducedMotion
  };
}

// Hook for intersection observer (lazy loading)
export function useIntersectionObserver(
  elementRef: React.RefObject<Element | HTMLElement | null>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}