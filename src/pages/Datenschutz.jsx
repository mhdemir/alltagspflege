import React, { useEffect } from 'react';

const Datenschutz = () => {
  return (
    <div className="bg-white text-[#2D2E28] pt-32 pb-16 lg:pt-48 lg:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-6xl font-black mb-12">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none space-y-12 font-medium">
          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">1. Datenschutz auf einen Blick</h2>
            <p className="mt-4">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Personenbezogene Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften behandelt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">2. Verantwortliche Stelle</h2>
            <p className="mt-4">
              Alltagsbetreuung Giò hilft<br />
              Giuseppina Giardina Segreto<br />
              Hordeler Straße 41<br />
              44809 Bochum<br />
              E-Mail: info@giohilft.com<br />
              Telefon: 0234/35776700
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-4">
              Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter erfasst. Dies betrifft beispielsweise IP-Adresse, Browsertyp, verwendetes Betriebssystem und Uhrzeit des Seitenaufrufs. Diese Daten dienen ausschließlich der technischen Sicherheit und Verbesserung der Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">4. Kontaktaufnahme</h2>
            <p className="mt-4">
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">5. Verwendung von WhatsApp</h2>
            <p className="mt-4">
              Wenn Sie über WhatsApp Kontakt aufnehmen, erfolgt dies freiwillig. Bitte beachten Sie, dass WhatsApp personenbezogene Daten außerhalb der Europäischen Union verarbeiten kann. Anbieter: WhatsApp Ireland Limited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">6. Google Services</h2>
            <p className="mt-4">
              Diese Website kann Google Maps zur Darstellung von Karten und Google Fonts für Schriftarten verwenden. Anbieter: Google Ireland Limited. Durch die Nutzung können Informationen an Google übertragen werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">7. Ihre Rechte</h2>
            <p className="mt-4">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">8. Sicherheit</h2>
            <p className="mt-4">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
