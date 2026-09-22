import React, { useState } from 'react';
import { Quote, CheckCircle, Award, Building, HeartHandshake, UserCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<number>(0);

  return (
    <section id="testimonials" className="py-16 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            Leadership & Community Endorsements
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Endorsements from Executive Peers & NGO Leaders
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Read verified recommendation letters submitted by corporate vice presidents, grassroots NGO founders, and global empowerment foundations.
          </p>
        </div>

        {/* Testimonials Grid & Letter Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Recommenders List */}
          <div className="lg:col-span-4 space-y-3">
            {TESTIMONIALS.map((item, idx) => {
              const isSelected = selectedLetter === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLetter(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-950 border-slate-950 text-white shadow-md'
                      : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-900 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      isSelected ? 'text-amber-400' : 'text-amber-700'
                    }`}>
                      {item.relationship}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                  </div>

                  <h3 className={`font-serif text-lg font-bold ${
                    isSelected ? 'text-white' : 'text-slate-950'
                  }`}>
                    {item.author}
                  </h3>
                  <p className={`text-xs font-medium ${
                    isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.role}
                  </p>
                  <p className={`text-xs ${
                    isSelected ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.organization}
                  </p>

                  <div className={`mt-3 pt-2.5 border-t text-[11px] italic line-clamp-2 ${
                    isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
                  }`}>
                    &ldquo;{item.keyHighlight}&rdquo;
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Full Recommendation Letter Presentation */}
          <div className="lg:col-span-8">
            {(() => {
              const letter = TESTIMONIALS[selectedLetter];
              return (
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
                  <div className="absolute top-6 right-8 text-slate-200/50 pointer-events-none">
                    <Quote className="w-28 h-28" />
                  </div>

                  {/* Letter Header */}
                  <div className="border-b border-slate-100 pb-6 mb-6 relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Official Endorsement &bull; {letter.relationship}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Verified Recommendation
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mt-2">
                      {letter.author}
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-600">
                      {letter.role} &bull; <strong className="text-slate-900">{letter.organization}</strong>
                    </div>
                  </div>

                  {/* Standout Quote Callout */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-amber-500 mb-6 text-sm sm:text-base font-serif italic text-slate-950 leading-relaxed relative z-10">
                    &ldquo;{letter.keyHighlight}&rdquo;
                  </div>

                  {/* Full Text Body */}
                  <div className="text-sm text-slate-700 font-sans leading-relaxed space-y-3 relative z-10">
                    <p>{letter.content}</p>
                  </div>

                  {/* Signoff verification badge */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 relative z-10">
                    <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      Authentic Peer Recommendation
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">Direct Endorsement on Record</span>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
