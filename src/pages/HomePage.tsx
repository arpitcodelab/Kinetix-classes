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

interface HomePageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  return (
    <main id="main-content" className="flex flex-col">
      {/* 1. Dimensional Hero */}
      <HeroSection onOpenEnquiry={() => onOpenEnquiry()} />

      {/* 2. Verified Trust Strip */}
      <TrustStrip />

      {/* 3. Academic Programs */}
      <ProgramsSection onEnquireCourse={(course) => onOpenEnquiry(course)} limit={6} />

      {/* 4. The Kinetix Advantage */}
      <WhyKinetixSection />

      {/* 5. Authentic Classroom Gallery */}
      <GallerySection />

      {/* 6. Faculty Mentors */}
      <FacultySection onOpenEnquiry={() => onOpenEnquiry()} />

      {/* 7. Student & Parent Reviews */}
      <ReviewsSection />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. High-Conversion CTA Band */}
      <div className="py-12 bg-[#070C14]">
        <Container size="xl">
          <CTABand onOpenEnquiry={() => onOpenEnquiry()} />
        </Container>
      </div>

      {/* 10. Center Location & Directions */}
      <Section id="location" variant="surface">
        <Container size="xl">
          <ContactBlock />
        </Container>
      </Section>
    </main>
  );
};
