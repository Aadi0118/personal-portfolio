import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <a href="#" className="nav-logo outfit-font">
          Portfolio<span className="accent-text">.</span>
        </a>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-btn">Let's Talk</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
