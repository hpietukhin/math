import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "High School Junior",
    text: "I was failing Algebra II, but after 2 months with Alex, I actually got an A on my final! The sketches really helped.",
    color: "bg-white"
  },
  {
    name: "Mike T.",
    role: "Parent",
    text: "Best tutor we've found. He makes math relatable for my son who usually hates schoolwork. Highly recommended!",
    color: "bg-yellow-50"
  },
  {
    name: "Emily R.",
    role: "College Freshman",
    text: "Calculus was a nightmare until Alex explained limits using pizza analogies. Now it makes total sense.",
    color: "bg-blue-50"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                    Class Notes
                </h2>
                <p className="font-hand text-xl text-slate-500">What students and parents are saying</p>
            </div>
            <div className="hidden md:block">
                 <div className="flex text-yellow-400 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={32} />)}
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
                key={i} 
                className={`${t.color} p-6 border-2 border-slate-800 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm shadow-sketch hover:shadow-sketch-lg transition-all duration-300 relative transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
            >
                <Quote className="absolute top-4 right-4 text-slate-200 w-10 h-10 transform scale-x-[-1]" />
                
                <div className="flex text-yellow-400 gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={18} />)}
                </div>
                
                <p className="font-hand text-xl text-slate-700 mb-6 relative z-10">
                    "{t.text}"
                </p>
                
                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 font-heading border border-slate-400">
                        {t.name[0]}
                    </div>
                    <div>
                        <p className="font-heading font-bold text-lg leading-none">{t.name}</p>
                        <p className="font-body text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;