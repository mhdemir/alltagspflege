import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubPage = ({ title, subtitle, description, highlights, additionalContent, image }) => {
  return (
    <div className="bg-white text-[#2D2E28]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-[#F3EFD2]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">{title}</h1>
              <p className="text-xl text-[#2D2E28]/80 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {subtitle}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 w-full max-w-md"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
                <img src={image || "/images/gio1.jpeg"} alt={title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-[#2D2E28]">
            <div className="mb-12 text-lg leading-relaxed font-medium space-y-6">
              {description.split('\n').map((para, i) => para.trim() && <p key={i}>{para}</p>)}
            </div>

            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-[#F3EFD2]/50 rounded-2xl border-2 border-transparent hover:border-[#84A07F] transition-all group">
                    <div className="p-1 bg-[#84A07F] rounded-lg text-white group-hover:scale-110 transition-transform flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {additionalContent && (
              <div className="mt-12 space-y-8">
                {additionalContent}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-[#84A07F] py-12 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl">
              <ShieldCheck size={40} />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black mb-4">Wussten Sie schon?</h2>
          <p className="text-lg font-medium mb-8 opacity-90">
            Bereits ab Pflegegrad 1 können viele unserer Unterstützungen für Sie kostenlos sein, da die Kosten häufig über den Entlastungsbetrag der Pflegekasse übernommen werden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#kontakt" className="bg-[#2D2E28] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#2D2E28] transition-all">
              Jetzt persönlich beraten lassen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPage;
