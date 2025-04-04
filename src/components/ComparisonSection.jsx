import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(255,240,245,0.5) 0%, rgba(240,248,255,0.5) 100%);
  overflow: hidden;
  position: relative;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  .gradient-text {
    background: linear-gradient(90deg, #4285f4, #ea4c89);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  background: #FF6D00;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BackgroundImages = styled.div`  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 400px;
    background: #000;
    border-radius: 16px;
  }

  &::before {
    left: 20%;
    top: 30%;
    transform: rotate(-15deg);
  }

  &::after {
    right: 20%;
    bottom: 30%;
    transform: rotate(15deg);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const ComparisonSection = () => {
  return (
    <Section>
      <BackgroundImages />
      <Content>
        <Title>
          Other tools guess.<br />
          <span className="gradient-text">Rockae knows.</span>
        </Title>
        <Subtitle>
        Rockae studies all of your course materials,
          not just a single lecture or textbook.
        </Subtitle>
        <CTAButton href="https://app.rockae.com/register">
          Use Rockae for free
        </CTAButton>
      </Content>
    </Section>
  );
};

export default ComparisonSection; 
