'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/hooks';
import { svgFallbacks } from '@/lib/placeholders';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${hasIntersected ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              About Our Mission
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Building Wealth Together
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We make investing simple for everyone. Our easy-to-use platform helps you grow your money without the complicated financial jargon.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of financial experts created tools that work for beginners and experienced investors alike. Start small, learn as you go, and watch your wealth grow over time.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$2.5B+</div>
                <div className="text-gray-600">Assets Under Management</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Active Investors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">12.4%</div>
                <div className="text-gray-600">Average Annual Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">0.25%</div>
                <div className="text-gray-600">Management Fee</div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn About Our Approach
            </button>
          </div>
          
          {/* Image */}
          <div className={`relative ${hasIntersected ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-team.webp"
                alt="Financial team collaboration and wealth building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}