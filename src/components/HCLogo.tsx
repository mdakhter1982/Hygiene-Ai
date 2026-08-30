import React, { useState } from 'react';

interface HCLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const HCLogo: React.FC<HCLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem with Official HCS Cleaning Service Logo */}
      <div
        className={`relative rounded-xl overflow-hidden shrink-0 bg-white border border-sky-100 shadow-xs ${sizeClasses[size]} transition-transform duration-200 hover:scale-105`}
        style={{
          boxShadow: '0 2px 8px rgba(0, 139, 227, 0.08)',
        }}
      >
        {!imgError ? (
          <img
            src="/hcs_logo.jpg"
            alt="HCS Cleaning Services Logo"
            className="w-full h-full object-contain p-0.5"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-Fidelity Vector Representation of HCS Cleaning Service Logo */
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full select-none bg-white p-2"
            aria-label="HCS Cleaning Services Emblem"
          >
            <defs>
              {/* Sparkle shape definition */}
              <g id="sparkleHCS">
                <path
                  d="M 0,-18 Q 0,0 18,0 Q 0,0 0,18 Q 0,0 -18,0 Q 0,0 0,-18 Z"
                  fill="#008be3"
                />
              </g>
            </defs>

            {/* Sparkles */}
            <use href="#sparkleHCS" x="250" y="140" transform="scale(0.8)" />
            <use href="#sparkleHCS" x="320" y="105" transform="scale(0.9)" />
            <use href="#sparkleHCS" x="390" y="210" transform="scale(0.85)" />
            <use href="#sparkleHCS" x="415" y="240" transform="scale(0.7)" />

            {/* House Silhouette on the right */}
            <g fill="#008be3">
              {/* House Roof & Body */}
              <polygon points="345,120 270,185 285,185 285,270 415,270 415,185 430,185" />
              {/* Chimney */}
              <rect x="380" y="130" width="18" height="35" />
              {/* Window cutout (4-pane white) */}
              <rect x="333" y="165" width="10" height="10" fill="#ffffff" rx="1" />
              <rect x="347" y="165" width="10" height="10" fill="#ffffff" rx="1" />
              <rect x="333" y="179" width="10" height="10" fill="#ffffff" rx="1" />
              <rect x="347" y="179" width="10" height="10" fill="#ffffff" rx="1" />

              {/* Diagonal Broom Handle */}
              <polygon points="270,90 282,96 345,230 333,234" fill="#008be3" />

              {/* Broom Sweeping Head & Dynamic Bristles */}
              <path
                d="M 330,225 C 342,215 352,225 356,238 C 362,246 390,260 410,270 C 375,295 330,290 290,290 C 310,275 322,250 330,225 Z"
                fill="#008be3"
              />
              {/* Bristle white curve accents */}
              <path
                d="M 336,242 C 345,260 365,270 395,273"
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 326,252 C 334,268 350,276 375,278"
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 318,264 C 324,274 336,280 355,283"
                stroke="#ffffff"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            </g>

            {/* HCS Bold Text */}
            <text
              x="65"
              y="280"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="125"
              fill="#008be3"
              letterSpacing="-3"
            >
              HCS
            </text>

            {/* CLEANING Text */}
            <text
              x="65"
              y="355"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="800"
              fontSize="52"
              fill="#008be3"
              letterSpacing="2"
            >
              CLEANING
            </text>

            {/* SERVICE Text */}
            <text
              x="130"
              y="405"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="700"
              fontSize="40"
              fill="#008be3"
              letterSpacing="7"
            >
              SERVICE
            </text>
          </svg>
        )}
      </div>

      {/* Brand Text labels (optional) */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-sm sm:text-base font-black tracking-tight text-[#008be3] leading-none uppercase">
              HCS Cleaning Services
            </span>
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
            Kolkata Deep Cleaning & Sanitization
          </span>
        </div>
      )}
    </div>
  );
};

export const HCSLogo = HCLogo;
