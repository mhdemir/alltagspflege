import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Users } from 'lucide-react';

const Services = () => {
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
    <div className="pt-32">
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4">Unser Angebot</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-[#2D2E28]">Wie wir Sie begleiten.</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {leistungen.map((text, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-5 p-6 bg-[#FDFCF5] rounded-3xl hover:bg-[#84A07F]/5 transition-all group border border-transparent hover:border-[#84A07F]/20">
                  <div className="p-2 bg-[#84A07F] rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-[#84A07F]/30"><CheckCircle2 size={22} /></div>
                  <span className="text-xl font-bold text-[#2D2E28]">{text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[12px] border-[#FDFCF5] aspect-square relative z-10">
                <img src="/images/gio5.jpeg" alt="Alltagsbegleitung Dienstleistung" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#84A07F]/10 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#F3EFD2]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-[#84A07F] rounded-3xl text-white shadow-xl shadow-[#84A07F]/30"><Brain size={36} /></div>
                  <h3 className="text-3xl lg:text-5xl font-black text-[#2D2E28]">Demenzbetreuung <br />mit Herz</h3>
                </div>
                <p className="text-xl leading-relaxed font-medium mb-10 text-[#2D2E28]/80">
                  Wir schaffen eine sichere und vertraute Umgebung, in der sich Menschen mit Demenz wohlfühlen. Mit Gedächtnistraining, Biografiearbeit und viel Geduld fördern wir den Erhalt vorhandener Fähigkeiten.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Gedächtnistraining", "Musik & Gesang", "Kreatives Gestalten", "Gezielte Aktivierung"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 font-black text-[#2D2E28]/70 bg-white p-4 rounded-2xl shadow-sm border border-[#F3EFD2]"><div className="w-3 h-3 bg-[#84A07F] rounded-full" /> {t}</div>
                  ))}
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <motion.img initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src="/images/gio7.jpeg" alt="Demenzbetreuung" className="rounded-[4rem] shadow-2xl border-8 border-white w-full aspect-video object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
