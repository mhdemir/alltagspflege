import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32">
      <section className="py-20 lg:py-32 bg-[#FDFCF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4">Kontakt</h2>
              <h1 className="text-4xl lg:text-7xl font-black text-[#2D2E28] mb-8 leading-tight">
                Lassen Sie uns <br />
                <span className="text-[#84A07F]">miteinander sprechen.</span>
              </h1>
              <p className="text-xl text-[#2D2E28]/70 font-medium mb-12 leading-relaxed">
                Haben Sie Fragen zu unseren Leistungen oder möchten Sie eine kostenlose Beratung vereinbaren? 
                Wir sind für Sie da und freuen uns auf Ihre Nachricht.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#84A07F] rounded-2xl text-white shadow-lg shadow-[#84A07F]/30">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-[#84A07F] mb-1">Telefon</p>
                    <a href="tel:023435776700" className="text-2xl font-black text-[#2D2E28] hover:text-[#84A07F] transition-colors">
                      0234 357 767 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#84A07F] rounded-2xl text-white shadow-lg shadow-[#84A07F]/30">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-[#84A07F] mb-1">E-Mail</p>
                    <a href="mailto:info@giohilft.com" className="text-2xl font-black text-[#2D2E28] hover:text-[#84A07F] transition-colors">
                      info@giohilft.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#84A07F] rounded-2xl text-white shadow-lg shadow-[#84A07F]/30">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-[#84A07F] mb-1">Standort</p>
                    <p className="text-2xl font-black text-[#2D2E28]">
                      Hordeler Straße 41<br />44809 Bochum
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-[#F3EFD2]"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Ihr Name"
                      className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Telefon</label>
                    <input 
                      type="tel" 
                      placeholder="Ihre Nummer"
                      className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">E-Mail</label>
                  <input 
                    type="email" 
                    placeholder="ihre@mail.de"
                    className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Art der Unterstützung</label>
                  <select className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28] appearance-none">
                    <option>Alltagsbegleitung</option>
                    <option>Haushaltshilfe</option>
                    <option>Demenzbetreuung</option>
                    <option>Beratung Pflegegrad</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Nachricht</label>
                  <textarea 
                    rows="4" 
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28] resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-[#2D2E28] text-white py-6 rounded-2xl font-black text-lg hover:bg-[#84A07F] transition-all flex items-center justify-center gap-3 shadow-xl group">
                  Anfrage senden
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-[10px] text-center text-[#2D2E28]/40 font-bold uppercase tracking-widest">
                  Mit dem Absenden akzeptieren Sie unsere Datenschutzbestimmungen.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
