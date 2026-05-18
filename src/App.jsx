import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutMe from './pages/About';
import Contact from './pages/Contact';
import { Impressum, Datenschutz } from './pages/Legal';
import SubPage from './pages/SubPage';
import { pagesContent } from './data/pagesContent';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giuseppina-giardina" element={<AboutMe />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            
            {/* Service Subpages */}
            <Route path="/begleitung-alltag-termine-bochum" element={<SubPage {...pagesContent.begleitung} />} />
            <Route path="/arztbesuche-behoerdengaenge-bochum" element={<SubPage {...pagesContent.arztbesuche} />} />
            <Route path="/haushaltshilfe-bochum" element={<SubPage {...pagesContent.haushaltshilfe} />} />
            <Route path="/freizeitgestaltung-ausfluege-bochum" element={<SubPage {...pagesContent.freizeit} />} />
            <Route path="/gesellschaft-gespraeche-bochum" element={<SubPage {...pagesContent.gesellschaft} />} />
            <Route path="/demenzbetreuung-bochum" element={<SubPage {...pagesContent.demenz} />} />
            <Route path="/betreuung-pflegegrad-bochum" element={<SubPage {...pagesContent.pflegegrad} />} />
            <Route path="/entlastungsbetrag-bochum" element={<SubPage {...pagesContent.entlastungsbetrag} />} />
            <Route path="/verhinderungspflege-bochum" element={<SubPage {...pagesContent.verhinderungspflege} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
