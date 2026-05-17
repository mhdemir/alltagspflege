import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Start', id: 'hero', type: 'scroll' },
    { name: 'Leistungen', id: 'leistungen', type: 'scroll' },
    { name: 'Über Mich', path: '/giuseppina-giardina', type: 'link' },
    { name: 'Kontakt', id: 'kontakt', type: 'scroll' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 lg:h-20">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group">
          <div className={`${scrolled || location.pathname !== '/' ? 'w-28 h-12' : 'w-36 h-16'} overflow-hidden flex items-center justify-start transition-all duration-500 group-hover:scale-105`}>
            <img src="/logo/Logo_Alltagsbetreuung.png" alt="Alltagsbetreuung Giò Logo" className="w-full h-full object-contain object-left" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === 'scroll' ? (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="font-bold text-sm text-[#2D2E28] hover:text-[#84A07F] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-[#84A07F] transition-all w-0 group-hover:w-full" />
              </button>
            ) : (
              <Link 
                key={link.path} 
                to={link.path}
                className="font-bold text-sm text-[#2D2E28] hover:text-[#84A07F] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-[#84A07F] transition-all w-0 group-hover:w-full" />
              </Link>
            )
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

      {/* Mobile Menu */}
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
                link.type === 'scroll' ? (
                  <button 
                    key={link.id} 
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-lg font-bold border-b border-[#F3EFD2] pb-2 text-[#2D2E28]"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-lg font-bold border-b border-[#F3EFD2] pb-2 text-[#2D2E28]"
                  >
                    {link.name}
                  </Link>
                )
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
  );
};

export default Header;
