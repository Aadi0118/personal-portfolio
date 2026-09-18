import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <a href="#" className="nav-logo outfit-font" onClick={() => setActiveTab('Home')}>
          Portfolio<span className="accent-text">.</span>
        </a>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="nav-link" 
              onClick={() => {
                setIsOpen(false);
                setActiveTab(item.name);
              }}
            >
              {item.name}
              {activeTab === item.name && (
                <motion.div
                  layoutId="active-nav-underline"
                  className="active-underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a href="#contact" className="nav-btn" onClick={() => setIsOpen(false)}>Let's Talk</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
