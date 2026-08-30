import React from 'react';
import { ALL_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { CategoryHubPage } from './CategoryHubPage';

interface CommercialServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceName?: string) => void;
  onNavigateHome: () => void;
}

export const CommercialServicesPage: React.FC<CommercialServicesPageProps> = ({
  onSelectService,
  onRequestQuote,
  onNavigateHome,
}) => {
  const commercialCategory =
    ALL_CATEGORIES.find((c) => c.id === 'commercial') || ALL_CATEGORIES[0];

  return (
    <CategoryHubPage
      category={commercialCategory}
      onSelectService={onSelectService}
      onRequestQuote={onRequestQuote}
      onNavigateHome={onNavigateHome}
    />
  );
};
