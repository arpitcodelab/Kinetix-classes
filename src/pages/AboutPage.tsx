import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { GallerySection } from '../components/sections/GallerySection';
import { WhyKinetixSection } from '../components/sections/WhyKinetixSection';
import { CTABand } from '../components/ui/CTABand';
import { ContactBlock } from '../components/ui/ContactBlock';
import { MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <main id="main-content" className="pt-28 pb-20">
      {/* About Header */}
      <Section variant="deep" className="pt-12 pb-16 border-b border-[#1E293B]">
        <Container size="xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#00E5C8] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Established in Alpha 2, Greater Noida</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-6">
              About Kinetix Classes
            </h1>
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed mb-6 font-normal">
              Located at <strong className="text-white font-semibold">I-120, Alpha 2, Greater Noida</strong>, Kinetix Classes was founded to offer authentic, high-rigor science and competitive coaching without the crowding and impersonal treatment of mass commercial institutes.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#00E5C8]" />
                <span>3rd Street Alpha 2, Greater Noida, UP 201310</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>Google Verified Coaching Center (Place ID: ChIJC5tZtyfrDDkR2WHg2F06RR8)</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Classroom Gallery */}
      <GallerySection />

      {/* Core Methodology */}
      <WhyKinetixSection />

      {/* Center Location */}
      <Section variant="surface">
        <Container size="xl">
          <ContactBlock />
        </Container>
      </Section>

      {/* CTA */}
      <div className="pt-16 pb-12 bg-[#070C14]">
        <Container size="xl">
          <CTABand onOpenEnquiry={onOpenEnquiry} />
        </Container>
      </div>
    </main>
  );
};
