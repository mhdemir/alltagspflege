import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_RATING_SUMMARY } from '../../data/googleReviews';

/**
 * GoogleRatingBadge - Vertrauenssiegel im harmonischen Naturton-Design.
 * Passend zur Corporate Identity mit warmen Goldsternen und dezentem Glassmorphism.
 */
const GoogleRatingBadge = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer select-none group ${className}`}
      role="status"
      aria-label={`${GOOGLE_RATING_SUMMARY.score} von 5 Sternen basierend auf ${GOOGLE_RATING_SUMMARY.reviewCount} Kundenbewertungen`}
    >
      {/* 5 Sterne im warmen Goldton */}
      <div className="flex items-center gap-1" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={15}
            className="text-amber-300 fill-amber-300 drop-shadow-sm"
          />
        ))}
      </div>

      {/* Textliche Bewertung im hellen Naturton */}
      <div className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#FDFCF7] tracking-wide">
        <span className="text-amber-200 font-black">{GOOGLE_RATING_SUMMARY.score.toFixed(1)}</span>
        <span className="text-white/40">•</span>
        <span className="text-[#FDFCF7]/90 font-medium">Hervorragend ({GOOGLE_RATING_SUMMARY.reviewCount}+ Bewertungen)</span>
      </div>
    </div>
  );
};

export default GoogleRatingBadge;
