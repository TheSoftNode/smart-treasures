import AboutSection from '@/components/Landing/AboutSection';
import AcademyCTA from '@/components/Landing/AcademyCTA';
import AchievementsSection from '@/components/Landing/AchievementsSection';
import CallToAction from '@/components/Landing/CallToAction';
import FaqSection from '@/components/Landing/FaqSection';
import HeroSection from '@/components/Landing/HeroSection';
import InvestmentHighlight from '@/components/Landing/InvestmentHighlight';
import StatsSection from '@/components/Landing/StatsSection';
import React from 'react';

const HomePage = () => {
  return (
    <main className='pt-12'>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AcademyCTA />
      <InvestmentHighlight />
      <AchievementsSection />
      <FaqSection />
      <CallToAction />
    </main>
  );
};

export default HomePage;