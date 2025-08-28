'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/hooks';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Investment Advisor',
    company: 'WealthTech Partners',
    content: 'My clients have seen an average 15% increase in returns since switching to this platform. The AI-powered portfolio optimization is truly game-changing.',
    avatar: '/images/testimonial-1.webp',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Financial Planner',
    company: 'Future Wealth',
    content: 'The automated rebalancing saved me hours each week. My portfolio performance has never been better, and the fees are incredibly competitive.',
    avatar: '/images/testimonial-2.webp',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Retirement Specialist',
    company: 'SecureFuture',
    content: 'The retirement planning tools are exceptional. My clients can visualize their financial future clearly and make informed decisions about their savings.',
    avatar: '/images/testimonial-3.webp',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Financial Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what financial advisors and wealth managers say about our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-3 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile picture`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Featured in leading financial publications</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Wall Street Journal</div>
            <div className="text-2xl font-bold text-gray-400">Bloomberg</div>
            <div className="text-2xl font-bold text-gray-400">Financial Times</div>
            <div className="text-2xl font-bold text-gray-400">CNBC</div>
            <div className="text-2xl font-bold text-gray-400">MarketWatch</div>
          </div>
        </div>
      </div>
    </section>
  );
}