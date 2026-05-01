import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Heart, 
  ShoppingCart, 
  Home, 
  Users, 
  Brain, 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Clock,
  ShieldCheck,
  Calendar
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth Scroll Handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', id: 'hero' },
    { name: 'Leistungen', id: 'leistungen' },
    { name: 'Schwerpunkte', id: 'schwerpunkte' },
    { name: 'Kontakt', id: 'kontakt' },
  ];

  const leistungen = [
    "Begleitung im Alltag und zu Terminen",
    "Hilfe im Haushalt und beim Einkaufen",
    "Freizeitgestaltung und Ausflüge",
    "Gesellschaft und Gespräche",
    "Hilfe bei Demenz",
    "Arztbesuche, Apotheken- und Behördengänge",
    "Entlastung für pflegende Angehörige"
  ];

  return (
    <div className="min-h-screen bg-[#F3EFD2] text-[#2D2E28] font-sans selection:bg-[#84A07F] selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#84A07F] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform">
              <Heart className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tighter text-[#2D2E28]">Gio hilft</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="font-bold text-sm hover:text-[#84A07F] transition-colors relative group text-[#2D2E28]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#84A07F] transition-all group-hover:w-full" />
              </button>
            ))}
            <a 
              href="tel:023435776700" 
              className="bg-[#84A07F] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-[#2D2E28] transition-all"
            >
              0234 357 767 00
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-[#2D2E28]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-lg font-bold border-b border-[#F3EFD2] pb-2 text-[#2D2E28]"
                  >
                    {link.name}
                  </button>
                ))}
                <a 
                  href="tel:023435776700" 
                  className="bg-[#84A07F] text-white text-center py-4 rounded-2xl font-bold"
                >
                  Jetzt anrufen
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SEKTION --- */}
      <section 
        id="hero" 
        className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-[#F3EFD2]"
      >
        {/* Background Image Container with Smooth Horizontal Fade */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/images/gio1.jpeg')] bg-no-repeat bg-right bg-cover lg:bg-contain"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 50%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)',
            }}
          />
          {/* Subtle Color Overlay to bind everything together */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3EFD2] via-[#F3EFD2]/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <h2 className="text-[#84A07F] font-black uppercase tracking-[0.4em] mb-4 text-sm">Alltagsbetreuung</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.0] mb-8 text-[#2D2E28]">
              Mehr Zeit.<br />Mehr Ruhe.<br />
              <span className="text-[#84A07F]">Lebensqualität.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2E28]/80 mb-10 max-w-lg leading-relaxed font-medium">
              Herzliche Unterstützung für ein selbstbestimmtes Leben in Bochum. Wir sind da, wenn Sie uns brauchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollTo('kontakt')}
                className="bg-[#2D2E28] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-[#84A07F] transition-all transform hover:-translate-y-1"
              >
                Kostenfreie Erstberatung
              </button>
              <button 
                onClick={() => scrollTo('leistungen')}
                className="bg-white border-2 border-[#2D2E28] text-[#2D2E28] px-8 py-4 rounded-xl font-bold hover:bg-[#F3EFD2] transition-all"
              >
                Leistungen entdecken
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FLYER INFO BANNER --- */}
      <section className="bg-[#84A07F] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-white/20 rounded-2xl shadow-inner">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-black">Ab Pflegegrad 1 kostenlos!</p>
                <p className="text-sm font-bold opacity-90 text-[#F3EFD2]">Wir rechnen direkt mit der Pflegekasse ab.</p>
              </div>
            </div>
            <div className="h-px w-full lg:w-px lg:h-16 bg-white/20" />
            <div className="text-center lg:text-right">
              <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-80">Rufen Sie uns an</p>
              <a href="tel:023435776700" className="text-2xl lg:text-4xl font-black hover:text-[#2D2E28] transition-colors">
                0234 357 767 00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEISTUNGEN --- */}
      <section id="leistungen" className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight text-[#2D2E28]">
              Wie wir Sie <br /><span className="text-[#84A07F]">begleiten.</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {leistungen.map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#F3EFD2]/30 rounded-2xl hover:bg-[#F3EFD2] transition-all group"
                >
                  <div className="p-1.5 bg-[#84A07F] rounded-lg text-white group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-bold text-[#2D2E28]">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-[#F3EFD2] aspect-square relative z-10">
              <img src="/images/gio5.jpeg" alt="Alltagsbegleitung" className="w-full h-full object-cover" />
            </div>
            {/* Dekorativer Kreis */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#AEA880] rounded-full blur-[60px] opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* --- SCHWERPUNKTE --- */}
      <section id="schwerpunkte" className="py-16 lg:py-28 bg-[#F3EFD2]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 uppercase tracking-tighter text-[#2D2E28]">Unsere Schwerpunkte</h2>
            <div className="w-24 h-1.5 bg-[#84A07F] mx-auto rounded-full" />
          </div>

          <div className="space-y-20">
            {/* Demenz */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-[#84A07F] rounded-2xl text-white shadow-lg">
                    <Brain size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#2D2E28]">Demenzbetreuung mit Herz</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium mb-6 text-[#2D2E28]">
                  Wir schaffen eine sichere und vertraute Umgebung, in der sich Menschen mit Demenz wohlfühlen. Mit Gedächtnistraining, Biografiearbeit und viel Geduld fördern wir den Erhalt vorhandener Fähigkeiten.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#2D2E28]">
                  {["Gedächtnistraining", "Musik & Gesang", "Kreatives Gestalten", "Gezielte Aktivierung"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-[#84A07F] rounded-full" /> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <img src="/images/gio4.jpeg" alt="Demenzbetreuung" className="rounded-[2.5rem] shadow-xl border-6 border-white w-full h-[320px] object-cover" />
              </div>
            </div>

            {/* Aktivierung */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 text-[#2D2E28]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-[#2D2E28] rounded-2xl text-white shadow-lg">
                    <Users size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black">Betreuung & Aktivierung</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium mb-6">
                  Lebensfreude ist keine Frage des Alters. Wir bringen Abwechslung in den Alltag – von gemeinsamen Spaziergängen bis hin zur Begleitung zu Ihren Lieblingsorten.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#2D2E28]">
                  {["Spaziergänge", "Behördengänge", "Haushaltshilfe", "Entlastung Angehöriger"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-[#AEA880] rounded-full" /> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img src="/images/gio2.jpeg" alt="Aktivierung" className="rounded-[2.5rem] shadow-xl border-6 border-white w-full h-[320px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KONTAKT --- */}
      <section 
        id="kontakt" 
        className="py-16 lg:py-28 relative bg-[url('/images/gio3.jpeg')] bg-cover bg-center"
      >
        {/* Full-width dark overlay */}
        <div className="absolute inset-0 bg-[#2D2E28]/80 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            <div className="flex-1 p-10 lg:p-16 text-white">
              <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-[0.9]">Starten wir <br />gemeinsam.</h2>
              <p className="text-lg opacity-80 mb-10 font-medium">
                Wir beraten Sie umfassend und helfen Ihnen bei der Abrechnung mit der Pflegekasse. Rufen Sie uns an oder schreiben Sie uns.
              </p>
              
              <div className="space-y-6">
                <a href="tel:023435776700" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#84A07F] transition-all"><Phone size={24} /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-50">Beratungstelefon</p>
                    <p className="text-xl lg:text-2xl font-black">0234 357 767 00</p>
                  </div>
                </a>
                <a href="mailto:Info@giohilft.com" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#84A07F] transition-all"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-50">E-Mail Adresse</p>
                    <p className="text-xl lg:text-2xl font-black underline decoration-[#84A07F]">Info@giohilft.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center"><MapPin size={24} /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-50">Standort</p>
                    <p className="text-xl lg:text-2xl font-black">Bochum & Umgebung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white/95 p-10 lg:p-16 backdrop-blur-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-[#2D2E28]">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Name</label>
                    <input type="text" className="w-full p-4 bg-[#F3EFD2]/40 rounded-xl border-2 border-transparent focus:border-[#84A07F] outline-none transition-all font-bold text-sm" placeholder="Ihr Name" />
                  </div>
                  <div className="space-y-1.5 text-[#2D2E28]">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">E-Mail</label>
                    <input type="email" className="w-full p-4 bg-[#F3EFD2]/40 rounded-xl border-2 border-transparent focus:border-[#84A07F] outline-none transition-all font-bold text-sm" placeholder="mail@beispiel.de" />
                  </div>
                </div>
                <div className="space-y-1.5 text-[#2D2E28]">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1">Ihre Nachricht</label>
                  <textarea rows="4" className="w-full p-4 bg-[#F3EFD2]/40 rounded-xl border-2 border-transparent focus:border-[#84A07F] outline-none transition-all font-bold text-sm resize-none" placeholder="Wie können wir Ihnen helfen?"></textarea>
                </div>
                <button className="w-full bg-[#84A07F] text-white py-4.5 rounded-xl font-black text-lg shadow-xl hover:bg-[#2D2E28] transition-all transform active:scale-95">
                  Anfrage absenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 border-t border-[#F3EFD2]">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#2D2E28]">
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <div className="w-10 h-10 bg-[#2D2E28] rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter">Gio hilft</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="font-black text-[#2D2E28]/40 hover:text-[#84A07F] transition-colors uppercase tracking-[0.2em] text-[10px]"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="w-16 h-1 bg-[#F3EFD2] mx-auto mb-8" />
          <p className="text-[#2D2E28]/30 font-bold uppercase tracking-widest text-[10px]">
            © {new Date().getFullYear()} Alltagsbetreuung Giò | Bochum | Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

