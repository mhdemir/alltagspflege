import React from 'react';
import { Star } from 'lucide-react';
import { getRelativeTimeString } from '../../data/googleReviews';

/**
 * GoogleReviewCard - Kundenbewertungskarte im warmen Naturton-Design.
 * - Dynamische Datumsanzeige (aktualisiert sich automatisch im Zeitverlauf).
 * - Ohne Google-Logo und ohne Avatar-Bild.
 * - Heller Naturton (#FDFCF7 / Warm-Weiß) als Kontrast zum dunklen Hintergrund.
 */
const GoogleReviewCard = ({ review }) => {
  const relativeDate = review.publishedAt 
    ? getRelativeTimeString(review.publishedAt) 
    : review.date;

  return (
    <article
      className="w-[300px] sm:w-[340px] flex-shrink-0 bg-[#FDFCF7] text-[#2D2E28] rounded-2xl p-6 border border-[#E5DEC9] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between select-none text-left"
      role="group"
      aria-roledescription="review"
      aria-label={`Erfahrungsbericht von ${review.author}`}
    >
      <div>
        {/* Kopfzeile: Name, dynamisches Datum & Sterne */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-extrabold text-base text-[#2D2E28] tracking-tight">
              {review.author}
            </h3>
            <p className="text-xs text-[#2D2E28]/55 font-medium mt-0.5">
              {relativeDate}
            </p>
          </div>

          {/* 5 Sterne im warmen Goldgelb */}
          <div className="flex items-center gap-1" aria-label="5 von 5 Sternen">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className="text-amber-400 fill-amber-400 drop-shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Highlight-Tag im Naturgrün der Seite */}
        {review.highlight && (
          <div className="mb-3">
            <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#84A07F]/15 text-[#4B6348] border border-[#84A07F]/20">
              {review.highlight}
            </span>
          </div>
        )}

        {/* Rezensionstext */}
        <p className="text-sm text-[#2D2E28]/85 leading-relaxed font-normal italic">
          "{review.text}"
        </p>
      </div>
    </article>
  );
};

export default GoogleReviewCard;
