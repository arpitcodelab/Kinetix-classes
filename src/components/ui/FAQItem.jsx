import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQItem = ({ faq, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="knx-card" style={{ padding: 0, overflow: 'hidden' }}>
      <button
        type="button"
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          fontSize: '1rem',
          fontWeight: 700,
          color: '#F8FAFC'
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span style={{ paddingRight: '1rem' }}>{faq.question}</span>
        <ChevronDown
          size={18}
          color="#00E5C8"
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        />
      </button>

      {isOpen && (
        <div style={{
          padding: '0 1.5rem 1.25rem 1.5rem',
          borderTop: '1px solid #1E293B',
          paddingTop: '0.75rem',
          fontSize: '0.9rem',
          color: '#94A3B8',
          lineHeight: 1.6
        }}>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
