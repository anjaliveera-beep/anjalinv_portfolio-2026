import React from 'react';
import { Linkedin, Mail, Phone, ExternalLink, Heart, Shield, ArrowUp, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Anjali Nayakanti Veera
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Director of Engineering Management, Cloud & AI Strategist, and Founder of <em>Let's Fight Back</em>. Dedicated to building inclusive, resilient engineering futures and empowering girls through grassroots self-defense.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                #2 Global Future Women Leader
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                Kitchener, ON &bull; Canada
              </span>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Reach & Advisory
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-amber-400 flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>Send an email to her</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-amber-400 flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile &bull; Connect</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.topmate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-amber-500" />
                  <span>Topmate Mentorship & Advisory</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Action CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Start the Conversation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have an open engineering leadership role, keynote invitation, or looking for 15-minute career mentorship?
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              id="footer-book-cta"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 15-Min Kickoff</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Anjali Nayakanti Veera. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Executive Dossier &bull; Unicorn Leadership Portfolio</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer border border-slate-800"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
