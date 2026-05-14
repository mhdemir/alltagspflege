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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth Scroll Handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Fixed Navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['hero', 'leistungen', 'schwerpunkte', 'kontakt'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

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
    <div className="min-h-screen bg-[#F3EFD2] text-[#2D2E28] font-sans selection:bg-[#84A07F] selection:text-white overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 lg:h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center group">
            <div className={`${scrolled ? 'w-28 h-12' : 'w-36 h-16'} overflow-hidden flex items-center justify-start transition-all duration-500 group-hover:scale-105`}>
              <img src="/logo/Logo_Alltagsbetreuung.png" alt="Alltagsbetreuung Giò Logo" className="w-full h-full object-contain object-left" />
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className={`font-bold text-sm transition-colors relative group ${activeSection === link.id ? 'text-[#84A07F]' : 'text-[#2D2E28] hover:text-[#84A07F]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#84A07F] transition-all ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
            <a 
              href="tel:023435776700" 
              className="bg-[#84A07F] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-[#2D2E28] transition-all"
            >
              0234 357 767 00
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <a href="tel:023435776700" className="p-2 text-[#84A07F] bg-[#84A07F]/10 rounded-full">
              <Phone size={20} />
            </a>
            <button className="p-2 text-[#2D2E28]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Hamburger Overlay) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden shadow-2xl border-t border-[#F3EFD2]"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)}
                    className={`text-left text-lg font-bold border-b border-[#F3EFD2] pb-2 transition-colors ${activeSection === link.id ? 'text-[#84A07F]' : 'text-[#2D2E28]'}`}
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
        className="relative pt-32 pb-12 lg:pt-36 lg:pb-28 overflow-hidden bg-[#F3EFD2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full lg:max-w-2xl text-center lg:text-left z-20"
            >
              <h2 className="text-[#84A07F] font-black uppercase tracking-[0.4em] mb-4 text-[10px] sm:text-xs md:text-sm">Alltagsbetreuung</h2>
              <h1 className="text-[clamp(2rem,11vw,3.5rem)] leading-[1.1] sm:text-6xl lg:text-7xl font-black mb-6 text-[#2D2E28] break-words hyphens-auto text-center lg:text-left">
                Mehr Zeit.<br />Mehr Ruhe.<br />
                <span className="text-[#84A07F]">Lebensqualität.</span>
              </h1>
              <p className="text-base sm:text-xl text-[#2D2E28]/80 mb-8 mx-auto lg:mx-0 max-w-lg leading-relaxed font-medium px-2 sm:px-0 text-center lg:text-left">
                Herzliche Unterstützung für ein selbstbestimmtes Leben in Bochum. Wir sind da, wenn Sie uns brauchen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button 
                  onClick={() => scrollTo('kontakt')}
                  className="w-full sm:w-auto bg-[#2D2E28] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-[#84A07F] transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  Kostenfreie Erstberatung
                </button>
                <button 
                  onClick={() => scrollTo('leistungen')}
                  className="w-full sm:w-auto bg-white border-2 border-[#2D2E28] text-[#2D2E28] px-8 py-4 rounded-xl font-bold hover:bg-[#F3EFD2] transition-all active:scale-95"
                >
                  Leistungen entdecken
                </button>
              </div>

              {/* Facebook Link Component */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
              >
                <span className="text-[10px] font-black text-[#2D2E28]/60 uppercase tracking-widest">Mehr über uns:</span>
                <a 
                  href="https://www.facebook.com/share/1EQXG1kvDU/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#84A07F] font-bold hover:text-[#2D2E28] transition-colors group"
                >
                  <div className="w-8 h-8 bg-[#84A07F]/10 rounded-full flex items-center justify-center group-hover:bg-[#84A07F] group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Facebook</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Mobile Image (Visible only on small screens) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-12 w-full lg:hidden z-10"
            >
              <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                  <img src="/images/gio1.jpeg" alt="Alltagsbetreuung" className="w-full h-full object-cover" />
                </div>
                {/* Dekoratives Element mobil */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#84A07F] rounded-full blur-[50px] opacity-20 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Background Image (Hidden on mobile) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/images/gio1.jpeg')] bg-no-repeat bg-right bg-contain"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 55%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 55%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3EFD2] via-[#F3EFD2]/20 to-transparent" />
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
                <p className="text-xl lg:text-2xl font-black text-center lg:text-left">Ab Pflegegrad 1 kostenlos!</p>
                <p className="text-sm font-bold opacity-90 text-[#F3EFD2] text-center lg:text-left">Wir rechnen direkt mit der Pflegekasse ab.</p>
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
          <div className="flex-1 w-full">
            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight text-[#2D2E28] text-center lg:text-left">
              Wie wir Sie <br className="hidden lg:block" /><span className="text-[#84A07F]">begleiten.</span>
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
                  <div className="p-1.5 bg-[#84A07F] rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
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
            className="flex-1 relative w-full"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-[#F3EFD2] aspect-square relative z-10 mx-auto max-w-[500px]">
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
              <div className="flex-1 order-2 lg:order-1 text-center lg:text-left w-full">
                <div className="flex flex-col lg:flex-row items-center gap-4 mb-5">
                  <div className="p-3 bg-[#84A07F] rounded-2xl text-white shadow-lg">
                    <Brain size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#2D2E28]">Demenzbetreuung mit Herz</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium mb-6 text-[#2D2E28]">
                  Wir schaffen eine sichere und vertraute Umgebung, in der sich Menschen mit Demenz wohlfühlen. Mit Gedächtnistraining, Biografiearbeit und viel Geduld fördern wir den Erhalt vorhandener Fähigkeiten.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#2D2E28] text-left">
                  {["Gedächtnistraining", "Musik & Gesang", "Kreatives Gestalten", "Gezielte Aktivierung"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-[#84A07F] rounded-full" /> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2 w-full">
                <img src="/images/gio4.jpeg" alt="Demenzbetreuung" className="rounded-[2.5rem] shadow-xl border-6 border-white w-full h-[320px] object-cover mx-auto" />
              </div>
            </div>

            {/* Aktivierung */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 text-[#2D2E28] text-center lg:text-left w-full">
                <div className="flex flex-col lg:flex-row items-center gap-4 mb-5">
                  <div className="p-3 bg-[#2D2E28] rounded-2xl text-white shadow-lg">
                    <Users size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black">Betreuung & Aktivierung</h3>
                </div>
                <p className="text-lg leading-relaxed font-medium mb-6">
                  Lebensfreude ist keine Frage des Alters. Wir bringen Abwechslung in den Alltag – von gemeinsamen Spaziergängen bis hin zur Begleitung zu Ihren Lieblingsorten.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#2D2E28] text-left">
                  {["Spaziergänge", "Behördengänge", "Haushaltshilfe", "Entlastung Angehöriger"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 font-bold text-sm">
                      <div className="w-1.5 h-1.5 bg-[#AEA880] rounded-full" /> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <img src="/images/gio2.jpeg" alt="Aktivierung" className="rounded-[2.5rem] shadow-xl border-6 border-white w-full h-[320px] object-cover mx-auto" />
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
            <div className="flex-1 p-10 lg:p-16 text-white text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-[0.9]">Starten wir <br className="hidden lg:block" />gemeinsam.</h2>
              <p className="text-lg opacity-80 mb-10 font-medium">
                Wir beraten Sie umfassend und helfen Ihnen bei der Abrechnung mit der Pflegekasse. Rufen Sie uns an oder schreiben Sie uns.
              </p>
              
              <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                <a href="tel:023435776700" className="flex items-center gap-5 group text-left">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#84A07F] transition-all flex-shrink-0"><Phone size={24} /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-50">Beratungstelefon</p>
                    <p className="text-xl lg:text-2xl font-black">0234 357 767 00</p>
                  </div>
                </a>
                <a href="mailto:Info@giohilft.com" className="flex items-center gap-5 group text-left">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#84A07F] transition-all flex-shrink-0"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-50">E-Mail Adresse</p>
                    <p className="text-xl lg:text-2xl font-black underline decoration-[#84A07F] break-all">Info@giohilft.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-5 text-left">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0"><MapPin size={24} /></div>
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
          <div className="flex items-center justify-center mb-8">
            <div className="w-48 h-24 overflow-hidden flex items-center justify-center">
              <img src="/logo/Logo_Alltagsbetreuung.png" alt="Alltagsbetreuung Giò Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8 max-w-xs mx-auto md:max-w-none">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-8 w-full justify-items-center md:justify-center">
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
          </div>
          <div className="w-16 h-1 bg-[#F3EFD2] mx-auto mb-8" />
          <p className="text-[#2D2E28]/30 font-bold uppercase tracking-widest text-[10px] px-4">
            © {new Date().getFullYear()} Alltagsbetreuung Giò | Bochum | Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
