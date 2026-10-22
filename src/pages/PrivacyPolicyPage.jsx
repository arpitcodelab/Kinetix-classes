import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { instituteData } from '../data/institute';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <main id="main-content" style={{ paddingTop: '72px' }}>
      <Section variant="deep" style={{ borderBottom: '1px solid #1E293B', padding: '3.5rem 0' }}>
        <Container size="md">
          <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={14} />
            Legal Compliance & Data Safety
          </span>
          <h1 className="knx-h1" style={{ marginBottom: '0.5rem' }}>
            Privacy Policy
          </h1>
          <p className="knx-small">
            Effective Date: 1st January, 2025
          </p>
        </Container>
      </Section>

      <Section variant="surface">
        <Container size="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.7 }}>
            <div>
              <h2 className="knx-h3" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94A3B8' }}>
                <li>Personal information you provide (such as name, email, phone number) when you contact us or inquire about courses.</li>
                <li>Non-personal information (such as browser type, IP address, pages visited) collected automatically for diagnostic purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="knx-h3" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. How We Use Information</h2>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#94A3B8' }}>
                <li>Provide, operate, and deliver our academic counseling and course information.</li>
                <li>Respond to inquiries, test schedules, and student support requests.</li>
                <li>Send updates regarding batches, scholarship tests, or fee structures.</li>
              </ul>
            </div>

            <div>
              <h2 className="knx-h3" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. Sharing of Information</h2>
              <p style={{ color: '#94A3B8' }}>
                We do not sell, rent, or trade your personal information. We may share data only with trusted faculty and administration staff who help us communicate counseling appointments and test evaluations.
              </p>
            </div>

            <div>
              <h2 className="knx-h3" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>4. Cookies & Web Analytics</h2>
              <p style={{ color: '#94A3B8' }}>
                Our website may use standard session cookies to ensure fast page loads and smooth navigation. You can adjust your browser settings to disable cookies if preferred.
              </p>
            </div>

            <div>
              <h2 className="knx-h3" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>5. Security & Inquiries</h2>
              <p style={{ color: '#94A3B8' }}>
                We employ industry-standard safety practices to protect your data. If you have questions about this policy or wish to update your details, please contact our administrative desk:
              </p>
              <div style={{ marginTop: '1rem', padding: '1.25rem', borderRadius: 12, background: '#070C14', border: '1px solid #1E293B', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <p><strong>Entity:</strong> {instituteData.legalEntity}</p>
                <p><strong>Address:</strong> {instituteData.address.full}</p>
                <p><strong>Phone:</strong> {instituteData.contact.phoneFormatted}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
