import React from 'react';
import { User, CheckCircle2 } from 'lucide-react';
import { SquiggleLine } from './Doodles';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-paper relative overflow-hidden">
       {/* Dotted background pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white border-2 border-slate-200 p-8 md:p-12 rounded-xl shadow-sm relative">
            {/* Decorative Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-slate-200/80 rotate-1 shadow-sm"></div>

            <div className="text-center mb-10">
                <h2 className="font-heading text-4xl font-bold text-slate-800 inline-block relative">
                    Who is the Math Whiz?
                    <SquiggleLine className="absolute -bottom-2 left-0 w-full text-yellow-400 h-3" />
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-48 h-48 bg-blue-100 rounded-full border-4 border-slate-800 shadow-sketch flex items-center justify-center overflow-hidden relative">
                        <User size={80} className="text-blue-500" />
                        {/* This would be a real photo in production */}
                        <div className="absolute bottom-4 right-8 w-full text-center font-hand text-xs bg-yellow-200 px-2 py-1 border border-black -rotate-6"> "Hi there!" </div>
                    </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-6">
                    <p className="font-body text-lg text-slate-600 leading-relaxed">
                        Hello! I'm Alex, a certified math enthusiast with over 7 years of tutoring experience. 
                        I believe that math isn't just about memorizing formulas—it's about understanding the 
                        <span className="font-hand font-bold text-blue-600 text-xl mx-1">language of the universe</span>.
                    </p>
                    <p className="font-body text-lg text-slate-600 leading-relaxed">
                        My goal is to create a stress-free environment where it's okay to make mistakes. 
                        In fact, mistakes are just proof that you're trying! Whether you need help with 
                        homework, exam prep, or just getting ahead, I've got your back.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {[
                            "M.S. in Mathematics",
                            "Patient & Friendly",
                            "7+ Years Experience",
                            "Personalized Plans"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 font-hand text-lg text-slate-700">
                                <CheckCircle2 className="text-green-500" size={20} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;