import React, { useEffect } from 'react';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-[#2D2E28] pt-32 pb-16 lg:pt-48 lg:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-6xl font-black mb-12">Impressum</h1>
        
        <div className="prose prose-lg max-w-none space-y-12 font-medium">
          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Angaben gemäß § 5 TMG</h2>
            <p className="mt-4">
              Alltagsbetreuung Giò hilft<br />
              Inhaberin: Giuseppina Giardina Segreto<br />
              Hordeler Straße 41<br />
              44809 Bochum<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Kontakt</h2>
            <p className="mt-4">
              Telefon: 0234/35776700<br />
              E-Mail: info@giohilft.com<br />
              Webseite: https://giohilft.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-4">
              Giuseppina Giardina Segreto<br />
              Hordeler Straße 41<br />
              44809 Bochum
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Unternehmensform</h2>
            <p className="mt-4">Einzelunternehmen</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Anerkennung</h2>
            <p className="mt-4">
              Anerkannter Anbieter für Betreuungs- und Entlastungsleistungen nach Landesrecht.<br />
              Anerkannt durch:<br />
              Stadt Bochum, Amt für Soziales, Husemann-Karree, Viktoriastraße, 44787 Bochum
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">IK-Nummer</h2>
            <p className="mt-4">IK-Nummer: 462552397</p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Berufshaftpflichtversicherung</h2>
            <p className="mt-4">
              LVM Versicherung<br />
              Geltungsraum der Versicherung: Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 border-b-2 border-[#84A07F] pb-2 inline-block">Umsatzsteuer</h2>
            <p className="mt-4">Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
          </section>

          <section className="text-sm opacity-70 space-y-4">
            <p><strong>Verbraucherstreitbeilegung:</strong> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <p><strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.</p>
            <p><strong>Urheberrecht:</strong> Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
