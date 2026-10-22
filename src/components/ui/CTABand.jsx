import React from 'react';
import { Button } from '../common/Button';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { instituteData } from '../../data/institute';

export const CTABand = ({ onOpenEnquiry }) => {
  return (
    <div className="knx-cta-band">
      <span className="knx-badge badge-cyan">
        <Sparkles size={14} />
        Admissions Open • Limited Seats Per Batch
      </span>

      <h2 className="knx-h2" style={{ maxWidth: '700px' }}>
        Ready to Accelerate Your NEET & JEE Momentum?
      </h2>

      <p className="knx-lead" style={{ maxWidth: '640px' }}>
        Visit our offline center at I-120 Alpha 2, Greater Noida for free academic counseling, scholarship test evaluation, and faculty interaction.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
        <Button
          variant="primary"
          size="lg"
          onClick={onOpenEnquiry}
          icon={<Calendar size={18} />}
        >
          Book Free Counseling
        </Button>

        <Button
          variant="whatsapp"
          size="lg"
          href={instituteData.contact.whatsappHref}
          external
          icon={<MessageCircle size={18} />}
        >
          Chat on WhatsApp
        </Button>

        <Button
          variant="secondary"
          size="lg"
          href={instituteData.contact.phoneHref}
          icon={<Phone size={18} color="#38BDF8" />}
        >
          Call {instituteData.contact.phoneFormatted}
        </Button>
      </div>
    </div>
  );
};
