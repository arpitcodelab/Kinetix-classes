import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { instituteData } from '../data/institute';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main id="main-content" className="pt-28 pb-20">
      <Section variant="deep" className="pt-12 pb-16 border-b border-[#1E293B]">
        <Container size="md">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#00E5C8] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Compliance & Data Safety</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-semibold text-[#94A3B8]">
            Effective Date: 1st January, 2025
          </p>
        </Container>
      </Section>

      <Section variant="surface">
        <Container size="md">
          <div className="space-y-8 text-sm text-[#CBD5E1] leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8]">
                <li>Personal information you provide (such as name, email, phone number) when you contact us or sign up for services.</li>
                <li>Non-personal information (such as browser type, IP address, pages visited) collected automatically through cookies or analytics tools.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Information</h2>
              <ul className="list-disc list-inside space-y-2 text-[#94A3B8]">
                <li>Provide, operate, and improve our website and educational services.</li>
                <li>Respond to inquiries or customer support requests.</li>
                <li>Send updates, offers, or marketing communications regarding batches (you can opt out anytime).</li>
                <li>Analyze website traffic and usage patterns.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Sharing of Information</h2>
              <p className="text-[#94A3B8]">
                We do not sell, rent, or trade your personal information. We may share data only with trusted third parties who help us operate our website, comply with legal requirements, or protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
              <p className="text-[#94A3B8]">
                Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, but some features may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
              <p className="text-[#94A3B8]">
                We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="text-[#94A3B8]">
                You may request access, correction, or deletion of your personal data by contacting us directly at our institute address or helpline.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Updates to This Policy</h2>
              <p className="text-[#94A3B8]">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E293B]">
              <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
              <p className="text-[#94A3B8] mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="p-5 rounded-2xl bg-[#070C14] border border-[#1E293B] space-y-2.5 text-xs">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#38BDF8]" />
                  <a href={instituteData.contact.phoneHref} className="text-white hover:text-[#00E5C8] font-bold">
                    {instituteData.contact.phoneFormatted}
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00E5C8] shrink-0 mt-0.5" />
                  <span>{instituteData.address.full}</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

