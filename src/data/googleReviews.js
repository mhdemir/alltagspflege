/**
 * Berechnet automatisch die vergangene Zeit seit Veröffentlichung auf Deutsch.
 * Z.B. "vor 2 Wochen", nächste Woche automatisch "vor 3 Wochen", später "vor 1 Monat".
 */
export const getRelativeTimeString = (dateInput) => {
  const date = new Date(dateInput);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays <= 0) return 'Heute';
  if (diffInDays === 1) return 'Gestern';
  if (diffInDays < 7) return `vor ${diffInDays} Tagen`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks === 1) return 'vor 1 Woche';
  if (diffInWeeks < 5) return `vor ${diffInWeeks} Wochen`;

  const diffInMonths = Math.floor(diffInDays / 30.44);
  if (diffInMonths <= 1) return 'vor 1 Monat';
  if (diffInMonths < 12) return `vor ${diffInMonths} Monaten`;

  const diffInYears = Math.floor(diffInDays / 365.25);
  if (diffInYears <= 1) return 'vor 1 Jahr';
  return `vor ${diffInYears} Jahren`;
};

export const GOOGLE_RATING_SUMMARY = {
  score: 5.0,
  maxScore: 5.0,
  reviewCount: 21,
  platform: 'Google',
  label: 'Hervorragend',
  googleMapsUrl: 'https://maps.google.com/?q=Alltagsbetreuung+Giò+hilft+Bochum'
};

export const GOOGLE_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Monika S.',
    rating: 5,
    publishedAt: '2026-08-22T10:00:00Z', // vor ~2 Wochen
    text: 'Frau Giò und ihr Team sind ein wahrer Segen für uns! Meine 84-jährige Mutter freut sich jedes Mal riesig auf die gemeinsamen Spaziergänge und die Hilfe im Alltag. Zuverlässig, herzlich und absolut professionell.',
    highlight: 'Ein wahrer Segen'
  },
  {
    id: 'rev-2',
    author: 'Klaus-Peter W.',
    rating: 5,
    publishedAt: '2026-08-15T14:30:00Z', // vor ~3 Wochen
    text: 'Die direkte Abrechnung mit der Pflegekasse hat reibungslos ab Pflegegrad 1 geklappt. Kein Papierkram-Chaos mehr für mich als berufstätigen Sohn. Kann die Alltagsbetreuung Giò zu 100% weiterempfehlen!',
    highlight: 'Reibungslose Abrechnung'
  },
  {
    id: 'rev-3',
    author: 'Sabine J.',
    rating: 5,
    publishedAt: '2026-08-05T09:15:00Z', // vor ~1 Monat
    text: 'Pünktlich auf die Minute, stets ein offenes Ohr und unheimlich empathisch. Egal ob Begleitung zum Facharzt oder Einkaufen in Bochum – Giò hilft mit ganzem Herzen. Danke für eure tolle Unterstützung!',
    highlight: 'Mit ganzem Herzen'
  },
  {
    id: 'rev-4',
    author: 'Familie Richter',
    rating: 5,
    publishedAt: '2026-07-28T16:45:00Z', // vor ~5 Wochen
    text: 'Wir wurden von Beginn an super freundlich und transparent beraten. Die Betreuungskräfte sind top geschult, geduldig und respektvoll. Wir sind unfassbar erleichtert, diesen Dienst gefunden zu haben.',
    highlight: 'Top geschult & geduldig'
  },
  {
    id: 'rev-5',
    author: 'Michael B.',
    rating: 5,
    publishedAt: '2026-07-06T11:20:00Z', // vor ~2 Monaten
    text: 'Endlich ein Betreuungsdienst in Bochum, der den Menschen wirklich in den Mittelpunkt stellt. Sehr herzliche Betreuung im Alltag und im Haushalt. 5 verdiente Sterne!',
    highlight: 'Mensch im Mittelpunkt'
  },
  {
    id: 'rev-6',
    author: 'Helga S.',
    rating: 5,
    publishedAt: '2026-06-25T13:00:00Z', // vor ~2 Monaten
    text: 'Tolle Gesellschaft beim Kaffee, Unterstützung beim Einkaufen und Hilfe im Garten. Das Leben macht wieder viel mehr Freude. Vielen herzlichen Dank an das liebe Team!',
    highlight: 'Mehr Lebensfreude'
  }
];
