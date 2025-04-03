import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
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
    text: "The Knowledge feature, in particular, is outstanding; its in-depth information from trusted sources has been incredibly useful to me.",
    name: "Jaz",
    location: "Australia"
  },
  {
    stars: 5,
    text: "I saw it on TikTok and decided to give it a try. In less than 20 minutes I thought it was the best study AI tool I had ever seen.",
    name: "Sene",
    location: "United States"
  },
  {
    stars: 5,
    text: "I absolutely love using Atlas because it integrates directly with the materials from my courses. It really simplifies my study process, as a regular Google search can often overwhelm me with irrelevant information that doesn't align with what my professors deem important.",
    name: "Arwa",
    location: "Canada"
  },
  {
    stars: 5,
    text: "I was a great student in high school, but college was a tough transition for me. Atlas has been a big help. 10/10 recommend trying it out.",
    name: "Tim",
    location: "United States"
  },
  {
    stars: 5,
    text: "I must say it is significantly better than ChatGPT 😌 In some questions I asked ChatGPT, the answers were inaccurate, while Atlas responded accurately.",
    name: "Lucia",
    location: "Spain"
  },
  {
    stars: 5,
    text: "So easy to use.",
    name: "Asriel",
    location: "France"
  },
  {
    stars: 5,
    text: "I say there is not a single student that walks on this planet who wouldn't benefit of using Atlas as an study assistant.",
    name: "Timo",
    location: "Germany"
  },
  {
    stars: 5,
    text: "This is the best app ever I swear, and I can't believe it's free like I'm being fr I'm shocked.",
    name: "Brianne",
    location: "Canada"
  },
  {
    stars: 5,
    text: "ChatGPT could never 😌 I think Atlas is the only reason I'm passing my classes still.",
    name: "Celeste",
    location: "United States"
  }
];

const TestimonialsSection = () => {
  return (
    <Section>
      <Title>
        Try the <span className="gradient-text">most loved</span> assistant for school.
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