import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import WorkProcess from './components/WorkProcess';
import Benefits from './components/Benefits';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

// Main homepage component
const HomePage = () => (
  <>
    <Hero />
    <Partners />
    <WorkProcess />
    <Benefits />
    <Awards />
    <Testimonials />
    <Services />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
