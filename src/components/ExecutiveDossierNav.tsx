import React from 'react';
import { Sparkles, Heart, Clock, Briefcase, Award, Calendar, Lightbulb, Layers } from 'lucide-react';

export type DossierTab = 
  | 'overview'
  | 'social-impact'
  | 'trajectory'
  | 'portfolio'
  | 'ai-strategy'
  | 'honors'
  | 'booking';

interface ExecutiveDossierNavProps {
  activeTab: DossierTab;
  onSelectTab: (tab: DossierTab) => void;
  viewMode: 'curated' | 'all';
  onToggleViewMode: (mode: 'curated' | 'all') => void;
}

export const ExecutiveDossierNav: React.FC<ExecutiveDossierNavProps> = ({
  activeTab,
  onSelectTab,
  viewMode,
  onToggleViewMode,
}) => {
  const tabs: { id: DossierTab; label: string; shortLabel: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'overview',
      label: 'Unicorn DNA & Ideologies',
      shortLabel: 'Ideologies',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      badge: 'Core'
    },
    {
      id: 'social-impact',
      label: "Let's Fight Back",
      shortLabel: 'Social Impact',
      icon: <Heart className="w-4 h-4 text-rose-500" />,
      badge: '5k+ Girls'
    },
    {
      id: 'trajectory',
      label: '16-Year Trajectory',
      shortLabel: '16-Yr Career',
      icon: <Clock className="w-4 h-4 text-blue-500" />,
      badge: '6 Orgs'
    },
    {
      id: 'portfolio',
      label: 'Enterprise Cases',
      shortLabel: 'Cases',
      icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      badge: '80+ Cases'
    },
    {
      id: 'ai-strategy',
      label: 'AI Moat Analysis',
      shortLabel: 'AI Moat',
      icon: <Lightbulb className="w-4 h-4 text-amber-500" />
    },
    {
      id: 'honors',
      label: 'Global Honors & Letters',
      shortLabel: 'Honors',
      icon: <Award className="w-4 h-4 text-indigo-500" />,
      badge: '#2 Global'
    },
    {
      id: 'booking',
      label: '15m Career Kickoff',
      shortLabel: '15m Desk',
      icon: <Calendar className="w-4 h-4 text-amber-500" />,
      badge: 'Open Slots'
    },
  ];

  return (
    <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-slate-200/80 py-3 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Scrollable Tab Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none no-scrollbar">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border shrink-0 ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                      : 'bg-white/80 text-slate-600 hover:text-slate-950 hover:bg-white border-slate-200/90 shadow-2xs'
                  }`}
                  id={`dossier-tab-${tab.id}`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>

                  {tab.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Curated Tabs vs Full Continuous Dossier */}
          <div className="flex items-center justify-between lg:justify-end gap-2 text-xs border-t lg:border-t-0 pt-2 lg:pt-0 border-slate-100">
            <span className="text-slate-400 hidden xl:inline font-medium">Layout Mode:</span>
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200/60 shadow-inner">
              <button
                onClick={() => onToggleViewMode('curated')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'curated'
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Focused view: Read one chapter at a time without endless scrolling"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Curated Dossier</span>
              </button>
              <button
                onClick={() => onToggleViewMode('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'all'
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Continuous view: Read entire portfolio on one page"
              >
                <span>All Sections</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
