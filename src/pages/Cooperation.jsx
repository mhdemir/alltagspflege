import React from 'react';
import { ArrowUpRight, HeartHandshake } from 'lucide-react';

const Cooperation = () => (
  <div className="pt-24 lg:pt-28 bg-[#FDFCF5] text-[#2D2E28]">
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-black uppercase tracking-widest text-[#4B6348] mb-5">Unsere Kooperation</p>
        <h1 className="max-w-4xl text-4xl md:text-6xl font-black leading-tight mb-6">
          Gemeinsam für mehr Unterstützung im Alltag.
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl leading-relaxed font-medium text-[#2D2E28]/75 mb-12">
          Zwei Betreuungsdienste, die Hand in Hand arbeiten. Für Sie und Ihre Angehörigen.
        </p>

        <div className="bg-white border border-[#F3EFD2] rounded-[2rem] shadow-lg p-6 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-5 md:gap-10">
            <div className="min-h-40 flex flex-col items-center justify-center gap-3 text-center">
              <img src="/logo/anna-alltagsbetreuung.svg" alt="Logo Anna Alltagsbetreuung" className="h-24 sm:h-28 w-full max-w-72 object-contain" />
              <span className="font-bold text-[#4B6348]">Anna Alltagsbetreuung</span>
            </div>
            <HeartHandshake size={32} className="justify-self-center text-[#84A07F]" aria-hidden="true" />
            <div className="min-h-40 flex flex-col items-center justify-center gap-3 text-center">
              <img src="/logo/Logo_Alltagsbetreuung.png" alt="Logo Alltagsbetreuung Giò hilft" className="h-24 sm:h-28 w-full max-w-72 object-contain" />
              <span className="font-bold text-[#4B6348]">Alltagsbetreuung Giò hilft</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#F3EFD2] text-center">
            <a href="https://anna-alltagsbetreuung.de/?partner=gio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#4B6348] text-white px-6 py-3 font-bold hover:bg-[#2D2E28] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B6348] transition-colors">
              Anna Alltagsbetreuung kennenlernen <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-white border-t border-[#F3EFD2]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-16">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-[#4B6348] mb-4">Fachliche Unterstützung</p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">Pflegeberatung Glück</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-[#2D2E28]/80">
          <p>Mit Pflegeberatung Glück berät Ikram Boulganat Pflegebedürftige und ihre Angehörigen kompetent und einfühlsam zu Pflegegraden, Anträgen und Leistungen der Pflegekasse.</p>
          <p>Sie steht auch uns bei Alltagsbetreuung Giò hilft mit ihrem Fachwissen, ihrer Beratung und ganz praktischer Hilfe zur Seite.</p>
          <a href="https://pflegeberatung-glueck.de/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[#4B6348] underline underline-offset-4 hover:text-[#2D2E28] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B6348]">
            Zur Pflegeberatung Glück <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Cooperation;
