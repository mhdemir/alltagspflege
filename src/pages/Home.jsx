import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin, Coffee, ShoppingCart, Brain, Sparkles, ArrowRight, Users, Info, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const previewServices = [
    {
      title: "Alltagsbegleitung",
      description: "Gemeinsam statt einsam. Wir begleiten Sie im Alltag, damit Sie sicher und aktiv bleiben.",
      image: "/images/gio6.jpeg",
      link: "/begleitung-alltag-termine-bochum",
      icon: <Users size={24} />,
      color: "bg-blue-50"
    },
    {
      title: "Haushaltshilfe",
      description: "Ein sauberes Zuhause zum Wohlfühlen. Wir unterstützen Sie tatkräftig im Haushalt und beim Einkauf.",
      image: "/images/gio5.jpeg",
      link: "/haushaltshilfe-bochum",
      icon: <ShoppingCart size={24} />,
      color: "bg-green-50"
    },
    {
      title: "Demenzbetreuung",
      description: "Sicherheit und Struktur. Mit viel Herz fördern wir vorhandene Fähigkeiten und entlasten Angehörige.",
      image: "/images/gio4.jpeg",
      link: "/demenzbetreuung-bochum",
      icon: <Brain size={24} />,
      color: "bg-amber-50"
    },
    {
      title: "Freizeit & Ausflüge",
      description: "Gemeinsam die Welt entdecken. Wir motivieren zu Spaziergängen und begleiten Sie bei Ausflügen.",
      image: "/images/gio1.jpeg",
      link: "/freizeitgestaltung-ausfluege-bochum",
      icon: <MapPin size={24} />,
      color: "bg-rose-50"
    },
    {
      title: "Gesellschaft & Gespräche",
      description: "Zeit schenken und zuhören. Weil manchmal die kleinen Momente den größten Unterschied machen.",
      image: "/images/gio3.jpeg",
      link: "/gesellschaft-gespraeche-bochum",
      icon: <Coffee size={24} />,
      color: "bg-purple-50"
    },
    {
      title: "Arzt & Behörden",
      description: "Zuverlässige Begleitung zu wichtigen Terminen. Wir geben Sicherheit und entlasten Ihre Familie.",
      image: "/images/gio2.jpeg",
      link: "/arztbesuche-behoerdengaenge-bochum",
      icon: <Clock size={24} />,
      color: "bg-cyan-50"
    }
  ];

  const infoServices = [
    {
      title: "Betreuung mit Pflegegrad",
      description: "Nutzen Sie die Unterstützung, die Ihnen zusteht. Wir beraten Sie persönlich zu Ihren Ansprüchen.",
      image: "/images/gio8.jpeg",
      link: "/betreuung-pflegegrad-bochum",
      icon: <ShieldCheck size={24} />,
      color: "bg-emerald-50"
    },
    {
      title: "Entlastungsbetrag",
      description: "131 € monatlich für Ihre Unterstützung. Wir helfen Ihnen, diesen Betrag sinnvoll einzusetzen.",
      image: "/images/gio9.jpeg",
      link: "/entlastungsbetrag-bochum",
      icon: <Sparkles size={24} />,
      color: "bg-blue-50"
    },
    {
      title: "Verhinderungspflege",
      description: "Eine Auszeit für pflegende Angehörige. Kraft tanken, während wir zuverlässig für Ihre Liebsten da sind.",
      image: "/images/gio10.jpeg",
      link: "/verhinderungspflege-bochum",
      icon: <Heart size={24} />,
      color: "bg-rose-50"
    }
  ];

  return (
    <>
      {/* --- HERO SEKTION MIT VIDEO --- */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src="/videos/V1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-left">
            <h2 className="text-[#84A07F] font-black uppercase tracking-[0.4em] mb-4 text-sm md:text-base">Alltagsbetreuung Giò</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 text-white">
              Mehr Zeit.<br /><span className="text-[#84A07F]">Mehr Lebensqualität.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl leading-relaxed font-medium">
              Herzliche Unterstützung für ein selbstbestimmtes Leben in Bochum. Wir sind da, wenn Sie uns brauchen.
            </p>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#84A07F]/20 border border-[#84A07F]/50 backdrop-blur-sm text-[#F3EFD2] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <ShieldCheck size={16} />
                Ab Pflegegrad 1 kostenlos
              </div>
              <div className="hidden sm:flex bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold items-center gap-2">
                Pflegekasse übernimmt Kosten
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/kontakt" className="bg-[#84A07F] text-white px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-white hover:text-[#84A07F] transition-all transform hover:-translate-y-1 text-lg text-center flex items-center justify-center gap-2">
                Kostenlose Beratung
                <ArrowRight size={20} />
              </Link>
              <a href="tel:023435776700" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all text-lg text-center">
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INFO BANNER --- */}
      <section className="bg-white py-12 border-b border-[#F3EFD2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-[#2D2E28]">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#84A07F]/10 rounded-2xl text-[#84A07F]"><ShieldCheck size={32} /></div>
              <div>
                <p className="font-black text-lg">Kostenlos ab Pflegegrad 1</p>
                <p className="text-sm font-medium opacity-70 italic">Direkte Abrechnung mit der Kasse</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#84A07F]/10 rounded-2xl text-[#84A07F]"><Clock size={32} /></div>
              <div>
                <p className="font-black text-lg">Individuelle Zeiten</p>
                <p className="text-sm font-medium opacity-70 italic">Wir richten uns nach Ihrem Alltag</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#84A07F]/10 rounded-2xl text-[#84A07F]"><MapPin size={32} /></div>
              <div>
                <p className="font-black text-lg">Einsatzort Bochum</p>
                <p className="text-sm font-medium opacity-70 italic">& gesamte Umgebung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEISTUNGEN SEKTION --- */}
      <section id="leistungen" className="relative py-24 lg:py-40 overflow-hidden">
        {/* Video Background for Services Section */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-20">
            <source src="/videos/V2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#FDFCF5]/90 backdrop-blur-sm" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4"
              >
                Unsere Unterstützung
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-black text-[#2D2E28] leading-[1.1]"
              >
                Mitten im Leben, <br />
                <span className="text-[#84A07F]">Seite an Seite.</span>
              </motion.h3>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md text-lg text-[#2D2E28]/70 font-medium pb-2"
            >
              Wir glauben, dass jeder Mensch ein würdevolles und freudiges Leben in den eigenen vier Wänden verdient. 
              Entdecken Sie unsere vielfältigen Leistungen.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {previewServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={service.link} className="block">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-transform duration-700 group-hover:scale-[0.98]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white flex items-center justify-between">
                        <span className="font-black uppercase tracking-widest text-xs">Details ansehen</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-white text-[#84A07F] shadow-sm group-hover:bg-[#84A07F] group-hover:text-white transition-colors duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#2D2E28] mb-2 group-hover:text-[#84A07F] transition-colors">{service.title}</h4>
                      <p className="text-[#2D2E28]/70 font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFORMATIONEN SEKTION --- */}
      <section id="informationen" className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#84A07F] font-black uppercase tracking-widest text-sm mb-4"
              >
                Wissenswertes
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-black text-[#2D2E28] leading-[1.1]"
              >
                Gut informiert <br />
                <span className="text-[#84A07F]">bestens betreut.</span>
              </motion.h3>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md text-lg text-[#2D2E28]/70 font-medium pb-2"
            >
              Erfahren Sie mehr über Ihre Ansprüche, Kostenübernahmen und wie wir Sie und Ihre Angehörigen entlasten können.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {infoServices.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={info.link} className="block">
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-transform duration-700 group-hover:scale-[0.98]">
                    <img 
                      src={info.image} 
                      alt={info.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-[#FDFCF5] text-[#84A07F] border border-[#F3EFD2] group-hover:bg-[#84A07F] group-hover:text-white transition-colors duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#2D2E28] mb-2 group-hover:text-[#84A07F] transition-colors">{info.title}</h4>
                      <p className="text-[#2D2E28]/70 font-medium leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
