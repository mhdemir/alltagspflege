import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wenn ein Hash in der URL ist (z.B. #kontakt), nicht nach oben scrollen
    // Die scrollTo-Logik im Header/Home kümmert sich um Hashes oder State
    const hasScrollState = window.history.state?.usr?.scrollTo;
    
    if (!window.location.hash && !hasScrollState) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
