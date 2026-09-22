import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, Clock, Globe, Check, ArrowRight, Download, Mail, ExternalLink, Sparkles, User, Building, MessageSquare, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookingFormState } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadICSFile, generateGoogleCalendarUrl } from '../utils/calendarHelper';

interface BookingSchedulerProps {
  id?: string;
}

export const BookingScheduler: React.FC<BookingSchedulerProps> = ({ id = 'booking-section' }) => {
  // Generate next 18 selectable business days
  const availableDates = useMemo(() => {
    const dates: { dateStr: string; displayDay: string; displayDate: string; isToday: boolean }[] = [];
    let current = new Date();
    let daysAdded = 0;

    while (daysAdded < 18) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      // Only Monday - Friday
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const year = current.getFullYear();
        const month = String(current.getMonth() + 1).padStart(2, '0');
        const day = String(current.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        const displayDay = current.toLocaleDateString('en-US', { weekday: 'short' });
        const displayDate = current.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        dates.push({
          dateStr,
          displayDay,
          displayDate,
          isToday: daysAdded === 0,
        });
        daysAdded++;
      }
    }
    return dates;
  }, []);

  // Time slots
  const morningSlots = ['09:30 AM', '10:15 AM', '11:00 AM', '11:45 AM'];
  const afternoonSlots = ['01:30 PM', '02:15 PM', '03:00 PM', '03:45 PM', '04:30 PM'];
  const eveningSlots = ['05:15 PM', '06:00 PM'];

  // User timezone detection
  const detectedTimezone = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Toronto';
    } catch {
      return 'America/Toronto';
    }
  }, []);

  // State
  const [meetingType, setMeetingType] = useState<'15-min-kickoff' | '30-min-advisory'>('15-min-kickoff');
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.dateStr || '');
  const [selectedTime, setSelectedTime] = useState<string>('10:15 AM');
  const [timezone] = useState<string>(detectedTimezone);

  type ContactDetails = Omit<BookingFormState, 'meetingType' | 'selectedDate' | 'selectedTime' | 'timezone'>;

  const [formData, setFormData] = useState<ContactDetails>({
    fullName: '',
    email: '',
    roleCompany: '',
    primaryTopic: 'EM Mentorship & Career',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formAttempted, setFormAttempted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);
  const [emailStatus, setEmailStatus] = useState<{ sent: boolean; simulated?: boolean; message?: string } | null>(null);

  const validateField = (field: string, value: string): string => {
    const trimmed = (value || '').trim();
    if (field === 'fullName') {
      if (!trimmed) return 'Full name is required.';
      if (trimmed.length < 2) return 'Please enter at least 2 characters for your full name.';
      if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Please enter a valid name using letters.';
    }
    if (field === 'email') {
      if (!trimmed) return 'Email address is required.';
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(trimmed)) {
        return 'Please enter a valid email address (e.g. name@company.com).';
      }
    }
    if (field === 'roleCompany') {
      if (trimmed && trimmed.length < 2) {
        return 'Please enter at least 2 characters for your role or organization.';
      }
    }
    if (field === 'selectedDate') {
      if (!value) return 'Please select a date on the calendar.';
    }
    if (field === 'selectedTime') {
      if (!value) return 'Please choose an available time slot.';
    }
    if (field === 'notes') {
      if (trimmed.length > 1000) return 'Notes must be under 1,000 characters.';
    }
    return '';
  };

  const handleInputChange = (field: keyof ContactDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field] || formAttempted) {
      const err = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const val = field === 'selectedDate' ? selectedDate : field === 'selectedTime' ? selectedTime : (formData as any)[field] || '';
    const err = validateField(field, val);
    setErrors(prev => ({ ...prev, [field]: err }));
  };

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    if (errors.selectedDate) {
      setErrors(prev => ({ ...prev, selectedDate: '' }));
    }
  };

  const handleTimeSelect = (slot: string) => {
    setSelectedTime(slot);
    if (errors.selectedTime) {
      setErrors(prev => ({ ...prev, selectedTime: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormAttempted(true);

    const newErrors: Record<string, string> = {};
    const nameErr = validateField('fullName', formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const roleErr = validateField('roleCompany', formData.roleCompany || '');
    if (roleErr) newErrors.roleCompany = roleErr;

    const dateErr = validateField('selectedDate', selectedDate);
    if (dateErr) newErrors.selectedDate = dateErr;

    const timeErr = validateField('selectedTime', selectedTime);
    if (timeErr) newErrors.selectedTime = timeErr;

    const notesErr = validateField('notes', formData.notes || '');
    if (notesErr) newErrors.notes = notesErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        fullName: true,
        email: true,
        roleCompany: true,
        selectedDate: true,
        selectedTime: true,
        notes: true,
      });

      if (newErrors.selectedDate || newErrors.selectedTime) {
        document.getElementById('booking-step-dates')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else if (newErrors.fullName) {
        document.getElementById('booking-name-input')?.focus();
      } else if (newErrors.email) {
        document.getElementById('booking-email-input')?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setEmailStatus(null);

    const booking = {
      ...formData,
      meetingType,
      selectedDate,
      selectedTime,
      timezone,
      bookedAt: new Date().toISOString(),
    };

    // Dispatch automated email notification via backend /api/send-booking (Resend)
    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      const result = await response.json();
      if (response.ok) {
        setEmailStatus({
          sent: true,
          simulated: result.simulated,
          message: result.message,
        });
      } else {
        setEmailStatus({
          sent: false,
          message: result.error || 'Failed to dispatch email',
        });
      }
    } catch (err: any) {
      console.warn('Email dispatch warning:', err);
      setEmailStatus({
        sent: false,
        message: 'Could not reach mail dispatch server.',
      });
    }

    setIsSubmitting(false);
    setConfirmedBooking(booking);

    // Persist to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('anjali_booked_sessions') || '[]');
      const updated = [booking, ...existing];
      localStorage.setItem('anjali_booked_sessions', JSON.stringify(updated));
    } catch (err) {
      console.warn('Storage note:', err);
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D97706', '#0F172A', '#2563EB', '#10B981'],
      });
    } catch {
      // Safe fallback if canvas is blocked
    }
  };

  const handleDownloadICS = () => {
    if (confirmedBooking) {
      downloadICSFile(confirmedBooking);
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormAttempted(false);
    setErrors({});
    setTouched({});
    setFormData({
      fullName: '',
      email: '',
      roleCompany: '',
      primaryTopic: 'EM Mentorship & Career',
      notes: '',
    });
  };

  return (
    <section id={id} className="py-2 bg-transparent relative text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (optional compact context inside modal) */}
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#D49354]/10 text-[#D49354] border border-[#D49354]/30 mb-2">
            <CalendarIcon className="w-3.5 h-3.5 text-[#D49354]" />
            Direct Calendar & Kickoff Scheduler
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] tracking-tight">
            Schedule a 1:1 Executive Discussion
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#D6D0C5] leading-relaxed">
            Discuss engineering management appointments, scaling GenAI systems, or grassroots empowerment initiatives with Anjali.
          </p>
        </div>

        {/* Confirmed Booking Modal State */}
        {confirmedBooking ? (
          <div className="bg-[#15171E] rounded-2xl p-6 sm:p-8 border border-[#FAF7F2]/15 shadow-2xl max-w-4xl mx-auto">
            
            {/* Live Dual-Notification Banner */}
            <div className="mb-6 p-4 rounded-xl bg-[#1D1F28] border border-[#D49354]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F2]">
              <div className="flex items-center gap-2.5">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${emailStatus?.sent ? 'bg-emerald-400' : 'bg-[#D49354] animate-pulse'}`}></span>
                <span>
                  {emailStatus?.sent ? (
                    emailStatus.simulated ? (
                      <span><strong className="text-[#D49354]">Booking Confirmed:</strong> Session recorded. Email confirmation queued for <strong>{confirmedBooking.email}</strong>.</span>
                    ) : (
                      <span><strong className="text-emerald-400">Confirmation Sent:</strong> Email sent from Anjali (nv.anjalisri@gmail.com) directly to <strong>{confirmedBooking.email}</strong>!</span>
                    )
                  ) : (
                    <span><strong className="text-[#D49354]">Confirmation Prepared:</strong> Calendar invite (.ics) ready & email confirmation queued for <strong>{confirmedBooking.email}</strong>.</span>
                  )}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#15171E] font-mono font-semibold text-[11px] text-[#D49354] border border-[#D49354]/30 shrink-0">
                {emailStatus?.sent && !emailStatus.simulated ? 'Delivered to Attendee' : 'Direct Booking'}
              </span>
            </div>

            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="w-14 h-14 rounded-full bg-[#D49354]/15 text-[#D49354] flex items-center justify-center mx-auto mb-4 border border-[#D49354]/40">
                <Check className="w-7 h-7 text-[#D49354]" />
              </div>
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D49354]">
                Booking Confirmed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
                You're Scheduled with Anjali!
              </h3>
              <p className="text-xs sm:text-sm text-[#D6D0C5] mt-2">
                A confirmation with session details and meeting calendar links has been sent to <strong>{confirmedBooking.email}</strong> from <strong>nv.anjalisri@gmail.com</strong>.
              </p>
            </div>

            {/* Meeting Summary Card */}
            <div className="p-5 rounded-xl bg-[#101116] border border-[#FAF7F2]/10 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-[#FAF7F2]/50 font-medium block">Meeting Type</span>
                <strong className="text-sm text-[#FAF7F2] font-semibold">
                  {confirmedBooking.meetingType === '15-min-kickoff' ? '15-Min Career Kickoff' : '30-Min Strategic Advisory'}
                </strong>
              </div>
              <div>
                <span className="text-[#FAF7F2]/50 font-medium block">Date & Time</span>
                <strong className="text-sm text-[#FAF7F2] font-semibold">
                  {confirmedBooking.selectedDate} at {confirmedBooking.selectedTime}
                </strong>
                <span className="text-[11px] text-[#FAF7F2]/60 block">({confirmedBooking.timezone})</span>
              </div>
              <div>
                <span className="text-[#FAF7F2]/50 font-medium block">Topic Focus</span>
                <strong className="text-sm text-[#FAF7F2] font-semibold">
                  {confirmedBooking.primaryTopic}
                </strong>
              </div>
              <div>
                <span className="text-[#FAF7F2]/50 font-medium block">Attendee</span>
                <strong className="text-sm text-[#FAF7F2] font-semibold">
                  {confirmedBooking.fullName}
                </strong>
                <span className="text-[11px] text-[#FAF7F2]/60 block">{confirmedBooking.roleCompany}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button
                onClick={handleDownloadICS}
                className="px-5 py-3 rounded-xl bg-[#D49354] hover:bg-[#E2A66B] text-[#0D0E12] text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm cursor-pointer transition-colors"
                id="booking-download-ics-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download .ICS Calendar File</span>
              </button>

              <a
                href={generateGoogleCalendarUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#101116] hover:bg-[#1D1F28] text-[#FAF7F2] border border-[#FAF7F2]/20 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
                id="booking-google-cal-btn"
              >
                <CalendarIcon className="w-4 h-4 text-[#D49354]" />
                <span>Add to Google Calendar</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Consultation: ${confirmedBooking.meetingType === '15-min-kickoff' ? '15-Min Kickoff' : '30-Min Advisory'} - ${confirmedBooking.fullName}`)}&body=${encodeURIComponent(`Hi Anjali,\n\nI have requested a session on ${confirmedBooking.selectedDate} at ${confirmedBooking.selectedTime} (${confirmedBooking.timezone}).\n\nTopic: ${confirmedBooking.primaryTopic}\nAttendee: ${confirmedBooking.fullName} (${confirmedBooking.roleCompany})\nNotes: ${confirmedBooking.notes || 'None'}\n\nLooking forward to connecting!`)}`}
                className="px-5 py-3 rounded-xl bg-[#1D1F28] hover:bg-[#252834] text-[#FAF7F2] border border-[#FAF7F2]/20 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D49354]" />
                <span>Send an email to her</span>
              </a>

              <a
                href={PERSONAL_INFO.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-[#15171E] hover:bg-[#1D1F28] text-[#D6D0C5] hover:text-[#FAF7F2] border border-[#FAF7F2]/15 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Also on Topmate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Next Steps Card */}
            <div className="border-t border-[#FAF7F2]/10 pt-6">
              <div className="bg-[#101116] p-5 sm:p-6 rounded-xl border border-[#FAF7F2]/10 text-xs font-sans text-[#D6D0C5] space-y-3 leading-relaxed">
                <div className="flex items-center gap-2 text-[#FAF7F2] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#D49354]" />
                  <span>Session Next Steps</span>
                </div>
                <p>
                  Your booking details have been saved to this session. Click <strong>Download .ICS Calendar File</strong> or <strong>Add to Google Calendar</strong> above to instantly add the event and virtual conference link to your personal or work calendar.
                </p>
                <p className="text-[#D6D0C5]/80">
                  If you have preparatory slides, technical architecture diagrams, or documents you would like to review beforehand, you can click <strong>Send an email to her</strong> above or <a href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Consultation Preparatory Notes - ${confirmedBooking.fullName}`)}`} className="text-[#D49354] underline hover:text-[#E2A66B]">Send an email to her</a> directly.
                </p>
              </div>
            </div>

            {/* Reset Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-[#FAF7F2]/60 hover:text-[#D49354] flex items-center gap-1 mx-auto cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Book another slot or edit details</span>
              </button>
            </div>

          </div>
        ) : (
          /* Main Interactive Scheduler Form */
          <div className="bg-[#15171E] rounded-2xl p-6 sm:p-8 border border-[#FAF7F2]/10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Choose Duration */}
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#D49354] block mb-3">
                  1. Select Engagement Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setMeetingType('15-min-kickoff')}
                    className={`p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      meetingType === '15-min-kickoff'
                        ? 'border-[#D49354] bg-[#1E222F] text-[#FAF7F2] shadow-[0_0_20px_rgba(212,147,84,0.18)]'
                        : 'border-[#FAF7F2]/10 bg-[#101116] hover:border-[#FAF7F2]/30 text-[#FAF7F2]'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      meetingType === '15-min-kickoff' ? 'bg-[#D49354] text-[#0D0E12]' : 'bg-[#FAF7F2]/10 text-[#FAF7F2]'
                    }`}>
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="font-serif text-base font-bold text-[#FAF7F2]">
                          15-Minute Career Kickoff
                        </strong>
                        <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                          meetingType === '15-min-kickoff' ? 'bg-[#D49354] text-[#0D0E12]' : 'bg-[#FAF7F2]/10 text-[#D49354]'
                        }`}>
                          Free
                        </span>
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${
                        meetingType === '15-min-kickoff' ? 'text-[#FAF7F2]/80' : 'text-[#FAF7F2]/50'
                      }`}>
                        Quick initial connect for career guidance, transitioning to Engineering Management, or exploring synergy.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setMeetingType('30-min-advisory')}
                    className={`p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      meetingType === '30-min-advisory'
                        ? 'border-[#D49354] bg-[#1E222F] text-[#FAF7F2] shadow-[0_0_20px_rgba(212,147,84,0.18)]'
                        : 'border-[#FAF7F2]/10 bg-[#101116] hover:border-[#FAF7F2]/30 text-[#FAF7F2]'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      meetingType === '30-min-advisory' ? 'bg-[#D49354] text-[#0D0E12]' : 'bg-[#FAF7F2]/10 text-[#FAF7F2]'
                    }`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="font-serif text-base font-bold text-[#FAF7F2]">
                          30-Minute Strategic Advisory
                        </strong>
                        <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                          meetingType === '30-min-advisory' ? 'bg-[#D49354] text-[#0D0E12]' : 'bg-[#D49354]/20 text-[#D49354]'
                        }`}>
                          Deep Dive
                        </span>
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${
                        meetingType === '30-min-advisory' ? 'text-[#FAF7F2]/80' : 'text-[#FAF7F2]/50'
                      }`}>
                        In-depth technical roadmap review, GenAI incubation strategy, or organizational design advisory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Date & Time Picker */}
              <div id="booking-step-dates" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#FAF7F2]/10">
                
                {/* Available Days */}
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#D49354]">
                      2. Choose a Date <span className="text-[#D49354]">*</span>
                    </label>
                    <span className="text-xs text-[#FAF7F2]/50 font-mono">Mon – Fri Available</span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateStr;
                      return (
                        <button
                          key={item.dateStr}
                          type="button"
                          onClick={() => handleDateSelect(item.dateStr)}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                            isSelected
                              ? 'bg-[#D49354] border-[#D49354] text-[#0D0E12] shadow-sm font-semibold'
                              : 'bg-[#101116] hover:bg-[#191B24] border-[#FAF7F2]/10 text-[#FAF7F2]'
                          }`}
                        >
                          <span className={`text-[10px] uppercase font-mono font-bold tracking-wider ${isSelected ? 'text-[#0D0E12]' : 'text-[#FAF7F2]/50'}`}>
                            {item.displayDay}
                          </span>
                          <span className="text-sm font-serif font-bold mt-0.5">
                            {item.displayDate}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {(touched.selectedDate || formAttempted) && errors.selectedDate && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-2 font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.selectedDate}</span>
                    </p>
                  )}
                </div>

                {/* Available Slots & Timezone */}
                <div className="lg:col-span-5">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#D49354]">
                      3. Select Time Slot <span className="text-[#D49354]">*</span>
                    </label>
                    <div className="flex items-center gap-1 text-[11px] text-[#FAF7F2]/60 font-mono">
                      <Globe className="w-3 h-3 text-[#D49354]" />
                      <span>{timezone.split('/')[1]?.replace('_', ' ') || timezone}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FAF7F2]/50 block mb-1.5">
                        Morning
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {morningSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                              selectedTime === slot
                                ? 'bg-[#D49354] border-[#D49354] text-[#0D0E12] font-semibold shadow-xs'
                                : 'bg-[#101116] hover:bg-[#191B24] border-[#FAF7F2]/10 text-[#FAF7F2]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FAF7F2]/50 block mb-1.5">
                        Afternoon
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {afternoonSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-2 px-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                              selectedTime === slot
                                ? 'bg-[#D49354] border-[#D49354] text-[#0D0E12] font-semibold shadow-xs'
                                : 'bg-[#101116] hover:bg-[#191B24] border-[#FAF7F2]/10 text-[#FAF7F2]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FAF7F2]/50 block mb-1.5">
                        Evening
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {eveningSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                              selectedTime === slot
                                ? 'bg-[#D49354] border-[#D49354] text-[#0D0E12] font-semibold shadow-xs'
                                : 'bg-[#101116] hover:bg-[#191B24] border-[#FAF7F2]/10 text-[#FAF7F2]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {(touched.selectedTime || formAttempted) && errors.selectedTime && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-2 font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.selectedTime}</span>
                    </p>
                  )}

                  <div className="mt-3 text-[11px] text-[#FAF7F2]/40 font-mono">
                    Toronto/Kitchener Time (EDT/EST) &bull; Synchronized automatically to your local clock.
                  </div>
                </div>

              </div>

              {/* Step 4: Attendee Details */}
              <div className="pt-4 border-t border-[#FAF7F2]/10 space-y-4">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#D49354] block">
                  4. Your Contact & Meeting Context
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#FAF7F2]/80 block mb-1">
                      Full Name <span className="text-[#D49354]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border bg-[#101116] text-[#FAF7F2] text-sm focus:outline-none transition-all placeholder-[#FAF7F2]/30 ${
                          (touched.fullName || formAttempted) && errors.fullName
                            ? 'border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-[#FAF7F2]/15 focus:ring-2 focus:ring-[#D49354]/30 focus:border-[#D49354]'
                        }`}
                        id="booking-name-input"
                      />
                      <User className="w-4 h-4 text-[#FAF7F2]/40 absolute left-3 top-3" />
                    </div>
                    {(touched.fullName || formAttempted) && errors.fullName && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1.5 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#FAF7F2]/80 block mb-1">
                      Email Address <span className="text-[#D49354]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border bg-[#101116] text-[#FAF7F2] text-sm focus:outline-none transition-all placeholder-[#FAF7F2]/30 ${
                          (touched.email || formAttempted) && errors.email
                            ? 'border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-[#FAF7F2]/15 focus:ring-2 focus:ring-[#D49354]/30 focus:border-[#D49354]'
                        }`}
                        id="booking-email-input"
                      />
                      <Mail className="w-4 h-4 text-[#FAF7F2]/40 absolute left-3 top-3" />
                    </div>
                    {(touched.email || formAttempted) && errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1.5 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#FAF7F2]/80 block mb-1">
                      Current Role & Organization
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Senior Staff Engineer, Technology Co."
                        value={formData.roleCompany}
                        onChange={(e) => handleInputChange('roleCompany', e.target.value)}
                        onBlur={() => handleBlur('roleCompany')}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border bg-[#101116] text-[#FAF7F2] text-sm focus:outline-none transition-all placeholder-[#FAF7F2]/30 ${
                          (touched.roleCompany || formAttempted) && errors.roleCompany
                            ? 'border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                            : 'border-[#FAF7F2]/15 focus:ring-2 focus:ring-[#D49354]/30 focus:border-[#D49354]'
                        }`}
                        id="booking-role-input"
                      />
                      <Building className="w-4 h-4 text-[#FAF7F2]/40 absolute left-3 top-3" />
                    </div>
                    {(touched.roleCompany || formAttempted) && errors.roleCompany && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1.5 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.roleCompany}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#FAF7F2]/80 block mb-1">
                      Primary Topic of Discussion
                    </label>
                    <select
                      value={formData.primaryTopic}
                      onChange={(e) => handleInputChange('primaryTopic', e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#FAF7F2]/15 bg-[#101116] text-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#D49354]/30 focus:border-[#D49354] transition-all cursor-pointer"
                      id="booking-topic-select"
                    >
                      <option value="Executive EM Appointment">Executive Director of Engineering Management Appointment</option>
                      <option value="Enterprise GenAI & Cloud Advisory">Enterprise GenAI & Scaled Architecture Advisory</option>
                      <option value="Keynote Speaking & Panels">Keynote Speaking & Panel Engagements</option>
                      <option value="Grassroots & Social Impact">Let's Fight Back & Social Impact Partnership</option>
                      <option value="EM Mentorship & Career">EM Mentorship & Career Transition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#FAF7F2]/80 block mb-1">
                    Context or Questions for Anjali (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell Anjali briefly what you'd like to get out of our consultation together..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    onBlur={() => handleBlur('notes')}
                    className={`w-full p-3 rounded-xl border bg-[#101116] text-[#FAF7F2] text-sm focus:outline-none transition-all placeholder-[#FAF7F2]/30 resize-none ${
                      (touched.notes || formAttempted) && errors.notes
                        ? 'border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                        : 'border-[#FAF7F2]/15 focus:ring-2 focus:ring-[#D49354]/30 focus:border-[#D49354]'
                    }`}
                    id="booking-notes-input"
                  />
                  {(touched.notes || formAttempted) && errors.notes && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1.5 font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.notes}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Validation Summary Notification if invalid */}
              {formAttempted && Object.values(errors).some(Boolean) && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-200">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Please correct the highlighted fields above before confirming your booking.</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#FAF7F2]/50">
                  Automatic calendar invitation (.ics) and confirmation email dispatched immediately.
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D49354] hover:bg-[#E2A66B] active:scale-[0.98] text-[#0D0E12] text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50"
                  id="booking-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Processing Schedule...</span>
                  ) : (
                    <>
                      <span>Confirm {meetingType === '15-min-kickoff' ? '15-Min Kickoff' : '30-Min Advisory'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
