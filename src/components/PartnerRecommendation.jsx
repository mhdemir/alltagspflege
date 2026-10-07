import { useRef, useState } from 'react';
import { ArrowUpRight, HeartHandshake, X } from 'lucide-react';
import './PartnerRecommendation.css';

const partnerUrl = 'https://anna-alltagsbetreuung.de/';

export default function PartnerRecommendation({ variant = 'welcome' }) {
  const [isOpen, setIsOpen] = useState(true);
  const closeButton = useRef(null);
  const reopenButton = useRef(null);
  const setPartnerOpen = (open) => {
    setIsOpen(open);
    requestAnimationFrame(() => (open ? closeButton : reopenButton).current?.focus({ preventScroll: true }));
  };
  if (variant === 'contact') {
    return (
      <aside className="gio-partner-contact" aria-label="Unsere Empfehlung in Essen">
        <div className="gio-partner-contact-inner">
          <HeartHandshake size={28} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <p><strong>Gemeinsam passende Unterstützung finden.</strong></p>
            <p>Wir kooperieren mit Anna Alltagsbetreuung in Essen, um Betreuung nach Wohnort, Bedarf und verfügbaren Zeiten besser abzustimmen. Sprechen Sie uns gerne darauf an.</p>
            <a href={partnerUrl}>Anna Alltagsbetreuung kennenlernen <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </aside>
    );
  }

  if (variant === 'story') {
    return (
      <section className="gio-partner-story" aria-labelledby="gio-partner-story-title">
        <div className="gio-partner-story-inner">
          <div>
            <span className="gio-partner-eyebrow">Unsere Kooperation</span>
            <h2 id="gio-partner-story-title">Gemeinsam mehr<br />möglich machen.</h2>
          </div>
          <div className="gio-partner-story-copy">
            <p>Alltagsbetreuung Giò und Anna Alltagsbetreuung kooperieren, um Menschen mit Unterstützungsbedarf und ihre Angehörigen im Alltag besser zu begleiten.</p>
            <p>Wir stimmen Einsatzgebiete, Zeiten und verfügbare Kapazitäten ab. So können wir Betreuung gemeinsam besser organisieren und passende Unterstützung finden. Welche Möglichkeiten es für Sie gibt, besprechen wir persönlich.</p>
            <a href={partnerUrl}>Anna Alltagsbetreuung kennenlernen <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="gio-partner-overlay">
      <button ref={reopenButton} className="gio-partner-reopen" type="button" aria-controls="gio-partner-panel" aria-expanded={isOpen} hidden={isOpen} onClick={() => setPartnerOpen(true)}><HeartHandshake size={20} aria-hidden="true" /> Gemeinsam für Sie da</button>
      <aside id="gio-partner-panel" className="gio-partner-card" aria-label="Kooperation von Alltagsbetreuung Giò und Anna Alltagsbetreuung" hidden={!isOpen} onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); setPartnerOpen(false); } }}>
        <button ref={closeButton} className="gio-partner-close" type="button" aria-label="Kooperationshinweis schließen" onClick={() => setPartnerOpen(false)}><X size={19} aria-hidden="true" /></button>
        <span className="gio-partner-eyebrow gio-partner-card-eyebrow">Unsere Kooperation</span>
        <div className="gio-partner-logos">
          <img src="/logo/anna-alltagsbetreuung.svg" width="1402" height="748" alt="Anna Alltagsbetreuung" />
          <HeartHandshake size={20} strokeWidth={1.4} aria-hidden="true" />
          <img src="/logo/Logo_Alltagsbetreuung.png" width="132" height="78" alt="Alltagsbetreuung Giò" />
        </div>
        <div>
          <p className="gio-partner-title">Gemeinsam für mehr Unterstützung im Alltag.</p>
          <p className="gio-partner-description">Zwei Betreuungsdienste, die Hand in Hand arbeiten. Für Sie und Ihre Angehörigen.</p>
        </div>
        <div className="gio-partner-action">
          <a href={partnerUrl}>Zu Anna Alltagsbetreuung <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </aside>
    </div>
  );
}
