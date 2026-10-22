import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { instituteData } from '../../data/institute';
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer = ({ onOpenLMS }) => {
  return (
    <footer className="knx-footer">
      <Container size="xl">
        <div className="footer-grid">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: '#0B131F',
                border: '1px solid #1E293B',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img
                  src="/assets/logo/kinetix-logo-mark.svg"
                  alt="Kinetix Classes Logo Mark"
                  width="40"
                  height="40"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', lineHeight: 1 }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>KINETIX</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#00E5C8' }}>CLASSES</span>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 3 }}>
                  NEET • JEE • PCMB
                </span>
              </div>
            </Link>

            <p className="knx-small" style={{ maxWidth: '360px', lineHeight: 1.6 }}>
              Kinetix Classes at I-120, Alpha 2, Greater Noida is a premier science coaching institute for NEET, JEE Main & Advanced, and 11th–12th PCMB with experienced IITian & Doctor faculty and guaranteed small batch sizes.
            </p>

            <div>
              <span className="knx-badge badge-cyan">
                <ShieldCheck size={14} />
                Rated 5.0 on Google Reviews (10 Reviews)
              </span>
            </div>
          </div>

          {/* Academic Programs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 className="knx-h4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F8FAFC' }}>
              Target Programs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>NEET Medical Entrance (PCB)</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>IIT JEE Main & Advanced (PCM)</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>Class 12 Board Coaching (PCM / PCB)</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>Class 11 Foundation Coaching</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>Class 10 CBSE & ICSE Boards</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>Class 9 Science & Maths Foundation</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>NDA Defence Entrance Coaching</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 className="knx-h4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F8FAFC' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><Link to="/" style={{ color: '#94A3B8' }}>Home</Link></li>
              <li><Link to="/courses" style={{ color: '#94A3B8' }}>All Courses</Link></li>
              <li><Link to="/about" style={{ color: '#94A3B8' }}>About Institute</Link></li>
              <li><Link to="/faculty" style={{ color: '#94A3B8' }}>Faculty Mentors</Link></li>
              <li><Link to="/contact" style={{ color: '#94A3B8' }}>Admissions & Directions</Link></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLMS}
                  style={{ color: '#94A3B8', textAlign: 'left', fontSize: '0.85rem' }}
                >
                  Student Portal (LMS Shell)
                </button>
              </li>
              <li><Link to="/privacy-policy" style={{ color: '#94A3B8' }}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Campus Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 className="knx-h4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F8FAFC' }}>
              Campus Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#CBD5E1' }}>
                <MapPin size={16} color="#00E5C8" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>{instituteData.address.full}</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
                <a href={instituteData.contact.phoneHref} style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  {instituteData.contact.phoneFormatted}
                </a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={16} color="#25D366" style={{ flexShrink: 0 }} />
                <a
                  href={instituteData.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', fontWeight: 600 }}
                >
                  WhatsApp: +91 84480 40355
                </a>
              </p>
              <div style={{ paddingTop: '0.25rem' }}>
                <a
                  href={instituteData.maps.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#38BDF8', fontWeight: 600 }}
                >
                  <span>View on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Kinetix Classes. All verified content & assets authorized for rebuild.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Rebuilt with <Heart size={14} color="#00E5C8" fill="#00E5C8" /> for students & parents in Greater Noida.
          </p>
        </div>
      </Container>
    </footer>
  );
};
