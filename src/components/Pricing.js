import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        '5 quizzes per month',
        'Basic question types',
        'Community sharing'
      ],
      cta: 'Get Started',
      isPopular: false
    },
    {
      name: 'Pro',
      price: '$9.99/mo',
      features: [
        'Unlimited quizzes',
        'Advanced question types',
        'Priority support'
      ],
      cta: 'Get Started',
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Custom features',
        'API access',
        'Dedicated support'
      ],
      cta: 'Contact Us',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <h2>Simple, Transparent Pricing</h2>
      <p className="subtitle">Choose the plan that works best for you</p>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && <div className="popular-badge">Most Popular</div>}
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`btn-${plan.name.toLowerCase()}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 