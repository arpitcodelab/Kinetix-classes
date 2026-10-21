import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { instituteData } from '../../data/institute';
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLMS: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLMS }) => {
  return (
    <footer className="bg-[#05080E] border-t border-[#1E293B] pt-16 pb-24 sm:pb-16 text-[#94A3B8]">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]/60">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B131F] border border-[#1E293B] p-1 flex items-center justify-center shrink-0">
                <img
                  src="/assets/logo/kinetix-logo-mark.svg"
                  alt="Kinetix Classes Logo Mark"
                  className="w-full h-full object-contain"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-lg font-black tracking-wider text-white">KINETIX</span>
                  <span className="text-lg font-bold tracking-wider text-[#00E5C8]">CLASSES</span>
                </div>
                <span className="text-[10px] font-semibold text-[#94A3B8] tracking-widest uppercase mt-0.5">
                  NEET • JEE • PCMB
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Kinetix Classes at I-120, Alpha 2, Greater Noida is a premier science coaching institute for NEET, JEE Main & Advanced, and 11th–12th PCMB with experienced IITian & Doctor faculty and guaranteed small batch sizes.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#00E5C8] font-bold bg-[#00E5C8]/10 border border-[#00E5C8]/30 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Rated 5.0 on Google Reviews (10 Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-wider uppercase">
              Target Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  NEET Medical Entrance (PCB)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  IIT JEE Main & Advanced (PCM)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  Class 12 Board Coaching (PCM / PCB)
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  Class 11 Foundation Coaching
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  Class 10 CBSE & ICSE Boards
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  Class 9 Science & Maths Foundation
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  NDA Defence Entrance Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & LMS (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#00E5C8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#00E5C8] transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00E5C8] transition-colors">
                  About Institute
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-[#00E5C8] transition-colors">
                  Faculty Mentors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00E5C8] transition-colors">
                  Admissions & Directions
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLMS}
                  className="hover:text-[#00E5C8] transition-colors text-left"
                >
                  Student Portal (LMS Shell)
                </button>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#00E5C8] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-wider uppercase">
              Campus Details
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2 text-[#CBD5E1]">
                <MapPin className="w-4 h-4 text-[#00E5C8] shrink-0 mt-0.5" />
                <span>{instituteData.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={instituteData.contact.phoneHref}
                  className="text-white hover:text-[#00E5C8] font-bold"
                >
                  {instituteData.contact.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={instituteData.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-semibold"
                >
                  WhatsApp: +91 84480 40355
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={instituteData.maps.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#38BDF8] hover:text-[#00E5C8]"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>
            © {new Date().getFullYear()} Kinetix Classes. All verified content & assets authorized for rebuild.
          </p>

          <p className="flex items-center gap-1">
            Rebuilt with <Heart className="w-3.5 h-3.5 text-[#00E5C8] fill-[#00E5C8]" /> for students & parents in Greater Noida.
          </p>
        </div>
      </Container>
    </footer>
  );
};

