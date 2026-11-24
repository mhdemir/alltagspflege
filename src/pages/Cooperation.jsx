import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const partners = [
  {
    name: 'Anna Alltagsbetreuung',
    logo: '/logo/anna-alltagsbetreuung.svg',
    logoWidth: 1402,
    logoHeight: 748,
    paragraphs: [
      'Zwei Betreuungsdienste, die Hand in Hand arbeiten. Für Sie und Ihre Angehörigen.',
      'Anna Alltagsbetreuung in Essen und Alltagsbetreuung Giò hilft stimmen Einsatzgebiete, Zeiten und verfügbare Kapazitäten ab, um passende Unterstützung im Alltag zu finden.',
    ],
    href: 'https://anna-alltagsbetreuung.de/?partner=gio',
    action: 'Zur Anna Alltagsbetreuung',
  },
  {
    name: 'Pflegeberatung Glück',
    logo: '/logo/pflegeberatung-glueck-logo.png',
    logoWidth: 2172,
    logoHeight: 724,
    paragraphs: [
      'Mit Pflegeberatung Glück berät Ikram Boulganat Pflegebedürftige und ihre Angehörigen kompetent und einfühlsam zu Pflegegraden, Anträgen und Leistungen der Pflegekasse.',
      'Sie steht auch uns bei Alltagsbetreuung Giò hilft mit ihrem Fachwissen, ihrer Beratung und ganz praktischer Hilfe zur Seite.',
    ],
    href: 'https://pflegeberatung-glueck.de/',
    action: 'Zur Pflegeberatung Glück',
  },
  {
    name: 'ME/CFS-Selbsthilfegruppe Betzdorf/Wissen',
    logo: '/logo/mecfs-betzdorf-wissen.png',
    logoWidth: 1322,
    logoHeight: 1190,
    paragraphs: [
      'Die ME/CFS-Selbsthilfegruppe Betzdorf/Wissen im Westerwald ist eine engagierte Anlaufstelle für Menschen mit ME/CFS und ihre Angehörigen.',
      'Tanja und Sascha sind sehr aktiv, kompetent und hilfsbereit und stehen Betroffenen auch online mit praktischen Tipps und passenden Kontakten zur Seite.',
    ],
    href: 'https://mecfs-westerwald.de/',
    action: 'Zur ME/CFS-Selbsthilfegruppe',
  },
];

const Cooperation = () => (
  <div className="pt-24 lg:pt-28 bg-[#FDFCF5] text-[#2D2E28]">
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="max-w-4xl text-4xl md:text-6xl font-black leading-tight mb-6">
          Gemeinsam für mehr Unterstützung im Alltag.
        </h1>
        <p className="max-w-3xl text-xl md:text-2xl leading-relaxed font-medium text-[#2D2E28]/75 mb-12">
          Anna Alltagsbetreuung, Pflegeberatung Glück und die ME/CFS-Selbsthilfegruppe Betzdorf/Wissen bieten Unterstützung und Orientierung für Sie und Ihre Angehörigen.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {partners.map((partner) => (
            <article key={partner.name} className="bg-white border border-[#F3EFD2] rounded-[2rem] shadow-lg p-6 md:p-8 flex flex-col">
              <div className="h-44 flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  width={partner.logoWidth}
                  height={partner.logoHeight}
                  alt={`Logo ${partner.name}`}
                  className="w-full max-w-96 h-40 object-contain"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-5">{partner.name}</h2>
              <div className="space-y-4 text-lg leading-relaxed text-[#2D2E28]/80 flex-grow">
                {partner.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 pt-6 border-t border-[#F3EFD2]">
                <a href={partner.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4B6348] text-white px-6 py-3 font-bold hover:bg-[#2D2E28] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B6348] transition-colors">
                  {partner.action} <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Cooperation;
