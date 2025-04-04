import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background-color: #fafafa;
  scroll-margin-top: 80px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  .gradient-text {
    background: linear-gradient(90deg, #3F3DFF, #A078FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 4rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  ${props => props.featured && `
    border: 2px solid #FF6D00;
    transform: scale(1.05);
    
    &:hover {
      transform: scale(1.05) translateY(-5px);
    }
  `}
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  span {
    font-size: 1rem;
    color: #666;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #333;
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    color: #4CAF50;
  }
`;

const CTAButton = styled.a`
  width: 100%;
  padding: 1rem 5rem;
  background: ${props => props.featured ? '#FF6D00' : '#0D1B2A'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      features: [
        'Basic AI assistance',
        'Limited daily queries',
        'Standard response time',
        'Community support',
        'Basic features access'
      ],
      featured: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      features: [
        'Advanced AI assistance',
        'Unlimited queries',
        'Priority response time',
        'Email support',
        'All features access',
        'Custom templates'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Custom AI solutions',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'Team management',
        'Advanced analytics'
      ],
      featured: false
    }
  ];

  return (
    <Section id="pricing">
      <Title>
        Simple, <span className="gradient-text">transparent</span> pricing
      </Title>
      <Subtitle>
        Choose the plan that's right for you. All plans include a 14-day free trial.
      </Subtitle>
      <PricingGrid>
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} featured={plan.featured}>
            <PlanName>{plan.name}</PlanName>
            <Price>
              {plan.price}
              {plan.period && <span> {plan.period}</span>}
            </Price>
            <FeaturesList>
              {plan.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
            <CTAButton featured={plan.featured} href="https://app.rockae.com/register">
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </CTAButton>
          </PricingCard>
        ))}
      </PricingGrid>
    </Section>
  );
};

export default PricingSection; 