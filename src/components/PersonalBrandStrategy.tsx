import React, { useState } from 'react';
import { Sparkles, Shield, Cpu, Users, Target, ArrowRight, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { BRANDING_STRATEGY_ANALYSIS } from '../data/portfolioData';

interface PersonalBrandStrategyProps {
  onOpenBooking: () => void;
}

export const PersonalBrandStrategy: React.FC<PersonalBrandStrategyProps> = ({ onOpenBooking }) => {
  const [selectedAudience, setSelectedAudience] = useState<number>(0);

  return (
    <section id="ai-strategy" className="py-16 bg-slate-50/50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Personal Branding Strategy & Analysis
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Standing Out in the AI Era: The Strategic Moat
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            As artificial intelligence automates boilerplate coding, what makes an engineering leader genuinely irreplaceable? Here is the executive analysis of Anjali's unique strategic positioning.
          </p>
        </div>

        {/* The Core Strategic Thesis Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs mb-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-600 block mb-1">
              Executive Thesis
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
              &ldquo;In an era where synthetic code generation is becoming a utility commodity, the highest market premium shifts to leaders who possess deep architectural intuition, human orchestration, and authentic grassroots ethical stewardship.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* The 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {BRANDING_STRATEGY_ANALYSIS.pillars.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-lg transition-all group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-serif font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-950">
                  {item.pillar}
                </h3>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block mb-1">The Reality:</strong>
                  {item.whyItMatters}
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700">
                  <strong className="text-amber-700 block mb-1 font-semibold">Strategic Moat:</strong>
                  {item.strategicMoat}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-emerald-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{item.aiEraAdvantage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Fit Explorer: "How Anjali Brings Value To You" */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="border-b border-slate-100 pb-5 mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
              Interactive Fit Explorer
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
              How Does Anjali Deliver Immediate ROI For Your Goals?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select your perspective below to analyze the concrete value and engagement model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Audience Selectors */}
            <div className="lg:col-span-4 space-y-2">
              {BRANDING_STRATEGY_ANALYSIS.audienceFit.map((item, idx) => {
                const isSelected = selectedAudience === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedAudience(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-950 border-slate-950 text-white shadow-md'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`text-xs block font-normal ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                        {item.lookingFor}
                      </span>
                      <span className={`text-sm font-serif font-bold ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                        {item.audience}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-400' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Audience Analysis Details */}
            <div className="lg:col-span-8">
              {(() => {
                const current = BRANDING_STRATEGY_ANALYSIS.audienceFit[selectedAudience];
                return (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                        Focus: {current.lookingFor}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">
                        Tailored Value Proposition for {current.audience}
                      </h4>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 text-sm text-slate-700 leading-relaxed shadow-2xs">
                      <strong className="text-slate-950 block font-semibold mb-1">Delivered Outcome:</strong>
                      {current.valueProp}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                        <span className="font-semibold text-slate-950 block mb-0.5">Best Format:</span>
                        <span className="text-slate-600">15-min initial kickoff or 30-min strategy review</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                        <span className="font-semibold text-slate-950 block mb-0.5">Contact Method:</span>
                        <span className="text-slate-600">Direct Calendar Booking or Topmate Session</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Ready to explore synergies?</span>
                      <button
                        onClick={onOpenBooking}
                        className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                      >
                        <span>Schedule 15m Kickoff</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })()}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
