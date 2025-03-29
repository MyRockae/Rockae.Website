import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fa-brain',
      title: 'Smart Generation',
      description: 'Create high-quality quiz questions automatically using our advanced AI'
    },
    {
      icon: 'fa-share-alt',
      title: 'Easy Sharing',
      description: 'Share your quizzes with anyone, anywhere, anytime'
    },
    {
      icon: 'fa-cogs',
      title: 'Customizable',
      description: 'Tailor questions to your specific needs and subject matter'
    },
    {
      icon: 'fa-layer-group',
      title: 'Flashcards',
      description: 'Create interactive flashcards to enhance your learning experience'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <i className={`fas ${feature.icon}`}></i>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 