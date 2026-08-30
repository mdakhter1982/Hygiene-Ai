import React from 'react';
import { Home, Phone, Headset, Grid } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface MobileBottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onRequestCall: () => void;
  onOpenServices: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPath,
  onNavigate,
  onRequestCall,
  onOpenServices,
}) => {
  const isHome = currentPath === '/';

  return (
    <nav
      id="mobile-fixed-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-4 h-16 items-center">
        {/* 1. Home */}
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          id="mobile-nav-home-btn"
          className={`flex flex-col items-center justify-center h-full w-full transition-colors cursor-pointer ${
            isHome ? 'text-[#4a148c]' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" strokeWidth={isHome ? 2.4 : 1.8} />
          <span className="text-[10px] mt-0.5 font-bold uppercase tracking-tight">Home</span>
        </button>

        {/* 2. Services */}
        <button
          onClick={onOpenServices}
          id="mobile-nav-services-btn"
          className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700 active:scale-95 transition-all cursor-pointer"
        >
          <Grid className="w-5 h-5 mb-0.5" strokeWidth={1.8} />
          <span className="text-[10px] mt-0.5 font-bold uppercase tracking-tight">Services</span>
        </button>

        {/* 3. Call Us */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="mobile-nav-call-btn"
          className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 mb-0.5" strokeWidth={1.8} />
          <span className="text-[10px] mt-0.5 font-bold uppercase tracking-tight">Call Us</span>
        </a>

        {/* 4. Request Call */}
        <button
          onClick={onRequestCall}
          id="mobile-nav-request-call-btn"
          className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700 active:scale-95 transition-all cursor-pointer"
        >
          <Headset className="w-5 h-5 mb-0.5" strokeWidth={1.8} />
          <span className="text-[10px] mt-0.5 font-bold uppercase tracking-tight">Request Call</span>
        </button>
      </div>
    </nav>
  );
};
