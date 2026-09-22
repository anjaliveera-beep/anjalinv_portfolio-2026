import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, Award, Heart, Shield, Cpu, Database, Gamepad2, CheckCircle2, AlertTriangle, Lightbulb, Users, Globe, BookOpen } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

interface InteractiveCaseStudiesProps {
  onOpenBooking: () => void;
}

export const InteractiveCaseStudies: React.FC<InteractiveCaseStudiesProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'ai' | 'enterprise' | 'gaming'>('all');
  const [selectedStudyId, setSelectedStudyId] = useState<string>(CASE_STUDIES[0].id);

  // Filtered list
  const filteredStudies = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.category === activeCategory);

  const activeStudy = CASE_STUDIES.find((s) => s.id === selectedStudyId) || filteredStudies[0] || CASE_STUDIES[0];

  return (
    <section id="portfolio" className="py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Portfolio & Major Initiatives
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Featured Projects & Social Entrepreneurship
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore detailed interactive case studies spanning grassroots social change with <em>Let's Fight Back</em>, enterprise generative AI on Google Cloud, and latency-critical systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6 pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            All Initiatives ({CASE_STUDIES.length})
          </button>

          <button
            onClick={() => {
              setActiveCategory('social');
              const socialItem = CASE_STUDIES.find((s) => s.category === 'social');
              if (socialItem) setSelectedStudyId(socialItem.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === 'social'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-white text-rose-700 hover:bg-rose-50 border border-rose-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Social Entrepreneurship: Let's Fight Back</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('ai');
              const aiItem = CASE_STUDIES.find((s) => s.category === 'ai');
              if (aiItem) setSelectedStudyId(aiItem.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === 'ai'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>Enterprise GenAI (Vertex AI)</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('enterprise');
              const entItem = CASE_STUDIES.find((s) => s.category === 'enterprise');
              if (entItem) setSelectedStudyId(entItem.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === 'enterprise'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-blue-500" />
            <span>Enterprise Cloud & Data</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('gaming');
              const gameItem = CASE_STUDIES.find((s) => s.category === 'gaming');
              if (gameItem) setSelectedStudyId(gameItem.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === 'gaming'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Disney Game Development (300 Games)</span>
          </button>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 pb-3 border-b border-slate-200/80">
          {filteredStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedStudyId(study.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeStudy.id === study.id
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/90'
              }`}
              id={`portfolio-tab-${study.id}`}
            >
              {study.category === 'social' && <Heart className="w-3.5 h-3.5 text-rose-500" />}
              {study.category === 'ai' && <Cpu className="w-3.5 h-3.5 text-emerald-500" />}
              {study.category === 'enterprise' && <Database className="w-3.5 h-3.5 text-blue-500" />}
              {study.category === 'gaming' && <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />}
              <span>{study.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Deep Interactive Case Study Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          
          {/* Top Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {activeStudy.tag}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {activeStudy.organization} &bull; {activeStudy.period}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                {activeStudy.title}
              </h3>
              <p className="text-sm font-medium text-slate-600">
                {activeStudy.subtitle}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Executive Role
              </span>
              <strong className="text-xs sm:text-sm text-slate-950 font-semibold block mt-0.5">
                {activeStudy.userRole}
              </strong>
            </div>
          </div>

          {/* Special Visual Banner for Social Entrepreneurship: Let's Fight Back */}
          {activeStudy.id === 'lets-fight-back-grassroots' && (
            <div className="p-6 sm:p-7 rounded-3xl bg-rose-50/50 border border-rose-200/70 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-700 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                    Featured Grassroots Initiative
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-950">
                    Ending Gender-Based Violence Through Kickboxing & Legal Literacy
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Operating in remote tribal hamlets (Bhimdongri, Malai Talao, Bhadanepada), schools, and corporate campuses. Endorsed by Sakhya Women's Guidance Cell and recognized globally by INvolve #2 Future Women Leader 2025.
                  </p>
                </div>
                <a
                  href="https://infoletsfightback.wixsite.com/letsfightback/workshops-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs cursor-pointer"
                >
                  <span>Workshops Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {activeStudy.metrics.map((metric, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 block my-1">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-500 leading-tight block">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>

          {/* 1. Project Overview */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Project Overview
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeStudy.overview}
            </p>
          </div>

          {/* 2. Challenges Faced vs 3. Solutions Implemented */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Challenges Faced */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Challenges Faced</span>
              </h4>
              <div className="space-y-2.5">
                {activeStudy.challengesFaced.map((ch, i) => (
                  <div key={i} className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Implemented */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Solutions Implemented</span>
              </h4>
              <div className="space-y-2.5">
                {activeStudy.solutionsImplemented.map((sol, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 4. Outcomes Achieved */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Measurable Outcomes Achieved</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeStudy.outcomesAchieved.map((outcome, i) => (
                <div key={i} className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/70 flex items-start gap-3 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Associated Awards & Recognitions */}
          {activeStudy.associatedAwards && activeStudy.associatedAwards.length > 0 && (
            <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Associated Awards, Global Recognitions & UN Alignment</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeStudy.associatedAwards.map((award, i) => (
                  <div key={i} className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      {award.year} &bull; {award.badge}
                    </span>
                    <strong className="text-xs font-serif font-bold text-slate-950 block mt-1">
                      {award.title}
                    </strong>
                    <span className="text-[11px] text-slate-600 block mt-0.5">
                      {award.organization}
                    </span>
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:underline mt-2"
                      >
                        <span>Official Record</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Links to Relevant Resources */}
          {activeStudy.resources && activeStudy.resources.length > 0 && (
            <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>Links to Relevant Resources & Documentation</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeStudy.resources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 text-left transition-all group block"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="capitalize font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">
                        {res.type}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <strong className="text-xs font-bold text-slate-950 group-hover:text-amber-600 transition-colors block">
                      {res.title}
                    </strong>
                    {res.note && (
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {res.note}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 7. Human Impact & Leadership Takeaway */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  Human & Civic Outcome
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeStudy.humanImpact}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  Leadership & Engineering Lesson
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeStudy.leadershipTakeaway}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Inside Case Study */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Interested in how Anjali approaches technical architecture or team empowerment?
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Schedule 15m Technical Deep Dive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
