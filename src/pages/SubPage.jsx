import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SubPage = ({ title, subtitle, description, highlights, image }) => {
  return (
    <div className="pt-32">
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h2 className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4">{subtitle}</h2>
                <h1 className="text-4xl lg:text-7xl font-black text-[#2D2E28] mb-8 leading-[1.1]">{title}</h1>
                <div className="prose prose-xl text-[#2D2E28]/80 font-medium leading-relaxed mb-12 whitespace-pre-line">
                  {description}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#FDFCF5] rounded-2xl border border-[#F3EFD2]">
                      <div className="text-[#84A07F]"><CheckCircle2 size={24} /></div>
                      <span className="font-bold text-[#2D2E28]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="flex-1 w-full sticky top-32">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-[#FDFCF5]">
                <img src={image} alt={title} className="w-full aspect-[4/5] object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPage;
