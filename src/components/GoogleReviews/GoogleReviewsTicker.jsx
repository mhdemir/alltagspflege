import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../../data/googleReviews';
import GoogleReviewCard from './GoogleReviewCard';

/**
 * GoogleReviewsTicker - Dynamisches Fließband im Naturton-Design.
 * - Endlosschleife mit automatischem Weitertransport.
 * - Direkte Drag- & Swipe-Interaktion (Festhalten & Ziehen mit Maus oder Finger).
 * - Vor- & Zurück-Buttons zur Navigation.
 * - Automatischer Weiterlauf nach Interaktionsende.
 */
const GoogleReviewsTicker = ({ variant = 'dark' }) => {
  const tickerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs für Pointer-Tracking ohne Re-Render-Lags
  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    hasMoved: false,
  });
  const autoResumeTimer = useRef(null);

  // Mehrfache Wiederholung für nahtlosen Endlos-Loop
  const loopReviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  // Automatischer Fließband-Loop
  useEffect(() => {
    let animId;
    const container = tickerRef.current;
    if (!container) return;

    const speed = 0.8; // Ruhige, dynamische Fließband-Geschwindigkeit

    const tick = () => {
      if (!isPaused && !isDragging && container) {
        container.scrollLeft += speed;
        const oneSetWidth = container.scrollWidth / 4;

        if (container.scrollLeft >= oneSetWidth * 2) {
          container.scrollLeft -= oneSetWidth;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  // Pointer Down: Festhalten zum Ziehen
  const handlePointerDown = (e) => {
    const container = tickerRef.current;
    if (!container) return;

    setIsDragging(true);
    setIsPaused(true);
    clearTimeout(autoResumeTimer.current);

    dragInfo.current = {
      startX: e.clientX,
      scrollLeft: container.scrollLeft,
      hasMoved: false,
    };

    if (container.setPointerCapture) {
      container.setPointerCapture(e.pointerId);
    }
  };

  // Pointer Move: Verschieben des Fließbands beim Ziehen
  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const container = tickerRef.current;
    if (!container) return;

    const dx = e.clientX - dragInfo.current.startX;
    if (Math.abs(dx) > 3) {
      dragInfo.current.hasMoved = true;
    }

    container.scrollLeft = dragInfo.current.scrollLeft - dx;

    // Endlos-Begrenzungen während des Ziehens nahtlos ausgleichen
    const oneSetWidth = container.scrollWidth / 4;
    if (container.scrollLeft >= oneSetWidth * 2) {
      container.scrollLeft -= oneSetWidth;
      dragInfo.current.scrollLeft -= oneSetWidth;
    } else if (container.scrollLeft < oneSetWidth) {
      container.scrollLeft += oneSetWidth;
      dragInfo.current.scrollLeft += oneSetWidth;
    }
  };

  // Pointer Up: Loslassen und automatisches Weiterlaufen starten
  const handlePointerUp = (e) => {
    if (!isDragging) return;
    const container = tickerRef.current;
    setIsDragging(false);

    if (container && container.releasePointerCapture) {
      try {
        container.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }

    // Nach kurzer Ruhepause läuft das Fließband automatisch weiter
    clearTimeout(autoResumeTimer.current);
    autoResumeTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 1800);
  };

  // Manuelle Button-Steuerung (Schritte nach links oder rechts)
  const handleStep = useCallback((direction) => {
    const container = tickerRef.current;
    if (!container) return;

    setIsPaused(true);
    clearTimeout(autoResumeTimer.current);

    const stepWidth = 340;
    container.scrollBy({
      left: direction === 'left' ? -stepWidth : stepWidth,
      behavior: 'smooth',
    });

    autoResumeTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 2200);
  }, []);

  return (
    <section
      className="w-full py-6 relative select-none overflow-hidden"
      aria-label="Kundenbewertungen Fließband"
      onMouseEnter={() => !isDragging && setIsPaused(true)}
      onMouseLeave={() => !isDragging && setIsPaused(false)}
    >
      {/* Header mit sanften Naturtönen & Buttons */}
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84A07F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#84A07F]" />
          </span>
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FDFCF7]/90">
            Erfahrungen unserer Familien <span className="opacity-50 hidden sm:inline">| Bochum & Umgebung</span>
          </p>
        </div>

        {/* Buttons für Richtungswechsel */}
        <div className="flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={() => handleStep('left')}
            aria-label="Vorherige Bewertungen"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#84A07F] text-[#FDFCF7] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => handleStep('right')}
            aria-label="Nächste Bewertungen"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#84A07F] text-[#FDFCF7] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Fließband-Laufbereich mit Drag-Geste */}
      <div
        ref={tickerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`flex gap-5 overflow-x-hidden no-scrollbar px-6 py-3 transition-colors ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ touchAction: 'pan-y' }}
      >
        {loopReviews.map((review, idx) => (
          <div key={`${review.id}-${idx}`} className="transform hover:-translate-y-1 transition-transform duration-200">
            <GoogleReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleReviewsTicker;
