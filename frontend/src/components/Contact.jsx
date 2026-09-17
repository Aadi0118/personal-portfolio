import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }

    // Reset status message after 3 seconds
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title outfit-font">Let's <span className="accent-text">Connect</span></h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it.</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="info-title outfit-font">Contact Information</h3>
            <p className="info-desc">Fill up the form and I will get back to you within 24 hours.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>sinhaaditya0110@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Rishikesh, Uttarakhand, India</p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4 className="social-title">Find me on</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/aditya-kumar-sinha-the-best-coder-ig" target="_blank" rel="noreferrer" className="social-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '22px', height: '22px' }} />
                </a>
                <a href="https://x.com/SinhaAditya0110" target="_blank" rel="noreferrer" className="social-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" alt="X/Twitter" style={{ width: '22px', height: '22px' }} />
                </a>
                <a href="https://github.com/Aadi0118" target="_blank" rel="noreferrer" className="social-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" style={{ width: '22px', height: '22px', filter: 'invert(1)' }} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="form-input"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="status-msg success">Message sent successfully!</div>
              )}
              {status === 'error' && (
                <div className="status-msg error">Failed to send message. Please try again.</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
