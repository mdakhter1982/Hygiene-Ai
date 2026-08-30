export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: 'commercial' | 'cleaning' | 'pest-control' | 'sanitization' | 'painting';
  categoryTitle: string;
  imageUrl: string;
  shortDesc: string;
  description: string;
  included: string[];
  equipmentUsed?: string[];
  bestFor?: string;
  seoTitle?: string;
  metaDesc?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  services: ServiceItem[];
  viewAllText: string;
  viewAllSlug: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  service: string;
  location: string;
  preferredDate: string;
  message: string;
}
