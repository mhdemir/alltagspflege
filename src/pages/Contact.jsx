import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import PartnerRecommendation from '../components/PartnerRecommendation';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const requestType = form.querySelector('[name="request_type"]')?.value || 'Allgemeine Anfrage';
    form.querySelector('[name="_subject"]').value = `Anfrage: ${requestType}`;
    setStatus('Ihre Nachricht wird gesendet …');
    setSubmitted(true);
    const button = form.querySelector('button[type="submit"]');
    if (button) button.disabled = true;
  };

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
              <form className="space-y-6" action="https://formsubmit.co/info@giohilft.com" method="POST" target="gio-contact-submit-frame" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="Neue Anfrage über giohilft.de" />
                <input type="hidden" name="_autoresponse" value="Vielen Dank für Ihre Nachricht an Alltagsbetreuung Giò. Ihre Anfrage ist bei uns angekommen. Wir melden uns persönlich bei Ihnen." />
                <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Name</label>
                    <input 
                      type="text" 
                      required name="name" autoComplete="name" placeholder="Ihr Name"
                      className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Telefon</label>
                    <input 
                      type="tel" 
                      name="phone" autoComplete="tel" placeholder="Ihre Nummer"
                      className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">E-Mail</label>
                    <input required name="email" autoComplete="email"
                    type="email" 
                    placeholder="ihre@mail.de"
                    className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Anliegen</label>
                  <select required name="request_type" defaultValue="" className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28] appearance-none">
                    <option value="" disabled>Bitte auswählen</option>
                    <option>Allgemeine Anfrage</option>
                    <option>Alltagsbegleitung</option>
                    <option>Haushaltshilfe</option>
                    <option>Demenzbetreuung</option>
                    <option>Freizeit und Ausflüge</option>
                    <option>Unterstützung bei Pflegegrad</option>
                    <option>Rückruf gewünscht</option>
                    <option>Beratung Pflegegrad</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#2D2E28]/60 ml-2">Nachricht</label>
                  <textarea 
                    required name="message" rows="4"
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full bg-[#FDFCF5] border-2 border-[#F3EFD2] rounded-2xl px-6 py-4 focus:border-[#84A07F] outline-none transition-colors font-bold text-[#2D2E28] resize-none"
                  ></textarea>
                </div>

                <label className="flex items-start gap-3 text-xs leading-relaxed text-[#2D2E28]/60"><input required type="checkbox" name="privacy_consent" value="Ja" className="mt-1 accent-[#84A07F]" /> <span>Ich stimme der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage zu. <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Datenschutz</a></span></label>
                <button type="submit" className="w-full bg-[#2D2E28] text-white py-6 rounded-2xl font-black text-lg hover:bg-[#84A07F] transition-all flex items-center justify-center gap-3 shadow-xl group disabled:opacity-60">
                  Anfrage senden
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p role="status" aria-live="polite" className={`text-sm text-center font-bold ${status.startsWith('Danke') ? 'text-[#4B6348]' : 'text-[#925d41]'}`}>{status}</p>
                
                <p className="text-[10px] text-center text-[#2D2E28]/40 font-bold uppercase tracking-widest">
                  Mit dem Absenden akzeptieren Sie unsere Datenschutzbestimmungen.
                </p>
              </form>
              <iframe name="gio-contact-submit-frame" title="Formularversand" className="hidden" aria-hidden="true" onLoad={() => {
                if (!submitted) return;
                const form = document.querySelector('form[action="https://formsubmit.co/info@giohilft.com"]');
                form?.reset();
                setStatus('Danke. Ihre Nachricht ist angekommen. Wir melden uns persönlich bei Ihnen.');
                setSubmitted(false);
                const button = form?.querySelector('button[type="submit"]');
                if (button) button.disabled = false;
              }} />
            </motion.div>
          </div>
        </div>
      </section>
      <PartnerRecommendation variant="contact" />
    </div>
  );
};

export default Contact;
