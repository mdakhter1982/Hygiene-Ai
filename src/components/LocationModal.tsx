import React, { useState } from 'react';
import { X, MapPin, Check, Search } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation: string;
  onSelectLocation: (area: string) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  selectedLocation,
  onSelectLocation,
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredAreas = BUSINESS_INFO.serviceAreas.filter((area) =>
    area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative animate-in zoom-in-95 duration-150"
      >
        {/* Header matching purple branding */}
        <div className="bg-[#4a148c] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇮🇳</span>
            <div>
              <h3 className="text-base font-bold">Select Kolkata Service Area</h3>
              <p className="text-xs text-purple-200">
                100% Service Coverage Across Kolkata
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

        {/* Search */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search area in Kolkata (e.g. Salt Lake, Park Circus)..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a148c]"
            />
          </div>
        </div>

        {/* Location List */}
        <div className="p-3 max-h-72 overflow-y-auto space-y-1">
          {/* Entire Kolkata option */}
          <button
            onClick={() => {
              onSelectLocation('Kolkata');
              onClose();
            }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
              selectedLocation === 'Kolkata'
                ? 'bg-purple-50 text-[#4a148c] font-bold'
                : 'hover:bg-gray-100 text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4a148c]" />
              <span>All Kolkata (Greater Metropolitan)</span>
            </div>
            {selectedLocation === 'Kolkata' && (
              <Check className="w-4 h-4 text-[#4a148c]" />
            )}
          </button>

          {filteredAreas.map((area) => {
            const isSelected = selectedLocation === area;
            return (
              <button
                key={area}
                onClick={() => {
                  onSelectLocation(area);
                  onClose();
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-purple-50 text-[#4a148c] font-bold'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>{area}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#4a148c]" />}
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 text-center text-xs text-gray-600">
          📍 Base Hub: 6/H/5 Chamru Khansama Ln, Park Circus, Kolkata 700017
        </div>
      </div>
    </div>
  );
};
