import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/servicesData';
import { ChevronLeft, ChevronRight, Star, Quote, Play } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="mb-10 sm:mb-14 px-1" id="tst-testimonials">
      {/* Header matching screenshot WA0004 & Geometric Balance */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
            TST Testimonials
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
            Verified Reviews Across Kolkata
          </p>
        </div>
        {/* Navigation arrows < > */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-[#4a148c] active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-[#4a148c] active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Avatar preview */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-neutral-200 border-2 border-purple-100 flex-shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-[#4a148c] flex items-center justify-center text-white font-bold text-xl">
              {current.name.charAt(0)}
            </div>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white/95 flex items-center justify-center shadow-xs">
                <Play className="w-3.5 h-3.5 text-[#4a148c] fill-current ml-0.5" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider ml-1.5">
                5.0 Verified Review
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-2">
              "{current.comment}"
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <div>
                <span className="font-bold text-gray-900">{current.name}</span>
                <span className="mx-1.5">•</span>
                <span>{current.location}</span>
              </div>
              <span className="text-[#4a148c] font-bold uppercase tracking-wider hidden sm:inline-block">
                Service: {current.service}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
