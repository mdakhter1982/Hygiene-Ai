import React from 'react';
import { ChevronDown, Phone, MessageSquare, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/servicesData';
import { HCLogo } from './HCLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenLocationModal: () => void;
  onOpenEnquiryModal: (serviceName?: string) => void;
  selectedLocation: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenLocationModal,
  onOpenEnquiryModal,
  selectedLocation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Commercial Services', path: '/commercial-services' },
    { label: 'Cleaning Services', path: '/cleaning-services' },
    { label: 'Pest Control', path: '/pest-control-services' },
    { label: 'Sanitization', path: '/sanitization-services' },
    { label: 'Painting Services', path: '/painting-services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Top micro announcement on desktop */}
      <div className="hidden md:flex justify-between items-center px-4 lg:px-8 py-1.5 bg-neutral-900 text-neutral-300 text-xs font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Kolkata's #1 Commercial & Deep Cleaning Specialist
          </span>
          <span className="text-neutral-500">|</span>
          <span>GST Invoicing Available for Corporate & Business Clients</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <span className="text-neutral-500">|</span>
          <button
            onClick={() => onOpenEnquiryModal()}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Request Instant Quote
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Left: Official HCS Cleaning Services Brand Logo */}
        <div
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 cursor-pointer select-none group"
          id="brand-logo-button"
        >
          {/* Authentic HCS Cleaning Services logo */}
          <HCLogo size="md" className="shrink-0" />

          {/* Text branding */}
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tight text-[#008be3] leading-none uppercase">
              HCS Cleaning Services
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
              Kolkata Deep Cleaning & Sanitization
            </span>
          </div>
        </div>

        {/* Center / Right: Location Selector & Desktop Nav */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Kolkata Location Selector - exact pill styling matching Geometric Balance */}
          <button
            onClick={onOpenLocationModal}
            id="kolkata-location-selector-btn"
            className="flex items-center bg-[#4a148c] hover:bg-[#38006b] active:scale-95 transition-all text-white px-3 py-1.5 rounded-full shadow-md cursor-pointer"
            title="Select Service Location in Kolkata"
          >
            <span className="mr-2 text-xs leading-none" role="img" aria-label="India flag">
              🇮🇳
            </span>
            <span className="text-xs font-semibold mr-1 truncate max-w-[90px] sm:max-w-[120px]">
              {selectedLocation || 'Kolkata'}
            </span>
            <ChevronDown className="w-3 h-3 text-white/90" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-purple-50 text-[#4a148c]'
                      : 'text-gray-600 hover:text-[#4a148c] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-2 ml-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="header-call-btn-desktop"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4a148c]" />
              <span>Call Us</span>
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn-desktop"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg cursor-pointer ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="py-2 border-b border-gray-100 mb-2">
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">
              Serving Kolkata & Surrounding Areas
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-800">
              <MapPin className="w-4 h-4 text-[#4a148c]" />
              <span>{selectedLocation} & Greater Kolkata</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLocationModal();
                }}
                className="text-xs text-[#4a148c] underline font-bold ml-auto"
              >
                Change Area
              </button>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-purple-50 text-[#4a148c]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4a148c]"></span>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-gray-100 flex gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 py-2.5 text-center rounded-lg border border-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="flex-1 py-2.5 text-center rounded-lg bg-[#4a148c] hover:bg-[#38006b] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Request Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
