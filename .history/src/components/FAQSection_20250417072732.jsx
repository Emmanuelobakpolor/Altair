import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is ChatGPT generative AI?',
      answer: 'Yes. Chat GPT is a form of Generative artificial intelligence. Its capacity and depth are broad and can be customized into several different implementation forms.',
    },
    {
      question: 'What services do you offer?',
      answer: (
        <>
          We offer various AI, generative AI, machine learning, NLP, and data science services. Here are a select few:
          <ul>
            <li>
              <strong>AI Integration Services:</strong> We develop high-impact AI integration strategies tailored to your organization. With proven frameworks and deep industry expertise, we identify the best AI and Generative AI use cases and create a clear, actionable roadmap for success. We also support its seamless implementation.
            </li>
            <li>
              <strong>AI Opportunity Assessments:</strong> We perform AI opportunity assessments to identify and evaluate potential AI-driven opportunities to maximize business impact.
            </li>
            <li>
              <strong>NLP Consulting:</strong> We offer expert NLP and machine learning development services, helping teams create highly customized, production-quality NLP and Generative AI solutions for language-related problems, from document management to insights extraction. Our deep expertise in NLP comes from solving nearly two decades of real-world NLP problems in different industries and publishing over two dozen NLP papers in the field.
            </li>
            <li>
              <strong>AI in Government:</strong> Apply AI technologies to improve public services, policy-making, and operational efficiency within government agencies.
            </li>
            <li>
              <strong>AI in Healthcare:</strong> Implement AI solutions to advance patient care, streamline operations, and support medical research in the healthcare sector.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: 'What is AI and machine learning consulting services?',
      answer: `Machine learning and AI consulting involves partnering with experts to leverage artificial intelligence and data-driven techniques to solve complex business problems, improve operational inefficiencies, reduce workflow errors, increase user engagement, and boost revenues. The work can range from high-level strategy initiatives to low-level technical implementation initiatives.

At Opinosis Analytics, we’re a full-cycle AI and machine learning consulting company, meaning we take things from the top (strategy) right down to implementation. The reason why we’re able to do this is because of our industry experience. We’ve worked with teams globally on implementation as well as strategy projects, seen many of the problems in the field, and developed robust strategies to solve problems at every stage. Many of our approaches are documented in our book, The Business Case for AI.

Teams from companies such as Siemens Energy, Cisco, Amazon, and many other Fortune 500 companies are currently adopting our recommended strategies in the implementation of AI.`,
    },
    {
      question: 'Do you offer both strategy and implementation services?',
      answer: 'Yes! We provide several variations of the two, including AI Strategy Development, AI Opportunity Assessments, NLP Solution Development, and More.',
    },
    {
      question: 'What industries do you serve?',
      answer: (
        <>
          We are an AI-focused service provider that furnishes AI and data science services to mid-sized and large businesses across industries. While each industry will have its own problems and domain-specific workflows, many AI approaches and techniques we have developed for various clients tend to be foundationally similar.

          Our dedicated team of data scientists and machine learning engineers collaborate closely with clients to deliver cutting-edge AI solutions tailored to their unique business needs.

          We’ve successfully implemented AI-driven solutions in:
          <ul>
            <li>
              <i className="fas fa-link"></i> <a href="#">healthcare domain</a>
            </li>
            <li>
              <i className="fas fa-link"></i> <a href="#">government sector</a>
            </li>
            <li>
              <i className="fas fa-industry"></i> legal sector
            </li>
            <li>
              <i className="fas fa-cogs"></i> Manufacturing
            </li>
            <li>
              <i className="fas fa-university"></i> internet companies
            </li>
          </ul>
        </>
      ),
    },
    {
      question: 'What makes your company unique?',
      answer: `Two phrases: depth of knowledge and industry success. We didn’t start a software development company and extend our services into AI. We’ve been hyper-focused on AI and data science solutions from the very beginning.

Not only have we published technical tools that companies worldwide have adopted, but we’ve also published business frameworks for AI opportunity evaluation, strategy development, and success measurement, which are widely adopted by companies globally, including US government agencies. Our frameworks and best practices were meticulously created through first-hand experience working with various organizations.`,
    },
    {
      question: 'How do machine learning models improve business outcomes?',
      answer: `Machine learning models enhance business operations by automating decision-making, optimizing workflows, and uncovering hidden insights through advanced data analysis. These models can be used for predictive analytics, fraud detection, recommendation systems, and much more.

At Opinosis Analytics, we specialize in designing and implementing custom machine learning models tailored to your specific business needs, ensuring they deliver measurable results.`,
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions About AI Consulting</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">
                {activeIndex === index ? '▼' : '▶'}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;