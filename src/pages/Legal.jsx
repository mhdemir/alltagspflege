import React from 'react';

const LegalPage = ({ title, content }) => (
  <div className="pt-48 pb-20 max-w-4xl mx-auto px-6">
    <h1 className="text-4xl lg:text-6xl font-black text-[#2D2E28] mb-12">{title}</h1>
    <div className="prose prose-lg text-[#2D2E28]/80 font-medium leading-relaxed space-y-8">
      {content}
    </div>
  </div>
);

export const Impressum = () => (
  <LegalPage 
    title="Impressum" 
    content={
      <>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Alltagsbetreuung Giò hilft<br />
            Inhaberin: Giuseppina Giardina Segreto<br />
            Hordeler Straße 41<br />
            44809 Bochum<br />
            Deutschland
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Kontakt</h2>
          <p>
            Telefon: 0234/35776700<br />
            E-Mail: info@giohilft.com<br />
            Webseite: <a href="https://giohilft.de" className="text-[#84A07F] hover:underline">https://giohilft.de</a>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Giuseppina Giardina Segreto<br />
            Hordeler Straße 41<br />
            44809 Bochum
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Unternehmensform</h2>
          <p>Einzelunternehmen</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Anerkennung</h2>
          <p>Anerkannter Anbieter für Betreuungs- und Entlastungsleistungen nach Landesrecht.</p>
          <p className="mt-2 font-bold">Anerkannt durch:</p>
          <p>
            Stadt Bochum<br />
            Amt für Soziales<br />
            Husemann-Karree<br />
            Viktoriastraße<br />
            44787 Bochum
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">IK-Nummer</h2>
          <p>IK-Nummer: 462552397</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
          <p>LVM Versicherung<br />Geltungsraum der Versicherung: Deutschland</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Umsatzsteuer</h2>
          <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            Bei Bekanntwerden konkreter Rechtsverletzungen werden entsprechende Inhalte umgehend entfernt.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Bildnachweise</h2>
          <p>Soweit nicht anders angegeben, stammen verwendete Bilder und Grafiken von lizenzfreien Bilddatenbanken oder wurden mit Genehmigung verwendet.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">Keine Abmahnung ohne vorherigen Kontakt</h2>
          <p>
            Sollte der Inhalt oder die Gestaltung dieser Website Rechte Dritter oder gesetzliche Bestimmungen verletzen, bitten wir um eine entsprechende Nachricht ohne Kostennote. Zu Recht beanstandete Inhalte werden unverzüglich entfernt, ohne dass die Einschaltung eines Rechtsbeistandes erforderlich ist.
          </p>
        </section>
      </>
    } 
  />
);

export const Datenschutz = () => (
  <LegalPage 
    title="Datenschutzerklärung" 
    content={
      <>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">1. Datenschutz auf einen Blick</h2>
          <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Personenbezogene Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften behandelt.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">2. Verantwortliche Stelle</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
          <p className="mt-2 font-bold">
            Alltagsbetreuung Giò hilft<br />
            Giuseppina Giardina Segreto<br />
            Hordeler Straße 41<br />
            44809 Bochum<br />
            E-Mail: info@giohilft.com<br />
            Telefon: 0234/35776700
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter erfasst. Dies betrifft beispielsweise:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>IP-Adresse</li>
            <li>Browsertyp</li>
            <li>verwendetes Betriebssystem</li>
            <li>Uhrzeit des Seitenaufrufs</li>
          </ul>
          <p className="mt-2">Diese Daten dienen ausschließlich der technischen Sicherheit und Verbesserung der Website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">4. Kontaktaufnahme</h2>
          <p>Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">5. Verwendung von WhatsApp</h2>
          <p>Wenn Sie über WhatsApp Kontakt aufnehmen, erfolgt dies freiwillig. Bitte beachten Sie, dass WhatsApp personenbezogene Daten außerhalb der Europäischen Union verarbeiten kann.</p>
          <p className="mt-2 font-bold">Anbieter:</p>
          <p>WhatsApp Ireland Limited<br />4 Grand Canal Square<br />Grand Canal Harbour<br />Dublin 2<br />Irland</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">6. Google Maps</h2>
          <p>Diese Website kann Google Maps zur Darstellung von Karten verwenden.</p>
          <p className="mt-2 font-bold">Anbieter:</p>
          <p>Google Ireland Limited<br />Gordon House, Barrow Street<br />Dublin 4<br />Irland</p>
          <p className="mt-2">Durch die Nutzung von Google Maps können Informationen über die Nutzung dieser Website an Google übertragen werden.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">7. Google Fonts</h2>
          <p>Diese Website kann Schriftarten von Google Fonts verwenden. Beim Aufruf der Seite lädt Ihr Browser die benötigten Schriftarten.</p>
          <p>Anbieter: Google Ireland Limited.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">8. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
          </ul>
          <p className="mt-2">Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">10. Hosting</h2>
          <p>Die Website wird bei einem externen Dienstleister gehostet. Personenbezogene Daten können auf den Servern des Hosters gespeichert werden.</p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-[#2D2E28] mb-4">11. Änderungen dieser Datenschutzerklärung</h2>
          <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
        </section>
      </>
    } 
  />
);
