'use client';

import { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/lib/hooks';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
    // You would typically send this to your backend or email service
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`${hasIntersected ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white text-sm font-medium">💰 Start Building Wealth Today</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your
            <span className="block">Investment Journey</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people already building their wealth with us. 
            Get started today - it's free and takes just 2 minutes.
          </p>
          
          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Start Investing Free
              </button>
            </div>
          </form>
          
          {/* Alternative CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50">
              Talk to an Advisor
            </button>
            <button className="text-white hover:text-blue-200 font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50">
              View Investment Options →
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-blue-300">✓</span>
              <span>No minimum investment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-300">✓</span>
              <span>FDIC insured up to $250K</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-300">✓</span>
              <span>SEC registered advisor</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
}