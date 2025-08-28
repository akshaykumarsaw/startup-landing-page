'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/hooks';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

const features: Feature[] = [
  {
    icon: '📊',
    title: 'Smart Portfolio Management',
    description: 'AI-powered portfolio optimization that automatically rebalances your investments for maximum returns.',
  },
  {
    icon: '🤖',
    title: 'AI Financial Advisor',
    description: 'Get personalized investment advice and financial planning with our advanced AI algorithms.',
  },
  {
    icon: '💰',
    title: 'Automated Investing',
    description: 'Set it and forget it. Our robo-advisor handles your investments while you focus on life.',
  },
  {
    icon: '🔒',
    title: 'Bank-Level Security',
    description: '256-bit encryption and FDIC insurance. Your money and data are always protected.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Trading',
    description: 'Trade stocks, ETFs, and crypto on the go with our award-winning mobile app.',
  },
  {
    icon: '📈',
    title: 'Real-Time Analytics',
    description: 'Track your performance with detailed analytics and insights updated in real-time.',
  }
];

export default function FeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef);

  return (
    <section id="features" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Build Wealth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive financial platform provides all the tools and insights you need to grow your wealth and secure your financial future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Feature Image */}
              {feature.image && (
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}