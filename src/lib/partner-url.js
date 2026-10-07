// Both local previews must be running: Giò on 5174 and Anna on 4321.
// The host check also covers a production build served locally for review.
const isLocalPreview = typeof window !== 'undefined'
  && ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);

export const annaPartnerUrl = isLocalPreview
  ? 'http://127.0.0.1:4321/'
  : 'https://anna-alltagsbetreuung.de/';
