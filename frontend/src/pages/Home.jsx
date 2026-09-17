import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import HeroScene from '../components/3d/HeroScene';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="greeting">Hello, I'm</h2>
            <h1 className="name outfit-font">
              <span className="accent-text">Aditya Kumar</span> Sinha
            </h1>
            <p className="bio">
              I build immersive, high-performance web applications with a focus on modern design, 3D experiences, and fluid animations.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
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
      <Contact />
    </div>
  );
};

export default Home;
