import React from 'react';
import { instituteData } from '../../data/institute';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const ContactBlock: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Contact Cards Info */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-bold text-[#00E5C8] uppercase tracking-wider mb-2 block">
            Visit Our Center
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Centrally Located in Alpha 2, Greater Noida
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
            Parents and students are welcome to visit during counseling hours to inspect our classrooms, meet teachers, and take the Scholarship Test.
          </p>
        </div>

        {/* Detailed Address Card */}
        <div className="rounded-2xl bg-[#0E1624] border border-[#1E293B] p-5 space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#00E5C8]/10 border border-[#00E5C8]/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#00E5C8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] mb-1">Campus Address</h4>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                {instituteData.address.full}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-3 border-t border-[#1E293B]">
            <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] mb-1">Direct Helpline</h4>
              <a
                href={instituteData.contact.phoneHref}
                className="text-sm font-bold text-[#38BDF8] hover:text-[#00E5C8] transition-colors"
              >
                {instituteData.contact.phoneFormatted}
              </a>
              <p className="text-[11px] text-[#94A3B8] mt-0.5">Instant parent assistance & batch queries</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-3 border-t border-[#1E293B]">
            <div className="w-9 h-9 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] mb-1">Visiting Hours</h4>
              <p className="text-xs text-[#CBD5E1]">{instituteData.timings.counselingHours}</p>
              <p className="text-[11px] text-[#94A3B8] mt-1">{instituteData.timings.note}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            href={instituteData.maps.directionsUrl}
            external
            icon={<ExternalLink className="w-4 h-4" />}
            iconPosition="right"
            className="flex-1"
          >
            Get Google Maps Directions
          </Button>

          <Button
            variant="whatsapp"
            href={instituteData.contact.whatsappHref}
            external
            icon={<MessageCircle className="w-4 h-4" />}
            className="flex-1"
          >
            WhatsApp Support
          </Button>
        </div>
      </div>

      {/* Map Embed or Verified Google Location Card */}
      <div className="lg:col-span-7 rounded-2xl bg-[#0E1624] border border-[#1E293B] overflow-hidden flex flex-col min-h-[380px]">
        {/* Map Header */}
        <div className="p-4 bg-[#0B131F] border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-semibold text-[#CBD5E1]">Google Maps Verified Place ID</span>
          </div>
          <span className="text-[11px] font-mono text-[#94A3B8]">ChIJC5tZtyfrDDkR2WHg2F06RR8</span>
        </div>

        {/* Map Interactive Frame */}
        <div className="relative w-full flex-1 min-h-[320px] bg-[#070C14]">
          <iframe
            title="Kinetix Classes Location Map"
            src="https://maps.google.com/maps?q=Kinetix%20Classes%20For%20Neet%20and%20Jee,%20I%20120%20Alpha%202%20Greater%20Noida%20201310&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 absolute inset-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-85 hover:opacity-100 transition-opacity"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Map Footer Anchor */}
        <div className="p-4 bg-[#0B131F] border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00E5C8]" />
            Official Google Business Profile
          </span>
          <a
            href={instituteData.maps.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5C8] hover:underline font-semibold flex items-center gap-1"
          >
            Open in Google Maps <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

