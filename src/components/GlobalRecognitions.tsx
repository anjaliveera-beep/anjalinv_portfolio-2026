import React from 'react';
import { Award, ExternalLink, Sparkles, Trophy, Globe, Newspaper, CheckCircle } from 'lucide-react';
import { GLOBAL_HONORS } from '../data/portfolioData';

export const GlobalRecognitions: React.FC = () => {
  return (
    <section id="recognitions" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Global Accolades & Civic Honors
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            International Recognition on the Global Stage
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Honored by international civic organizations, corporate DEI boards, YouTube, and the UN community for bridging technological excellence with grassroots human empowerment.
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOBAL_HONORS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {item.highlightTag}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-700 mt-1 mb-3">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                  {item.badgeText}
                </span>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 transition-colors"
                  >
                    <span>Verify Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm shadow-md">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-amber-400 shrink-0" />
            <span className="text-slate-200">
              <strong className="text-white">Global Footprint:</strong> Canadian Permanent Resident &bull; Born in India &bull; Mentored engineers across Canada, USA, India, UK, Georgia, and Brazil.
            </span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-900 font-semibold text-amber-400 border border-slate-800 shrink-0">
            Canada &bull; India &bull; Global
          </span>
        </div>

      </div>
    </section>
  );
};
