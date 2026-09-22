import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles } from 'lucide-react';

interface FloatingBookTalkButtonProps {
  onOpenBooking: () => void;
  currentSlideIndex?: number;
  bookingSlideIndex?: number;
}

export const FloatingBookTalkButton: React.FC<FloatingBookTalkButtonProps> = ({
  onOpenBooking,
  currentSlideIndex,
  bookingSlideIndex,
}) => {
  const isOnBookingSlide = currentSlideIndex !== undefined && currentSlideIndex === bookingSlideIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
    >
      <button
        onClick={onOpenBooking}
        data-cursor="BOOK"
        className={`group relative flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full font-mono text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer shadow-[0_12px_32px_rgba(0,0,0,0.5)] border ${
          isOnBookingSlide
            ? 'bg-[#D49354] text-[#0D0E12] border-[#D49354] shadow-[0_0_28px_rgba(212,147,84,0.45)]'
            : 'bg-[#15171E]/95 hover:bg-[#1D1F28] text-[#FAF7F2] border-[#D49354]/60 hover:border-[#D49354] hover:shadow-[0_0_30px_rgba(212,147,84,0.35)]'
        }`}
      >
        {/* Pulsing beacon indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOnBookingSlide ? 'bg-[#0D0E12]' : 'bg-[#D49354]'
          }`} />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isOnBookingSlide ? 'bg-[#0D0E12]' : 'bg-[#D49354]'
          }`} />
        </span>

        <Calendar className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
          isOnBookingSlide ? 'text-[#0D0E12]' : 'text-[#D49354]'
        }`} />

        <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
          Schedule Consultation
        </span>

        <Sparkles className={`w-3.5 h-3.5 hidden sm:inline-block ${
          isOnBookingSlide ? 'text-[#0D0E12]/80' : 'text-[#D49354]/80'
        }`} />
      </button>
    </motion.div>
  );
};
