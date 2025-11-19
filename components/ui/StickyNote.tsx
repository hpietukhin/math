import React from 'react';

interface StickyNoteProps {
  children: React.ReactNode;
  color?: 'yellow' | 'blue' | 'pink' | 'green';
  rotate?: 'left' | 'right' | 'none';
  className?: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({ 
  children, 
  color = 'yellow', 
  rotate = 'none',
  className = '' 
}) => {
  const colors = {
    yellow: 'bg-marker-yellow',
    blue: 'bg-marker-blue',
    pink: 'bg-marker-pink',
    green: 'bg-marker-green',
  };

  const rotations = {
    left: '-rotate-2',
    right: 'rotate-2',
    none: 'rotate-0',
  };

  return (
    <div className={`relative group ${rotations[rotate]} hover:rotate-0 transition-transform duration-300 ease-out z-10 ${className}`}>
      {/* Tape effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm z-20"></div>
      
      {/* Note body */}
      <div className={`${colors[color]} p-6 shadow-lg shadow-slate-400/50 min-h-[200px] flex flex-col relative`}>
        <div className="font-hand text-lg text-slate-800 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StickyNote;