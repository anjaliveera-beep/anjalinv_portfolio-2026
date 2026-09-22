import React from 'react';
import { Sparkles, Shield, Cpu, Trophy, Globe2, Award, Zap } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { label: "Director of Engineering Management", icon: <Cpu className="w-3.5 h-3.5 text-amber-400" /> },
    { label: "#2 Global Future Women Leader (INvolve)", icon: <Trophy className="w-3.5 h-3.5 text-amber-400" /> },
    { label: "200–300 Shipped Games with Disney", icon: <Zap className="w-3.5 h-3.5 text-blue-400" /> },
    { label: "Founder: Let's Fight Back", icon: <Shield className="w-3.5 h-3.5 text-rose-400" /> },
    { label: "5,000+ Girls Trained in Self-Defense", icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" /> },
    { label: "125+ Engineers Led &bull; 98% Retention", icon: <Award className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: "UN & YPF Canada Youth Delegate", icon: <Globe2 className="w-3.5 h-3.5 text-cyan-400" /> },
  ];

  return (
    <div className="w-full bg-slate-950 text-slate-100 py-3.5 overflow-hidden border-y border-slate-800 select-none relative">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex items-center space-x-8 shrink-0">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide uppercase font-sans">
              <span className="p-1 rounded-full bg-slate-900 border border-slate-800">{item.icon}</span>
              <span className="text-slate-200">{item.label}</span>
              <span className="text-amber-500 font-bold ml-4">✦</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-8 shrink-0 pl-8">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide uppercase font-sans">
              <span className="p-1 rounded-full bg-slate-900 border border-slate-800">{item.icon}</span>
              <span className="text-slate-200">{item.label}</span>
              <span className="text-amber-500 font-bold ml-4">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
