'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  src: string;
  poster: string;
  className?: string;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  fallbackImage?: string;
}

export default function VideoBackground({
  src,
  poster,
  className = '',
  onLoadStart,
  onCanPlay,
  fallbackImage
}: VideoBackgroundProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('🎬 VideoBackground: Initializing video with src:', src);

    const handleLoadStart = () => {
      console.log('🎬 VideoBackground: Load started');
      setIsLoading(true);
      onLoadStart?.();
    };

    const handleCanPlay = () => {
      console.log('🎬 VideoBackground: Can play - video ready');
      setIsLoading(false);
      setCanPlay(true);
      onCanPlay?.();
    };

    const handleError = (e: Event) => {
      console.error('🎬 VideoBackground: Video error:', e);
      console.error('🎬 VideoBackground: Video src:', src);
      setHasError(true);
      setIsLoading(false);
    };

    const handleLoadedData = () => {
      console.log('🎬 VideoBackground: Video data loaded');
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);

    // Try to load the video
    video.load();

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [src, onLoadStart, onCanPlay]);

  // Always render the video element, but show fallback image on top if needed
  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${className} ${hasError || !canPlay ? 'opacity-0' : 'opacity-100'}`}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        preload="metadata"
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback image - shown when video has error or hasn't loaded */}
      {(hasError || !canPlay) && (
        <div className="absolute inset-0">
          <Image
            src={fallbackImage || poster}
            alt="Background"
            fill
            priority
            className={`object-cover ${className}`}
            sizes="100vw"
          />
        </div>
      )}
      
      {/* Loading overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
      

    </div>
  );
}