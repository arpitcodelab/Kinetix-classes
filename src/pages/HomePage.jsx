import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { WhyKinetixSection } from '../components/sections/WhyKinetixSection';
import { GallerySection } from '../components/sections/GallerySection';
import { FacultySection } from '../components/sections/FacultySection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTABand } from '../components/ui/CTABand';
import { ContactBlock } from '../components/ui/ContactBlock';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';

export const HomePage = ({ onOpenEnquiry }) => {
  return (
    <main id="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
      <HeroSection onOpenEnquiry={() => onOpenEnquiry()} />
      <TrustStrip />
      <ProgramsSection onEnquireCourse={(course) => onOpenEnquiry(course)} limit={6} />
      <WhyKinetixSection />
      <GallerySection />
      <FacultySection onOpenEnquiry={() => onOpenEnquiry()} />
      <ReviewsSection />
      <FAQSection />

      <div style={{ padding: '3.5rem 0', background: '#070C14' }}>
        <Container size="xl">
          <CTABand onOpenEnquiry={() => onOpenEnquiry()} />
        </Container>
      </div>

      <Section id="location" variant="surface">
        <Container size="xl">
          <ContactBlock />
        </Container>
      </Section>
    </main>
  );
};
