import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import HeroScene from '../components/3d/HeroScene';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-stars-container">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
          </Canvas>
          <div className="shooting-star" style={{ top: '10%', left: '80%', animationDelay: '0s' }}></div>
          <div className="shooting-star" style={{ top: '30%', left: '90%', animationDelay: '2.5s' }}></div>
          <div className="shooting-star" style={{ top: '5%', left: '40%', animationDelay: '4.2s' }}></div>
          <div className="shooting-star" style={{ top: '20%', left: '60%', animationDelay: '6.8s' }}></div>
          <div className="shooting-star" style={{ top: '40%', left: '70%', animationDelay: '9s' }}></div>
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="name outfit-font"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="gradient-text">Aditya Kumar Sinha</span>
            </motion.h1>
            <motion.p 
              className="bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              I build immersive, high-performance web applications with a focus on modern design, 3D experiences, and fluid animations.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-3d-container">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <HeroScene />
          </Canvas>
        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Home;
