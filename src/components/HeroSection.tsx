import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Video, Sparkles, Shield, MapPin, CheckCircle2, Award, ExternalLink, Play, Linkedin, Globe2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveCanvasConstellation } from './InteractiveCanvasConstellation';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onScrollToVideo?: () => void;
  onExploreIdeologies?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExploreIdeologies }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-18 overflow-hidden">
      {/* Interactive Constellation Canvas in Background */}
      <InteractiveCanvasConstellation 
        className="absolute inset-0 pointer-events-auto opacity-60 z-0" 
        particleColor="rgba(217, 119, 6, 0.4)"
        lineColor="rgba(148, 163, 184, 0.2)"
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-0 right-1/4 -mt-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 -ml-24 w-80 h-80 rounded-full bg-slate-300/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Punchy Editorial Copy & Verified References */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Director of Engineering Management
              </span>

              <a
                href="https://www.involvepeople.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs transition-colors"
                title="Ranked #2 Globally on INvolve Future Women Leaders list (supported by YouTube)"
              >
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>#2 Global Future Women Leader</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs">
                <Shield className="w-3 h-3 text-rose-500" />
                <span>Founder, Let's Fight Back</span>
              </span>
            </div>

            {/* Kinetic Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12]">
                Architecting Scale. <br />
                <span className="italic font-normal text-amber-600">Empowering Humans.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                16 years bridging bare-metal gaming concurrency (<strong className="font-semibold text-slate-900">Disney 200–300 titles</strong>) and enterprise cloud AI squads (<strong className="font-semibold text-slate-900">Apply, EPAM, Wells Fargo, Verizon, TCS</strong>) with grassroots activism (<strong className="font-semibold text-rose-600">5,000+ girls empowered</strong> in self-defense).
              </p>
            </div>

            {/* Location & Standing Details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Kitchener / Toronto, ON &bull; Global Reach</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-emerald-600" />
                <span>UN Delegate &bull; Topmate Advisory</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer group"
                id="hero-book-cta"
              >
                <Calendar className="w-4 h-4 text-amber-400 group-hover:rotate-6 transition-transform" />
                <span>Book 15-Min Kickoff</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
                id="hero-linkedin-cta"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                id="hero-topmate-cta"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>Topmate Advisory</span>
              </a>

              <button
                onClick={() => setShowVideoModal(true)}
                className="px-3.5 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                id="hero-video-cta"
                title="Watch personal intro video"
              >
                <Play className="w-3.5 h-3.5 fill-slate-600 text-slate-600" />
                <span>Hear Voice</span>
              </button>
            </div>

            {/* Editorial Quote */}
            <div className="pt-2 border-l-2 border-amber-500/80 pl-4 italic text-sm text-slate-500 leading-relaxed max-w-xl">
              &ldquo;Sustainable engineering leadership is not measured only in uptime or throughput, but in human resilience, psychological safety, and lifting others as we climb.&rdquo;
            </div>
          </div>

          {/* Right Column: Premium Executive Profile Bento */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame with Floating Animation */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-slate-200/90 transition-all group hover:shadow-2xl">
                
                {/* Header: Verified Identity Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs"></div>
                    <span className="text-xs font-semibold text-slate-700 font-sans uppercase tracking-wider">
                      Verified Executive Dossier
                    </span>
                  </div>
                  
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full border border-blue-200/60 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect</span>
                  </a>
                </div>

                {/* Identity Spotlight Box */}
                <div className="py-5 text-center">
                  {/* Crest Monogram */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-950 p-0.5 shadow-lg shadow-slate-900/10 flex items-center justify-center relative group">
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent pointer-events-none"></div>
                      <span className="font-serif text-2xl font-bold tracking-tight text-white">ANV</span>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-amber-400 font-bold">Unicorn</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-950 mt-4">
                    Anjali Nayakanti Veera
                  </h3>
                  <p className="text-xs text-slate-500 font-sans tracking-wide mt-1">
                    Director of Engineering Management &bull; Founder, Let's Fight Back
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>125+ Engineers Led &bull; 98% Team Retention</span>
                  </div>
                </div>

                {/* Mini Bento of Credibility */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                    <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider block">
                      INvolve Global
                    </span>
                    <span className="font-serif text-xl font-bold text-slate-950 block leading-tight mt-0.5">
                      #2 Ranked
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Future Women Leaders
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                    <span className="text-[10px] uppercase font-bold text-rose-600 tracking-wider block">
                      Let's Fight Back
                    </span>
                    <span className="font-serif text-xl font-bold text-slate-950 block leading-tight mt-0.5">
                      5,000+ Girls
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Trained in Tribal Areas
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                    <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider block">
                      Disney Games
                    </span>
                    <span className="font-serif text-xl font-bold text-slate-950 block leading-tight mt-0.5">
                      200–300
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Low-Latency Titles
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                    <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider block">
                      Enterprise AI
                    </span>
                    <span className="font-serif text-xl font-bold text-slate-950 block leading-tight mt-0.5">
                      80+ Cases
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Zero SLA Breaches
                    </span>
                  </div>
                </div>

                {/* Recommendation Quote Snippet */}
                <div className="mt-3 p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/50 text-xs text-slate-700 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Shanthikumar C &bull; VP Strategy, EPAM:
                    </span>
                    <span className="italic text-slate-600">
                      &ldquo;Successfully managed teams ranging from 50 to 160 engineers with extraordinary humanity, empathy, and technical depth.&rdquo;
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Executive Stats Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all group"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1 font-sans">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-amber-600" />
                <h4 className="font-serif text-lg font-bold text-slate-950">
                  Anjali's Personal Story & Voice
                </h4>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mb-4 shadow-inner">
              <iframe
                src="https://www.youtube.com/embed/5a4K92U8ZtE?autoplay=1"
                title="Anjali Nayakanti Veera Introduction"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-1">Key Message:</strong>
              &ldquo;Community is all that we need, alongside the ambition and zeal to work together and build a wonderful future for the next generations.&rdquo;
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
