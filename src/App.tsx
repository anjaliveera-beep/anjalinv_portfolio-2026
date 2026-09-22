import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

import { CustomCursor } from './components/editorial/CustomCursor';
import { EditorialNavbar } from './components/editorial/EditorialNavbar';
import { EditorialHero } from './components/editorial/EditorialHero';
import { EditorialAbout } from './components/editorial/EditorialAbout';
import { EditorialSelectedWork } from './components/editorial/EditorialSelectedWork';
import { EditorialRecognition } from './components/editorial/EditorialRecognition';
import { EditorialBookTalkSection } from './components/editorial/EditorialBookTalkSection';
import { EditorialContact } from './components/editorial/EditorialContact';
import { SlideNavigationDots } from './components/editorial/SlideNavigationDots';
import type { SlideItem } from './components/editorial/SlideNavigationDots';
import { FloatingBookTalkButton } from './components/editorial/FloatingBookTalkButton';
import { BookingModal } from './components/editorial/BookingModal';

const SLIDES_CONFIG: SlideItem[] = [
  { id: 'hero', number: '01', label: 'Overview', shortTitle: 'Executive Profile' },
  { id: 'about', number: '02', label: 'Ethos & Leadership', shortTitle: 'Leadership Pillars' },
  { id: 'work', number: '03', label: 'Selected Work', shortTitle: 'Systems & Impact' },
  { id: 'recognition', number: '04', label: 'Recognition', shortTitle: 'Industry Acclaim' },
  { id: 'book-talk', number: '05', label: 'Consultation', shortTitle: 'Executive Advisory' },
  { id: 'contact', number: '06', label: 'Inquiries', shortTitle: 'Executive Colophon' },
];

const slideTransitionVariants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.55, ease: 'easeOut' },
      scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? '-35%' : '35%',
    opacity: 0,
    scale: 0.95,
    transition: {
      y: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.45, ease: 'easeIn' },
      scale: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  }),
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const transitionLockRef = useRef<boolean>(false);
  const touchStartYRef = useRef<number>(0);
  const wheelAccumulatorRef = useRef<number>(0);
  const wheelResetTimeoutRef = useRef<number | null>(null);

  const totalSlides = SLIDES_CONFIG.length;

  const navigateToSlide = useCallback((targetIndex: number) => {
    if (targetIndex === currentSlide || targetIndex < 0 || targetIndex >= totalSlides) {
      return;
    }

    if (transitionLockRef.current) return;

    transitionLockRef.current = true;
    setIsTransitioning(true);
    setDirection(targetIndex > currentSlide ? 1 : -1);
    setCurrentSlide(targetIndex);

    setTimeout(() => {
      transitionLockRef.current = false;
      setIsTransitioning(false);
    }, 800);
  }, [currentSlide, totalSlides]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      navigateToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, navigateToSlide]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      navigateToSlide(currentSlide - 1);
    }
  }, [currentSlide, navigateToSlide]);

  // Wheel listener with boundary detection for internally scrollable sections
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If booking modal is open, let user scroll the modal content freely
      if (isBookingModalOpen) return;

      // Check if target is inside an internally scrollable container
      let targetEl = e.target as HTMLElement | null;
      let scrollableContainer: HTMLElement | null = null;

      while (targetEl && targetEl !== document.body) {
        const overflowY = window.getComputedStyle(targetEl).overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && targetEl.scrollHeight > targetEl.clientHeight + 4) {
          scrollableContainer = targetEl;
          break;
        }
        targetEl = targetEl.parentElement;
      }

      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;

        // If scrolling down and container has more content below
        if (isScrollingDown && scrollTop + clientHeight < scrollHeight - 12) {
          return; // Allow internal element scroll
        }
        // If scrolling up and container has more content above
        if (isScrollingUp && scrollTop > 12) {
          return; // Allow internal element scroll
        }
      }

      // Prevent native document scrolling
      e.preventDefault();

      if (transitionLockRef.current) return;

      // Accumulate wheel delta for natural gesture feel (trackpad vs notch wheel)
      wheelAccumulatorRef.current += e.deltaY;

      if (wheelResetTimeoutRef.current) {
        window.clearTimeout(wheelResetTimeoutRef.current);
      }
      wheelResetTimeoutRef.current = window.setTimeout(() => {
        wheelAccumulatorRef.current = 0;
      }, 200);

      const THRESHOLD = 35;
      if (Math.abs(wheelAccumulatorRef.current) > THRESHOLD) {
        if (wheelAccumulatorRef.current > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
        wheelAccumulatorRef.current = 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelResetTimeoutRef.current) {
        window.clearTimeout(wheelResetTimeoutRef.current);
      }
    };
  }, [goToNextSlide, goToPrevSlide, isBookingModalOpen]);

  // URL hash synchronization on initial load & slide change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const targetIdx = SLIDES_CONFIG.findIndex((s: SlideItem) => s.id === hash);
        if (targetIdx !== -1 && targetIdx !== currentSlide) {
          navigateToSlide(targetIdx);
        }
      }
    };

    // On initial mount, check if there is an existing hash
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) {
      const targetIdx = SLIDES_CONFIG.findIndex((s: SlideItem) => s.id === initialHash);
      if (targetIdx !== -1 && targetIdx !== 0) {
        navigateToSlide(targetIdx);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when slide changes without breaking history
  useEffect(() => {
    const targetHash = `#${SLIDES_CONFIG[currentSlide].id}`;
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, [currentSlide]);

  // Touch Swipe for mobile devices with internal scroll protection
  useEffect(() => {
    let touchStartTarget: HTMLElement | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      if (isBookingModalOpen) return;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartTarget = e.target as HTMLElement | null;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isBookingModalOpen) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchEndY - touchStartYRef.current;

      // Check if target is inside an internally scrollable container
      let targetEl = touchStartTarget;
      let scrollableContainer: HTMLElement | null = null;

      while (targetEl && targetEl !== document.body) {
        const overflowY = window.getComputedStyle(targetEl).overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && targetEl.scrollHeight > targetEl.clientHeight + 4) {
          scrollableContainer = targetEl;
          break;
        }
        targetEl = targetEl.parentElement;
      }

      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isSwipingUp = diffY < 0; // Wants to scroll down
        const isSwipingDown = diffY > 0; // Wants to scroll up

        // If swiping up and container still has content below, don't change slide
        if (isSwipingUp && scrollTop + clientHeight < scrollHeight - 20) {
          return;
        }
        // If swiping down and container still has content above, don't change slide
        if (isSwipingDown && scrollTop > 20) {
          return;
        }
      }

      const SWIPE_THRESHOLD = 55;
      if (Math.abs(diffY) > SWIPE_THRESHOLD) {
        if (diffY < 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNextSlide, goToPrevSlide, isBookingModalOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isBookingModalOpen) return;

      // Don't hijack if user is typing in form field
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.tagName === 'SELECT' ||
          activeEl.getAttribute('contenteditable') === 'true')
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Spacebar
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case 'Home':
          e.preventDefault();
          navigateToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          navigateToSlide(totalSlides - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, navigateToSlide, totalSlides, isBookingModalOpen]);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  // Render slide content by index
  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <EditorialHero onOpenBooking={handleOpenBooking} />;
      case 1:
        return <EditorialAbout />;
      case 2:
        return <EditorialSelectedWork />;
      case 3:
        return <EditorialRecognition />;
      case 4:
        return <EditorialBookTalkSection onOpenBooking={handleOpenBooking} />;
      case 5:
        return <EditorialContact onOpenBooking={handleOpenBooking} />;
      default:
        return null;
    }
  };

  const currentSlideInfo = SLIDES_CONFIG[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-[#0D0E12] text-[#FAF7F2] font-sans antialiased selection:bg-[#D49354]/30 selection:text-[#FAF7F2] overflow-hidden bg-grain select-none">
      
      {/* Studio Follower Cursor */}
      <CustomCursor />

      {/* Atmospheric Ambient Lighting Gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[25%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(212,147,84,0.06)_0%,transparent_70%)] blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(212,147,84,0.05)_0%,transparent_70%)] blur-3xl transform translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Fixed Editorial Top Navbar */}
      <EditorialNavbar
        onOpenBooking={handleOpenBooking}
        currentSlide={currentSlide}
        onNavigateSlide={navigateToSlide}
      />

      {/* Fixed Vertical Navigation Dots on Right Flank */}
      <SlideNavigationDots
        slides={SLIDES_CONFIG}
        currentSlide={currentSlide}
        onSelectSlide={navigateToSlide}
      />

      {/* Persistent Floating "Book a Talk" Action CTA */}
      <FloatingBookTalkButton
        onOpenBooking={handleOpenBooking}
        currentSlideIndex={currentSlide}
        bookingSlideIndex={4}
      />

      {/* Full-Screen Section Slide Deck Stage */}
      <main className="relative z-10 w-full h-full pt-16 sm:pt-20 pb-12 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideTransitionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
          >
            {renderSlideContent(currentSlide)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sleek Bottom Status Bar & Keyboard Navigation Controls */}
      <footer className="fixed bottom-0 inset-x-0 z-30 h-10 px-6 sm:px-12 flex items-center justify-between border-t border-[#FAF7F2]/8 bg-[#0D0E12]/80 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#FAF7F2]/60">
        
        {/* Slide Counter & Section Descriptor */}
        <div className="flex items-center gap-3">
          <span className="text-[#D49354] font-bold">
            {String(currentSlide + 1).padStart(2, '0')}
            <span className="text-[#FAF7F2]/30 font-normal"> / {String(totalSlides).padStart(2, '0')}</span>
          </span>
          <span className="hidden sm:inline w-px h-3 bg-[#FAF7F2]/15" />
          <span className="hidden sm:inline uppercase text-[#FAF7F2]/80 tracking-widest">
            {currentSlideInfo.label}
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="hidden md:flex items-center gap-2 w-44">
          <div className="w-full h-[2px] bg-[#FAF7F2]/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#D49354]"
              initial={false}
              animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Navigation Gestures Hint & Step Controls */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-[10px] text-[#FAF7F2]/40">
            Scroll, swipe or use ↑ / ↓ keys
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlide === 0 || isTransitioning}
              className="w-6 h-6 rounded flex items-center justify-center border border-[#FAF7F2]/10 text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:border-[#FAF7F2]/30 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
              aria-label="Previous section"
              title="Previous section (↑)"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={goToNextSlide}
              disabled={currentSlide === totalSlides - 1 || isTransitioning}
              className="w-6 h-6 rounded flex items-center justify-center border border-[#FAF7F2]/10 text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:border-[#FAF7F2]/30 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
              aria-label="Next section"
              title="Next section (↓)"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </footer>

      {/* Executive Direct Booking Embed Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />

    </div>
  );
}
