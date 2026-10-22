import React, { useState } from 'react';
import { X, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { FormField } from '../common/FormField';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';

export const LeadModal = ({
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
    honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean) {
      newErrors.phone = 'Valid 10-digit mobile number is required';
    } else if (phoneClean.length < 10) {
      newErrors.phone = 'Valid 10-digit mobile number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

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
      className="knx-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
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
            <MessageSquare size={18} color="#00E5C8" />
          </div>
          <div>
            <h3 id="modal-headline" className="knx-h3" style={{ fontSize: '1.15rem' }}>
              Book Free Counseling & Scholarship
            </h3>
            <p className="knx-small" style={{ color: '#94A3B8' }}>
              Kinetix Classes • I-120 Alpha 2, Greater Noida
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle size={28} color="#10B981" />
            </div>
            <h4 className="knx-h3" style={{ fontSize: '1.25rem' }}>
              Inquiry Dispatch Prepared!
            </h4>
            <p className="knx-small" style={{ maxWidth: '380px' }}>
              Your enquiry has been pre-formatted and forwarded to our official WhatsApp counseling line (<strong style={{ color: '#FFFFFF' }}>+91 84480 40355</strong>).
            </p>
            <div style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '12px',
              background: '#070C14',
              border: '1px solid #1E293B',
              fontSize: '0.85rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}>
              <p><strong>Student:</strong> {formData.name}</p>
              <p><strong>Mobile:</strong> {formData.phone}</p>
              <p><strong>Program:</strong> {formData.course}</p>
            </div>
            <Button variant="primary" size="md" onClick={handleReset} fullWidth>
              Done / Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>
            <input
              type="text"
              name="bot-field"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <FormField
              id="modal-name"
              label="Student or Parent Full Name"
              placeholder="e.g. Rahul Sharma"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
            />

            <FormField
              id="modal-phone"
              type="tel"
              label="Contact Mobile Number"
              placeholder="10-digit mobile number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={errors.phone}
              helperText="We will connect via Call or WhatsApp for demo scheduling."
            />

            <div className="knx-grid-2" style={{ gap: '0.75rem' }}>
              <FormField
                id="modal-course"
                type="select"
                label="Target Course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                options={[
                  { value: 'NEET Medical Coaching', label: 'NEET Medical (PCB)' },
                  { value: 'IIT JEE Coaching', label: 'IIT JEE (PCM)' },
                  { value: 'Class 12 PCB Coaching', label: 'Class 12 PCB Boards' },
                  { value: 'Class 12 PCM Coaching', label: 'Class 12 PCM Boards' },
                  { value: 'Class 11 Foundation', label: 'Class 11 Science' },
                  { value: 'Class 10 Board Coaching', label: 'Class 10 Boards' },
                  { value: 'Class 9 Foundation', label: 'Class 9 Foundation' },
                  { value: 'NDA Coaching Classes', label: 'NDA Defence' },
                ]}
              />

              <FormField
                id="modal-class"
                type="select"
                label="Current Class / Target"
                value={formData.currentClass}
                onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                options={[
                  { value: 'Class 9th', label: 'Class 9th' },
                  { value: 'Class 10th', label: 'Class 10th' },
                  { value: 'Class 11th', label: 'Class 11th' },
                  { value: 'Class 12th', label: 'Class 12th' },
                  { value: 'Dropper / Repeat Batch', label: '12th Pass / Dropper' },
                ]}
              />
            </div>

            <FormField
              id="modal-message"
              type="textarea"
              label="Any Specific Question? (Optional)"
              placeholder="Ask about batch timings, scholarship exam, or demo class..."
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                disabled={isSubmitting}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                {isSubmitting ? 'Formatting Dispatch...' : 'Send Inquiry via WhatsApp'}
              </Button>
              <p className="knx-small" style={{ fontSize: '0.75rem', textAlign: 'center' }}>
                Direct counseling line: <a href="tel:8448040355" style={{ color: '#00E5C8', fontWeight: 700 }}>+91 84480 40355</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
