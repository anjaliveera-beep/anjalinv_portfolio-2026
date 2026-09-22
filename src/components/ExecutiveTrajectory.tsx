import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Building2, TrendingUp, Layers, Zap } from 'lucide-react';
import { CAREER_MILESTONES } from '../data/portfolioData';

export const ExecutiveTrajectory: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);
  const activeMilestone = CAREER_MILESTONES[selectedMilestoneIndex];

  const handleNext = () => {
    setSelectedMilestoneIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handlePrev = () => {
    setSelectedMilestoneIndex((prev) => (prev < CAREER_MILESTONES.length - 1 ? prev + 1 : prev));
  };

  // Chronological order (from 2008 Disney to 2025 Apply)
  const chronologicalList = [...CAREER_MILESTONES].reverse();

  return (
    <section id="trajectory" className="py-12 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 mb-2">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            Interactive 16-Year Timeline
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Career Trajectory & Milestones
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            From low-level systems programming (Disney 300 games) through financial enterprise architectures to leading 125+ engineers globally.
          </p>
        </div>

        {/* Visual Horizontal Interactive Timeline Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-slate-400 font-sans">
              Select any era to inspect:
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>2008</span>
              <div className="w-8 h-[2px] bg-amber-500"></div>
              <span>2026+</span>
            </div>
          </div>

          {/* Timeline Nodes Track */}
          <div className="relative pt-4 pb-2">
            {/* Background connecting bar */}
            <div className="hidden sm:block absolute top-[36px] left-8 right-8 h-[2px] bg-slate-200 z-0"></div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-2 relative z-10">
              {chronologicalList.map((item) => {
                const realIndex = CAREER_MILESTONES.findIndex((m) => m.id === item.id);
                const isSelected = selectedMilestoneIndex === realIndex;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedMilestoneIndex(realIndex)}
                    className={`text-center p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center group relative ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md -translate-y-1 ring-1 ring-slate-950'
                        : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-600 shadow-2xs'
                    }`}
                    id={`milestone-btn-${item.id}`}
                  >
                    {/* Node Dot Indicator */}
                    <div
                      className={`w-4 h-4 rounded-full mb-1.5 flex items-center justify-center border-2 transition-all ${
                        isSelected
                          ? 'bg-amber-500 border-white ring-4 ring-slate-950'
                          : 'bg-slate-100 border-slate-300 group-hover:border-amber-500'
                      }`}
                    >
                      <div className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-transparent'}`} />
                    </div>

                    <span className={`text-[10px] uppercase font-bold tracking-wider block ${
                      isSelected ? 'text-amber-400' : 'text-slate-400'
                    }`}>
                      {item.period.split('–')[0].trim()}
                    </span>

                    <span className={`text-xs font-serif font-bold mt-0.5 line-clamp-1 ${
                      isSelected ? 'text-white' : 'text-slate-950'
                    }`}>
                      {item.company}
                    </span>

                    <span className={`text-[10px] line-clamp-1 mt-0.5 ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {item.id === 'disney' ? 'Game Systems' : item.role.split('&')[0].trim()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Milestone Detail Showcase with Motion */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-sm relative overflow-hidden"
          >
            
            {/* Header & Company Identity */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
                    {activeMilestone.company}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {activeMilestone.period} &bull; ({activeMilestone.yearsSpan})
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                  {activeMilestone.role}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeMilestone.location}</span>
                </div>
              </div>

              {/* Stepper Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={selectedMilestoneIndex >= CAREER_MILESTONES.length - 1}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-slate-800 transition-colors cursor-pointer"
                  title="Earlier in career"
                  id="timeline-prev-btn"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  {CAREER_MILESTONES.length - selectedMilestoneIndex} of {CAREER_MILESTONES.length}
                </span>
                <button
                  onClick={handleNext}
                  disabled={selectedMilestoneIndex <= 0}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-slate-800 transition-colors cursor-pointer"
                  title="Later in career"
                  id="timeline-next-btn"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Role Overview */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900 block font-semibold mb-0.5 text-xs uppercase tracking-wider">
                Mandate & Scope:
              </strong>
              {activeMilestone.briefDescription}
            </div>

            {/* Metrics Pill Grid (if present) */}
            {activeMilestone.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {activeMilestone.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {m.label}
                    </span>
                    <span className="font-serif text-xl font-bold text-slate-950 block mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Accomplishments & Deliverables */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Key Deliverables & Systems Shipped</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {activeMilestone.keyAccomplishments.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack & Domain Competencies */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeMilestone.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                {activeMilestone.company} &bull; {activeMilestone.period}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
