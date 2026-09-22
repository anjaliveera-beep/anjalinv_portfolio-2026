import React from 'react';
import { motion } from 'motion/react';

export interface SlideItem {
  id: string;
  number: string;
  label: string;
  shortTitle: string;
}

interface SlideNavigationDotsProps {
  slides: SlideItem[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export const SlideNavigationDots: React.FC<SlideNavigationDotsProps> = ({
  slides,
  currentSlide,
  onSelectSlide,
}) => {
  return (
    <aside
      aria-label="Section slide navigation"
      className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3 select-none pointer-events-auto"
    >
      <div className="flex flex-col items-end gap-3 bg-[#15171E]/80 backdrop-blur-md p-2.5 rounded-full border border-[#FAF7F2]/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              aria-label={`Jump to ${slide.number} ${slide.label}`}
              className="group relative flex items-center justify-end py-1 px-1 cursor-pointer focus:outline-none"
            >
              {/* Tooltip Label on Hover (Floats to the left) */}
              <span
                className={`absolute right-7 px-2.5 py-1 text-[11px] font-mono tracking-wider rounded border pointer-events-none transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'opacity-100 translate-x-0 bg-[#1A1C24] text-[#D49354] border-[#D49354]/40 shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-[#121318] text-[#FAF7F2]/80 border-[#FAF7F2]/15'
                }`}
              >
                <span className="text-[#D49354] font-semibold mr-1.5">{slide.number}</span>
                <span>{slide.label}</span>
              </span>

              {/* Indicator Dot / Tick Mark */}
              <div className="relative flex items-center justify-center w-4 h-4">
                {isActive ? (
                  <motion.div
                    layoutId="activeSlideIndicator"
                    className="w-2.5 h-6 rounded-full bg-[#D49354] shadow-[0_0_12px_rgba(212,147,84,0.6)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]/30 group-hover:bg-[#FAF7F2] group-hover:scale-125 transition-all duration-200" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Slide Counter Status */}
      <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-[#15171E]/60 backdrop-blur-md rounded-full border border-[#FAF7F2]/10 text-[10px] font-mono text-[#FAF7F2]/50 mt-1">
        <span className="text-[#D49354] font-bold">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </aside>
  );
};
