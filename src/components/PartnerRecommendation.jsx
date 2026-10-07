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
            <p><strong>Auch in Essen in vertrauten Händen.</strong></p>
            <p>Mit Danie von Anna Alltagsbetreuung verbindet uns eine Freundschaft. Wenn der Wohnort oder die passenden Zeiten dafür sprechen, empfehlen wir Ihnen gerne auch ihre Unterstützung.</p>
            <a href={partnerUrl}>Lernen Sie Danie und Anna kennen <ArrowUpRight size={18} aria-hidden="true" /></a>
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
            <span className="gio-partner-eyebrow">Persönlich verbunden</span>
            <h2 id="gio-partner-story-title">Wir schauen gemeinsam,<br />was zu Ihnen passt.</h2>
          </div>
          <div className="gio-partner-story-copy">
            <p>Manchmal ist es der kürzere Weg, manchmal sind es die passenden Zeiten. Mit Danie von Anna Alltagsbetreuung in Essen haben wir einen vertrauten Kontakt, den wir Ihnen gerne empfehlen, wenn eine Begleitung dort gut zu Ihrem Alltag passt.</p>
            <p>Sprechen Sie uns auf unsere Zusammenarbeit an. Welche Unterstützung und Termine möglich sind, klären wir im persönlichen Gespräch.</p>
            <a href={partnerUrl}>Danie und Anna Alltagsbetreuung kennenlernen <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="gio-partner-overlay">
      <button ref={reopenButton} className="gio-partner-reopen" type="button" aria-controls="gio-partner-panel" aria-expanded={isOpen} hidden={isOpen} onClick={() => setPartnerOpen(true)}><HeartHandshake size={20} aria-hidden="true" /> Mit Danie verbunden</button>
      <aside id="gio-partner-panel" className="gio-partner-card" aria-label="Unsere Freundschaft mit Anna Alltagsbetreuung" hidden={!isOpen} onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); setPartnerOpen(false); } }}>
        <button ref={closeButton} className="gio-partner-close" type="button" aria-label="Empfehlung schließen" onClick={() => setPartnerOpen(false)}><X size={19} aria-hidden="true" /></button>
        <span className="gio-partner-symbol" aria-hidden="true"><HeartHandshake size={25} strokeWidth={1.3} /></span>
        <div>
          <span className="gio-partner-eyebrow">Freundschaft, die verbindet</span>
          <p className="gio-partner-title"><strong>Danie &amp; Giò.</strong> Gemeinsam für Sie da.</p>
          <p className="gio-partner-description">Uns verbindet eine Freundschaft und der Wunsch, Ihren Alltag leichter zu machen. Deshalb empfehlen wir Ihnen gerne auch Danielas Anna Alltagsbetreuung in Essen.</p>
        </div>
        <div className="gio-partner-action">
          <a href={partnerUrl}>Lernen Sie Danie und Anna kennen <ArrowUpRight size={18} aria-hidden="true" /></a>
          <span>Anna Alltagsbetreuung · Essen</span>
        </div>
      </aside>
    </div>
  );
}
