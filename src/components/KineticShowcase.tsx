import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Shield, Cpu, Trophy, Globe2, ArrowRight, 
  Linkedin, ExternalLink, Calendar, CheckCircle2, Zap, 
  Activity, Users, Award, Play 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface KineticShowcaseProps {
  onOpenBooking: () => void;
  onNavigateTab: (tabId: any) => void;
}

interface PersonaDimension {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  headline: string;
  coreMetrics: { label: string; value: string; unit: string; percentage: number }[];
  keyHighlights: string[];
  quote: string;
  verifiedReference: { title: string; url: string; org: string };
  colorScheme: {
    accent: string;
    bgGlow: string;
    pillBg: string;
    ringColor: string;
  };
}

export const KineticShowcase: React.FC<KineticShowcaseProps> = ({ onOpenBooking, onNavigateTab }) => {
  const dimensions: PersonaDimension[] = [
    {
      id: 'director',
      title: 'Engineering Director',
      badge: 'Scale & Concurrency',
      badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
      tagline: '16 Years • 125+ Engineers • 0 SLA Breaches',
      headline: 'Architecting resilient cloud ecosystems and high-trust engineering teams.',
      coreMetrics: [
        { label: 'Engineering Retention', value: '98', unit: '%', percentage: 98 },
        { label: 'Cloud Availability', value: '99.99', unit: '%', percentage: 99.99 },
        { label: 'Disney Games Shipped', value: '300', unit: '+', percentage: 90 },
      ],
      keyHighlights: [
        'Directing 125+ engineers across North America, LATAM, and EMEA',
        'Bare-metal concurrency intuition from 200–300 low-latency Disney titles',
        'Proven delivery across Disney, TCS, Verizon, Wells Fargo, EPAM, and Apply'
      ],
      quote: "High-performing engineering squads thrive on crisp architectural clarity, ruthless prioritization, and psychological safety.",
      verifiedReference: {
        title: 'LinkedIn Verified Profile',
        url: PERSONAL_INFO.linkedin,
        org: 'Director of Engineering Management'
      },
      colorScheme: {
        accent: '#F59E0B',
        bgGlow: 'from-amber-500/10 via-slate-900/40 to-transparent',
        pillBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
        ringColor: '#F59E0B'
      }
    },
    {
      id: 'kickboxer',
      title: 'Kickboxer & Changemaker',
      badge: 'Grassroots Force',
      badgeColor: 'text-rose-400 border-rose-500/40 bg-rose-950/40',
      tagline: '5,000+ Girls • Let\'s Fight Back Founder',
      headline: 'Transforming vulnerability into unyielding strength on and off the mat.',
      coreMetrics: [
        { label: 'Girls Trained in Self-Defense', value: '5,000', unit: '+', percentage: 95 },
        { label: 'Years of Grassroots Activism', value: '10', unit: '+', percentage: 85 },
        { label: 'Tribal Hamlets Reached', value: '15', unit: '+', percentage: 75 },
      ],
      keyHighlights: [
        'Trained martial arts kickboxer delivering free grassroots workshops',
        'Direct outreach in remote tribal villages (Bhimdongri, Malai Talao)',
        'Legal rights, bodily autonomy, and anti-abuse awareness campaigns'
      ],
      quote: "Getting hit in kickboxing is inevitable; what defines you is your footwork, balance, and quickness to reset.",
      verifiedReference: {
        title: 'Let\'s Fight Back Initiative',
        url: 'https://letsfightback.org',
        org: 'Grassroots Women\'s Empowerment'
      },
      colorScheme: {
        accent: '#F43F5E',
        bgGlow: 'from-rose-500/10 via-slate-900/40 to-transparent',
        pillBg: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
        ringColor: '#F43F5E'
      }
    },
    {
      id: 'genai',
      title: 'GenAI & Cloud Innovator',
      badge: 'Modern Frontier',
      badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/40',
      tagline: '80+ Enterprise AI Cases • 45% CSAT Boost',
      headline: 'Bridging bleeding-edge generative AI models into enterprise reliability.',
      coreMetrics: [
        { label: 'AI Cases Shipped', value: '80', unit: '+', percentage: 92 },
        { label: 'Customer Satisfaction Boost', value: '45', unit: '%', percentage: 85 },
        { label: 'Agentic Latency Drop', value: '62', unit: '%', percentage: 78 },
      ],
      keyHighlights: [
        'Enterprise RAG & multi-agent orchestration on Vertex AI and GCP',
        'Responsible AI governance, hallucinations mitigation, and ethical guardrails',
        'Modernizing legacy architectures into cloud-native microservices'
      ],
      quote: "In the AI era, anyone can generate code; the rare superpower is knowing what to build, how to scale it safely, and maintaining human agency.",
      verifiedReference: {
        title: 'Topmate AI & EM Advisory',
        url: PERSONAL_INFO.topmate,
        org: '1:1 Strategic Sessions'
      },
      colorScheme: {
        accent: '#06B6D4',
        bgGlow: 'from-cyan-500/10 via-slate-900/40 to-transparent',
        pillBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
        ringColor: '#06B6D4'
      }
    },
    {
      id: 'global-leader',
      title: 'Global Civic Leader',
      badge: 'Worldwide Accolade',
      badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40',
      tagline: '#2 Globally (INvolve & YouTube) • UN Delegate',
      headline: 'Amplifying underrepresented voices on prestigious international stages.',
      coreMetrics: [
        { label: 'Global Ranking (INvolve)', value: '#2', unit: 'World', percentage: 99 },
        { label: 'UN SDG Mandates Activated', value: '4', unit: 'Goals', percentage: 80 },
        { label: 'Canadian Award Nomination', value: '2026', unit: 'Finalist', percentage: 90 },
      ],
      keyHighlights: [
        'Ranked #2 Globally on INvolve Future Women Leaders list (supported by YouTube)',
        'Fully funded delegate to United Nations & Young Professional Fellowship Canada',
        'Nominee for the 2026 Canadian Women Empowerment Awards'
      ],
      quote: "Community is all that we need, alongside the zeal to work together and leave an enduring footprint for future generations.",
      verifiedReference: {
        title: 'INvolve Global Leaders List',
        url: 'https://www.involvepeople.org',
        org: 'Supported by YouTube'
      },
      colorScheme: {
        accent: '#10B981',
        bgGlow: 'from-emerald-500/10 via-slate-900/40 to-transparent',
        pillBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
        ringColor: '#10B981'
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const current = dimensions[activeIndex];

  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl my-8">
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: current.colorScheme.accent }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: current.colorScheme.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-amber-400 border border-slate-800 mb-3">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Kinetic Persona Matrix
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Architecture of a <span className="italic text-amber-400 font-normal">Unicorn</span> Leader
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Interact with the four dimensions of Anjali's profile. Switch perspectives below to see the animated metrics, verified proof points, and operating ethos.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 15m Kickoff</span>
            </button>
          </div>
        </div>

        {/* Dimension Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 my-8">
          {dimensions.map((dim, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={dim.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white border-amber-500/60 shadow-lg ring-1 ring-amber-500/30'
                    : 'bg-slate-900/50 hover:bg-slate-900 text-slate-400 border-slate-800/80 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute inset-x-0 bottom-0 h-1 bg-amber-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${dim.badgeColor}`}>
                    {dim.badge}
                  </span>
                </div>
                <strong className={`text-xs sm:text-sm font-serif font-bold block ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {dim.title}
                </strong>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Box: Impact Narrative & Editorial */}
            <div className="lg:col-span-7 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${current.colorScheme.pillBg}`}>
                    {current.tagline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {current.headline}
                </h3>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 pt-2">
                  {current.keyHighlights.map((point, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Minimal Editorial Quote */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border-l-4 border-amber-500 border border-slate-800 text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </div>
              </div>

              {/* Verified Reference footer */}
              <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Verified Credential: <strong className="text-slate-200">{current.verifiedReference.org}</strong></span>
                </div>
                <a
                  href={current.verifiedReference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>{current.verifiedReference.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Box: Kinetic Metric Dials & Visualizer */}
            <div className="lg:col-span-5 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">
                    Live Impact Telemetry
                  </span>
                  <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
                </div>

                {/* Metric Bars & Rings */}
                <div className="space-y-6 my-6">
                  {current.coreMetrics.map((metric, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-slate-300 font-medium">
                          {metric.label}
                        </span>
                        <div className="font-serif text-2xl font-bold text-white flex items-baseline gap-0.5">
                          <span>{metric.value}</span>
                          <span className="text-xs font-sans text-amber-400">{metric.unit}</span>
                        </div>
                      </div>

                      {/* Animated Progress Track */}
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.percentage}%` }}
                          transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action within the card */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-white block">Ready to discuss strategic fit?</span>
                  <span className="text-slate-400">15-minute introductory kickoff</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
