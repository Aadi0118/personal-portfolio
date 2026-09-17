import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Co-Founder and Technical Chief',
    company: 'Shree Family Restaurant',
    date: 'Aug 2025 - Present',
    location: 'Rishikesh, Uttarakhand, India · Hybrid',
    highlights: [
      {
        title: 'Network Security & POS Infrastructure Overhaul',
        problem: 'Public Wi-Fi and internal networks were unsegmented, leaving POS and customer data vulnerable.',
        solution: 'Conducted a security audit, implemented strict network segmentation, and encrypted transaction data.',
        result: 'Achieved a 100% secure operational network with zero breaches, ensuring full compliance.'
      },
      {
        title: 'QR-Based Ordering & Digital Menu Deployment',
        problem: 'High customer volume during peak tourist seasons caused bottlenecks in order-taking.',
        solution: 'Deployed a localized, low-latency digital menu and QR-code ordering system routed to the kitchen display.',
        result: 'Accelerated order processing by 30 mins per table, increasing daily table turnover by 45%.'
      },
      {
        title: 'Customer Data & Review Analytics',
        problem: 'Customer feedback was scattered across multiple platforms.',
        solution: 'Built a data aggregation pipeline using GenAI/sentiment analysis to categorize feedback.',
        result: 'Identified critical delays, adjusted workflows, and boosted average online ratings from 3.2 to 4.5 stars.'
      }
    ]
  },
  {
    id: 2,
    role: 'Full Stack JAVA Developer & Machine Learning Intern',
    company: 'Tata Steel',
    date: 'Jun 2024 - Aug 2024',
    location: 'Jamshedpur, Jharkhand, India · Remote',
    highlights: [
      {
        title: 'Software Development & Machine Learning',
        solution: 'Remote internship focused on software development and machine learning applications.'
      }
    ]
  },
  {
    id: 3,
    role: 'Full Stack Engineer Intern',
    company: 'EazyByts.com',
    date: 'Jun 2024 - Jul 2024',
    location: 'Remote',
    highlights: [
      {
        title: 'Full Stack Java Development',
        solution: 'Contributed to remote software development projects as a Full Stack Java Developer.'
      }
    ]
  },
  {
    id: 4,
    role: 'Software Engineer Intern',
    company: 'CodeClause',
    date: 'Jun 2024 - Jul 2024',
    location: 'Remote',
    highlights: [
      {
        title: 'Software Development',
        solution: 'Remote internship focused on foundational software development and best practices.'
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title outfit-font">My <span className="accent-text">Experience</span></h2>
          <p className="section-subtitle">A timeline of my professional journey.</p>
        </motion.div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="exp-header">
                  <h3 className="exp-role outfit-font">{exp.role}</h3>
                  <div className="exp-company-info">
                    <span className="exp-company">
                      <Briefcase size={16} /> {exp.company}
                    </span>
                    <span className="exp-date">
                      <Calendar size={16} /> {exp.date}
                    </span>
                    <span className="exp-location">
                      <MapPin size={16} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="exp-body">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <h4 className="highlight-title">{highlight.title}</h4>
                      {highlight.problem && (
                        <p className="highlight-text"><strong>Problem:</strong> {highlight.problem}</p>
                      )}
                      <p className="highlight-text"><strong>Solution:</strong> {highlight.solution}</p>
                      {highlight.result && (
                        <p className="highlight-text"><strong>Result:</strong> {highlight.result}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
