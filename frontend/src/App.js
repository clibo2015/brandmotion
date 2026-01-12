import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Partners />
      <WorkProcess />
      <Benefits />
      <Awards />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
