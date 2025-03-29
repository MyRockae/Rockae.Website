import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import About from './components/About';
import ReadyToStart from './components/ReadyToStart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ReadyToStart />
      <Pricing />
      <About />
      <Footer />
    </div>
  );
}

export default App;
