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
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #4285f4, #ea4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span {
    color: #000;
    -webkit-text-fill-color: #000;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #2d2d2d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

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
    <HeroSection>
      <Title>
        Supercharge<br />
        <span>your grades</span>
      </Title>
      <Subtitle>
        Study, write, and solve faster with the most accurate AI for school.
      </Subtitle>
      <CTAButton>
        Use Atlas for free
      </CTAButton>
      <Stats>
        Relied on by 800,000+ students at
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