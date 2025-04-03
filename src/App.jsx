import React from "react";
import { createGlobalStyle } from 'styled-components';
import Hero from './pages/Hero';
import Nav from './components/Nav';
import Features from './components/Features';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Hero />
      <Features />
      <ComparisonSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
