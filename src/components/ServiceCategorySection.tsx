import React from 'react';
import { ServiceItem } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServiceCategorySectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  services: ServiceItem[];
  viewAllText?: string;
  viewAllSlug?: string;
  onSelectService: (service: ServiceItem) => void;
  onViewAll?: () => void;
  columnsDesktop?: 3 | 4;
}

export const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({
  id,
  title,
  subtitle,
  services,
  viewAllText,
  onSelectService,
  onViewAll,
  columnsDesktop = 4,
}) => {
  return (
    <section id={id || `category-${title.toLowerCase().replace(/\s+/g, '-')}`} className="mb-8 sm:mb-12">
      {/* Category Heading matching Geometric Balance */}
      <div className="mb-4 px-1">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3-Column Service Grid on Mobile, 4 columns on Desktop */}
      <div
        className={`grid grid-cols-3 ${
          columnsDesktop === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4 lg:grid-cols-4'
        } border-t border-l border-[#d5d5d5] bg-white`}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={() => onSelectService(service)}
          />
        ))}

        {/* View All Card at the end of category if specified */}
        {viewAllText && (
          <ServiceCard
            isViewAllCard
            viewAllLabel={viewAllText}
            onClick={() => {
              if (onViewAll) {
                onViewAll();
              }
            }}
          />
        )}
      </div>
    </section>
  );
};
