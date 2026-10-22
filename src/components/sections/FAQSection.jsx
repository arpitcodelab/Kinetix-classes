import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FAQItem } from '../ui/FAQItem';
import { faqsData } from '../../data/faqs';
import { Reveal } from '../common/Reveal';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';

export const FAQSection = () => {
  return (
    <Section id="faqs" variant="surface">
      <Container size="md">
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 3rem auto' }}>
          <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
            <HelpCircle size={14} />
            Parent & Student Inquiries
          </span>
          <h2 className="knx-h2">
            Frequently Asked Questions
          </h2>
          <p className="knx-lead" style={{ marginTop: '0.5rem' }}>
            Clear, transparent answers regarding admissions, batch sizes, faculty, and fees at our Greater Noida center.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqsData.map((faq, idx) => (
            <Reveal key={faq.id} direction="up" delay={idx * 0.05}>
              <FAQItem faq={faq} defaultOpen={idx === 0} />
            </Reveal>
          ))}
        </div>

        <div className="knx-card" style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>Still have questions about admissions?</h4>
            <p className="knx-small">Our academic counseling desk is ready to assist you.</p>
          </div>
          <Button
            variant="whatsapp"
            size="md"
            href={instituteData.contact.whatsappHref}
            external
            icon={<MessageCircle size={16} />}
          >
            Ask on WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
};
