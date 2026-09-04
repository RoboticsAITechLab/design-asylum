'use client';

import React from 'react';
import { HeroProvider } from '@/context/HeroContext';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/hero/Hero';
import { ClientMarquee } from '@/components/clients/ClientMarquee';
import { ProcessSection } from '@/components/process/ProcessSection';
import { WorkSection } from '@/components/work/WorkSection';
import { StatsSection } from '@/components/stats/StatsSection';
import { TestimonialSection } from '@/components/testimonials/TestimonialSection';
import { DarkTransitionSection } from '@/components/transition/DarkTransitionSection';
import { InsightsSection } from '@/components/insights/InsightsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { FAQSection } from '@/components/faq/FAQSection';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/motion/CustomCursor';

export default function HomePage() {
  return (
    <HeroProvider>
      <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
        {/* Bespoke Editorial Dual-Ring HUD Cursor */}
        <CustomCursor />

        {/* Sticky & Blur Header */}
        <Header />

        {/* Main Page Content */}
        <main id="main-content">
          {/* SECTION 1: Cinematic Atmospheric Hero (Dynamic switching per active client) */}
          <Hero />

          {/* SECTION 2: Infinite Monochrome Client Ticker (Synchronized with Hero) */}
          <ClientMarquee />

          {/* SECTION 3: Editorial Studio Philosophy & Capabilities Stack */}
          <ProcessSection />

          {/* SECTION 4: Selected Works 2-Column Asymmetric Grid (14 Projects) */}
          <WorkSection />

          {/* SECTION 5: Track Record & Smooth Viewport Numerical Counters */}
          <StatsSection />

          {/* SECTION 6: Executive Founder Testimonials */}
          <TestimonialSection />

          {/* SECTION 7: Atmospheric Dark Visual Break & Kinetic Statement */}
          <DarkTransitionSection />

          {/* SECTION 8: Featured Insights & Studio Thought Leadership */}
          <InsightsSection />

          {/* SECTION 9: Interactive 3D Wireframe Globe & Consultation Form */}
          <ContactSection />

          {/* SECTION 10: Frequently Answered Questions Accordion */}
          <FAQSection />
        </main>

        {/* Grand Editorial Footer with World Clocks & Studio Signature */}
        <Footer />
      </div>
    </HeroProvider>
  );
}
