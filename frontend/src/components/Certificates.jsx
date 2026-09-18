import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';
import './Certificates.css';
import honeywellImg from '../assets/honewell technologies hackathon.PNG';
import excelImg from '../assets/advance microsoft excel.PNG';
import industryImg from '../assets/Industry4.0.PNG';
import agileImg from '../assets/AgileExplorer.PNG';
import MLImg from '../assets/MachineLearning.PNG';
import CE from '../assets/IBMCloudEssential.PNG';
import AgileSD from '../assets/AgileSD.PNG';
import Html from '../assets/html.PNG';
import job from '../assets/job.PNG';
import RM from '../assets/rm.PNG';
import Wire from '../assets/wire.PNG';
import Node from '../assets/node.PNG';
import Java from '../assets/j2ee.PNG';
import OOAD from '../assets/ooad.PNG';
import SPM from '../assets/spm.PNG';

const TiltCard = ({ cert, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    // Set CSS vars for the glowing hover effect
    ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (ref.current) {
      ref.current.style.setProperty('--mouse-x', `-1000px`);
      ref.current.style.setProperty('--mouse-y', `-1000px`);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, rotateX: 60, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="cert-card glass-panel magic-card"
    >
      <div className="cert-glow"></div>
      
      <div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }} className="cert-content-wrapper">
        <div className="cert-image-container">
          <img src={cert.imageUrl} alt={cert.title} className="cert-image" style={{ transform: "translateZ(30px)" }} />
          <div className="cert-issuer-badge" style={{ transform: "translateZ(50px)" }}>
            <CheckCircle size={14} className="verified-icon" />
            {cert.issuer}
          </div>
        </div>

        <div className="cert-info">
          <h3 className="cert-title outfit-font" style={{ transform: "translateZ(40px)" }}>{cert.title}</h3>
          
          <div className="cert-footer" style={{ transform: "translateZ(30px)" }}>
            <span className="cert-date">{cert.date}</span>
            {cert.verifyLink && cert.verifyLink !== '#' && (
              <a href={cert.verifyLink} target="_blank" rel="noreferrer" className="cert-verify-btn" style={{ transform: "translateZ(20px)" }}>
                Verify <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: '24 Hours Honeywell Hackathon at Jain University, Bangalore',
      issuer: 'Jain University',
      date: 'May 4, 2024',
      imageUrl: honeywellImg,
      verifyLink: '#'
    },
    {
      id: 2,
      title: 'Advance Microsoft Excel',
      issuer: 'Tata Steel',
      date: 'July 17, 2024',
      imageUrl: excelImg,
      verifyLink: '#'
    },
    {
      id: 3,
      title: 'Industry 4.0',
      issuer: 'Tata Steel',
      date: 'August 4, 2024',
      imageUrl: industryImg,
      verifyLink: '#'
    },
    {
      id: 4,
      title: 'Agile Explorer',
      issuer: 'IBM',
      date: 'August 7, 2024',
      imageUrl: agileImg,
      verifyLink: 'https://www.credly.com/go/ABeGOKUB'
    },
    {
      id: 5,
      title: 'Machine Learning',
      issuer: 'IBM',
      date: 'August 8, 2024',
      imageUrl: MLImg,
      verifyLink: '#'
    },
    {
      id: 6,
      title: 'IBM Cloud Essentials',
      issuer: 'IBM',
      date: 'August 8, 2024',
      imageUrl: CE,
      verifyLink: 'https://www.credly.com/go/H9Z8A8EP'
    },
    {
      id: 7,
      title: 'Agile Software Devlopment',
      issuer: 'IBM',
      date: 'October 24, 2024',
      imageUrl: AgileSD,
      verifyLink: 'https://coursera.org/verify/94FUZW5DVHWL'
    },
    {
      id: 8,
      title: 'Introduction to HTML, CSS, & JavaScript',
      issuer: 'Coursera',
      date: 'October 29, 2024',
      imageUrl: Html,
      verifyLink: 'https://coursera.org/verify/REZNRFT809YSL'
    },
    {
      id: 9,
      title: 'The Art of the Job Interview',
      issuer: 'Coursera',
      date: 'November 14, 2024',
      imageUrl: job,
      verifyLink: 'https://coursera.org/verify/N7LWCG3JKMUP'
    },
    {
      id: 10,
      title: 'Research Methodologies',
      issuer: 'Coursera',
      date: 'November 19, 2024',
      imageUrl: RM,
      verifyLink: 'https://coursera.org/verify/FL32LZY0J5KI'
    },
    {
      id: 11,
      title: 'Wireshark for Beginners: TCP IP Protocol Fundamentals',
      issuer: 'Coursera',
      date: 'November 24, 2024',
      imageUrl: Wire,
      verifyLink: 'https://coursera.org/verify/EX2G8GP13ZGC'
    },
    {
      id: 12,
      title: 'NodeJS Unleashed: Mastering Backend Development',
      issuer: 'Coursera',
      date: 'March 11, 2025',
      imageUrl: Node,
      verifyLink: 'https://coursera.org/verify/3OARKXKVD7FI'
    },
    {
      id: 13,
      title: 'Introduction to Java Enterprise Edition (EE)',
      issuer: 'Coursera',
      date: 'April 1, 2025',
      imageUrl: Java,
      verifyLink: ''
    },
    {
      id: 14,
      title: 'Object-Oriented Analysis and Design: Foundations & Concepts',
      issuer: 'Coursera',
      date: 'April 3, 2025',
      imageUrl: OOAD,
      verifyLink: 'https://coursera.org/verify/N4HRA6ITL1SF'
    },
    {
      id: 15,
      title: 'Introduction to Software Product Management',
      issuer: 'Coursera',
      date: 'September 28, 2025',
      imageUrl: SPM,
      verifyLink: 'https://coursera.org/verify/1SVLGE4NM7HE'
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title outfit-font">My <span className="accent-text">Certificates</span></h2>
          <p className="section-subtitle">Credentials and accomplishments I have earned.</p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <TiltCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
