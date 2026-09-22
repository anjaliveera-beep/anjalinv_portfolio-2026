import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorMode, setCursorMode] = useState<'default' | 'pointer' | 'text' | 'badge'>('default');
  const [badgeText, setBadgeText] = useState<string>('VIEW');
  const [isClientActive, setIsClientActive] = useState<boolean>(false);
  const isTouchRef = useRef<boolean>(false);

  // Position motion values
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Weighted smooth trailing physics for the outer ring/badge
  const springRingConfig = { damping: 24, stiffness: 240, mass: 0.4 };
  const ringX = useSpring(mouseX, springRingConfig);
  const ringY = useSpring(mouseY, springRingConfig);

  // Ultra-responsive spring for the pinpoint dot
  const springDotConfig = { damping: 30, stiffness: 600, mass: 0.1 };
  const dotX = useSpring(mouseX, springDotConfig);
  const dotY = useSpring(mouseY, springDotConfig);

  useEffect(() => {
    // Detect touch to avoid rendering on pure touch screens
    const handleTouchStart = () => {
      isTouchRef.current = true;
      setIsClientActive(false);
    };

    let initialized = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchRef.current) {
        isTouchRef.current = false;
      }

      // First time moving the mouse: snap spring directly to cursor position to prevent flying in from offscreen
      if (!initialized) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        initialized = true;
        setIsClientActive(true);
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }

      if (!isClientActive) {
        setIsClientActive(true);
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Text inputs, textareas, contenteditable -> completely hide custom cursor so native I-beam is unobscured
      if (target.closest('input, textarea, [contenteditable="true"]')) {
        setCursorMode('text');
        return;
      }

      // 2. Elements with contextual badge trigger (e.g. data-cursor="VIEW" or data-cursor="EXPLORE")
      const badgeTarget = target.closest<HTMLElement>('[data-cursor]');
      if (badgeTarget) {
        const text = badgeTarget.getAttribute('data-cursor') || 'VIEW';
        setBadgeText(text);
        setCursorMode('badge');
        return;
      }

      // 3. Clickable links, buttons, select, or elements with cursor-pointer
      if (target.closest('a, button, [role="button"], select, .cursor-pointer')) {
        setCursorMode('pointer');
        return;
      }

      // 4. Default idle mode
      setCursorMode('default');
    };

    const handleMouseLeave = () => {
      setIsClientActive(false);
    };

    const handleMouseEnter = () => {
      setIsClientActive(true);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, ringX, ringY, dotX, dotY, isClientActive]);

  const isBadge = cursorMode === 'badge';
  const isPointer = cursorMode === 'pointer';
  const isText = cursorMode === 'text';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${
        isClientActive && !isText ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Follower Ring / Morphing Capsule Badge */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isBadge ? (badgeText.length > 5 ? 92 : 76) : isPointer ? 48 : 32,
          height: isBadge ? 34 : isPointer ? 48 : 32,
          borderRadius: isBadge ? 17 : 9999,
          backgroundColor: isBadge
            ? '#15171E'
            : isPointer
            ? 'rgba(212, 147, 84, 0.15)'
            : 'rgba(250, 247, 242, 0.05)',
          borderColor: isBadge
            ? '#D49354'
            : isPointer
            ? 'rgba(212, 147, 84, 0.8)'
            : 'rgba(250, 247, 242, 0.25)',
          boxShadow: isBadge
            ? '0 12px 28px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 147, 84, 0.5)'
            : isPointer
            ? '0 0 20px rgba(212, 147, 84, 0.35)'
            : 'none',
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 280,
          mass: 0.35,
        }}
        className="fixed top-0 left-0 border flex items-center justify-center will-change-transform"
      >
        <AnimatePresence mode="wait">
          {isBadge && (
            <motion.span
              key={badgeText}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.15 }}
              className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#FAF7F2] select-none uppercase pl-0.5"
            >
              {badgeText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* High-Precision Pinpoint Dot (hides when badge capsule is active) */}
      {!isBadge && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isPointer ? 0.5 : 1,
            backgroundColor: isPointer ? '#D49354' : '#FAF7F2',
          }}
          transition={{ duration: 0.12 }}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full will-change-transform shadow-[0_0_6px_rgba(212,147,84,0.6)]"
        />
      )}
    </div>
  );
};
