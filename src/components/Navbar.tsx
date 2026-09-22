import React, { useState } from 'react';
import { Calendar, Linkedin, ExternalLink, Menu, X, Award, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenBooking: () => void;
  onSelectTab?: (tabId: any) => void;
  activeTab?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onSelectTab, activeTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId: string, sectionAnchor?: string) => {
    setMobileMenuOpen(false);
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    const targetElement = document.getElementById(sectionAnchor || 'dossier-root');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 transition-all">
      {/* Top Global Standing Ribbon */}
      <div className="bg-slate-950 text-slate-300 px-4 py-2 text-xs font-medium border-b border-slate-900/40">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-sans text-slate-200 tracking-wide text-[11px] sm:text-xs">
              Ranked <strong className="text-white font-semibold underline decoration-amber-500/60 underline-offset-2">#2 Globally</strong> &bull; INvolve Future Women Leaders 2025 &bull; Nominated 2026 Women Empowerment Awards
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-400 text-xs">
            <span>Kitchener / Toronto, ON</span>
            <span className="text-slate-600">&bull;</span>
            <button 
              onClick={onOpenBooking} 
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Book 15-min Career Kickoff</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Signature */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('overview')}
              className="group flex flex-col text-left cursor-pointer"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                Anjali Nayakanti Veera
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5 mt-0.5">
                Director of Engineering Management <span className="text-amber-600 font-bold">&bull;</span> Founder, Let's Fight Back
              </span>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
            <button 
              onClick={() => handleNavClick('overview')} 
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'overview' 
                  ? 'text-slate-950 font-semibold bg-slate-100' 
                  : 'hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Ideologies & DNA</span>
            </button>
            <button 
              onClick={() => handleNavClick('social-impact')} 
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'social-impact' 
                  ? 'text-slate-950 font-semibold bg-slate-100' 
                  : 'hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
              <span>Let's Fight Back</span>
            </button>
            <button 
              onClick={() => handleNavClick('trajectory')} 
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'trajectory' 
                  ? 'text-slate-950 font-semibold bg-slate-100' 
                  : 'hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              16-Yr Trajectory
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')} 
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'portfolio' 
                  ? 'text-slate-950 font-semibold bg-slate-100' 
                  : 'hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              Enterprise Cases
            </button>
            <button 
              onClick={() => handleNavClick('honors')} 
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'honors' 
                  ? 'text-slate-950 font-semibold bg-slate-100' 
                  : 'hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>Honors & Letters</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-[#0A66C2] hover:bg-slate-100 rounded-xl transition-all border border-transparent hover:border-slate-200"
              title="Verified LinkedIn Profile"
              id="nav-linkedin-btn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.topmate}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all flex items-center gap-1.5 border border-slate-200"
              title="Topmate Advisory"
              id="nav-topmate-btn"
            >
              <span>Topmate</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              id="nav-book-btn"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Book 15m Kickoff</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-950 rounded-lg cursor-pointer"
            >
              Book 15m
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
            <button 
              onClick={() => handleNavClick('overview')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Unicorn DNA & Ideologies
              </span>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">Core</span>
            </button>
            <button 
              onClick={() => handleNavClick('social-impact')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-rose-500" />
                Let's Fight Back (Grassroots)
              </span>
              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">5k+ Girls</span>
            </button>
            <button 
              onClick={() => handleNavClick('trajectory')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              16-Year Trajectory
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Enterprise & GenAI Portfolio
            </button>
            <button 
              onClick={() => handleNavClick('ai-strategy')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              AI Moat Analysis
            </button>
            <button 
              onClick={() => handleNavClick('honors')} 
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                Global Honors & Letters
              </span>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">#2 Global</span>
            </button>
            <button 
              onClick={() => handleNavClick('booking')} 
              className="text-left py-2.5 px-3 rounded-lg bg-slate-950 text-white font-bold flex items-center gap-2 mt-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book 15m Career Kickoff</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={PERSONAL_INFO.topmate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <span>Topmate</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
