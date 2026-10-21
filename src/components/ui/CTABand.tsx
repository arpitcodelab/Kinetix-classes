import React from 'react';
import { Button } from '../common/Button';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { instituteData } from '../../data/institute';

interface CTABandProps {
  onOpenEnquiry?: () => void;
}

export const CTABand: React.FC<CTABandProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0E1624] via-[#162235] to-[#0E1624] border border-[#00E5C8]/30 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,229,200,0.12)]">
      {/* Background kinetic flare */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5C8]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#00E5C8] bg-[#00E5C8]/10 border border-[#00E5C8]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Admissions Open • Limited Seats Per Batch
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
          Ready to Accelerate Your NEET & JEE Momentum?
        </h2>

        <p className="text-base text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
          Visit our offline center at I-120 Alpha 2, Greater Noida for free academic counseling, scholarship test evaluation, and faculty interaction.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenEnquiry}
            icon={<Calendar className="w-5 h-5" />}
          >
            Book Free Counseling
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            href={instituteData.contact.whatsappHref}
            external
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Chat on WhatsApp
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href={instituteData.contact.phoneHref}
            icon={<Phone className="w-5 h-5 text-[#38BDF8]" />}
          >
            Call {instituteData.contact.phoneFormatted}
          </Button>
        </div>
      </div>
    </div>
  );
};

