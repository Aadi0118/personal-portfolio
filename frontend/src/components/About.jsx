import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile pic.jpg';
import './About.css';

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Render', icon: 'https://cdn.simpleicons.org/render/white' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title outfit-font">About <span className="accent-text">Me</span></h2>
          <p className="section-subtitle">Get to know the face behind the code.</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={profilePic} 
              alt="My Profile" 
              className="profile-image" 
            />
            <div className="image-overlay-decoration"></div>
          </motion.div>

          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="outfit-font">Hi, I'm Aditya — architecting the digital future, one line of code at a time.</h3>
            <p>
              I am a driven Full-Stack Engineer and Technical Chief with a deep passion for designing scalable backend architectures and crafting immersive, high-performance web experiences. 
            </p>
            <p>
              From securing operational business networks and building complex payment systems to designing interactive 3D interfaces, I thrive on transforming complex technical challenges into elegant, intuitive, and highly functional digital solutions.
            </p>
            <p>
              Here are the technologies I work with to bring ideas to life:
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" title={skill.name}>
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
