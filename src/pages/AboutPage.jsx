import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { GallerySection } from '../components/sections/GallerySection';
import { WhyKinetixSection } from '../components/sections/WhyKinetixSection';
import { CTABand } from '../components/ui/CTABand';
import { ContactBlock } from '../components/ui/ContactBlock';
import { MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const AboutPage = ({ onOpenEnquiry }) => {
  return (
    <main id="main-content" style={{ paddingTop: '72px' }}>
      <Section variant="deep" style={{ borderBottom: '1px solid #1E293B', padding: '3.5rem 0' }}>
        <Container size="xl">
          <div style={{ maxWidth: '720px' }}>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              Established in Alpha 2, Greater Noida
            </span>
            <h1 className="knx-h1" style={{ marginBottom: '1.25rem' }}>
              About Kinetix Classes
            </h1>
            <p className="knx-lead" style={{ marginBottom: '1.5rem' }}>
              Located at <strong style={{ color: '#FFFFFF' }}>I-120, Alpha 2, Greater Noida</strong>, Kinetix Classes was founded to offer authentic, high-rigor science and competitive coaching without the crowding and impersonal treatment of mass commercial institutes.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="#00E5C8" />
                <span>3rd Street Alpha 2, Greater Noida, UP 201310</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="#38BDF8" />
                <span>Google Verified Coaching Center (Place ID: ChIJC5tZtyfrDDkR2WHg2F06RR8)</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <GallerySection />
      <WhyKinetixSection />

      <Section variant="surface">
        <Container size="xl">
          <ContactBlock />
        </Container>
      </Section>

      <div style={{ padding: '3.5rem 0', background: '#070C14' }}>
        <Container size="xl">
          <CTABand onOpenEnquiry={onOpenEnquiry} />
        </Container>
      </div>
    </main>
  );
};
