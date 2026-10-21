import React, { useState } from 'react';
import { X, MessageSquare, AlertCircle, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { FormField } from '../common/FormField';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: defaultCourse || 'NEET Medical Coaching',
    currentClass: 'Class 11th',
    message: '',
    honeypot: '', // bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide student or parent name.';
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean) {
      newErrors.phone = 'Mobile number is required.';
    } else if (phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Backend Honesty: Prepare pre-filled WhatsApp link
    const waText = encodeURIComponent(
      `*New Admission / Counseling Enquiry*\n` +
      `------------------------------------\n` +
      `*Student/Parent Name:* ${formData.name}\n` +
      `*Contact Phone:* ${formData.phone}\n` +
      `*Target Course:* ${formData.course}\n` +
      `*Current Class:* ${formData.currentClass}\n` +
      `*Query/Notes:* ${formData.message || 'Interested in batch timings, scholarship test & fee structure.'}\n` +
      `------------------------------------\n` +
      `_Sent from Kinetix Classes Website_`
    );

    const waUrl = `https://wa.me/91${instituteData.contact.phone}?text=${waText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Open WhatsApp in new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      course: defaultCourse || 'NEET Medical Coaching',
      currentClass: 'Class 11th',
      message: '',
      honeypot: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0E1624] border border-[#1E293B] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#0B131F] border-b border-[#1E293B] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00E5C8]/10 border border-[#00E5C8]/30 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-[#00E5C8]" />
            </div>
            <div>
              <h3 id="modal-headline" className="text-base font-bold text-[#F8FAFC]">
                Book Free Counseling & Scholarship
              </h3>
              <p className="text-[11px] text-[#94A3B8]">
                Kinetix Classes • I-120 Alpha 2, Greater Noida
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

        {/* Modal Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#10B981]" />
              </div>
              <h4 className="text-xl font-bold text-[#F8FAFC]">
                Inquiry Dispatch Prepared!
              </h4>
              <p className="text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                Your enquiry has been pre-formatted and forwarded to our official WhatsApp counseling line (<strong className="text-white">+91 84480 40355</strong>).
              </p>
              <div className="p-4 rounded-xl bg-[#070C14] border border-[#1E293B] text-xs text-left text-[#CBD5E1] space-y-1">
                <p><strong>Student:</strong> {formData.name}</p>
                <p><strong>Mobile:</strong> {formData.phone}</p>
                <p><strong>Program:</strong> {formData.course}</p>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="primary" size="md" onClick={handleReset} fullWidth>
                  Done / Close
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  href={instituteData.contact.phoneHref}
                  icon={<Phone className="w-4 h-4 text-[#38BDF8]" />}
                >
                  Call Directly: {instituteData.contact.phoneFormatted}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Backend Honesty Notice Banner */}
              <div className="p-3 rounded-xl bg-[#070C14] border border-[#1E293B] text-[11px] text-[#94A3B8] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#00E5C8] shrink-0 mt-0.5" />
                <span>
                  <strong>Zero-Wait Direct Dispatch:</strong> Submitting pre-fills your verified details into our official WhatsApp admission desk for immediate response with zero server lag.
                </span>
              </div>

              {/* Error Summary Banner */}
              {Object.keys(errors).length > 0 && (
                <div className="p-3 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/40 text-xs text-[#EF4444] space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Please correct the following errors:
                  </p>
                  <ul className="list-disc list-inside pl-1 space-y-0.5">
                    {Object.values(errors).map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Honeypot field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_bot_trap">Leave this blank</label>
                <input
                  id="website_bot_trap"
                  type="text"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <FormField
                id="modal-name"
                label="Student / Parent Full Name"
                placeholder="e.g. Rahul Sharma"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
              />

              <FormField
                id="modal-phone"
                label="WhatsApp / Calling Mobile Number"
                type="tel"
                placeholder="e.g. 9876543210"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
                helperText="We will send batch timings and fee concession details here."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormField
                  id="modal-course"
                  label="Target Program"
                  type="select"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  options={[
                    { value: 'NEET Medical Coaching', label: 'NEET Medical' },
                    { value: 'IIT JEE Main & Advanced', label: 'IIT JEE Main/Adv' },
                    { value: 'Class 12 PCB Coaching', label: 'Class 12 PCB' },
                    { value: 'Class 12 PCM Coaching', label: 'Class 12 PCM' },
                    { value: 'Class 11 PCM Coaching', label: 'Class 11 PCM' },
                    { value: 'Class 11 PCB Coaching', label: 'Class 11 PCB' },
                    { value: 'Class 10 Board Coaching', label: 'Class 10 Boards' },
                    { value: 'Class 9 Foundation Coaching', label: 'Class 9 Foundation' },
                    { value: 'NDA Defence Coaching', label: 'NDA Coaching' },
                    { value: 'CUET Preparation', label: 'CUET Prep' },
                  ]}
                />

                <FormField
                  id="modal-class"
                  label="Student Class"
                  type="select"
                  value={formData.currentClass}
                  onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                  options={[
                    { value: 'Class 9th', label: 'Class 9th' },
                    { value: 'Class 10th', label: 'Class 10th' },
                    { value: 'Class 11th', label: 'Class 11th' },
                    { value: 'Class 12th', label: 'Class 12th' },
                    { value: '12th Pass / Dropper', label: '12th Pass / Dropper' },
                  ]}
                />
              </div>

              <FormField
                id="modal-message"
                label="Additional Query / Scholarship Question (Optional)"
                type="textarea"
                rows={2}
                placeholder="Ask about batch timings, fee installments, or transport..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Formatting Dispatch...' : 'Send Inquiry via WhatsApp'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

