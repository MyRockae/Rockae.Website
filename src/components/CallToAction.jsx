import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 8rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7c3aed, #db2777, #f97316);
  border-radius: 24px;
  margin: 2rem;
  color: white;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  font-weight: 400;
`;

const CTAButton = styled.button`
  background: #2d2d2d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: #1a1a1a;
  }
`;

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Title>
          Less stress.<br />
          Better grades.<br />
          Free for students.
        </Title>
        <Subtitle>
          Start setting the curve with the<br />
          most accurate AI for school.
        </Subtitle>
        <CTAButton>
          Use Atlas for free
        </CTAButton>
      </Container>
    </Section>
  );
};

export default CallToAction; 