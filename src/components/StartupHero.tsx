'use client';

import Image from 'next/image';
import VideoBackground from './VideoBackground';
import { useDeviceDetection } from '@/lib/hooks';
import { placeholders, svgFallbacks } from '@/lib/placeholders';

export default function StartupHero() {
    const { shouldUseVideo, isMobile } = useDeviceDetection();

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video for Desktop */}
            {shouldUseVideo ? (
                <div className="absolute inset-0 w-full h-full">
                    <VideoBackground
                        src="/videos/hero-background.mp4"
                        poster={placeholders.heroPoster}
                        fallbackImage={svgFallbacks.heroPoster}
                    />
                </div>
            ) : (
                /* Background Image for Mobile/Reduced Data */
                <Image
                    src={isMobile ? placeholders.heroMobile : placeholders.heroPoster}
                    alt="Financial growth background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = isMobile ? svgFallbacks.heroMobile : svgFallbacks.heroPoster;
                    }}
                />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-slate-800/85" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white max-w-5xl">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <span className="text-sm font-medium">💰 Trusted by 50,000+ Users</span>
                    </div>
                    
                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Take Control of Your
                        <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Financial Future
                        </span>
                        Today
                    </h1>
                    
                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
                        Smart investing, budgeting, and wealth management made simple. 
                        Build wealth with AI-powered insights and expert guidance.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg">
                            Start Investing Free
                        </button>
                        <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20">
                            See How It Works
                        </button>
                    </div>
                    
                    {/* Social Proof */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                            </div>
                            <span>$2.5B+ assets managed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">★★★★★</span>
                            <span>4.8/5 on App Store</span>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    );
}