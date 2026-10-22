import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { ContactBlock } from '../components/ui/ContactBlock';
import { FormField } from '../components/common/FormField';
import { Button } from '../components/common/Button';
import { instituteData } from '../data/institute';
import { Sparkles, MessageSquare, CheckCircle, AlertCircle, Phone, ArrowRight } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'NEET Medical Coaching',
    currentClass: 'Class 11th',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide student or parent name.';
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `*Admission / Counseling Enquiry*\n` +
      `------------------------------------\n` +
      `*Student/Parent Name:* ${formData.name}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Program Interested:* ${formData.course}\n` +
      `*Current Class:* ${formData.currentClass}\n` +
      `*Query / Message:* ${formData.message || 'I would like to inquire about batch dates and scholarships.'}\n` +
      `------------------------------------\n` +
      `_Sent from Kinetix Classes Contact Page_`
    );

    const waUrl = `https://wa.me/91${instituteData.contact.phone}?text=${waText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <main id="main-content" style={{ paddingTop: '72px' }}>
      <Section variant="deep" style={{ borderBottom: '1px solid #1E293B', padding: '3.5rem 0' }}>
        <Container size="xl">
          <div style={{ maxWidth: '720px' }}>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              Direct Admissions & Location
            </span>
            <h1 className="knx-h1" style={{ marginBottom: '1rem' }}>
              Contact & Visit Kinetix Classes
            </h1>
            <p className="knx-lead">
              We welcome prospective students and parents to our physical campus at I-120, Alpha 2, Greater Noida. Get in touch via call, WhatsApp, or the direct enquiry form below.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container size="xl">
          <div className="knx-grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
            <div className="knx-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(0, 229, 200, 0.1)', border: '1px solid rgba(0, 229, 200, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={20} color="#00E5C8" />
                </div>
                <div>
                  <h3 className="knx-h3" style={{ fontSize: '1.25rem' }}>Admissions & Scholarship Form</h3>
                  <p className="knx-small">Zero Server Lag: dispatches directly to the admissions desk via WhatsApp</p>
                </div>
              </div>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem', borderRadius: 16, background: '#0E1624', border: '1px solid #10B981', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <CheckCircle size={40} color="#10B981" />
                  <h4 className="knx-h3" style={{ fontSize: '1.25rem' }}>Enquiry Prepared!</h4>
                  <p className="knx-small">
                    Your details have been pre-filled and sent to our WhatsApp helpline (+91 84480 40355). Our counselor will assist you shortly.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>
                  <div style={{ padding: '0.75rem 1rem', borderRadius: 10, background: '#0E1624', border: '1px solid #1E293B', fontSize: '0.8rem', color: '#94A3B8', display: 'flex', gap: '0.5rem' }}>
                    <AlertCircle size={16} color="#00E5C8" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>
                      <strong style={{ color: '#FFFFFF' }}>Instant Counselor Connect:</strong> This form formats your inquiry directly into a WhatsApp message to our senior academic counselor for zero-latency response.
                    </span>
                  </div>

                  <input
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                  />

                  <FormField
                    id="contact-name"
                    label="Student or Parent Full Name"
                    placeholder="e.g. Amit Kumar"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={errors.name}
                  />

                  <FormField
                    id="contact-phone"
                    label="Mobile Number (10 Digits)"
                    type="tel"
                    placeholder="e.g. 9812345678"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    error={errors.phone}
                  />

                  <div className="knx-grid-2" style={{ gap: '0.75rem' }}>
                    <FormField
                      id="contact-course"
                      label="Target Program"
                      type="select"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      options={[
                        { value: 'NEET Medical Coaching', label: 'NEET Medical Coaching' },
                        { value: 'IIT JEE Main & Advanced', label: 'IIT JEE Main/Advanced' },
                        { value: 'Class 12 PCB Coaching', label: 'Class 12 PCB' },
                        { value: 'Class 12 PCM Coaching', label: 'Class 12 PCM' },
                        { value: 'Class 11 PCM Coaching', label: 'Class 11 PCM' },
                        { value: 'Class 11 PCB Coaching', label: 'Class 11 PCB' },
                        { value: 'Class 10 Board Coaching', label: 'Class 10 Board Coaching' },
                        { value: 'Class 9 Foundation Coaching', label: 'Class 9 Foundation' },
                        { value: 'NDA Defence Coaching', label: 'NDA Coaching' },
                        { value: 'CUET Preparation', label: 'CUET Preparation' },
                      ]}
                    />

                    <FormField
                      id="contact-class"
                      label="Current Class"
                      type="select"
                      value={formData.currentClass}
                      onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                      options={[
                        { value: 'Class 9th', label: 'Class 9th' },
                        { value: 'Class 10th', label: 'Class 10th' },
                        { value: 'Class 11th', label: 'Class 11th' },
                        { value: 'Class 12th', label: 'Class 12th' },
                        { value: '12th Pass / Dropper Batch', label: '12th Pass / Dropper Batch' },
                      ]}
                    />
                  </div>

                  <FormField
                    id="contact-message"
                    label="Your Question or Preferred Visiting Time (Optional)"
                    type="textarea"
                    rows={3}
                    placeholder="Let us know if you want to take the scholarship test or visit this Saturday..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Formatting Dispatch...' : 'Submit Inquiry via WhatsApp'}
                  </Button>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="knx-card" style={{ padding: '1.75rem' }}>
                <h4 className="knx-h4" style={{ marginBottom: '0.5rem' }}>Immediate Phone Assistance</h4>
                <p className="knx-small" style={{ marginBottom: '1.25rem' }}>
                  Call our direct center helpline during counseling hours to inquire about upcoming batch start dates, seat availability, or directions.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  href={instituteData.contact.phoneHref}
                  icon={<Phone size={18} color="#38BDF8" />}
                >
                  Call {instituteData.contact.phoneFormatted}
                </Button>
              </div>

              <div className="knx-card" style={{ padding: '1.75rem' }}>
                <h4 className="knx-h4" style={{ marginBottom: '0.5rem' }}>Counseling Visiting Hours</h4>
                <p className="knx-small" style={{ color: '#CBD5E1', marginBottom: '0.25rem' }}>{instituteData.timings.counselingHours}</p>
                <p className="knx-small" style={{ fontSize: '0.75rem' }}>{instituteData.timings.note}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="deep">
        <Container size="xl">
          <ContactBlock />
        </Container>
      </Section>
    </main>
  );
};
