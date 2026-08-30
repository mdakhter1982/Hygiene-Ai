import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/servicesData';
import { HCLogo } from './HCLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-24 md:pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          {/* Col 1: Business Brand & Address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HCLogo size="md" className="shrink-0" />
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  HCS Cleaning Services
                </h3>
                <p className="text-neutral-400 text-xs">
                  Kolkata Deep Cleaning & Sanitization
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Kolkata's trusted commercial, industrial, and domestic deep cleaning specialist. Licensed pest control, marble polishing, and sanitization services.
            </p>

            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/commercial-services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Commercial Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cleaning-services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Domestic Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/pest-control-services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Pest Control</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/sanitization-services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Sanitization</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/painting-services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Painting Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-purple-400" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial Specializations */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Commercial Specialities
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>Hotel Deep Cleaning Kolkata</li>
              <li>Office Workstation & Carpet Scrubbing</li>
              <li>Hospital Terminal Sterilization</li>
              <li>Cloud Kitchen Heavy Degreasing</li>
              <li>Marble Crystal Polish & Diamond Buffing</li>
              <li>Post-Construction Project Cleaning</li>
              <li>Industrial Warehouse Floor Scrubbing</li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct CTAs */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs text-white bg-neutral-800 hover:bg-neutral-700 p-2.5 rounded-lg border border-neutral-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[10px] text-neutral-400">Call Directly</div>
                  <div className="font-bold">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white bg-[#25D366] hover:bg-[#20ba59] p-2.5 rounded-lg font-bold shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant Enquiry</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-xs text-neutral-300 hover:text-white pt-1"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <button
                onClick={onRequestQuote}
                className="w-full py-2.5 bg-[#4a148c] hover:bg-[#38006b] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Get a Free Quotation
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Park Circus, Kolkata 700017</span>
            <span>•</span>
            <span>Commercial & Residential Sanitation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
