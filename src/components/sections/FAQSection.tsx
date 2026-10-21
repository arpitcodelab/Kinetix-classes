import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FAQItem } from '../ui/FAQItem';
import { faqsData } from '../../data/faqs';
import { Reveal } from '../common/Reveal';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';

export const FAQSection: React.FC = () => {
  return (
    <Section id="faqs" variant="surface">
      <Container size="md">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070C14] border border-[#1E293B] text-xs font-semibold text-[#CBD5E1] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#00E5C8]" />
            <span>Parent & Student Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
            Clear, transparent answers regarding admissions, batch sizes, faculty, and fees at our Greater Noida center.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => (
            <Reveal key={faq.id} direction="up" delay={idx * 0.05}>
              <FAQItem faq={faq} defaultOpen={idx === 0} />
            </Reveal>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#070C14] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white mb-0.5">Still have questions about admissions?</h4>
            <p className="text-xs text-[#94A3B8]">Our academic counseling desk is ready to assist you.</p>
          </div>
          <Button
            variant="whatsapp"
            size="md"
            href={instituteData.contact.whatsappHref}
            external
            icon={<MessageCircle className="w-4 h-4" />}
          >
            Ask on WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
};

