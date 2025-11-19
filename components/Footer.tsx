import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
            
            <div>
                <h3 className="font-heading text-3xl font-bold text-white mb-4">Math<span className="text-blue-400">Whiz</span></h3>
                <p className="font-hand text-lg text-slate-400">Making numbers make sense, one student at a time.</p>
            </div>

            <div>
                <h4 className="font-heading text-xl font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 font-hand text-lg text-slate-300">
                    <li><a href="#about" className="hover:text-yellow-300 hover:underline decoration-wavy">About Me</a></li>
                    <li><a href="#services" className="hover:text-yellow-300 hover:underline decoration-wavy">Services</a></li>
                    <li><a href="#reviews" className="hover:text-yellow-300 hover:underline decoration-wavy">Success Stories</a></li>
                    <li><a href="#contact" className="hover:text-yellow-300 hover:underline decoration-wavy">Book a Session</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-heading text-xl font-bold text-white mb-4">Follow Along</h4>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a href="#" className="p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-blue-600 hover:border-blue-400 hover:-translate-y-1 transition-all">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-blue-400 hover:border-blue-200 hover:-translate-y-1 transition-all">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-blue-700 hover:border-blue-500 hover:-translate-y-1 transition-all">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Math Whiz Tutoring. All rights reserved.
            </p>
            <p className="font-hand text-slate-500 text-lg">
                Designed with <span className="text-red-500">♥</span> and Coffee
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;