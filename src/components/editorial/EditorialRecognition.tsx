import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowUpRight, Award, Quote, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const EditorialRecognition: React.FC = () => {
  const accolades = [
    {
      year: '2025',
      body: 'INvolve Worldwide & YouTube',
      title: '#2 Future Leader Global Leadership Awardee',
      description: 'Ranked #2 internationally on the prestigious global leadership and diversity benchmark, recognized as a transformative executive and champion of equity.',
      link: 'https://www.involvepeople.org',
      label: 'INvolve Index'
    },
    {
      year: '2026',
      body: 'Canadian Women Empowerment Awards',
      title: 'National Leadership Nominee',
      description: 'Recognized for pioneering leadership at the intersection of enterprise engineering scale, generative AI, and grassroots female empowerment in Canada.',
      link: PERSONAL_INFO.linkedin,
      label: 'Nomination'
    },
    {
      year: '2024',
      body: 'United Nations & YPF Canada',
      title: 'Fully Funded Youth Delegate',
      description: 'Represented Canadian technology and youth empowerment leadership at international diplomatic symposia focused on UN Sustainable Development Goals.',
      link: PERSONAL_INFO.linkedin,
      label: 'Diplomacy'
    },
    {
      year: 'ONGOING',
      body: 'Topmate Mentorship Network',
      title: 'Top 1% Global Engineering Mentor',
      description: 'Conducting dedicated 1:1 advisory sessions for engineering managers, aspiring tech leads, and founders navigating complex organizational transitions.',
      link: PERSONAL_INFO.topmate,
      label: 'Advisory'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto overflow-y-auto">
      
      {/* Seamless Section Flow Header */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D49354] mb-8 shrink-0"
      >
        <span className="w-8 h-px bg-[#D49354]"></span>
        <span className="uppercase">Industry Recognition & Peer Endorsements</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8 shrink-0">
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-5 space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D49354] block">
            Executive Endorsements
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#FAF7F2] leading-[1.08] tracking-tight">
            Peer Validation & Leadership Impact
          </h2>

          {/* INvolve #2 Global Leader Badge with authentic Top 5 announcement card */}
          <div className="relative rounded-xl overflow-hidden border border-[#D49354]/40 bg-[#15171E] p-4 shadow-xl flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#D49354]/40 bg-[#0D0E12]">
              <img
                src="/assets/involve_top5.png"
                alt="INvolve Worldwide & YouTube Top 5 Heroes Future Leaders"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#D49354] uppercase tracking-wider block font-semibold">
                GLOBAL INVOLVE BENCHMARK
              </span>
              <h3 className="font-serif text-base text-[#FAF7F2] leading-snug">
                #2 Heroes Future Leader Worldwide
              </h3>
              <p className="text-[11px] text-[#D6D0C5] font-sans font-light">
                Supported by YouTube & INvolve Worldwide celebrating Anjali Nayakanti Veera and transformative global leaders.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Testimonial Quote in Monograph Form */}
        <motion.div
          variants={fadeInUp}
          data-cursor="QUOTE"
          className="lg:col-span-7 bg-[#15171E] p-6 sm:p-8 rounded-xl border border-[#FAF7F2]/10 space-y-4 shadow-xl"
        >
          <Quote className="w-6 h-6 text-[#D49354]" />
          <blockquote className="font-serif text-lg sm:text-xl italic text-[#FAF7F2] leading-relaxed">
            &ldquo;Anjali has successfully managed engineering teams ranging from 50 to 160 engineers with extraordinary humanity, empathy, and technical depth. Her ability to synthesize high-velocity technical outcomes with genuine psychological safety is singularly rare.&rdquo;
          </blockquote>
          
          <div className="hairline-t pt-3 flex items-center justify-between text-xs font-mono">
            <div>
              <strong className="text-[#FAF7F2] block font-sans font-semibold text-sm">
                Shanthikumar C.
              </strong>
              <span className="text-[#FAF7F2]/50 text-xs">
                Vice President Strategy & Architecture &bull; EPAM Systems
              </span>
            </div>
            <span className="text-[#D49354] hidden sm:inline uppercase text-[11px] font-semibold">
              EXECUTIVE ENDORSEMENT
            </span>
          </div>
        </motion.div>
      </div>

      {/* Ledger of Accolades */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-2 shrink-0"
      >
        {accolades.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="bg-[#15171E] border border-[#FAF7F2]/10 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#D49354]/50 transition-colors duration-300"
          >
            <div className="flex items-start md:items-baseline gap-4 sm:gap-6">
              <span className="font-mono text-xs text-[#D49354] font-semibold w-16 shrink-0">
                {item.year}
              </span>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#FAF7F2]/40 uppercase tracking-wider block">
                  {item.body}
                </span>
                <h4 className="font-serif text-lg text-[#FAF7F2]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#D6D0C5] font-sans font-light max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-line text-xs font-mono text-[#D49354] hover:text-[#FAF7F2] flex items-center gap-1 shrink-0 self-start md:self-center"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};
