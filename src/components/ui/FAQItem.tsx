import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../types';

interface FAQItemProps {
  faq: FAQ;
  defaultOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-[#0E1624] border border-[#1E293B] overflow-hidden transition-colors hover:border-[#334155]">
      <button
        type="button"
        className="w-full px-6 py-5 flex items-center justify-between text-left text-base font-bold text-[#F8FAFC] hover:text-[#00E5C8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5C8]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#00E5C8] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E293B]/60">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

