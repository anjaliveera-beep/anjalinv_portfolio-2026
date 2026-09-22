import React from 'react';
import { X } from 'lucide-react';
import { BookingScheduler } from '../BookingScheduler';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0D0E12]/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#13151D] border border-[#FAF7F2]/15 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 my-8 text-[#FAF7F2]">
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#FAF7F2]/10">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D49354] block">
              DIRECT EXECUTIVE CALENDAR &bull; INSTANT SYNC
            </span>
            <h3 className="font-serif text-2xl text-[#FAF7F2]">
              Reserve 1:1 Executive Consultation
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 flex items-center justify-center text-[#FAF7F2] hover:text-[#D49354] transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Embedded Booking Scheduler */}
        <div className="max-h-[75vh] overflow-y-auto pr-1">
          <BookingScheduler id="modal-booking-scheduler" />
        </div>

      </div>
    </div>
  );
};
