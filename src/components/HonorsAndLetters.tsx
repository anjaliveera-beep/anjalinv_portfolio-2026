import React, { useState } from 'react';
import { Award, Trophy, ExternalLink, HeartHandshake, Quote, Sparkles, Building, UserCheck } from 'lucide-react';
import { GLOBAL_HONORS, TESTIMONIALS } from '../data/portfolioData';

export const HonorsAndLetters: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<number>(0);
  const [subTab, setSubTab] = useState<'all' | 'endorsements' | 'awards'>('all');

  return (
    <div className="space-y-16 animate-fade-in">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          Global Accolades & Endorsements
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
          Validated by Peers, Civic Leaders & Global Boards
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          From being ranked #2 globally by INvolve (supported by YouTube) to personal recommendation letters from Vice Presidents and grassroots NGO founders.
        </p>

        {/* Sub-tabs filter */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setSubTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              subTab === 'all'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Honors & Letters
          </button>
          <button
            onClick={() => setSubTab('endorsements')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              subTab === 'endorsements'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Executive Letters ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setSubTab('awards')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              subTab === 'awards'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Global Awards ({GLOBAL_HONORS.length})
          </button>
        </div>
      </div>

      {/* 1. Verified Recommendation Letters */}
      {(subTab === 'all' || subTab === 'endorsements') && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <HeartHandshake className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif text-2xl font-bold text-slate-950">
              Verified Executive & Community Endorsement Letters
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Recommenders list */}
            <div className="lg:col-span-4 space-y-3">
              {TESTIMONIALS.map((item, idx) => {
                const isSelected = selectedLetter === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedLetter(idx)}
                    className={`w-full p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-1 ring-slate-950'
                        : 'bg-slate-50/70 hover:bg-white text-slate-900 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] uppercase font-bold tracking-wider ${
                        isSelected ? 'text-amber-400' : 'text-amber-700'
                      }`}>
                        {item.relationship}
                      </span>
                    </div>

                    <strong className="font-serif text-base font-bold block">
                      {item.author}
                    </strong>
                    <span className={`text-xs block ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.role} &bull; {item.organization}
                    </span>

                    <div className={`mt-3 pt-2.5 border-t text-[11px] italic line-clamp-2 ${
                      isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-500'
                    }`}>
                      &ldquo;{item.keyHighlight}&rdquo;
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Full Letter Display */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 relative">
              <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6" />
              
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {TESTIMONIALS[selectedLetter].relationship}
                </span>
                <h4 className="font-serif text-2xl font-bold text-slate-950 mt-3">
                  {TESTIMONIALS[selectedLetter].author}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {TESTIMONIALS[selectedLetter].role} &bull; <strong className="text-slate-700">{TESTIMONIALS[selectedLetter].organization}</strong>
                </p>
              </div>

              {/* Highlight callout */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6 text-sm font-semibold text-slate-900 shadow-2xs">
                &ldquo;{TESTIMONIALS[selectedLetter].keyHighlight}&rdquo;
              </div>

              {/* Full letter text */}
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {TESTIMONIALS[selectedLetter].content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Global Honors Grid */}
      {(subTab === 'all' || subTab === 'awards') && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif text-2xl font-bold text-slate-950">
              International Accolades & Civic Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {GLOBAL_HONORS.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      {item.highlightTag}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 mt-1 mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {item.badgeText}
                  </span>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      <span>Official Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
