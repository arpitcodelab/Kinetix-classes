import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { ContactBlock } from '../components/ui/ContactBlock';
import { FormField } from '../components/common/FormField';
import { Button } from '../components/common/Button';
import { instituteData } from '../data/institute';
import { Sparkles, MessageSquare, CheckCircle, AlertCircle, Phone, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'NEET Medical Coaching',
    currentClass: 'Class 11th',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide student or parent name.';
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
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
    <main id="main-content" className="pt-28 pb-20">
      {/* Header */}
      <Section variant="deep" className="pt-12 pb-16 border-b border-[#1E293B]">
        <Container size="xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#00E5C8] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Admissions & Location</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-4">
              Contact & Visit Kinetix Classes
            </h1>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              We welcome prospective students and parents to our physical campus at I-120, Alpha 2, Greater Noida. Get in touch via call, WhatsApp, or the direct enquiry form below.
            </p>
          </div>
        </Container>
      </Section>

      {/* Embedded Form & Fast Contact Card */}
      <Section variant="surface">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#070C14] border border-[#1E293B] p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00E5C8]/10 border border-[#00E5C8]/30 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#00E5C8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Admissions & Scholarship Form</h3>
                  <p className="text-xs text-[#94A3B8]">Direct WhatsApp dispatch to our senior counselor desk</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-[#0E1624] border border-[#10B981]">
                  <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto" />
                  <h4 className="text-xl font-bold text-white">Enquiry Prepared!</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Your details have been pre-filled and sent to our WhatsApp helpline (+91 84480 40355). Our counselor will assist you shortly.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Backend Honesty Notice */}
                  <div className="p-3.5 rounded-xl bg-[#0E1624] border border-[#1E293B] text-xs text-[#94A3B8] flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#00E5C8] shrink-0 mt-0.5" />
                    <span>
                      <strong>Instant Counselor Connect:</strong> This form formats your inquiry directly into a WhatsApp message to our senior academic counselor for zero-latency response.
                    </span>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                    />
                  </div>

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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      {isSubmitting ? 'Formatting Dispatch...' : 'Submit Inquiry via WhatsApp'}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Helpline Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-[#070C14] border border-[#1E293B] space-y-4">
                <h4 className="text-lg font-bold text-white mb-2">Immediate Phone Assistance</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Call our direct center helpline during counseling hours to inquire about upcoming batch start dates, seat availability, or directions.
                </p>
                <div className="pt-2">
                  <Button
                    variant="phone"
                    size="lg"
                    fullWidth
                    href={instituteData.contact.phoneHref}
                    icon={<Phone className="w-5 h-5" />}
                  >
                    Call {instituteData.contact.phoneFormatted}
                  </Button>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#070C14] border border-[#1E293B] space-y-3">
                <h4 className="text-base font-bold text-white">Counseling Visiting Hours</h4>
                <p className="text-xs text-[#CBD5E1]">{instituteData.timings.counselingHours}</p>
                <p className="text-[11px] text-[#94A3B8]">{instituteData.timings.note}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Block */}
      <Section variant="deep">
        <Container size="xl">
          <ContactBlock />
        </Container>
      </Section>
    </main>
  );
};

