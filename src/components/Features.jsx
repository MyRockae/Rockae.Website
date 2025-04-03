import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fafafa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  
  span:first-child {
    background: linear-gradient(90deg, #4285f4, #8f7aff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  span:last-child {
    color: #000;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const FeatureHeader = styled.div`
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ExampleContent = styled.div`
  flex: 1;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 0.9rem;
`;

const MultipleChoice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Option = styled.div`
  padding: 0.5rem;
  border: 1px solid ${props => props.selected ? '#4285f4' : '#e0e0e0'};
  border-radius: 6px;
  background: ${props => props.selected ? '#f0f7ff' : 'white'};
  color: ${props => props.selected ? '#4285f4' : '#333'};
  cursor: pointer;
`;

const FeatureButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #f1f3f4;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  margin-top: auto;
  transition: all 0.2s ease;

  &:hover {
    background: #e8eaed;
  }
`;

const features = [
  {
    title: 'Solve',
    description: 'Generate step-by-step answers',
    example: (
      <MultipleChoice>
        <div>What might arise from thread interference?</div>
        <Option>A) Increased usability</Option>
        <Option selected>B) Unpredictable behavior</Option>
        <Option>C) Enhanced processing speed</Option>
      </MultipleChoice>
    )
  },
  {
    title: 'Write',
    description: 'Generate A+ essays',
    example: (
      <div>
        <div style={{ fontWeight: 500, marginBottom: '0.5rem' }}>Social Panopticons</div>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>
          In an age where surveillance technologies infiltrate every facet of daily life, social panopticons emerge as invisible architectures of control.
        </div>
      </div>
    )
  },
  {
    title: 'Record',
    description: 'Automatic lecture notes',
    example: (
      <div>
        <div style={{ marginBottom: '0.5rem' }}>Lecture Sept. 25: Civic Engagement</div>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>
          Declaration of Independence
          • Natural Rights: The Declaration asserts that all men are endowed with certain unalienable rights, including life, liberty, and the pursuit of happiness.
        </div>
      </div>
    )
  },
  {
    title: 'Memorize',
    description: 'Generate flashcards',
    example: (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div>A plastid that contains chlorophyll in which photosynthesis happens.</div>
      </div>
    )
  },
  {
    title: 'Practice',
    description: 'Generate practice quizzes',
    example: (
      <MultipleChoice>
        <Option>Formal and strict</Option>
        <Option selected>Creative and open</Option>
        <Option>Quiet and reserved</Option>
        <Option>Vengeful and angry</Option>
      </MultipleChoice>
    )
  }
];

const Features = () => {
  return (
    <FeaturesSection>
      <SectionTitle>
        <span>Score higher</span> <span>with powerful tools.</span>
      </SectionTitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureHeader>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureHeader>
            <ExampleContent>
              {feature.example}
            </ExampleContent>
            <FeatureButton>{feature.title} with Atlas</FeatureButton>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesSection>
  );
};

export default Features; 