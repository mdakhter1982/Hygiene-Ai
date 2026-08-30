import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceCategorySection } from './components/ServiceCategorySection';
import { CategoryHubPage } from './components/CategoryHubPage';
import { CommercialServicesPage } from './components/CommercialServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { EnquiryModal } from './components/EnquiryModal';
import { LocationModal } from './components/LocationModal';
import { ServicesDrawer } from './components/ServicesDrawer';
import { Footer } from './components/Footer';
import { AboutView, ContactView } from './components/AboutContactViews';
import { TestimonialSection } from './components/TestimonialSection';
import { HCLogo } from './components/HCLogo';
import {
  BUSINESS_INFO,
  ALL_CATEGORIES,
  COMMERCIAL_SERVICES,
  CLEANING_SERVICES,
  PEST_CONTROL_SERVICES,
  SANITIZATION_SERVICES,
  PAINTING_SERVICES,
  buildWhatsAppLink,
} from './data/servicesData';
import { ServiceItem } from './types';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Building2, MapPin } from 'lucide-react';

export default function App() {
  // Normalize initial pathname
  const getInitialPath = () => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p && p !== '' ? p : '/';
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [selectedLocation, setSelectedLocation] = useState<string>('Kolkata');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryService, setEnquiryService] = useState<string>('');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [isServicesDrawerOpen, setIsServicesDrawerOpen] = useState<boolean>(false);

  // Sync state with browser navigation history
  const navigate = useCallback((path: string, replace = false) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      if (replace) {
        window.history.replaceState({ path }, '', path);
      } else {
        window.history.pushState({ path }, '', path);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Listen to popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.path) {
        setCurrentPath(event.state.path);
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handler for selecting any service card across any category
  const handleSelectService = (service: ServiceItem) => {
    const category = ALL_CATEGORIES.find((c) => c.id === service.category);
    const catSlug = category ? category.slug : 'commercial-services';
    navigate(`/${catSlug}/${service.slug}`);
  };

  // Determine current active view based on currentPath
  const renderContent = () => {
    // 1. Static informational views
    if (currentPath === '/about') {
      return (
        <AboutView
          onBack={() => navigate('/')}
          onRequestQuote={() => {
            setEnquiryService('General Deep Cleaning');
            setIsEnquiryModalOpen(true);
          }}
        />
      );
    }

    if (currentPath === '/contact') {
      return (
        <ContactView
          onBack={() => navigate('/')}
          onRequestQuote={() => {
            setEnquiryService('General Deep Cleaning');
            setIsEnquiryModalOpen(true);
          }}
        />
      );
    }

    const pathParts = currentPath.split('/').filter(Boolean);

    // 2. Dedicated Service Detail Page for ANY category: e.g. /commercial-services/:slug or /cleaning-services/:slug
    if (pathParts.length === 2) {
      const [catSlug, serviceSlug] = pathParts;
      const matchedCategory = ALL_CATEGORIES.find((c) => c.slug === catSlug);
      if (matchedCategory) {
        const matchedService = matchedCategory.services.find((s) => s.slug === serviceSlug);
        if (matchedService) {
          return (
            <ServiceDetailPage
              service={matchedService}
              onBack={() => navigate(`/${matchedCategory.slug}`)}
              onViewAllCategory={() => navigate(`/${matchedCategory.slug}`)}
              onRequestQuote={(serviceName) => {
                setEnquiryService(serviceName);
                setIsEnquiryModalOpen(true);
              }}
            />
          );
        }
      }
    }

    // 3. Category Hub Page for ANY category: e.g. /commercial-services, /cleaning-services, /pest-control-services, /sanitization-services, /painting-services
    if (pathParts.length === 1) {
      const [catSlug] = pathParts;
      const matchedCategory = ALL_CATEGORIES.find((c) => c.slug === catSlug);
      if (matchedCategory) {
        return (
          <CategoryHubPage
            category={matchedCategory}
            onSelectService={handleSelectService}
            onRequestQuote={(serviceName) => {
              setEnquiryService(serviceName || matchedCategory.title);
              setIsEnquiryModalOpen(true);
            }}
            onNavigateHome={() => navigate('/')}
          />
        );
      }
    }

    // Default Home Page: Main View matching screenshots WA0004, WA0005, WA0006
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
        {/* Simple top hero banner with HCS Cleaning Services official logo */}
        <div className="mb-6 p-4 sm:p-6 bg-[#4a148c] text-white rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <HCLogo size="lg" className="shrink-0 bg-white/10 p-1 rounded-xl backdrop-blur-xs" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                  Kolkata #1
                </span>
                <span className="text-[11px] text-purple-200 uppercase tracking-wider">
                  Serving {selectedLocation} & Surrounds
                </span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                HCS Cleaning Services
              </h1>
              <p className="text-xs sm:text-sm text-purple-200 mt-0.5 max-w-xl">
                Commercial & Domestic Deep Cleaning • Single-Disc Floor Scrubbing • Pest Control • Commercial Sanitization • Waterproof Painting
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-wider px-4 py-2 rounded-full text-xs sm:text-sm shadow-xs hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4a148c]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setEnquiryService('Commercial & Deep Cleaning');
                setIsEnquiryModalOpen(true);
              }}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase tracking-wider px-4 py-2 rounded-full text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Instant WhatsApp Quote</span>
            </button>
          </div>
        </div>

        {/* 1. Commercial Services Section (Top Priority as requested) */}
        <ServiceCategorySection
          id="commercial-services-section"
          title="Commercial Services"
          subtitle="Specialized cleaning for offices, hotels, hospitals & cloud kitchens"
          services={COMMERCIAL_SERVICES}
          viewAllText="View All Commercial Services"
          viewAllSlug="/commercial-services"
          onSelectService={handleSelectService}
          onViewAll={() => navigate('/commercial-services')}
        />

        {/* 2. Cleaning Services Section (Matching screenshot WA0006) */}
        <ServiceCategorySection
          id="cleaning-services-section"
          title="Cleaning Services"
          subtitle="Top rated residential and home deep cleaning solutions"
          services={CLEANING_SERVICES}
          viewAllText="View All Cleaning Services"
          viewAllSlug="/cleaning-services"
          onSelectService={handleSelectService}
          onViewAll={() => navigate('/cleaning-services')}
        />

        {/* 3. Pest Control Services Section (Matching screenshot WA0005) */}
        <ServiceCategorySection
          id="pest-control-services-section"
          title="Pest Control Services"
          subtitle="Odorless, certified pest management solutions"
          services={PEST_CONTROL_SERVICES}
          viewAllText="View All Pest Control Services"
          viewAllSlug="/pest-control-services"
          onSelectService={handleSelectService}
          onViewAll={() => navigate('/pest-control-services')}
        />

        {/* 4. Sanitization Services Section (Matching screenshot WA0004) */}
        <ServiceCategorySection
          id="sanitization-services-section"
          title="Sanitization Services"
          subtitle="Hospital-grade ULV fogging and sterilization"
          services={SANITIZATION_SERVICES}
          viewAllText="View All Sanitization Services"
          viewAllSlug="/sanitization-services"
          onSelectService={handleSelectService}
          onViewAll={() => navigate('/sanitization-services')}
        />

        {/* 5. Painting Services Section (Matching screenshot WA0005) */}
        <ServiceCategorySection
          id="painting-services-section"
          title="Painting Services"
          subtitle="Interior, exterior and waterproof painting experts"
          services={PAINTING_SERVICES}
          viewAllText="View All Painting Services"
          viewAllSlug="/painting-services"
          onSelectService={handleSelectService}
          onViewAll={() => navigate('/painting-services')}
        />

        {/* 6. Customer Testimonials Section (Matching screenshot WA0004: "TST Testimonial") */}
        <TestimonialSection />

        {/* Local Kolkata Assurance Banner */}
        <section className="mb-10 bg-purple-50 border border-purple-100 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4a148c] text-white flex items-center justify-center font-bold flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                Operating Across Kolkata & Greater Bengal
              </h3>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">
                Park Circus • Salt Lake • New Town • Ballygunge • Alipore • Howrah • Gariahat
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="text-xs font-bold uppercase tracking-wider text-[#4a148c] bg-white border border-purple-200 hover:bg-purple-100 px-4 py-2 rounded-full transition-colors cursor-pointer shadow-2xs"
          >
            Check Service Availability
          </button>
        </section>
      </div>
    );
  };

  // Find if current path is a specific service for dynamic WhatsApp prefill
  const getActiveServiceName = () => {
    const pathParts = currentPath.split('/').filter(Boolean);
    if (pathParts.length === 2) {
      const [catSlug, serviceSlug] = pathParts;
      const matchedCategory = ALL_CATEGORIES.find((c) => c.slug === catSlug);
      if (matchedCategory) {
        const s = matchedCategory.services.find((item) => item.slug === serviceSlug);
        if (s) return s.name;
      }
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans antialiased selection:bg-purple-900 selection:text-white">
      {/* Header with authentic TST / Hygiene Deep Cleaning logo and Kolkata location selector */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenEnquiryModal={(srv) => {
          setEnquiryService(srv || 'Commercial Deep Cleaning');
          setIsEnquiryModalOpen(true);
        }}
        selectedLocation={selectedLocation}
      />

      {/* Main Page Body: Content padded at bottom on mobile (pb-24) so content is never hidden behind bottom nav or WhatsApp button */}
      <main className="flex-1 pb-24 md:pb-12">{renderContent()}</main>

      {/* Footer with address, business info, quick links */}
      <Footer
        onNavigate={navigate}
        onRequestQuote={() => {
          setEnquiryService('General Commercial Cleaning');
          setIsEnquiryModalOpen(true);
        }}
      />

      {/* Floating WhatsApp Button - fixed bottom-left on mobile matching screenshot WA0004/05/06 */}
      <FloatingWhatsApp currentServiceName={getActiveServiceName()} />

      {/* Fixed Bottom Mobile Navigation matching reference: Home, Call Us, Request Call, Services */}
      <MobileBottomNav
        currentPath={currentPath}
        onNavigate={navigate}
        onRequestCall={() => {
          setEnquiryService('Commercial Deep Cleaning');
          setIsEnquiryModalOpen(true);
        }}
        onOpenServices={() => setIsServicesDrawerOpen(true)}
      />

      {/* Modals & Drawers */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialService={enquiryService}
        defaultLocation={selectedLocation}
      />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedLocation={selectedLocation}
        onSelectLocation={(area) => setSelectedLocation(area)}
      />

      <ServicesDrawer
        isOpen={isServicesDrawerOpen}
        onClose={() => setIsServicesDrawerOpen(false)}
        onSelectService={handleSelectService}
        onSelectCategory={(path) => navigate(path)}
      />
    </div>
  );
}
