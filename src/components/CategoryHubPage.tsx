import React from 'react';
import { ServiceCategory, ServiceItem } from '../types';
import { BUSINESS_INFO, buildWhatsAppLink, CATEGORY_META } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
  Wrench,
  Building2,
  Bug,
  Paintbrush,
} from 'lucide-react';

interface CategoryHubPageProps {
  category: ServiceCategory;
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceName?: string) => void;
  onNavigateHome: () => void;
}

export const CategoryHubPage: React.FC<CategoryHubPageProps> = ({
  category,
  onSelectService,
  onRequestQuote,
  onNavigateHome,
}) => {
  const meta = CATEGORY_META[category.id] || {
    badge: 'Hygiene Deep Cleaning Services Kolkata',
    subtitle: `Professional ${category.title} in Kolkata with certified operators, modern machinery, and eco-friendly products.`,
    serviceCountText: `${category.services.length} Services Available`,
    benefits: [
      {
        title: 'Professional Service Squad',
        desc: '100% background-checked, trained, and uniformed personnel equipped with PPE.',
        icon: 'shield',
      },
      {
        title: 'Flexible Scheduling',
        desc: 'Convenient morning, afternoon, and off-hours appointments across Kolkata.',
        icon: 'clock',
      },
      {
        title: 'Quality Guarantee',
        desc: 'Standard operating procedures with supervisor inspection and written warranties.',
        icon: 'award',
      },
    ],
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'commercial':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'pest-control':
        return <Bug className="w-3.5 h-3.5" />;
      case 'sanitization':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'painting':
        return <Paintbrush className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const renderBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-5 h-5" />;
      case 'award':
        return <Award className="w-5 h-5" />;
      case 'wrench':
        return <Wrench className="w-5 h-5" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const getBenefitIconBg = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return 'bg-purple-100 text-purple-800';
      case 'award':
        return 'bg-blue-100 text-blue-800';
      case 'wrench':
        return 'bg-amber-100 text-amber-800';
      case 'sparkles':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-emerald-100 text-emerald-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs text-gray-500 mb-4 px-1">
        <button
          onClick={onNavigateHome}
          className="hover:text-purple-800 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 font-semibold">{category.title}</span>
      </nav>

      {/* Main Page Title & Subtitle */}
      <div className="mb-6 sm:mb-8 px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#4a148c] text-xs font-bold uppercase tracking-wider mb-2">
          {getCategoryIcon(category.id)}
          <span>{meta.badge}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
          {category.title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1.5 max-w-3xl">
          {meta.subtitle}
        </p>

        {/* Quick Contact CTAs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
          <a
            href={buildWhatsAppLink(category.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-[#4a148c]" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
          <button
            onClick={() => onRequestQuote(category.title)}
            className="inline-flex items-center gap-2 bg-[#4a148c] hover:bg-[#38006b] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
          >
            <span>Request Inspection / Quote</span>
          </button>
        </div>
      </div>

      {/* Primary Category Service Grid - EXACT 3-column mobile layout matching reference screenshots */}
      <section className="mb-10 sm:mb-14">
        <div className="mb-4 px-1 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
            All {category.title}
          </h2>
          <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            {meta.serviceCountText || `${category.services.length} Services Available`}
          </span>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 border-t border-l border-[#d5d5d5] bg-white">
          {category.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => onSelectService(service)}
            />
          ))}

          {/* View All Card at the end */}
          <ServiceCard
            isViewAllCard
            viewAllLabel={`View All ${category.title}`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </section>

      {/* Highlights / Why Choose Section */}
      <section className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 sm:p-8 mb-12">
        <div className="max-w-3xl mb-6">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
            Why Kolkata Chooses Hygiene Deep Cleaning Services for {category.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Certified techniques, verified operators, transparent upfront pricing, and 100% satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {meta.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 flex gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${getBenefitIconBg(
                  benefit.icon
                )}`}
              >
                {renderBenefitIcon(benefit.icon)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kolkata Coverage Areas Pill List */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Coverage Across Kolkata:
          </h3>
          <div className="flex flex-wrap gap-1.5 text-xs text-gray-600">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white px-2.5 py-1 rounded-md border border-gray-200 text-neutral-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
