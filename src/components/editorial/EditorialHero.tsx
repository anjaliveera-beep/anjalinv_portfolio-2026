import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface EditorialHeroProps {
  onOpenBooking: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto overflow-y-auto">
      
      {/* Top Header Index Metadata */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#FAF7F2]/60 hairline-b pb-4 shrink-0"
      >
        <div className="flex items-center gap-4">
          <span className="text-[#D49354] font-semibold">EXECUTIVE DOSSIER</span>
          <span className="text-[#FAF7F2]/20">/</span>
          <span>DIRECTOR OF ENGINEERING MANAGEMENT</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-line text-[#FAF7F2] font-medium flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D49354]" />
          </a>
          <span className="hidden sm:inline text-[#FAF7F2]/20">/</span>
          <span className="hidden sm:inline text-[#D49354]">#2 FUTURE LEADER GLOBAL LEADERSHIP AWARDEE</span>
        </div>
      </motion.div>

      {/* Monumental Editorial Headline & Visual Profile */}
      <div className="my-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-5"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D49354]">
                Engineering Leadership &bull; Grassroots Changemaker
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF7F2] leading-[1.0]">
              Anjali Nayakanti <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#D49354]">Veera.</span>
            </h1>

            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#FAF7F2]/90 font-normal leading-snug tracking-tight max-w-3xl pt-1">
              Engineering at massive scale. Dignity at the grassroots.
            </p>

            <div className="max-w-2xl pt-1">
              <p className="text-xs sm:text-sm md:text-base text-[#D6D0C5] leading-relaxed font-sans font-light">
                A distinguished 16-year career trajectory across <strong className="font-medium text-[#FAF7F2]">TCS</strong>, <strong className="font-medium text-[#FAF7F2]">Verizon</strong>, <strong className="font-medium text-[#FAF7F2]">Wells Fargo</strong>, <strong className="font-medium text-[#FAF7F2]">EPAM Systems</strong>, and currently directing engineering at <strong className="font-medium text-[#FAF7F2]">Apply Digital</strong> — from low-latency systems and mission-critical financial cores to enterprise cloud & GenAI organizations, while empowering <strong className="font-medium text-[#FAF7F2]">5,000+ girls</strong> through the <em className="italic text-[#D49354]">Let&apos;s Fight Back</em> grassroots movement.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Executive Portrait Frame with Anjali Nayakanti Veera */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D49354]/40 bg-[#15171E] shadow-2xl p-2.5 group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#0D0E12]">
                <img
                  src="/assets/anjali_executive_portrait.png"
                  alt="Anjali Nayakanti Veera — Director of Engineering Management"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top contrast-[1.02] group-hover:contrast-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left">
                  <span className="text-[10px] font-mono text-[#D49354] uppercase tracking-wider block font-semibold">
                    EXECUTIVE LEADERSHIP
                  </span>
                  <p className="text-sm font-serif text-[#FAF7F2] font-medium leading-tight mt-0.5">
                    Anjali Nayakanti Veera
                  </p>
                  <p className="text-[11px] font-mono text-[#FAF7F2]/60 mt-0.5">
                    Director of Engineering Management &bull; Toronto, Canada
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Editorial Grid Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
        className="hairline-t pt-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-xs shrink-0"
      >
        <div>
          <span className="font-mono uppercase tracking-widest text-[#FAF7F2]/70 block text-[10px]">
            01 / STANDING
          </span>
          <span className="font-serif text-base sm:text-lg text-[#FAF7F2] block mt-1">
            Director of EM
          </span>
          <span className="text-[#D6D0C5]/90 text-[11px] font-sans block mt-0.5">
            Apply Digital &bull; 125+ Eng
          </span>
        </div>

        <div>
          <span className="font-mono uppercase tracking-widest text-[#FAF7F2]/70 block text-[10px]">
            02 / GLOBAL RANK
          </span>
          <span className="font-serif text-base sm:text-lg text-[#FAF7F2] block mt-1">
            #2 Worldwide
          </span>
          <span className="text-[#D6D0C5]/90 text-[11px] font-sans block mt-0.5">
            Future Leader Global Awardee
          </span>
        </div>

        <div>
          <span className="font-mono uppercase tracking-widest text-[#FAF7F2]/70 block text-[10px]">
            03 / GRASSROOTS
          </span>
          <span className="font-serif text-base sm:text-lg text-[#FAF7F2] block mt-1">
            5,000+ Girls
          </span>
          <span className="text-[#D6D0C5]/90 text-[11px] font-sans block mt-0.5">
            Let&apos;s Fight Back NGO
          </span>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <span className="font-mono uppercase tracking-widest text-[#FAF7F2]/70 block text-[10px]">
            DIRECT ACCESS
          </span>
          <button
            onClick={onOpenBooking}
            className="hover-line text-xs sm:text-sm font-medium text-[#FAF7F2] hover:text-[#D49354] transition-colors flex items-center gap-1.5 mt-1 cursor-pointer"
          >
            <span className="text-[#D49354] font-semibold">Schedule Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D49354]" />
          </button>
        </div>
      </motion.div>

    </div>
  );
};
