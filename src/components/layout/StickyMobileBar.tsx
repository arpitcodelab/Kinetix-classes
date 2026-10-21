import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { instituteData } from '../../data/institute';

interface StickyMobileBarProps {
  onOpenEnquiry: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#070C14]/95 backdrop-blur-lg border-t border-[#1E293B] px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Link */}
        <a
          href={instituteData.contact.phoneHref}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#0E1624] border border-[#1E293B] text-[#CBD5E1] active:bg-[#162235] transition-colors"
          aria-label="Call Kinetix Classes"
        >
          <Phone className="w-4 h-4 text-[#38BDF8] mb-0.5" />
          <span className="text-[11px] font-bold text-white">Call Now</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={instituteData.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#0E1624] border border-[#1E293B] text-[#CBD5E1] active:bg-[#162235] transition-colors"
          aria-label="WhatsApp Kinetix Classes"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-bold text-white">WhatsApp</span>
        </a>

        {/* Admission Enquiry Button */}
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#00E5C8] text-[#070C14] font-extrabold active:scale-95 transition-all shadow-[0_0_15px_rgba(0,229,200,0.3)]"
          aria-label="Enquire for Admission"
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[11px]">Enquire</span>
        </button>
      </div>
    </div>
  );
};

