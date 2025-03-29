import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleGetStartedClick = () => {
    window.location.href = 'https://app.rockae.com';
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Create and Share Quiz Questions Effortlessly</h1>
        <p>Generate engaging quiz questions that anyone can use. Perfect for educators, students, and quiz enthusiasts.</p>
        <button className="btn-get-started" onClick={handleGetStartedClick}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;