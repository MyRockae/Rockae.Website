import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  scroll-margin-top: 80px;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  
  .gradient-text {
    background: linear-gradient(90deg, #8f7aff, #ff6b6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

const Stars = styled.div`
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const TestimonialText = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const UserInfo = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const testimonials = [
  {
    stars: 5,
    text: "The AZ900 assessments here were my secret weapon in acing the certification exam.",
    name: "Alex",
    location: "United States"
  },
  {
    stars: 5,
    text: "Using Rockae's dynamic flashcards and interactive challenges, I passed my ACCA exam with confidence. It's a game-changer!",
    name: "Priya",
    location: "India"
  },
  {
    stars: 5,
    text: "I prepared for my JAMB exam here, and its diverse learning tools made revision both engaging and effective.",
    name: "Omolola",
    location: "Nigeria"
  },
  {
    stars: 5,
    text: "As an educator, I rely on Rockae to create engaging quizzes that enhance my students' learning experience and foster interactive classroom discussions.",
    name: "Dr. Smith",
    location: "United Kingdom"
  },
  {
    stars: 5,
    text: "The flashcards feature is amazing—it simplifies revision and helps me retain complex concepts effortlessly for my daily studies.",
    name: "Emily",
    location: "Canada"
  },
  {
    stars: 5,
    text: "Rockae's interactive challenges and diverse content transformed my GRE prep. The blend of quizzes, flashcards, and dynamic assessments is truly invaluable.",
    name: "Jordan",
    location: "Australia"
  }
];

const TestimonialsSection = () => {
  return (
    <Section id="testimonials">
      <Title>
        Try the <span className="gradient-text">most loved</span> learning assistant for anyone.
      </Title>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Stars>{"★".repeat(testimonial.stars)}</Stars>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <UserInfo>{testimonial.name} from {testimonial.location}</UserInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
};

export default TestimonialsSection; 