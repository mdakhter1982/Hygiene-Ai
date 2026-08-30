import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/servicesData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, CheckCircle2, Building, Award, Users } from 'lucide-react';
import { HCLogo } from './HCLogo';

interface AboutViewProps {
  onBack: () => void;
  onRequestQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBack, onRequestQuote }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="text-xs font-bold uppercase tracking-wider text-[#4a148c] hover:underline mb-4 cursor-pointer"
      >
        ← Back to Services
      </button>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-2xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6 pb-6 border-b border-gray-100">
          <HCLogo size="xl" className="shrink-0" />
          <div>
            <span className="text-xs font-bold text-[#4a148c] uppercase tracking-wider">
              Official Profile & Brand Identity
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              HCS Cleaning Services Kolkata
            </h1>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-0.5">
              Commercial & Domestic Deep Cleaning Solutions
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 tracking-tight mb-4">
          Kolkata's Premier Commercial & Specialized Deep Cleaning Partner
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Established in Kolkata with an unwavering commitment to hospital-grade hygiene, <strong>HCS Cleaning Services</strong> delivers cutting-edge deep cleaning, single-disc rotary machine scrubbing, eco-friendly pest management, and marble restoration across Kolkata and adjacent industrial districts.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Whether restoring heavily trafficked corporate headquarters in Salt Lake Sector V, degreasing commercial cloud kitchens in Rajarhat, or buffing Italian marble in Ballygunge estates, our trained crew operates with certified high-CFM vacuum systems, single-disc rotary scrubbers, and eco-friendly biodegradable solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">100% Verified Squad</h4>
              <p className="text-xs text-gray-600 mt-0.5">Police verified, uniformed, and background-checked technicians.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building className="w-6 h-6 text-[#4a148c] flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">Commercial Grade</h4>
              <p className="text-xs text-gray-600 mt-0.5">Equipped for corporate offices, hospitals, and luxury hotels.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">GST Compliance</h4>
              <p className="text-xs text-gray-600 mt-0.5">Full corporate billing with legitimate tax invoices provided.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#4a148c] text-white rounded-2xl p-6 sm:p-8 text-center shadow-md">
        <h2 className="text-xl font-bold uppercase tracking-tight mb-2">Need Commercial Service in Kolkata?</h2>
        <p className="text-xs sm:text-sm text-purple-100 mb-6 max-w-lg mx-auto">
          Contact our operations coordinator directly for immediate consultation or site inspection.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-[#4a148c]" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

interface ContactViewProps {
  onBack: () => void;
  onRequestQuote: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBack, onRequestQuote }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="text-xs font-bold uppercase tracking-wider text-[#4a148c] hover:underline mb-4 cursor-pointer"
      >
        ← Back to Services
      </button>

      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
          Contact Hygiene Deep Cleaning Services
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">
          Reach our Park Circus office or contact our mobile service teams across Kolkata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Contact info card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-2xs space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
            Head Office Kolkata
          </h2>

          <div className="flex items-start gap-3 text-sm text-gray-700">
            <MapPin className="w-5 h-5 text-[#4a148c] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">{BUSINESS_INFO.name}</p>
              <p>{BUSINESS_INFO.address.line1}</p>
              <p>{BUSINESS_INFO.address.line2}</p>
              <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Phone className="w-5 h-5 text-[#4a148c] flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Direct Phone Booking</p>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#4a148c] font-bold hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">WhatsApp Instant Helpline</p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                +91 98746 25758 (Click to Chat)
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Mail className="w-5 h-5 text-[#4a148c] flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Email Enquiries</p>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-600 hover:underline">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Operational Hours</p>
              <p className="text-xs text-gray-600">{BUSINESS_INFO.operatingHours}</p>
            </div>
          </div>
        </div>

        {/* Quick action card */}
        <div className="bg-purple-50 rounded-2xl border border-purple-100 p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#4a148c] uppercase tracking-wider">
              Instant Quotation & Booking
            </span>
            <h3 className="text-lg font-bold text-purple-950 mt-1 mb-2">
              Book a Cleaning Inspection in Kolkata
            </h3>
            <p className="text-xs text-purple-800 leading-relaxed mb-4">
              Fill out our simple form to receive immediate quotes via WhatsApp or receive a callback from our supervisor within 15 minutes.
            </p>
            <div className="space-y-2 text-xs text-purple-900 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero obligation free quote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Transparent fixed pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Flexible payment options</span>
              </div>
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="w-full py-3 bg-[#4a148c] hover:bg-[#38006b] text-white font-bold uppercase tracking-wider rounded-full text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
          >
            Open Online Request Form
          </button>
        </div>
      </div>
    </div>
  );
};
