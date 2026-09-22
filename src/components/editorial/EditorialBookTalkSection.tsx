import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, ArrowUpRight, CheckCircle2, Globe2, Sparkles, User, Mail, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface EditorialBookTalkSectionProps {
  onOpenBooking: () => void;
}

export const EditorialBookTalkSection: React.FC<EditorialBookTalkSectionProps> = ({
  onOpenBooking,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('executive-em');

  const topics = [
    {
      id: 'executive-em',
      title: 'Director of Engineering Management',
      duration: '15 Min Initial / 30 Min Advisory',
      description: 'Discuss executive leadership opportunities, team scaling (50–160 engineers), psychological safety, and high-retention engineering culture.',
      badge: 'HIRING & LEADERSHIP',
    },
    {
      id: 'genai-architecture',
      title: 'Enterprise GenAI & Systems Scale',
      duration: '30 Min Deep Dive',
      description: 'Advisory on deploying deterministic generative AI, LLM governance, sub-16ms low latency, and zero SLA breaches in enterprise environments.',
      badge: 'TECHNICAL ADVISORY',
    },
    {
      id: 'keynote-grassroots',
      title: 'Keynotes & Grassroots Impact',
      duration: '20 Min Discussion',
      description: 'Keynotes on human dignity in tech, female leadership (INvolve Global #2), and social impact through the Let\'s Fight Back NGO foundation.',
      badge: 'SPEAKING & INITIATIVES',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto py-16 sm:py-20 overflow-y-auto">
      {/* Eyebrow Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D49354] mb-6"
      >
        <span className="w-8 h-px bg-[#D49354]"></span>
        <span className="uppercase">Direct Executive Access &bull; Strategic Inquiries & 1:1 Calendar</span>
      </motion.div>

      {/* Monumental Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 space-y-6"
        >
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#FAF7F2] leading-[1.05] tracking-tight">
            Strategic Inquiries & <br />
            <span className="italic font-normal text-[#D49354]">Executive Consultation.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D6D0C5] font-sans font-light leading-relaxed max-w-xl">
            Whether you are exploring a <strong className="text-[#FAF7F2] font-medium">Director of Engineering Management</strong> appointment, seeking technical advisory on enterprise <strong className="text-[#FAF7F2] font-medium">GenAI orchestration</strong>, or inviting Anjali for a keynote on human dignity in technology, select a 1:1 consultation window below.
          </p>

          {/* Quick Credibility Badges */}
          <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono text-[#D6D0C5]/80">
            <div className="p-3 bg-[#15171E] border border-[#FAF7F2]/10 rounded flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#D49354] shrink-0" />
              <span>125+ Engineers Led</span>
            </div>
            <div className="p-3 bg-[#15171E] border border-[#FAF7F2]/10 rounded flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-[#D49354] shrink-0" />
              <span>INvolve Global #2</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              data-cursor="BOOK"
              className="bg-[#D49354] hover:bg-[#E2A66B] text-[#0D0E12] px-8 py-4 text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-[0_0_24px_rgba(212,147,84,0.3)] hover:shadow-[0_0_36px_rgba(212,147,84,0.5)] rounded-full"
            >
              <Calendar className="w-4 h-4" />
              <span>Select Date & Time</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Executive%20Consultation%20Inquiry`}
              className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#FAF7F2] hover:text-[#D49354] transition-colors border border-[#FAF7F2]/15 hover:border-[#D49354]/60 rounded-full flex items-center gap-2"
            >
              <span>Send an email to her</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D49354]" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Interactive Calendar Booking Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 bg-[#15171E] border border-[#FAF7F2]/10 p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle warm ambient radial highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D49354]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 hairline-b">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D49354] block">
                  FAST APPOINTMENT
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
                  Direct 1:1 Executive Consultation
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#D49354]/10 border border-[#D49354]/30 rounded-full text-[11px] font-mono text-[#D49354]">
                <Clock className="w-3.5 h-3.5" />
                <span>15–30 Min</span>
              </div>
            </div>

            {/* Select Discussion Focus */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#FAF7F2]/60 block">
                Select Consultation Topic
              </label>
              <div className="space-y-2">
                {topics.map((t) => {
                  const isSelected = selectedTopic === t.id;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTopic(t.id)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1D1F28] border-[#D49354] shadow-[0_0_16px_rgba(212,147,84,0.15)]'
                          : 'bg-[#101116] border-[#FAF7F2]/10 hover:border-[#FAF7F2]/25'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans font-medium text-sm text-[#FAF7F2]">
                          {t.title}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#D49354] bg-[#D49354]/10 px-2 py-0.5 rounded">
                          {t.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#D6D0C5]/70 font-light leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Launch Modal Action */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-[#D49354] to-[#C58342] hover:from-[#E2A66B] hover:to-[#D49354] text-[#0D0E12] p-4 text-xs sm:text-sm font-mono uppercase tracking-widest font-bold transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(212,147,84,0.25)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Calendar to Pick Time Slot &rarr;</span>
              </button>
              <p className="text-center text-[11px] font-mono text-[#FAF7F2]/40 mt-2.5">
                Instant confirmation &bull; Google Calendar + iCal invite generated automatically
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
