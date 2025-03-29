import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
      description: 'Create an account to get started',
      icon: 'fa-user-plus'
    },
    {
      title: 'Upload Notes',
      description: 'Add study materials via text file or paste them directly',
      icon: 'fa-upload'
    },
    {
      title: 'AI Generates Questions',
      description: 'Our AI analyzes your notes and creates intelligent quiz questions',
      icon: 'fa-robot'
    },
    {
      title: 'Access Quiz',
      description: 'Receive a link to attempt the quiz',
      icon: 'fa-link'
    },
    {
      title: 'View & Manage',
      description: 'See your results instantly and manage your quizzes in the Quiz Bank',
      icon: 'fa-chart-bar'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How Rockae Works</h2>
      <p className="subtitle">Create and share quiz questions in six simple steps</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <i className={`fas ${step.icon}`}></i>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; 