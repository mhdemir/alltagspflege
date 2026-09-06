import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Start', id: 'hero' },
    { name: 'Leistungen', id: 'leistungen' },
    { name: 'Schwerpunkte', id: 'schwerpunkte' },
    { name: 'Kontakt', id: 'kontakt' },
  ];

  return (
    <footer className="bg-white py-12 border-t border-[#F3EFD2]">
      <div className="max-w-7xl mx-auto px-6 text-center text-[#2D2E28]">
        <div className="flex items-center justify-center mb-8">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-48 h-24 overflow-hidden flex items-center justify-center">
            <img src="/logo/Logo_Alltagsbetreuung.png" alt="Alltagsbetreuung Giò Logo" className="w-full h-full object-contain" />
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-left border-b border-[#F3EFD2] pb-12">
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-xs text-[#84A07F]">Leistungen</h4>
            <ul className="space-y-2">
              <li><Link to="/begleitung-alltag-termine-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Alltagsbegleitung</Link></li>
              <li><Link to="/haushaltshilfe-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Haushaltshilfe</Link></li>
              <li><Link to="/demenzbetreuung-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Demenzbetreuung</Link></li>
              <li><Link to="/freizeitgestaltung-ausfluege-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Freizeit & Ausflüge</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-xs text-[#84A07F]">Informationen</h4>
            <ul className="space-y-2">
              <li><Link to="/betreuung-pflegegrad-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Betreuung mit Pflegegrad</Link></li>
              <li><Link to="/entlastungsbetrag-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Entlastungsbetrag</Link></li>
              <li><Link to="/verhinderungspflege-bochum" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Verhinderungspflege</Link></li>
              <li><Link to="/giuseppina-giardina" className="text-sm font-bold hover:text-[#84A07F] transition-colors">Über Mich</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-xs text-[#84A07F]">Kontakt</h4>
            <p className="text-sm font-bold">Hordeler Straße 41<br />44809 Bochum</p>
            <p className="text-sm font-bold">Tel: 0234 357 767 00</p>
            <p className="text-sm font-bold">Mail: info@giohilft.com</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <Link to="/impressum" className="font-bold text-[#2D2E28]/60 hover:text-[#84A07F] text-xs uppercase tracking-widest">Impressum</Link>
          <span className="text-[#F3EFD2]">|</span>
          <Link to="/datenschutz" className="font-bold text-[#2D2E28]/60 hover:text-[#84A07F] text-xs uppercase tracking-widest">Datenschutz</Link>
        </div>

        <div className="w-16 h-1 bg-[#F3EFD2] mx-auto mb-8" />
        
        <p className="text-[#2D2E28]/40 text-[10px] font-bold uppercase tracking-widest max-w-2xl mx-auto mb-4 leading-relaxed">
          Hinweis zur Privatsphäre: Einige Fotos auf dieser Webseite wurden mit KI-Unterstützung aufbereitet. 
          Dadurch respektieren und schützen wir die Privatsphäre unserer Kund:innen, während wir gleichzeitig einen authentischen Einblick in unsere Arbeit geben.
        </p>

        <p className="text-[#2D2E28]/30 font-bold uppercase tracking-widest text-[10px] px-4">
          © {new Date().getFullYear()} Alltagsbetreuung Giò | Bochum | Alle Rechte vorbehalten
        </p>
      </div>
    </footer>
  );
};

export default Footer;
