import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem 2rem;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #3F3DFF, #A078FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span {
    color: #000;
    -webkit-text-fill-color: #000;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const CTAButton = styled.a`
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #FF6D00;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const Stats = styled.div`
  margin-top: 4rem;
  color: #666;
  font-size: 1.1rem;
`;

const UniversityLogos = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  opacity: 0.6;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Title>
        Elevate<br />
        <span>Your Learning Journey</span>
      </Title>
      <Subtitle>
      Use, create and share learning materials—from comprehensive quizzes on popular exams and topics, to personalized assessments for your unique learning needs, dynamic flashcards, IQ games and more interactive experiences.
      </Subtitle>
      <CTAButton href="https://app.rockae.com">
        Get Started for Free
      </CTAButton>
      <Stats>
        Trusted by thousands of educators, professionals, and students worldwide
      </Stats>
      <UniversityLogos>
        <span>Stanford</span>
        <span>USC</span>
        <span>Harvard</span>
        <span>NYU</span>
        <span>Columbia</span>
        <span>Penn</span>
      </UniversityLogos>
    </HeroSection>
  );
};

export default Hero; 