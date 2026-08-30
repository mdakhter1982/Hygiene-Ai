import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/servicesData';
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Sparkles,
  CalendarCheck,
  MapPin,
  ClipboardList,
  Wrench,
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onViewAllCommercial?: () => void;
  onViewAllCategory?: () => void;
  onRequestQuote: (serviceName: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onViewAllCommercial,
  onViewAllCategory,
  onRequestQuote,
}) => {
  const handleViewAll = onViewAllCategory || onViewAllCommercial || onBack;

  // Update document title for SEO
  useEffect(() => {
    const originalTitle = document.title;
    document.title = service.seoTitle || `${service.name} in Kolkata | Hygiene Deep Cleaning Services`;
    return () => {
      document.title = originalTitle;
    };
  }, [service]);

  // Exact pre-filled WhatsApp enquiry message format
  const whatsappUrl = buildWhatsAppLink(
    undefined,
    `Hi, I want to enquire about ${service.name} in Kolkata. Please share pricing and availability.`
  );

  const getWhyChoosePoints = () => {
    if (service.category === 'pest-control') {
      return [
        { title: 'Government-Approved Chemicals', desc: 'WHO and CIB-approved Bayer / Syngenta odorless formulations' },
        { title: 'No Need to Empty Kitchen', desc: 'Herbal dot gel technology for cockroaches works without mess' },
        { title: 'Written Service Warranty', desc: 'Enjoy guaranteed peace of mind with 90-day to 5-year written warranties' },
        { title: 'Safe for Children & Pets', desc: 'Non-toxic, food-safe applications with zero lingering fumes' },
        { title: 'Certified Exterminators', desc: 'Experienced technicians trained in IPM (Integrated Pest Management)' },
        { title: 'All Kolkata Coverage', desc: 'Instant response across Salt Lake, New Town, South & North Kolkata' },
      ];
    }
    if (service.category === 'painting') {
      return [
        { title: '100% Dustless Machine Sanding', desc: 'Integrated vacuum sanders trap 99% plaster dust for a clean home' },
        { title: 'Genuine Branded Paints', desc: 'Directly sourced Asian Paints, Berger, and Dulux luxury emulsions' },
        { title: 'Up to 10-Year Waterproofing', desc: 'Elastomeric membranes permanently terminating dampness & nona' },
        { title: 'Punctual Handover Guarantee', desc: 'Dedicated project managers ensure swift, on-time project completion' },
        { title: 'Furniture & Floor Masking', desc: 'Full plastic protective sheeting protecting your valuables' },
        { title: 'Transparent Area Measurement', desc: 'Laser distance measuring tools for 100% accurate billing' },
      ];
    }
    if (service.category === 'sanitization') {
      return [
        { title: '99.999% Pathogen Knockdown', desc: 'Kills coronavirus, bacteria, and airborne fungal spores' },
        { title: 'ULV Cold Fogging Technology', desc: 'Sub-micron droplets penetrate microscopic cracks and fabric pores' },
        { title: 'Non-Corrosive Formulations', desc: 'Safe for computers, servers, TVs, and delicate interior fabrics' },
        { title: 'Official Compliance Certificate', desc: 'Digital certificate for corporate audits and safety regulations' },
        { title: 'Rapid 45-Min Re-Entry', desc: 'No chemical residue or persistent odor after quick drying' },
        { title: 'Trained & PPE-Equipped Crew', desc: 'Operators wear medical grade PPE kits and respirators' },
      ];
    }
    // Default commercial & domestic cleaning
    return [
      { title: 'Professional Cleaning Team', desc: 'Trained, uniformed, and police-verified squad' },
      { title: 'Advanced Machinery', desc: 'Single-disc rotary scrubbers, injection extractors & HEPA vacuums' },
      { title: 'Eco-Friendly Cleaning Products', desc: 'Non-toxic, safe, and certified hospital-grade Taski sanitizers' },
      { title: 'Flexible Scheduling', desc: 'Night shifts, early mornings, and weekend operational slots' },
      { title: 'Standard Operating Procedures', desc: 'Five-star hotel grade protocols and multi-point checklists' },
      { title: 'All Kolkata Service Coverage', desc: 'Serving Park Circus, Salt Lake, New Town, Ballygunge & Howrah' },
    ];
  };

  const whyChoosePoints = getWhyChoosePoints();

  const howItWorksSteps = [
    { step: '1', title: 'Contact us', desc: 'Connect with us via WhatsApp or direct phone call with your requirement.' },
    { step: '2', title: 'Discuss requirement', desc: 'Share your property size, photos, or schedule a free on-site survey.' },
    { step: '3', title: 'Get quotation', desc: 'Receive a transparent, competitive estimate with GST invoice option.' },
    { step: '4', title: 'Schedule service', desc: 'Pick your preferred date, morning slot, or off-hours shift.' },
    { step: '5', title: 'Professional execution', desc: 'Our equipped squad arrives punctually and performs thorough service.' },
    { step: '6', title: 'Supervisor inspection', desc: 'Walkthrough with our supervisor to guarantee 100% satisfaction.' },
  ];

  const getIncludedSectionTitle = () => {
    switch (service.category) {
      case 'pest-control':
        return 'Treatment Protocol & What Is Included';
      case 'painting':
        return 'Scope of Work & What Is Included';
      case 'sanitization':
        return 'Sanitization Protocol & What Is Included';
      default:
        return 'What We Clean / What Is Included';
    }
  };

  const getEquipmentSectionTitle = () => {
    switch (service.category) {
      case 'pest-control':
        return 'Certified Chemicals & Equipment Deployed:';
      case 'painting':
        return 'Professional Equipment & Genuine Paints Deployed:';
      case 'sanitization':
        return 'Hospital-Grade Disinfectants & Equipment Deployed:';
      default:
        return 'Professional Equipment & Chemicals Deployed:';
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Top Back Link matching prompt requirement */}
      <div className="mb-4">
        <button
          onClick={onBack}
          id="back-to-services-top-btn"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-[#4a148c] transition-colors cursor-pointer py-1.5 px-1 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>← Back to {service.categoryTitle}</span>
        </button>
      </div>

      {/* Hero Header & Service Image */}
      <header className="mb-6">
        <div className="relative w-full h-56 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-neutral-100 mb-6 border border-gray-200 shadow-xs">
          <img
            src={service.imageUrl}
            alt={`${service.name} in Kolkata`}
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <div className="text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#4a148c] text-white text-[10px] font-bold uppercase tracking-widest mb-2 shadow-xs">
                {service.categoryTitle}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
                {service.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Short Professional Description */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-2xs">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            {service.description || service.shortDesc}
          </p>

          {service.bestFor && (
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-start gap-2 text-xs sm:text-sm text-gray-600">
              <span className="font-bold text-[#4a148c] uppercase tracking-wider text-xs flex-shrink-0">Recommended for:</span>
              <span>{service.bestFor}</span>
            </div>
          )}

          {/* Direct CTA Bar right under description */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="service-detail-whatsapp-top-cta"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>💬 WhatsApp Enquiry Now</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="service-detail-call-top-cta"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 active:scale-95 text-gray-900 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-[#4a148c]" />
              <span>📞 Call Now ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      </header>

      {/* Section: What We Clean / What Is Included */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <ClipboardList className="w-5 h-5 text-[#4a148c]" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight">
            {getIncludedSectionTitle()}
          </h2>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-2xs">
          <ul className="space-y-3">
            {service.included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {service.equipmentUsed && service.equipmentUsed.length > 0 && (
            <div className="mt-5 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                <Wrench className="w-3.5 h-3.5 text-gray-500" />
                <span>{getEquipmentSectionTitle()}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.equipmentUsed.map((eq, i) => (
                  <span
                    key={i}
                    className="inline-block bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md text-xs font-medium border border-neutral-200"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section: Why Choose Hygiene Deep Cleaning Services? */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight mb-3">
          Why Choose Hygiene Deep Cleaning Services?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whyChoosePoints.map((point, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-4 rounded-xl border border-gray-200 bg-neutral-50 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: How It Works */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight mb-3">
          How It Works
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-3 p-2">
                <div className="w-8 h-8 rounded-full bg-[#4a148c] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Box: GET A QUOTE ON WHATSAPP */}
      <section className="bg-[#4a148c] text-white rounded-xl p-5 sm:p-8 mb-8 text-center shadow-md">
        <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">
          GET A QUOTE ON WHATSAPP
        </h2>
        <p className="text-xs sm:text-sm text-purple-100 max-w-xl mx-auto mb-6">
          Direct instant quotes for {service.name} across all Kolkata areas. Speak with our operations team directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Button: 💬 WhatsApp Now */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-now-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold px-7 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>💬 WhatsApp Now</span>
          </a>

          {/* 📞 Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="cta-call-now-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 active:scale-95 font-bold px-7 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-[#4a148c]" />
            <span>📞 Call Now: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>

      {/* Bottom Navigation Links */}
      <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={handleViewAll}
          id="back-to-category-bottom-btn"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4a148c] hover:text-[#38006b] transition-colors cursor-pointer py-2 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>← View All {service.categoryTitle}</span>
        </button>

        <button
          onClick={() => onRequestQuote(service.name)}
          className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-gray-900 underline cursor-pointer"
        >
          Book via Online Enquiry Form
        </button>
      </div>
    </article>
  );
};
