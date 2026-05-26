import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = [
    { src: '/images/gio11.jpeg', alt: 'Alltagsbegleitung Moment' },
    { src: '/images/gio1.jpeg', alt: 'Alltagsbegleitung Moment' },
    { src: '/images/gio2.jpeg', alt: 'Gemeinsame Zeit' },
    { src: '/images/gio3.jpeg', alt: 'Unterstützung im Alltag' },
    { src: '/images/gio4.jpeg', alt: 'Freizeitgestaltung' },
    { src: '/images/gio5.jpeg', alt: 'Herzliche Betreuung' },
    { src: '/images/gio6.jpeg', alt: 'Alltagsbegleitung Moment' },
    { src: '/images/gio7.jpeg', alt: 'Gemeinsame Zeit' },
    { src: '/images/gio8.jpeg', alt: 'Unterstützung im Alltag' },
    { src: '/images/gio9.jpeg', alt: 'Freizeitgestaltung' },
    { src: '/images/gio10.jpeg', alt: 'Herzliche Betreuung' },
  ];

  return (
    <div className="pt-32">
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4">Einblicke</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-[#2D2E28]">Unser Alltag.</h3>
            <p className="max-w-2xl mx-auto mt-8 text-lg text-[#2D2E28]/60 font-medium">
              Echte Momente, echte Menschen. Ein kleiner Einblick in unsere tägliche Arbeit und die Freude, die wir teilen.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl border-4 border-[#FDFCF5]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
