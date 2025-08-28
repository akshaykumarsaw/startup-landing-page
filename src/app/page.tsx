import StartupHero from '@/components/StartupHero';
import FeaturesGrid from '@/components/FeaturesGrid';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Take Control of Your Financial Future | WealthBuilder',
  description: 'Smart investing, budgeting, and wealth management made simple. Build wealth with AI-powered insights and expert guidance. Start investing free today.',
  keywords: 'investing, wealth management, financial planning, robo advisor, portfolio management, retirement planning',
  openGraph: {
    title: 'Take Control of Your Financial Future',
    description: 'AI-powered wealth management platform. Build wealth with smart investing and expert guidance.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <StartupHero />
        
        {/* Features Grid */}
        <FeaturesGrid />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Call to Action */}
        <CTASection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}