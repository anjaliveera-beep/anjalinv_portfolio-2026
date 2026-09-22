import React, { useState } from 'react';
import { Sparkles, Heart, Cpu, Volume2, Shield, Compass, ArrowRight, Play, CheckCircle2, Award, Users, ChevronRight, Video, ExternalLink, Calendar, Gamepad2, Building2, Flame, Globe2 } from 'lucide-react';
import { PERSONAL_INFO, LEADERSHIP_IDEOLOGIES, WHAT_I_DO } from '../data/portfolioData';
import { DossierTab } from './ExecutiveDossierNav';
import { KineticShowcase } from './KineticShowcase';

interface UnicornIdeologiesOverviewProps {
  onOpenBooking: () => void;
  onNavigateTab: (tabId: DossierTab) => void;
  onOpenVideoModal?: () => void;
}

export const UnicornIdeologiesOverview: React.FC<UnicornIdeologiesOverviewProps> = ({
  onOpenBooking,
  onNavigateTab,
}) => {
  const [selectedIdeologyIndex, setSelectedIdeologyIndex] = useState<number>(0);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  const activeIdeology = LEADERSHIP_IDEOLOGIES[selectedIdeologyIndex];

  return (
    <div className="space-y-14 animate-fade-in">
      
      {/* 1. Kinetic Persona Matrix (Animated Interactive Dimension Switcher) */}
      <KineticShowcase onOpenBooking={onOpenBooking} onNavigateTab={onNavigateTab} />

      {/* 2. Unicorn Profile Summary: The 4 Quadrants of Uniqueness (Crisp & Scannable) */}
      <section className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              The Rare Intersection
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Four High-Intensity Disciplines. One Leader.
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              From bare-metal rendering loops to distributed enterprise cloud and grassroots tribal self-defense.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book 15m Kickoff</span>
            </button>
          </div>
        </div>

        {/* 4 Quadrants Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Game Dev Grit */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-serif font-bold text-lg group-hover:scale-105 transition-transform border border-blue-100">
                01
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Foundational Grit
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-950 mt-0.5">
                  Disney Game Developer
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shipped 200–300 mobile titles with strict 64MB memory limits and sub-16ms render loops. Pure bare-metal compute intuition.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
              <span>300 Titles Shipped</span>
              <button 
                onClick={() => onNavigateTab('trajectory')}
                className="text-[11px] underline hover:text-blue-800 cursor-pointer"
              >
                Timeline &rarr;
              </button>
            </div>
          </div>

          {/* Card 2: Enterprise Scale */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-400/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-serif font-bold text-lg group-hover:scale-105 transition-transform border border-emerald-100">
                02
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Enterprise Scale
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-950 mt-0.5">
                  Director of EM & Java Head
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directing multi-region squads of 125+ engineers across Canada, Georgia, and Brazil. 80+ AI/cloud solutions, 0 SLA breaches.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>125+ Eng &bull; 98% Ret.</span>
              <button 
                onClick={() => onNavigateTab('portfolio')}
                className="text-[11px] underline hover:text-emerald-900 cursor-pointer"
              >
                Cases &rarr;
              </button>
            </div>
          </div>

          {/* Card 3: Grassroots Changemaker */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-rose-400/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-serif font-bold text-lg group-hover:scale-105 transition-transform border border-rose-100">
                03
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Grassroots Force
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-950 mt-0.5">
                  Kickboxer & Founder
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Founded <em>Let's Fight Back</em>. Traveled to remote tribal hamlets (Bhimdongri, Malai Talao), teaching 5,000+ girls self-defense and legal rights.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-rose-600">
              <span>5,000+ Empowered</span>
              <button 
                onClick={() => onNavigateTab('social-impact')}
                className="text-[11px] underline hover:text-rose-800 cursor-pointer"
              >
                Grassroots &rarr;
              </button>
            </div>
          </div>

          {/* Card 4: Global Diplomatic Recognition */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-serif font-bold text-lg group-hover:scale-105 transition-transform border border-amber-100">
                04
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Global Standing
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-950 mt-0.5">
                  #2 Worldwide Leader
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ranked #2 Globally on the INvolve Future Women Leaders list (supported by YouTube), UN & YPF Canada fully funded youth delegate.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
              <span>UN &bull; INvolve #2</span>
              <button 
                onClick={() => onNavigateTab('honors')}
                className="text-[11px] underline hover:text-amber-900 cursor-pointer"
              >
                Honors &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Anjali's Leadership Ideologies & Operating Principles (Streamlined) */}
      <section id="ideologies" className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Operational Tenets
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            5 Leadership Ideologies
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Battle-tested mental models forged across 16 years — from production cutovers to rural village squares.
          </p>
        </div>

        {/* Interactive Ideology Navigation Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6 pb-4 border-b border-slate-100">
          {LEADERSHIP_IDEOLOGIES.map((item, index) => {
            const isSelected = selectedIdeologyIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIdeologyIndex(index)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-slate-950'
                    : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                    {item.number}
                  </span>
                  {item.iconType === 'heart' && <Heart className={`w-3.5 h-3.5 ${isSelected ? 'text-rose-400' : 'text-rose-500'}`} />}
                  {item.iconType === 'cpu' && <Cpu className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-400' : 'text-blue-500'}`} />}
                  {item.iconType === 'ear' && <Volume2 className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-amber-500'}`} />}
                  {item.iconType === 'shield' && <Shield className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-emerald-500'}`} />}
                  {item.iconType === 'compass' && <Compass className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-indigo-500'}`} />}
                </div>
                <strong className={`text-xs font-serif font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </strong>
              </button>
            );
          })}
        </div>

        {/* Active Ideology Showcase */}
        {(() => {
          const isHero = !!activeIdeology.isHero;
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Main Statement & Narrative */}
              <div className={`${isHero ? 'lg:col-span-7' : 'lg:col-span-8'} space-y-4`}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Principle {activeIdeology.number}
                    </span>
                    {isHero && (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-300">
                        Signature Anchor
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-medium">
                      {activeIdeology.tagline}
                    </span>
                  </div>
                  <h3 className={`font-serif font-bold text-slate-950 ${isHero ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    {activeIdeology.title}
                  </h3>
                </div>

                {/* Core Quote Box */}
                <div className={`p-4 sm:p-5 rounded-2xl bg-amber-50/60 border-l-4 border-amber-500 text-slate-800 font-serif italic leading-relaxed ${isHero ? 'text-lg sm:text-xl' : 'text-base'}`}>
                  &ldquo;{activeIdeology.quote}&rdquo;
                </div>

                {/* Deep Dive Context */}
                {activeIdeology.deepDive && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {activeIdeology.deepDive}
                  </p>
                )}
              </div>

              {/* Operational Execution in Practice */}
              <div className={`${isHero ? 'lg:col-span-5' : 'lg:col-span-4'} space-y-4`}>
                {isHero ? (
                  <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <h4 className="font-serif text-sm font-bold">
                        Operational Governance
                      </h4>
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      {activeIdeology.operationalPractice}
                    </p>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-slate-700" />
                      <h4 className="font-serif text-xs font-bold uppercase tracking-wider">
                        Operational Guardrails
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeIdeology.operationalTags && activeIdeology.operationalTags.length > 0 ? (
                        activeIdeology.operationalTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-700">
                          {activeIdeology.operationalPractice}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Quick Navigation Prompt */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span>Looking for case studies?</span>
                  <button
                    onClick={() => onNavigateTab('portfolio')}
                    className="text-amber-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Enterprise Cases</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          );
        })()}
      </section>

      {/* 4. "What I Do & Executive Scope" (Direct, Crisp Mandates) */}
      <section className="space-y-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-2">
            <Users className="w-3.5 h-3.5 text-slate-700" />
            Areas of Focus
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Executive Scope & Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHAT_I_DO.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/85 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.deliverables.map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Action Banner to Book 15-Minute Session */}
      <section className="p-7 sm:p-9 rounded-3xl bg-slate-950 text-white shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-2.5">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Direct Access &bull; 15-Minute Kickoff
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Have a leadership challenge, AI initiative, or career crossroads?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            I host dedicated 15-minute introductory sessions for prospective teams, engineering managers seeking mentorship, and partners eager to collaborate.
          </p>
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Select Time Slot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={PERSONAL_INFO.topmate}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 flex items-center gap-2 transition-all"
            >
              <span>Topmate Advisory</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
