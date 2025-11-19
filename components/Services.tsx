import React from 'react';
import StickyNote from './ui/StickyNote';
import { Calculator, Ruler, TrendingUp, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Algebra & Pre-Calc",
    icon: <Calculator className="w-8 h-8 mb-2 text-slate-700" />,
    desc: "Mastering variables, functions, and equations without the headache.",
    color: 'yellow',
    rotate: 'left'
  },
  {
    title: "Geometry",
    icon: <Ruler className="w-8 h-8 mb-2 text-slate-700" />,
    desc: "Proofs, shapes, and angles made simple. Visual learners welcome!",
    color: 'blue',
    rotate: 'right'
  },
  {
    title: "Calculus I & II",
    icon: <TrendingUp className="w-8 h-8 mb-2 text-slate-700" />,
    desc: "Derivatives and integrals explained in plain English, not alien code.",
    color: 'pink',
    rotate: 'left'
  },
  {
    title: "Test Prep (SAT/ACT)",
    icon: <GraduationCap className="w-8 h-8 mb-2 text-slate-700" />,
    desc: "Strategies and practice to boost your score and your confidence.",
    color: 'green',
    rotate: 'right'
  }
] as const;

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-grid-paper grid-bg border-y-2 border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl font-bold mb-4 text-slate-800">
             Ways I Can Help
          </h2>
          <p className="font-hand text-2xl text-slate-600">Pick your subject and let's get to work!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {services.map((service, index) => (
            <StickyNote 
                key={index} 
                color={service.color} 
                rotate={service.rotate}
                className="mx-auto w-full max-w-[280px]"
            >
                <div className="flex flex-col h-full">
                    <div className="border-b-2 border-slate-800/10 pb-2 mb-3 flex justify-between items-end">
                        {service.icon}
                        <span className="font-heading text-3xl opacity-20 font-bold">0{index + 1}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="font-hand text-xl leading-6 flex-grow">{service.desc}</p>
                    <div className="mt-4 text-right">
                       <span className="text-sm font-body font-bold opacity-60 tracking-widest uppercase">Available</span>
                    </div>
                </div>
            </StickyNote>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block bg-white border-2 border-slate-800 p-4 rounded-xl shadow-sketch relative">
                <p className="font-body text-lg">
                    Don't see your subject? <a href="#contact" className="text-blue-600 font-bold underline decoration-wavy decoration-2">Ask me!</a> I teach Stats too.
                </p>
                {/* Drawing pin */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full border border-black shadow-sm"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;