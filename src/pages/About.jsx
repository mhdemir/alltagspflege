import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32">
      <section className="py-20 lg:py-32 bg-[#FDFCF5]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* BLOCK 1: GIO11 LINKS, TEXT RECHTS */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="relative"
              >
                <div className="rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
                  <img src="/images/gio11.jpeg" alt="Giuseppina Giardina" className="w-full h-auto block" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#84A07F] rounded-full -z-10 opacity-20 blur-2xl" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#AEA880] rounded-full -z-10 opacity-10 blur-2xl" />
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4">Über Mich</h2>
                <h3 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-[#2D2E28]">
                  Mein Name ist <span className="text-[#84A07F]">Giuseppina Giardina</span>. <br />Die meisten nennen mich liebevoll Giò.
                </h3>
                <div className="prose prose-lg text-[#2D2E28]/80 font-medium leading-relaxed space-y-6 text-left">
                  <p>
                    Hinter Alltagsbetreuung Giò hilft steht nicht einfach nur ein Betreuungsdienst, sondern ein Mensch mit Herz, Lebenserfahrung und einer großen Leidenschaft dafür, anderen Menschen zu helfen.
                  </p>
                  <p>
                    Schon immer stand für mich der Mensch im Mittelpunkt. Nach vielen Jahren Berufserfahrung in Deutschland, geprägt von engem Kontakt mit Menschen, Gastfreundschaft und Fürsorge, entstand mit der Zeit der Wunsch, etwas zu schaffen, das wirklich Sinn macht und Menschen im Alltag spürbar hilft.
                  </p>
                  <p>
                    Schon während meiner Tätigkeit in der Pflege wurde mir bewusst, wie wertvoll Zeit für Menschen ist. Gleichzeitig habe ich erlebt, dass im pflegerischen Alltag oft nur begrenzte Zeit für persönliche Zuwendung bleibt. Daraus entstand mein Wunsch, Menschen im Rahmen der Betreuung mehr Aufmerksamkeit, Ruhe und Lebensqualität schenken zu können.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* BLOCK 2: TEXT LINKS, GIO4 RECHTS */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg text-[#2D2E28]/80 font-medium leading-relaxed space-y-6 text-left"
              >
                <p>
                  Die Arbeit mit älteren Menschen und besonders mit Menschen mit Demenz hat mir gezeigt, wie wichtig Geduld, Verständnis und echte Menschlichkeit sind. Oft sind es nicht die großen Dinge, die den Unterschied machen, sondern kleine Gesten, Zuhören, gemeinsam lachen, Sicherheit geben oder einfach da zu sein.
                </p>
                <p>
                  Mit Alltagsbetreuung Giò hilft möchte ich, Giuseppina Giardina, Menschen dabei unterstützen, weiterhin selbstständig, würdevoll und mit Lebensfreude in ihrem eigenen Zuhause leben zu können. Dabei ist mir besonders wichtig, jeden Menschen individuell zu sehen. Jeder Mensch hat seine eigene Geschichte, seine Gewohnheiten, Erinnerungen und Bedürfnisse.
                </p>
                <p>
                  Meine italienischen Wurzeln prägen dabei auch meine Art mit Menschen umzugehen. Herzlichkeit, Familie, Respekt und das Gefühl, füreinander da zu sein, spielen für mich eine große Rolle. Viele unserer Kund:innen genießen genau diese familiäre und warme Atmosphäre.
                </p>
                <p className="font-bold text-xl italic text-[#84A07F] border-l-4 border-[#84A07F] pl-4">
                  "Alltagsbetreuung bedeutet für mich Vertrauen, Menschlichkeit und Nähe. Nicht nur helfen, sondern den Menschen das Gefühl geben, gesehen, verstanden und wertgeschätzt zu werden."
                </p>
                <p>
                  Besonders wichtig ist mir auch die Entlastung der Angehörigen. Ich weiß, wie belastend es sein kann, wenn man versucht, Familie, Arbeit und die Sorge um einen geliebten Menschen gleichzeitig zu bewältigen.
                </p>
                <p>
                  Unsere Leistungen bieten wir in Bochum und Umgebung an. Bereits ab Pflegegrad 1 können viele unserer Unterstützungen für unsere Kund:innen kostenlos sein. Gerne beraten wir Sie persönlich und helfen Ihnen dabei, die für Sie passenden Möglichkeiten der Kostenübernahme zu nutzen.
                </p>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="relative"
              >
                <div className="rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10">
                  <img src="/images/gio4.jpeg" alt="Giuseppina Giardina Portrait" className="w-full h-auto block" />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#AEA880] rounded-full -z-10 opacity-20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#84A07F] rounded-full -z-10 opacity-10 blur-2xl" />
              </motion.div>
            </div>
          </div>

          {/* SLOGAN FULL WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 lg:mt-32 text-center border-t border-[#84A07F]/10 pt-16"
          >
            <p className="font-black text-3xl lg:text-5xl text-[#2D2E28]">
              Alltagsbetreuung Giò hilft<br/>
              <span className="text-[#84A07F]">Weil Sie es uns wert sind.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* --- QUALITÄT & ANERKENNUNG --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4">Zertifiziert & Geprüft</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#2D2E28] mb-6">Qualität, Anerkennung <br/>und Vertrauen</h3>
            <p className="max-w-3xl mx-auto text-lg text-[#2D2E28]/70 font-medium">
              Unser Ziel ist es, Menschen und ihre Angehörigen nicht nur menschlich, sondern auch zuverlässig und professionell zu begleiten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 bg-[#FDFCF5] rounded-[2rem] border border-[#F3EFD2]">
              <div className="w-14 h-14 bg-[#84A07F] rounded-2xl flex items-center justify-center text-white mb-6"><ShieldCheck size={28} /></div>
              <h4 className="text-2xl font-black text-[#2D2E28] mb-4">Anerkannter Dienst</h4>
              <p className="text-[#2D2E28]/80 font-medium leading-relaxed">
                Alltagsbetreuung Giò hilft ist ein von der Stadt Bochum anerkannter Betreuungsdienst nach §45b SGB XI. Diese Anerkennung ermöglicht es uns, unterstützende Leistungen für Menschen mit Pflegegrad anzubieten und direkt mit den Pflegekassen abzurechnen.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 bg-[#FDFCF5] rounded-[2rem] border border-[#F3EFD2]">
              <div className="w-14 h-14 bg-[#84A07F] rounded-2xl flex items-center justify-center text-white mb-6"><Star size={28} /></div>
              <h4 className="text-2xl font-black text-[#2D2E28] mb-4">Fachliche Begleitung</h4>
              <p className="text-[#2D2E28]/80 font-medium leading-relaxed">
                Fachlich begleitet und unterstützt werden wir durch das Regionalbüro Alter, Pflege und Demenz Ruhr. Die fachliche Begleitung hilft dabei, Qualität, Weiterbildung und eine professionelle Betreuung unserer Kund:innen sicherzustellen.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 bg-[#FDFCF5] rounded-[2rem] border border-[#F3EFD2]">
              <div className="w-14 h-14 bg-[#84A07F] rounded-2xl flex items-center justify-center text-white mb-6"><Heart size={28} /></div>
              <h4 className="text-2xl font-black text-[#2D2E28] mb-4">Kostenlose Hilfe</h4>
              <p className="text-[#2D2E28]/80 font-medium leading-relaxed">
                Als anerkannter Anbieter verfügen wir über ein Institutionskennzeichen (IK). Besonders der Entlastungsbetrag kann bereits ab Pflegegrad 1 genutzt werden, um Unterstützung im Alltag in Anspruch zu nehmen, oft ohne zusätzliche Kosten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
