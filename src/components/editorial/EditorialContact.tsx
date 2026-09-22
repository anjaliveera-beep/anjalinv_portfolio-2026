import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { AlertCircle, ArrowUpRight, Calendar, CheckCircle2, ExternalLink, Linkedin, Mail, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface EditorialContactProps {
  onOpenBooking: () => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const EditorialContact: React.FC<EditorialContactProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Executive Leadership / Engineering Management',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string): string => {
    const trimmed = (value || '').trim();
    if (field === 'name') {
      if (!trimmed) return 'Full name is required.';
      if (trimmed.length < 2) return 'Please enter at least 2 characters.';
      if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Please enter a valid name using letters.';
    }
    if (field === 'email') {
      if (!trimmed) return 'Email address is required.';
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(trimmed)) {
        return 'Please enter a valid email address (e.g. name@company.com).';
      }
    }
    if (field === 'message') {
      if (!trimmed) return 'A brief mandate or question is required.';
      if (trimmed.length < 10) return 'Please provide at least 10 characters with context for Anjali.';
    }
    return '';
  };

  const handleChange = (field: 'name' | 'email' | 'organization' | 'topic' | 'message', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    const nameErr = validateField('name', formData.name);
    if (nameErr) newErrors.name = nameErr;
    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;
    const msgErr = validateField('message', formData.message);
    if (msgErr) newErrors.message = msgErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto overflow-y-auto">
      
      {/* Seamless Section Flow Header */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D49354] mb-8 shrink-0"
      >
        <span className="w-8 h-px bg-[#D49354]"></span>
        <span className="uppercase">Inquiries & Executive Consultation</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start shrink-0 mb-10">
        
        {/* Left Column: Direct Outreach & Standing */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D49354] block">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] tracking-tight leading-[1.05]">
              Let&apos;s build something <br />
              <span className="italic font-normal text-[#D49354]">enduring.</span>
            </h2>
            <p className="text-xs sm:text-sm font-sans font-light text-[#D6D0C5] leading-relaxed pt-2">
              Available for Director of Engineering Management appointments, executive GenAI advisory, and keynotes on human-centered engineering resilience.
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-3 text-xs font-mono">
            <div className="hairline-b pb-3">
              <span className="text-[#FAF7F2]/70 uppercase tracking-widest block text-[10px] mb-1">
                DIRECT INQUIRY
              </span>
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Executive%20Consultation%20Inquiry`}
                  className="hover-line text-xs sm:text-sm text-[#FAF7F2] flex items-center gap-2 font-sans font-medium group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D49354]" />
                  <span>Send an email to her</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF7F2]/60 group-hover:text-[#D49354] transition-colors" />
                </a>
              </div>
            </div>

            <div className="hairline-b pb-3">
              <span className="text-[#FAF7F2]/70 uppercase tracking-widest block text-[10px] mb-1">
                PROFESSIONAL NETWORK
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line text-xs sm:text-sm text-[#FAF7F2] flex items-center gap-1.5 font-sans font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>linkedin.com/in/anjali-n-2b7009114</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF7F2]/60" />
              </a>
            </div>

            <div className="hairline-b pb-3">
              <span className="text-[#FAF7F2]/70 uppercase tracking-widest block text-[10px] mb-1">
                DIRECT 1:1 CALENDAR
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-sans text-[#FAF7F2]">
                  15-Min Executive Consultation
                </span>
                <button
                  onClick={onOpenBooking}
                  className="hover-line text-[#D49354] cursor-pointer font-mono text-xs"
                >
                  OPEN CALENDAR &rarr;
                </button>
              </div>
            </div>

            <div>
              <span className="text-[#FAF7F2]/70 uppercase tracking-widest block text-[10px] mb-1">
                TOPMATE ADVISORY
              </span>
              <a
                href={PERSONAL_INFO.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line text-xs sm:text-sm text-[#FAF7F2] flex items-center gap-1.5 font-sans font-medium"
              >
                <span>topmate.io/anjali_nayakanti_veera</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF7F2]/60" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Contact Form */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-7 bg-[#15171E] p-6 sm:p-10 rounded-xl border border-[#FAF7F2]/10 shadow-2xl"
        >
          {formSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#1D1F28] text-[#FAF7F2] flex items-center justify-center mx-auto border border-[#D49354]/40">
                <CheckCircle2 className="w-6 h-6 text-[#D49354]" />
              </div>
              <h3 className="font-serif text-2xl text-[#FAF7F2]">
                Message Received.
              </h3>
              <p className="text-xs sm:text-sm text-[#D6D0C5] font-sans font-light max-w-sm mx-auto">
                Thank you, {formData.name || 'colleague'}. Your note has been received directly. Anjali will review and respond within 24 business hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="hover-line text-xs font-mono text-[#D49354] uppercase tracking-wider pt-2 cursor-pointer"
              >
                Send Another Message &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D49354]">
                  DIRECT INQUIRY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
                  Executive Consultation Request
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/60">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full bg-[#1D1F28] border rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/30 focus:outline-none transition-colors ${
                      touched.name && errors.name
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-[#FAF7F2]/10 focus:border-[#D49354]'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/60">
                    DIRECT EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="e.g. eleanor@company.com"
                    className={`w-full bg-[#1D1F28] border rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/30 focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-[#FAF7F2]/10 focus:border-[#D49354]'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/60">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    placeholder="e.g. Enterprise or Studio"
                    className="w-full bg-[#1D1F28] border border-[#FAF7F2]/10 rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/30 focus:outline-none focus:border-[#D49354] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/60">
                    PRIMARY TOPIC
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => handleChange('topic', e.target.value)}
                    className="w-full bg-[#1D1F28] border border-[#FAF7F2]/10 rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D49354] transition-colors cursor-pointer"
                  >
                    <option value="Executive Leadership / Engineering Management">Director of Engineering Opportunity</option>
                    <option value="Enterprise GenAI & Architecture">Enterprise GenAI & Cloud Advisory</option>
                    <option value="Social Impact / Let's Fight Back">Let&apos;s Fight Back Partnership</option>
                    <option value="Keynote Speaking / Moderation">Keynote / Speaking Engagement</option>
                    <option value="1:1 Mentorship via Topmate">1:1 Mentorship Session</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/60">
                  BRIEF MANDATE OR QUESTION *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Describe your organizational context or the mandate you wish to explore..."
                  className={`w-full bg-[#1D1F28] border rounded p-3 text-xs sm:text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/30 focus:outline-none transition-colors resize-none ${
                    touched.message && errors.message
                      ? 'border-rose-500/80 focus:border-rose-500'
                      : 'border-[#FAF7F2]/10 focus:border-[#D49354]'
                  }`}
                />
                {touched.message && errors.message && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <span className="text-[10px] font-mono text-[#FAF7F2]/40">
                  DIRECT COMMUNICATION WITH ANJALI
                </span>

                <button
                  type="submit"
                  className="bg-[#D49354] hover:bg-[#B87333] text-[#0D0E12] font-semibold px-6 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>SEND INQUIRY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>

      {/* Footer Colophon */}
      <div className="hairline-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#FAF7F2]/40 shrink-0">
        <div>
          <span>&copy; {new Date().getFullYear()} ANJALI NAYAKANTI VEERA. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#D49354]">Toronto, Canada</span>
        </div>
      </div>

    </div>
  );
};
