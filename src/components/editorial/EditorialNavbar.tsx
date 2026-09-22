import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface EditorialNavbarProps {
  onOpenBooking: () => void;
  onNavigateSlide?: (slideIndex: number) => void;
  currentSlide?: number;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({
  onOpenBooking,
  onNavigateSlide,
  currentSlide = 0,
}) => {
  const [torontoTime, setTorontoTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Toronto',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setTorontoTime(timeStr);
      } catch {
        setTorontoTime('EST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0D0E12]/85 backdrop-blur-md py-4 sm:py-5 border-b border-[#FAF7F2]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Monogram / Identity */}
        <button
          onClick={() => onNavigateSlide?.(0)}
          className="group flex items-baseline gap-3 text-sm font-sans tracking-tight text-[#FAF7F2] text-left cursor-pointer"
        >
          <span className="font-serif text-lg tracking-normal font-bold text-[#FAF7F2] group-hover:text-[#D49354] transition-colors">
            ANV
          </span>
          <span className="hidden sm:inline text-xs font-mono uppercase tracking-widest text-[#FAF7F2]/50">
            Director of Engineering Management
          </span>
        </button>

        {/* Middle: Live Time & Location */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#FAF7F2]/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D49354] animate-pulse"></span>
          <span>Toronto, ON</span>
          <span className="text-[#FAF7F2]/30">&bull;</span>
          <span>{torontoTime || '18:08 EDT'}</span>
        </div>

        {/* Nav Links with Direct Slide Navigation */}
        <nav className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-sans tracking-normal text-[#FAF7F2]">
          <button
            onClick={() => onNavigateSlide?.(1)}
            className={`hover-line transition-colors cursor-pointer ${
              currentSlide === 1 ? 'text-[#D49354] font-medium' : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => onNavigateSlide?.(2)}
            className={`hover-line transition-colors cursor-pointer ${
              currentSlide === 2 ? 'text-[#D49354] font-medium' : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => onNavigateSlide?.(3)}
            className={`hover-line transition-colors cursor-pointer ${
              currentSlide === 3 ? 'text-[#D49354] font-medium' : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
            }`}
          >
            Recognition
          </button>
          
          <button
            onClick={() => onNavigateSlide?.(4)}
            className={`hover-line hidden sm:inline-block transition-colors cursor-pointer ${
              currentSlide === 4 ? 'text-[#D49354] font-medium' : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
            }`}
          >
            Book a Talk
          </button>

          <button
            onClick={() => onNavigateSlide?.(5)}
            className="hover-line group flex items-center gap-1 font-medium text-[#D49354] hover:text-[#FAF7F2] cursor-pointer transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </nav>
      </div>
    </header>
  );
};
