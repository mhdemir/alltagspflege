import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Users, Coffee, Quote } from 'lucide-react';

const AboutMe = () => {
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
              <h2 className="text-[#84A07F] font-black uppercase tracking-[0.4em] mb-4 text-sm">Hinter den Kulissen</h2>
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">Über Mich</h1>
              <p className="text-xl text-[#2D2E28]/80 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Mein Name ist Giuseppina Giardina, doch die meisten Menschen nennen mich liebevoll Giò.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 w-full max-w-md"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
                <img src="/images/gio1.jpeg" alt="Giuseppina Giardina" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-[#2D2E28] space-y-8 font-medium leading-relaxed">
            <p>
              Hinter Alltagsbetreuung Giò hilft steht nicht einfach nur ein Betreuungsdienst, sondern ein Mensch mit Herz, Lebenserfahrung und einer großen Leidenschaft dafür, anderen Menschen zu helfen.
            </p>
            
            <p>
              Schon immer stand für mich der Mensch im Mittelpunkt. Nach vielen Jahren Berufserfahrung in Deutschland, geprägt von engem Kontakt mit Menschen, Gastfreundschaft und Fürsorge, entstand mit der Zeit der Wunsch, etwas zu schaffen, das wirklich Sinn macht und Menschen im Alltag spürbar hilft.
            </p>

            <div className="bg-[#F3EFD2]/50 p-8 lg:p-12 rounded-[2.5rem] border-2 border-[#84A07F]/20 my-16 relative">
              <div className="absolute -top-6 -left-6 text-[#84A07F] opacity-20">
                <Quote size={80} fill="currentColor" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black mb-6 text-[#84A07F]">Warum ich tue, was ich tue</h3>
              <p className="text-lg lg:text-xl italic leading-relaxed relative z-10">
                "Die Liebe zu diesem Beruf entstand vor allem während meiner Arbeit als Pflegekraft. In dieser Zeit habe ich immer stärker gespürt, wie wichtig Zeit für Menschen eigentlich ist. Zeit zum Zuhören, Zeit für Gespräche, Zeit für ein Lächeln und manchmal einfach nur jemanden, der wirklich da ist."
              </p>
            </div>

            <p>
              Oft hatte ich persönlich das Bedürfnis, mich mehr darauf zu konzentrieren, einem Menschen ein ehrliches Lachen zu schenken, ihm zuzuhören oder ihm das Gefühl zu geben, verstanden zu werden, statt mich ausschließlich um die pflegerischen Aufgaben kümmern zu müssen. Genau diese Erfahrungen haben meinen Wunsch wachsen lassen, Menschen anders begleiten zu wollen – menschlicher, persönlicher und mit mehr Ruhe.
            </p>

            <p>
              Gleichzeitig hat mir die Arbeit in der Pflege viele wichtige Erfahrungen und Kenntnisse vermittelt, die mir heute helfen, Menschen auf Augenhöhe zu begeern, ihre Bedürfnisse besser zu verstehen und auch schwierige Situationen mit Ruhe, Verständnis und Respekt zu begleiten.
            </p>

            <p>
              Die Arbeit mit älteren Menschen und besonders mit Menschen mit Demenz hat mir gezeigt, wie wichtig Geduld, Verständnis und echte Menschlichkeit sind. Oft sind es nicht die großen Dinge, die den Unterschied machen, sondern kleine Gesten, Zuhören, gemeinsam lachen, Sicherheit geben oder einfach da zu sein.
            </p>

            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-[#84A07F] flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#84A07F]/10 rounded-2xl flex items-center justify-center text-[#84A07F] mb-6">
                  <Star size={32} />
                </div>
                <h4 className="text-xl font-black mb-4">Individuelle Betreuung</h4>
                <p className="text-sm">Mit Alltagsbetreuung Giò hilft möchte ich Menschen dabei unterstützen, weiterhin selbstständig, würdevoll und mit Lebensfreude in ihrem eigenen Zuhause leben zu können. Dabei ist mir besonders wichtig, jeden Menschen individuell zu sehen. Jeder Mensch hat seine eigene Geschichte, seine Gewohnheiten, Erinnerungen und Bedürfnisse. Genau darauf möchten wir eingehen.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-[#2D2E28] flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#2D2E28]/10 rounded-2xl flex items-center justify-center text-[#2D2E28] mb-6">
                  <Heart size={32} />
                </div>
                <h4 className="text-xl font-black mb-4">Herzlichkeit & Wurzeln</h4>
                <p className="text-sm">Meine italienischen Wurzeln prägen dabei auch meine Art mit Menschen umzugehen. Herzlichkeit, Familie, Respekt und das Gefühl, füreinander da zu sein, spielen für mich eine große Rolle. Viele unserer Kunden genießen genau diese familiäre und warme Atmosphäre.</p>
              </div>
            </div>

            <p>
              Besonders wichtig ist mir auch die Entlastung der Angehörigen. Ich weiß, wie belastend es sein kann, wenn man versucht, Familie, Arbeit und die Sorge um einen geliebten Menschen gleichzeitig zu bewältigen. Deshalb möchten wir nicht nur unsere Kunden begleiten, sondern auch Angehörigen das beruhigende Gefühl geben, nicht alleine zu sein.
            </p>

            <p className="bg-[#2D2E28] text-white p-8 rounded-2xl text-lg font-bold text-center">
              Alltagsbetreuung bedeutet für mich Vertrauen, Menschlichkeit und Nähe. Nicht nur helfen, sondern den Menschen das Gefühl geben, gesehen, verstanden und wertgeschätzt zu werden.
            </p>

            <p className="text-2xl font-black text-[#84A07F] text-center mt-12">
              Alltagsbetreuung Giò hilft – Weil Sie es uns wert sind.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-[#F3EFD2] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-lg text-[#84A07F]">
              <Coffee size={40} />
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black mb-6">Lernen wir uns kennen.</h2>
          <p className="text-lg font-medium mb-10 opacity-80">
            Gerne berate ich Sie persönlich und helfe Ihnen dabei, die für Sie passenden Möglichkeiten der Kostenübernahme zu verstehen und zu nutzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:023435776700" className="bg-[#84A07F] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-[#2D2E28] transition-all">
              0234 357 767 00
            </a>
            <Link to="/#kontakt" className="bg-white border-2 border-[#2D2E28] text-[#2D2E28] px-8 py-4 rounded-xl font-bold hover:bg-[#F3EFD2] transition-all">
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
