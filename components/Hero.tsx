import React from 'react';
import SketchButton from './ui/SketchButton';
import { MathSymbols, CircleHighlight, ArrowDoodle } from './Doodles';
import { Pencil, BookOpen, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-grid-paper grid-bg">
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 text-blue-200 w-32 h-32 animate-pulse"><MathSymbols /></div>
      <div className="absolute bottom-20 right-10 text-yellow-200 w-48 h-48 hidden md:block"><MathSymbols /></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="relative inline-block">
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                Math doesn't have to be <span className="relative inline-block text-red-500">
                    scary!
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-300" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                </span>
              </h1>
              <CircleHighlight className="w-[120%] -left-4 -top-4 h-[120%] text-yellow-300 opacity-50" />
            </div>
            
            <p className="font-hand text-2xl md:text-3xl text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              From Algebra struggles to Calculus tears, I'm here to turn your confusion into confidence. 
              <br/><span className="text-blue-600 font-bold">Let's solve for X together.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact">
                <SketchButton variant="primary" className="w-full sm:w-auto">
                  Start Learning
                </SketchButton>
              </a>
              <a href="#about">
                <SketchButton variant="secondary" className="w-full sm:w-auto">
                  Meet Your Tutor
                </SketchButton>
              </a>
            </div>
            
            <div className="pt-4 flex items-center justify-center md:justify-start gap-2 text-slate-500 font-hand">
                <ArrowDoodle className="w-12 h-8 text-slate-400 -rotate-12" />
                <span>First session 50% off!</span>
            </div>
          </div>

          {/* Image/Graphic Side */}
          <div className="relative flex justify-center">
             {/* A composition of sticky notes and "polaroids" */}
             <div className="relative w-full max-w-md aspect-square">
                {/* Back card */}
                <div className="absolute top-0 right-0 w-64 h-72 bg-white p-2 shadow-sketch rotate-6 border border-slate-200 z-10">
                    <div className="w-full h-4/5 bg-blue-100 flex items-center justify-center overflow-hidden">
                        <Brain className="text-blue-400 opacity-50 w-24 h-24" />
                    </div>
                    <div className="h-1/5 flex items-center justify-center">
                        <p className="font-hand text-xl">Critical Thinking</p>
                    </div>
                </div>

                {/* Middle card */}
                <div className="absolute bottom-10 left-4 w-60 h-64 bg-marker-yellow p-4 shadow-sketch -rotate-3 z-20 flex flex-col items-center justify-center border-2 border-transparent">
                   <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="text-slate-700" />
                   </div>
                   <h3 className="font-heading text-2xl font-bold mb-2">Study Smart</h3>
                   <p className="font-hand text-center leading-tight">Customized lesson plans that fit your learning style.</p>
                </div>

                {/* Front element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-400 rounded-full flex items-center justify-center shadow-sketch z-30 border-2 border-black">
                   <span className="font-heading text-white text-2xl font-bold">A+</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;