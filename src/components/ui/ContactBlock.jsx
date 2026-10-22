import React from 'react';
import { instituteData } from '../../data/institute';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const ContactBlock = () => {
  return (
    <div className="knx-grid-2" style={{ alignItems: 'stretch' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div>
          <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
            Visit Our Center
          </span>
          <h3 className="knx-h3" style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Centrally Located in Alpha 2, Greater Noida
          </h3>
          <p className="knx-body">
            Parents and students are welcome to visit during counseling hours to inspect our classrooms, meet teachers, and take the Scholarship Test.
          </p>
        </div>

        <div className="knx-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0, 229, 200, 0.1)', border: '1px solid rgba(0, 229, 200, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MapPin size={18} color="#00E5C8" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 2 }}>Campus Address</h4>
              <p className="knx-small" style={{ color: '#CBD5E1' }}>
                {instituteData.address.full}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #1E293B' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Phone size={18} color="#38BDF8" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 2 }}>Direct Helpline</h4>
              <a href={instituteData.contact.phoneHref} style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38BDF8' }}>
                {instituteData.contact.phoneFormatted}
              </a>
              <p className="knx-small" style={{ fontSize: '0.75rem' }}>Instant parent assistance & batch queries</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #1E293B' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={18} color="#F59E0B" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', marginBottom: 2 }}>Visiting Hours</h4>
              <p className="knx-small" style={{ color: '#CBD5E1' }}>{instituteData.timings.counselingHours}</p>
              <p className="knx-small" style={{ fontSize: '0.75rem' }}>{instituteData.timings.note}</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Button
            variant="primary"
            href={instituteData.maps.directionsUrl}
            external
            icon={<ExternalLink size={16} />}
            iconPosition="right"
          >
            Google Maps Directions
          </Button>

          <Button
            variant="whatsapp"
            href={instituteData.contact.whatsappHref}
            external
            icon={<MessageCircle size={16} />}
          >
            WhatsApp Support
          </Button>
        </div>
      </div>

      <div className="knx-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 380 }}>
        <div style={{ padding: '0.75rem 1rem', background: '#0B131F', borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span style={{ color: '#CBD5E1', fontWeight: 600 }}>Google Maps Verified Place ID</span>
          </div>
          <span style={{ fontFamily: 'monospace', color: '#94A3B8', fontSize: '0.75rem' }}>ChIJC5tZtyfrDDkR2WHg2F06RR8</span>
        </div>

        <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 320, background: '#070C14' }}>
          <iframe
            title="Kinetix Classes Location Map"
            src="https://maps.google.com/maps?q=Kinetix%20Classes%20For%20Neet%20and%20Jee,%20I%20120%20Alpha%202%20Greater%20Noida%20201310&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ width: '100%', height: '100%', border: 0, position: 'absolute', inset: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(125%)', opacity: 0.85 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div style={{ padding: '0.75rem 1rem', background: '#0B131F', borderTop: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={14} color="#00E5C8" />
            Official Google Business Profile
          </span>
          <a
            href={instituteData.maps.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00E5C8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
          >
            Open in Google Maps <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
