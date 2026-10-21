import React, { useEffect } from 'react';
import { X, GraduationCap, BookOpen, Clock, FileCheck2, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface LMSPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const LMSPreviewModal: React.FC<LMSPreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lms-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#0E1624] border border-[#00E5C8]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#0B131F] border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00E5C8]/10 border border-[#00E5C8]/30 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-[#00E5C8]" />
            </div>
            <div>
              <h3 id="lms-modal-title" className="text-base font-bold text-[#F8FAFC]">
                Kinetix Student & Parent Portal (LMS)
              </h3>
              <p className="text-[11px] text-[#00E5C8] font-semibold">
                Stage B Architecture Module Preview
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-2xl bg-[#070C14] border border-[#1E293B] flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                LMS Module Ready for Deployment
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                The public Stage A build is completely decoupled from the Stage B student portal. When Stage B is activated, enrolled students will log in here to access test analytics, recordings, and assignments.
              </p>
            </div>
          </div>

          {/* Planned LMS Features */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">
              Upcoming Student Dashboard Features:
            </h5>

            <div className="grid grid-cols-2 gap-2 text-xs text-[#94A3B8]">
              <div className="p-2.5 rounded-xl bg-[#0B131F] border border-[#1E293B] flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#00E5C8]" />
                <span>Online OMR Tests</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B131F] border border-[#1E293B] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                <span>Digital Study Notes</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B131F] border border-[#1E293B] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>Attendance Tracking</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B131F] border border-[#1E293B] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
                <span>Parent Progress Cards</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Enquire for Offline Admissions
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} fullWidth>
              Close Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

