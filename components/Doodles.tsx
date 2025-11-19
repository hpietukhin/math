import React from 'react';

export const SquiggleLine = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 20" className={`w-full h-auto ${className}`} preserveAspectRatio="none">
    <path d="M2,10 Q30,20 50,10 T100,10 T150,10 T198,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const MathSymbols = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute opacity-20 ${className}`}>
    <text x="10" y="30" className="font-hand text-4xl font-bold" fill="currentColor">∑</text>
    <text x="60" y="50" className="font-hand text-3xl font-bold" fill="currentColor">π</text>
    <text x="20" y="80" className="font-hand text-4xl font-bold" fill="currentColor">√</text>
    <text x="70" y="20" className="font-hand text-2xl font-bold" fill="currentColor">x²</text>
  </svg>
);

export const CircleHighlight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={`absolute pointer-events-none -z-10 ${className}`}>
    <path d="M10,50 Q50,5 150,20 Q190,30 180,60 Q160,90 80,85 Q20,80 10,50" fill="none" stroke="#facc15" strokeWidth="4" strokeOpacity="0.6" strokeLinecap="round" />
  </svg>
);

export const UnderlineDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 10" className={`absolute bottom-0 left-0 w-full ${className}`} preserveAspectRatio="none">
    <path d="M0,5 Q100,10 200,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ArrowDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className}>
    <path d="M10,25 Q50,10 85,25 M85,25 L75,15 M85,25 L75,35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);