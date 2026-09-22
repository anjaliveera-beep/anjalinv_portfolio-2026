import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowUpRight, Check, Compass, Heart, Shield, Cpu, Volume2, Globe2, Quote, Award } from 'lucide-react';
import { LEADERSHIP_IDEOLOGIES, PERSONAL_INFO, TESTIMONIALS } from '../../data/portfolioData';

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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const EditorialAbout: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const operatingMetrics = [
    {
      value: "125+",
      metric: "ENGINEERS DIRECTED",
      context: "Multi-squad distributed org across Canada, Georgia & Brazil",
      focus: "Scale & Delivery Governance"
    },
    {
      value: "98%",
      metric: "TALENT RETENTION",
      context: "Sustained high morale with zero voluntary burnout attrition",
      focus: "Psychological Safety"
    },
    {
      value: "80+",
      metric: "ENTERPRISE AI CASES",
      context: "Multi-agent RAG & enterprise systems with 0 SLA violations",
      focus: "Google Vertex & Cloud AI"
    },
    {
      value: "5,000+",
      metric: "GIRLS EMPOWERED",
      context: "Martial arts kickboxing & legal literacy across 15+ hamlets",
      focus: "Let's Fight Back NGO"
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
        <span className="uppercase">Executive Profile & Leadership Architecture</span>
      </motion.div>

      {/* Main Narrative Split */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 shrink-0"
      >
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D49354] block">
            Executive Ethos
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] leading-[1.05] tracking-tight">
            Technology is empty without human dignity.
          </h2>
          <div className="w-12 h-[1px] bg-[#D49354]/60 my-4"></div>

          {/* Authentic Fellowship Feature Card */}
          <div className="hidden sm:flex items-center gap-3.5 bg-[#15171E] border border-[#FAF7F2]/10 rounded-xl p-3 max-w-md">
            <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0 border border-[#D49354]/30">
              <img
                src="/assets/sdg_canada.jpeg"
                alt="Anjali Nayakanti Veera at Young Professional Fellowship Canada & SDG Summit"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-[#D49354] uppercase tracking-wider block font-semibold">
                GLOBAL DIPLOMACY DELEGATE
              </span>
              <p className="font-serif text-sm text-[#FAF7F2] leading-snug">
                Young Professional Fellowship Canada
              </p>
              <p className="text-[11px] text-[#D6D0C5]/70 font-sans">
                UN Sustainable Development Goals & Leadership
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4 text-[#D6D0C5] font-sans font-light leading-relaxed text-sm sm:text-base">
          <p>
            Over a 16-year leadership trajectory across <strong className="font-medium text-[#FAF7F2]">TCS</strong>, <strong className="font-medium text-[#FAF7F2]">Verizon</strong>, <strong className="font-medium text-[#FAF7F2]">Wells Fargo</strong>, <strong className="font-medium text-[#FAF7F2]">EPAM Systems</strong>, and currently as Director of Engineering Management at <strong className="font-medium text-[#FAF7F2]">Apply Digital</strong>, I have orchestrated software delivery at extreme operating scale — from sub-16ms mobile game engines for Disney to mission-critical financial cores and production-grade Generative AI systems.
          </p>
          <p>
            Yet my foundational operating conviction remains: architectural patterns mean nothing if the humans implementing them are exhausted, intimidated, or afraid of failure. High-velocity engineering velocity is an output of psychological safety, ruthless clarity of scope, and an unwavering commitment to lifting others as we climb.
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#D49354] uppercase tracking-wider pt-1">
            &ldquo;We measure engineering not by lines written, but by the resilience of the humans who operate it.&rdquo;
          </p>
        </div>
      </motion.div>

      {/* Executive Scale & Operating Metrics Grid (Differentiated from Case Studies) */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4 shrink-0 mb-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hairline-b pb-3">
          <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
            Executive Operating Scale
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FAF7F2]/50">
            PROVEN ENGINEERING MANAGEMENT METRICS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {operatingMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-[#15171E] border border-[#FAF7F2]/10 p-5 rounded-lg flex flex-col justify-between space-y-3 hover:border-[#D49354]/50 transition-all duration-300 shadow-lg"
            >
              <div>
                <span className="font-mono text-xs text-[#D49354] uppercase tracking-wider block mb-1">
                  {item.metric}
                </span>
                <div className="font-display text-3xl sm:text-4xl text-[#FAF7F2] font-normal tracking-tight">
                  {item.value}
                </div>
              </div>

              <p className="text-xs text-[#D6D0C5]/80 leading-relaxed font-sans font-light">
                {item.context}
              </p>

              <div className="hairline-t pt-2.5 flex items-center justify-between text-[10px] font-mono text-[#FAF7F2]/60 uppercase tracking-wider">
                <span>{item.focus}</span>
                <span className="text-[#D49354]">&bull;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leadership Operating Principles */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4 shrink-0 mb-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hairline-b pb-3">
          <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
            Core Leadership Principles
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FAF7F2]/50">
            PROVEN PRACTICES FROM HIGH-SCALE ENGINEERING & GRASSROOTS IMPACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Leadership Pillar Selector */}
          <div className="lg:col-span-5 space-y-1.5">
            {LEADERSHIP_IDEOLOGIES.map((ideology, index) => {
              const isSelected = activePrinciple === index;
              return (
                <button
                  key={ideology.id}
                  onClick={() => setActivePrinciple(index)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded transition-all flex items-start justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1D1F28] text-[#FAF7F2] border-[#D49354] shadow-[0_0_16px_rgba(212,147,84,0.15)]'
                      : 'bg-[#15171E] border-[#FAF7F2]/10 hover:border-[#FAF7F2]/25 text-[#D6D0C5]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className={`text-[10px] font-mono tracking-widest uppercase block ${
                      isSelected ? 'text-[#D49354]' : 'text-[#FAF7F2]/40'
                    }`}>
                      LEADERSHIP PILLAR {ideology.number}
                    </span>
                    <span className="font-serif text-sm sm:text-base block text-[#FAF7F2]">
                      {ideology.title}
                    </span>
                  </div>
                  <span className={`font-mono text-xs mt-1 ${isSelected ? 'text-[#D49354]' : 'text-[#FAF7F2]/30'}`}>
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Pillar Deep Dive */}
          {(() => {
            const currentPillar = LEADERSHIP_IDEOLOGIES[activePrinciple];
            const isHero = !!currentPillar.isHero;

            return (
              <motion.div
                key={activePrinciple}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`lg:col-span-7 bg-[#15171E] rounded-lg border border-[#FAF7F2]/10 shadow-xl transition-all duration-300 ${
                  isHero
                    ? 'p-7 sm:p-9 space-y-6 border-[#D49354]/30 bg-gradient-to-br from-[#181A23] to-[#12141B]'
                    : 'p-6 sm:p-7 space-y-4 bg-[#15171E]'
                }`}
              >
                {/* Header Info */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#D49354]">
                      LEADERSHIP PILLAR {currentPillar.number} &bull; {currentPillar.tagline}
                    </span>
                    {isHero && (
                      <span className="hidden sm:inline-flex text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#D49354]/40 bg-[#D49354]/10 text-[#D49354]">
                        Signature Anchor
                      </span>
                    )}
                  </div>
                  <h4 className={`font-serif text-[#FAF7F2] ${isHero ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    {currentPillar.title}
                  </h4>
                </div>

                {/* Differentiated Content: Hero vs Supporting */}
                {isHero ? (
                  /* Hero Pillar: Full signature depth */
                  <div className="space-y-5">
                    <blockquote className="font-serif text-lg sm:text-xl italic text-[#FAF7F2] border-l-2 border-[#D49354] pl-4 sm:pl-5 leading-relaxed bg-[#FAF7F2]/[0.02] py-2 rounded-r">
                      &ldquo;{currentPillar.quote}&rdquo;
                    </blockquote>

                    <p className="text-xs sm:text-sm text-[#D6D0C5] font-sans font-light leading-relaxed">
                      {currentPillar.deepDive}
                    </p>

                    <div className="hairline-t pt-4 text-xs font-mono text-[#D6D0C5]/90 space-y-2">
                      <strong className="font-bold text-[#D49354] uppercase tracking-wider block text-[11px]">
                        Operational Application & Governance:
                      </strong>
                      <p className="font-sans text-xs text-[#D6D0C5] leading-relaxed">
                        {currentPillar.operationalPractice}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Supporting Pillar: Leaner, punchy quick-hit treatment */
                  <div className="space-y-4">
                    <blockquote className="font-serif text-base sm:text-lg italic text-[#FAF7F2] border-l-2 border-[#D49354]/60 pl-3.5 leading-relaxed">
                      &ldquo;{currentPillar.quote}&rdquo;
                    </blockquote>

                    {currentPillar.deepDive && (
                      <p className="text-xs text-[#D6D0C5]/90 font-sans font-light leading-relaxed">
                        {currentPillar.deepDive}
                      </p>
                    )}

                    <div className="hairline-t pt-3 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/40 block">
                        Operational Guardrails
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentPillar.operationalTags && currentPillar.operationalTags.length > 0 ? (
                          currentPillar.operationalTags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#1F222C] border border-[#FAF7F2]/10 text-[#FAF7F2]/90 hover:border-[#D49354]/40 transition-colors"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#1F222C] border border-[#FAF7F2]/10 text-[#FAF7F2]/90">
                            {currentPillar.operationalPractice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })()}
        </div>
      </motion.div>

      {/* Executive Social Proof & Verified Testimonials (Critical Trust Layer) */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4 shrink-0"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hairline-b pb-3">
          <div className="flex items-center gap-2">
            <Quote className="w-4 h-4 text-[#D49354]" />
            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2]">
              Executive Endorsements & Social Proof
            </h3>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FAF7F2]/50">
            THIRD-PARTY VALIDATION FROM EXECUTIVE PEERS & COMMUNITY LEADERS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#15171E] border border-[#FAF7F2]/10 p-5 rounded-lg flex flex-col justify-between space-y-4 hover:border-[#D49354]/40 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D49354] block">
                  {item.relationship}
                </span>
                <p className="text-xs sm:text-sm text-[#D6D0C5] font-serif italic leading-relaxed">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="hairline-t pt-3 space-y-0.5">
                <div className="text-xs font-medium text-[#FAF7F2] font-sans">
                  {item.author}
                </div>
                <div className="text-[11px] text-[#FAF7F2]/50 font-mono">
                  {item.role}, {item.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};
