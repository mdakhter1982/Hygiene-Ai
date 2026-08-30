import React from 'react';
import { X, ChevronRight, Sparkles, Building2, Bug, Shield, Paintbrush } from 'lucide-react';
import { ALL_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { HCLogo } from './HCLogo';

interface ServicesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectCategory: (path: string) => void;
}

export const ServicesDrawer: React.FC<ServicesDrawerProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onSelectCategory,
}) => {
  if (!isOpen) return null;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'commercial':
        return <Building2 className="w-4 h-4 text-purple-700" />;
      case 'pest-control':
        return <Bug className="w-4 h-4 text-red-600" />;
      case 'sanitization':
        return <Shield className="w-4 h-4 text-blue-600" />;
      case 'painting':
        return <Paintbrush className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-sm h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200"
      >
        {/* Drawer Header */}
        <div className="bg-[#4a148c] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <HCLogo size="sm" className="shrink-0" />
            <div>
              <h3 className="text-sm sm:text-base font-bold">HCS Cleaning Services</h3>
              <p className="text-[11px] text-purple-200">
                Kolkata All Services & Solutions
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

        {/* Scrollable Categories & Services */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {ALL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(cat.id)}
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    {cat.title}
                  </h4>
                </div>
                <button
                  onClick={() => {
                    onSelectCategory(cat.viewAllSlug);
                    onClose();
                  }}
                  className="text-[11px] font-bold uppercase tracking-wider text-[#4a148c] hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>View All</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {cat.services.slice(0, 6).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service);
                      onClose();
                    }}
                    className="text-left px-2.5 py-1.5 text-xs text-gray-700 hover:text-[#4a148c] hover:bg-purple-50 rounded-md transition-colors truncate border border-gray-100 cursor-pointer"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Footer inside drawer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex-shrink-0 text-center">
          <button
            onClick={() => {
              onSelectCategory('/commercial-services');
              onClose();
            }}
            className="w-full py-2.5 bg-[#4a148c] hover:bg-[#38006b] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Open Commercial Services Hub
          </button>
        </div>
      </div>
    </div>
  );
};
