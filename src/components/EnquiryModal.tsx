import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, MapPin, Calendar, User, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, COMMERCIAL_SERVICES, CLEANING_SERVICES, PEST_CONTROL_SERVICES, SANITIZATION_SERVICES, PAINTING_SERVICES, buildEnquiryWhatsAppLink } from '../data/servicesData';
import { HCLogo } from './HCLogo';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  defaultLocation?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  defaultLocation = 'Kolkata',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [location, setLocation] = useState(defaultLocation);
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    } else if (!service) {
      setService('Office Deep Cleaning');
    }
  }, [initialService]);

  useEffect(() => {
    if (defaultLocation) {
      setLocation(defaultLocation);
    }
  }, [defaultLocation]);

  if (!isOpen) return null;

  const allServicesList = [
    ...COMMERCIAL_SERVICES.map((s) => ({ group: 'Commercial Services', name: s.name })),
    ...CLEANING_SERVICES.map((s) => ({ group: 'Cleaning Services', name: s.name })),
    ...PEST_CONTROL_SERVICES.map((s) => ({ group: 'Pest Control Services', name: s.name })),
    ...SANITIZATION_SERVICES.map((s) => ({ group: 'Sanitization Services', name: s.name })),
    ...PAINTING_SERVICES.map((s) => ({ group: 'Painting Services', name: s.name })),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    const whatsappLink = buildEnquiryWhatsAppLink({
      service: service || 'General Deep Cleaning',
      name: name.trim(),
      phone: phone.trim(),
      location: location.trim() || 'Kolkata',
      preferredDate: preferredDate.trim() || 'Earliest available date',
      message: message.trim() || 'Please share pricing quotation and availability.',
    });

    setSubmitted(true);

    // Open WhatsApp in new window/tab
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      onClose();
      setSubmitted(false);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative animate-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="bg-[#4a148c] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HCLogo size="sm" className="shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">
                Request a Call / Quotation
              </h3>
              <p className="text-xs text-purple-200 mt-0.5">
                HCS Cleaning Services • Kolkata
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Phone Call Reminder */}
        <div className="bg-emerald-50 px-5 py-2.5 border-b border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
          <span className="font-medium">Need immediate assistance?</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="font-bold flex items-center gap-1 text-emerald-800 hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {BUSINESS_INFO.phone}
          </a>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98746 XXXXX"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Service Required
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                {allServicesList.map((s, idx) => (
                  <option key={idx} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Location in Kolkata
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Park Circus, Salt Lake"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Preferred Service Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="e.g. Tomorrow morning / 28 August"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Requirement / Message
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. 2500 sq ft office, needs carpet wash and floor scrubbing"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
          </div>

          {/* WhatsApp Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              id="submit-enquiry-whatsapp-btn"
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Enquiry on WhatsApp</span>
            </button>
            <p className="text-[11px] text-gray-500 text-center mt-1.5">
              Directly opens WhatsApp with your pre-filled inquiry details.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
