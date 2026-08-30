import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Sparkles, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service?: ServiceItem;
  isViewAllCard?: boolean;
  viewAllLabel?: string;
  onClick: () => void;
  onWhatsAppEnquiry?: (e: React.MouseEvent) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isViewAllCard = false,
  viewAllLabel,
  onClick,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // If it's the "View All ..." card - Geometric Balance signature inverted purple tile
  if (isViewAllCard) {
    return (
      <div
        onClick={onClick}
        id={`view-all-${viewAllLabel?.toLowerCase().replace(/\s+/g, '-')}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        className="group relative aspect-square flex flex-col items-center justify-center p-2.5 sm:p-4 text-center cursor-pointer bg-[#4a148c] hover:bg-[#38006b] active:bg-[#2e0059] text-white transition-colors border-r border-b border-[#d5d5d5] select-none"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 border-2 border-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
        </div>
        <p className="text-[10px] font-bold text-center uppercase tracking-tighter leading-tight text-white px-1">
          {viewAllLabel || 'View All Services'}
        </p>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div
      onClick={onClick}
      id={`service-card-${service.slug}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="group relative aspect-square flex flex-col items-center justify-center p-2.5 sm:p-4 text-center cursor-pointer bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors border-r border-b border-[#d5d5d5] select-none"
    >
      {/* Circular Service Image */}
      <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-200">
        {!imgError ? (
          <img
            src={service.imageUrl}
            alt={service.name}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover transition-opacity duration-200 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-50 text-[#4a148c]">
            <Sparkles className="w-6 h-6" />
          </div>
        )}
      </div>

      {/* Service Name Centered Underneath */}
      <p className="text-[10px] sm:text-[11px] font-bold text-center leading-tight text-gray-700 group-hover:text-black uppercase tracking-tight line-clamp-2 max-w-[95%]">
        {service.name}
      </p>
    </div>
  );
};
