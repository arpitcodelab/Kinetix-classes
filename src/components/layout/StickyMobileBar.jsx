import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { instituteData } from '../../data/institute';

export const StickyMobileBar = ({ onOpenEnquiry }) => {
  return (
    <div className="knx-sticky-bar fixed bottom-0">
      <a
        href={instituteData.contact.phoneHref}
        className="knx-btn btn-outline"
        aria-label="Call Kinetix Classes"
      >
        <Phone size={16} color="#38BDF8" />
        <span>Call</span>
      </a>

      <a
        href={instituteData.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="knx-btn btn-whatsapp"
        aria-label="WhatsApp Kinetix Classes"
      >
        <MessageCircle size={16} color="#FFFFFF" />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={onOpenEnquiry}
        className="knx-btn btn-primary"
        aria-label="Enquire for Admission"
      >
        <Sparkles size={16} />
        <span>Enquire</span>
      </button>
    </div>
  );
};
