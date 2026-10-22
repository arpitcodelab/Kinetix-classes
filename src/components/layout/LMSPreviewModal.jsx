import React, { useEffect } from 'react';
import { X, GraduationCap, BookOpen, Clock, FileCheck2, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const LMSPreviewModal = ({ isOpen, onClose, onOpenEnquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="knx-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lms-modal-title"
      onClick={onClose}
    >
      <div className="knx-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'rgba(0, 229, 200, 0.15)',
            border: '1px solid rgba(0, 229, 200, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <GraduationCap size={18} color="#00E5C8" />
          </div>
          <div>
            <h3 id="lms-modal-title" className="knx-h3" style={{ fontSize: '1.15rem' }}>
              Kinetix Student & Parent Portal
            </h3>
            <p className="knx-small" style={{ color: '#00E5C8', fontWeight: 600 }}>
              Stage B Architecture Module Preview
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{
            padding: '1rem',
            borderRadius: '12px',
            background: '#070C14',
            border: '1px solid #1E293B',
            display: 'flex',
            gap: '0.75rem'
          }}>
            <Lock size={20} color="#38BDF8" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                LMS Module Ready for Deployment
              </h4>
              <p className="knx-small" style={{ lineHeight: 1.5 }}>
                The public Stage A build is completely decoupled from the Stage B student portal. When Stage B is activated, enrolled students will log in here to access test analytics, recordings, and assignments.
              </p>
            </div>
          </div>

          <div>
            <h5 className="knx-eyebrow" style={{ marginBottom: '0.75rem', fontSize: '0.72rem' }}>
              Planned Student Dashboard Features:
            </h5>

            <div className="knx-grid-2" style={{ gap: '0.75rem' }}>
              <div style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', background: '#0D1522', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                <FileCheck2 size={16} color="#00E5C8" />
                <span>Online OMR Tests</span>
              </div>
              <div style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', background: '#0D1522', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                <BookOpen size={16} color="#38BDF8" />
                <span>Digital Study Notes</span>
              </div>
              <div style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', background: '#0D1522', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                <Clock size={16} color="#F59E0B" />
                <span>Attendance Tracking</span>
              </div>
              <div style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', background: '#0D1522', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                <GraduationCap size={16} color="#8B5CF6" />
                <span>Parent Progress Cards</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Enquire for Offline Admissions
            </Button>
            <Button variant="outline" size="sm" onClick={onClose} fullWidth>
              Close Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
