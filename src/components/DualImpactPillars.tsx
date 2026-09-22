import React, { useState } from 'react';
import { Cpu, Heart, ArrowRight, Shield, Layers, Users, Zap, CheckCircle2, Globe, Building2, Terminal } from 'lucide-react';

interface DualImpactPillarsProps {
  onOpenBooking: () => void;
}

export const DualImpactPillars: React.FC<DualImpactPillarsProps> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState<'both' | 'tech' | 'social'>('both');

  return (
    <section id="dual-impact" className="py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            The Dual Narrative
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            High-Scale Engineering meets Grassroots Humanity
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most leaders specialize strictly in corporate software or nonprofit advocacy. Anjali bridges both worlds — bringing the technical rigor of enterprise architecture into social justice, and the deep empathy of grassroots organizing into engineering delivery.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setActivePillar('both')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activePillar === 'both'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Unified View (The Synergy)
            </button>
            <button
              onClick={() => setActivePillar('tech')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activePillar === 'tech'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Pillar 1: Engineering & AI
            </button>
            <button
              onClick={() => setActivePillar('social')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activePillar === 'social'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Pillar 2: Let's Fight Back & UN
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Engineering Leadership & AI */}
          {(activePillar === 'both' || activePillar === 'tech') && (
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xs hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200">
                    <Cpu className="w-6 h-6 text-slate-800" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Pillar I &bull; 16 Years
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-3">
                  Engineering Management & GenAI Incubation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Executive delivery leadership across Apply, EPAM Systems, Thomson Reuters, Metrolinx, BlackRock, and Disney. Managing 125+ engineers, deploying cloud-native architectures, and institutionalizing DevOps governance.
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">GenAI Incubation Lead (EPAM NA):</strong> Delivered 80+ AI use cases expanding from 48 pilot projects with 0 SLA violations.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Google Vertex AI at Metrolinx:</strong> Delivered public transit voice assistant yielding +45% CSAT boost and 35% query speedup.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Enterprise MDM & Zero-Downtime Releases:</strong> Led multi-region squads at Thomson Reuters, reducing production hotfixes by 40%.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Disney 200–300 Games Shipped:</strong> Built real-time physics and animation systems under extreme memory and frame constraints.
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {['Java 8-17', 'Spring Boot', 'Vertex AI', 'AWS / Azure / GCP', 'Kafka', 'Microservices', 'Docker', 'MDM Architecture', 'CI/CD Playbooks'].map((tech, i) => (
                    <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Teams: 50 to 160 Engineers Globally</span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Discuss Tech Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Pillar 2: Social Entrepreneurship & Grassroots Action */}
          {(activePillar === 'both' || activePillar === 'social') && (
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xs hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Shield className="w-6 h-6 text-rose-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    Pillar II &bull; 10+ Years
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-3">
                  Let's Fight Back & Global Changemaking
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Founder of the grassroots movement <em>Let's Fight Back</em>. Trained kickboxer delivering physical self-defense, child sexual abuse prevention, and legal awareness across schools, workplaces, and remote tribal villages.
                </p>

                {/* Key Social Highlights */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">5,000+ Women & Girls Impacted:</strong> Hands-on self-defense kickboxing workshops teaching physical autonomy and psychological confidence.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Tribal Community Outreach:</strong> Conducted training in remote villages including Bhimdongri, Malai Talao, and Bhadanepada in partnership with Sakhya.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Global Recognition:</strong> Ranked #2 in INvolve Future Women Leaders 2025; Nominated for 2026 Women Empowerment Awards (WOEA).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">The Times of India Reporter:</strong> Authored 10+ investigative and opinion articles educating the public on women's legal rights.
                    </div>
                  </div>
                </div>

                {/* Outreach tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {['Self-Defense Kickboxing', 'Sakhya Women Guidance', 'Tribal Empowerment', 'UN SDG 5 & 10', 'EmpowerHER', 'SAEEG Lead (250+)', 'Legal Rights Literacy'].map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Impact: 5,000+ Girls &bull; 10+ Communities</span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Connect on Social Impact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* The Synergy Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                The Leadership Synergy
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Why Grassroots Activism Makes a Superior Engineering Director
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                In engineering organizations, high burnout and talent attrition occur when managers treat people as resource tickets. Anjali's work with tribal communities and martial arts taught her to read quiet cues, dismantle fear, and build deep psychological safety. The result: teams that execute with 90%+ retention through high-stakes cloud migrations and platform shifts.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book 15m Leadership Chat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-slate-400">
                Available for Executive Advisory & Mentorship
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
