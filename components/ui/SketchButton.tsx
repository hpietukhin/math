import React from 'react';

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

const SketchButton: React.FC<SketchButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-hand text-xl px-6 py-2 border-2 border-black rounded-lg transition-all transform duration-200 active:translate-x-[3px] active:translate-y-[3px] active:shadow-sketch-hover";
  
  const variants = {
    primary: "bg-blue-500 text-white shadow-sketch hover:-translate-y-1 hover:shadow-sketch-lg",
    secondary: "bg-white text-black shadow-sketch hover:-translate-y-1 hover:shadow-sketch-lg",
    accent: "bg-yellow-400 text-black shadow-sketch hover:-translate-y-1 hover:shadow-sketch-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SketchButton;