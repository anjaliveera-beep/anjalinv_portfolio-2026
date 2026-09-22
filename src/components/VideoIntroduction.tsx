import React, { useState } from 'react';
import { Play, Pause, Quote, Volume2, Sparkles, Shield, Users, Globe2, CheckCircle } from 'lucide-react';
import { VIDEO_TRANSCRIPT } from '../data/portfolioData';

export const VideoIntroduction: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript' | 'philosophy' | 'sdgs'>('transcript');

  return (
    <section id="video-intro" className="py-16 bg-slate-50/50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <Volume2 className="w-3.5 h-3.5 text-amber-600" />
            Authentic Voice & Personal Message
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            &ldquo;Community is all that we need, along with the zeal to make an impact.&rdquo;
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Listen to Anjali's personal introduction recorded from Kitchener, Ontario — connecting 16 years of high-pressure engineering delivery with a decade of grassroots self-defense activism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Video Player Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-white">
              
              {/* Video Simulated Stage */}
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center group overflow-hidden">
                {/* Visual Backdrop Representation */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10"></div>
                
                {/* Simulated frame styling matching Anjali's actual video recording */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-amber-500/90 border-2 border-white/40 flex items-center justify-center text-slate-950 shadow-lg mb-3">
                      <span className="font-serif text-2xl font-bold">ANV</span>
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-slate-100">
                      Anjali Nayakanti Veera
                    </span>
                    <span className="text-xs text-slate-400">
                      Kitchener, Ontario, Canada &bull; Recorded Video Introduction
                    </span>
                  </div>
                </div>

                {/* Animated Audio Wave bars when playing */}
                {isPlaying && (
                  <div className="absolute bottom-16 left-6 z-20 flex items-end gap-1">
                    <span className="w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_100ms] h-4"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_300ms] h-7"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_200ms] h-5"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_400ms] h-9"></span>
                    <span className="w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_150ms] h-3"></span>
                  </div>
                )}

                {/* Play/Pause Button Overlay */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative z-20 w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label={isPlaying ? 'Pause introduction' : 'Play introduction'}
                  id="video-play-toggle"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </button>

                {/* Video Info Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium tracking-wide text-slate-200 border border-white/10">
                  {isPlaying ? 'Now Playing Introduction...' : 'Recorded Message • 02:18'}
                </div>

                {/* Location indicator */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 border border-slate-700">
                  Kitchener, ON
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="p-4 bg-slate-950 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-amber-400 font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlaying ? 'Pause' : 'Play Message'}</span>
                  </button>
                  <span>&bull;</span>
                  <span>Audio Narrative & Transcript</span>
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  {isPlaying ? '00:45 / 02:18' : '00:00 / 02:18'}
                </div>
              </div>

            </div>

            {/* Kickboxer & Changemaker Key Fact Card */}
            <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <strong className="text-slate-950 font-semibold block text-sm">
                  Trained Kickboxer & Martial Arts Instructor
                </strong>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Anjali's leadership grit was forged in kickboxing rings and verified in grassroots self-defense workshops, giving her teams an exceptional level of composure, crisis calm, and ethical focus.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Transcript & Pillars */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Tab switchers */}
            <div className="flex border-b border-slate-200/90 gap-2">
              <button
                onClick={() => setActiveTab('transcript')}
                className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'transcript'
                    ? 'border-slate-950 text-slate-950'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Verbatim Transcript
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'philosophy'
                    ? 'border-slate-950 text-slate-950'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Leadership Philosophy
              </button>
              <button
                onClick={() => setActiveTab('sdgs')}
                className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'sdgs'
                    ? 'border-slate-950 text-slate-950'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                UN Sustainable Goals (SDGs)
              </button>
            </div>

            {/* Tab 1: Verbatim Transcript */}
            {activeTab === 'transcript' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-100 pb-3">
                  <span>Speaker: <strong className="text-slate-800">{VIDEO_TRANSCRIPT.speaker}</strong></span>
                  <span>Recorded: Kitchener, Ontario, Canada</span>
                </div>

                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans max-h-80 overflow-y-auto pr-2">
                  <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 italic text-xs text-slate-700">
                    &ldquo;Hey everyone, thank you for giving me the opportunity to talk a bit about myself... My name is Anjali, currently residing in Kitchener, Ontario, Canada.&rdquo;
                  </p>
                  <p>
                    &ldquo;I have been working on social causes for about a decade because I had my own organization back in my home country, India, where I am a <strong>trained kickboxer</strong> trying to deliver self-defense sessions across working with different governments, corporate sessions, giving good touch / bad touch discussions for college students, and for kids from the age of five years.&rdquo;
                  </p>
                  <p>
                    &ldquo;I have had an amazing journey... got an opportunity to talk with so many wonderful individuals trying to make an impact, because I know for a fact that <strong>every impact or every story needs to be heard</strong>, and it needs to be given the attention that it deserves.&rdquo;
                  </p>
                  <p className="font-serif text-base font-semibold text-slate-950 text-center pt-2">
                    &ldquo;It all begins with community engagement. Community is all that we need, alongside the ambition and the zeal to work together and make a wonderful impact for future generations.&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                  {VIDEO_TRANSCRIPT.keyTakeaways.map((takeaway, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs bg-slate-50 text-slate-700 border border-slate-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      {takeaway}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Leadership Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                <h4 className="font-serif text-xl font-bold text-slate-950">
                  The Three Tenets of Human-Centered Tech Leadership
                </h4>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <strong className="text-slate-950 block font-semibold mb-1">
                      1. Radical Clarity with Compassionate Guardrails
                    </strong>
                    High-performing engineering teams do not thrive on ambiguous corporate jargon. They thrive when goals are crisp, architecture is verifiable, and psychological safety is absolute.
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <strong className="text-slate-950 block font-semibold mb-1">
                      2. Resilience Forged on the Mat
                    </strong>
                    Kickboxing teaches you that getting hit is inevitable; what matters is your footwork, balance, and quickness to reset. In 24/7 cloud systems and sudden platform migrations, calm resilience keeps teams focused.
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <strong className="text-slate-950 block font-semibold mb-1">
                      3. Operational Empathy
                    </strong>
                    True mentorship is not a once-a-year review. It is understanding life challenges, cultural transitions, and actively sponsoring engineers for promotions and leadership roles.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: UN Sustainable Development Goals */}
            {activeTab === 'sdgs' && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-blue-600" />
                  <h4 className="font-serif text-xl font-bold text-slate-950">
                    Delivering on UN Sustainable Development Goals
                  </h4>
                </div>
                <p className="text-xs text-slate-500">
                  As a UN Delegate and Young Professional Fellowship Canada Delegate, Anjali's work directly activates key global mandates:
                </p>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200/70">
                    <span className="text-xs font-bold text-rose-700 block">SDG 5</span>
                    <strong className="text-sm font-semibold text-slate-950 block">Gender Equality</strong>
                    <span className="text-[11px] text-slate-600">5,000+ girls trained in self-defense, safety & legal rights.</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
                    <span className="text-xs font-bold text-emerald-700 block">SDG 8</span>
                    <strong className="text-sm font-semibold text-slate-950 block">Decent Work & Growth</strong>
                    <span className="text-[11px] text-slate-600">Mentored 100+ global engineers into tech leadership & promotions.</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200/70">
                    <span className="text-xs font-bold text-blue-700 block">SDG 10</span>
                    <strong className="text-sm font-semibold text-slate-950 block">Reduced Inequalities</strong>
                    <span className="text-[11px] text-slate-600">Outreach into remote tribal communities (Bhimdongri, Malai Talao).</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                    <span className="text-xs font-bold text-amber-700 block">SDG 13</span>
                    <strong className="text-sm font-semibold text-slate-950 block">Climate & Sustainable Tech</strong>
                    <span className="text-[11px] text-slate-600">Youth Fellowship Canada advocacy for responsible green computing.</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
