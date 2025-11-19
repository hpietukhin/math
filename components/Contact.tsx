import React, { useState } from 'react';
import SketchButton from './ui/SketchButton';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
    alert("Thanks for the message! I'll get back to you shortly.");
  };

  return (
    <section id="contact" className="py-20 bg-marker-yellow relative overflow-hidden">
      {/* Background texture to look like yellow legal pad */}
      <div className="absolute inset-0 border-t-8 border-slate-700"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Info Panel */}
            <div className="md:col-span-2 space-y-8 mt-8 md:mt-16">
                <div>
                    <h2 className="font-heading text-5xl font-bold text-slate-900 mb-4">Let's Chat!</h2>
                    <p className="font-hand text-2xl text-slate-700">Ready to improve those grades? Drop me a note.</p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-sm">
                            <Phone size={20} />
                        </div>
                        <span className="font-hand text-xl">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-sm">
                            <Mail size={20} />
                        </div>
                        <span className="font-hand text-xl">mathwhiz@example.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-sm">
                            <MapPin size={20} />
                        </div>
                        <span className="font-hand text-xl">Online / Local Library</span>
                    </div>
                </div>
            </div>

            {/* Form Panel - Styled like lined paper */}
            <div className="md:col-span-3 bg-white p-1 shadow-sketch-lg transform rotate-1 border border-slate-300">
                <div className="h-full w-full border border-dashed border-slate-300 p-6 md:p-8 relative bg-paper paper-texture">
                    {/* Red margin line */}
                    <div className="absolute top-0 left-12 md:left-16 w-[1px] h-full bg-red-300 opacity-50"></div>

                    <form onSubmit={handleSubmit} className="space-y-6 pl-8 md:pl-12 relative">
                        <div>
                            <label className="block font-heading font-bold text-lg text-slate-700 mb-1">Name:</label>
                            <input 
                                type="text" 
                                required
                                className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-500 outline-none py-2 font-hand text-xl transition-colors"
                                placeholder="Your name here..."
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block font-heading font-bold text-lg text-slate-700 mb-1">Email:</label>
                            <input 
                                type="email" 
                                required
                                className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-500 outline-none py-2 font-hand text-xl transition-colors"
                                placeholder="email@address.com"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block font-heading font-bold text-lg text-slate-700 mb-1">Subject:</label>
                            <select 
                                className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-500 outline-none py-2 font-hand text-xl transition-colors"
                                value={formData.subject}
                                onChange={e => setFormData({...formData, subject: e.target.value})}
                            >
                                <option value="">Select a topic...</option>
                                <option value="algebra">Algebra Help</option>
                                <option value="calculus">Calculus Help</option>
                                <option value="sat">SAT Prep</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-heading font-bold text-lg text-slate-700 mb-1">Message:</label>
                            <textarea 
                                rows={4}
                                className="w-full bg-transparent border-b-2 border-slate-300 focus:border-blue-500 outline-none py-2 font-hand text-xl transition-colors resize-none leading-8"
                                placeholder="How can I help you?"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <SketchButton type="submit" className="w-full flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </SketchButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;