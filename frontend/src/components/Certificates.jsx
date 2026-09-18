import React from 'react';
import { motion } from 'framer-motion';
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


const Certificates = () => {
  // Placeholder data - replace imageUrl and verifyLink with your actual data
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
            <motion.div
              key={cert.id}
              className="cert-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
              }}
            >
              <div className="cert-image-container">
                <img src={cert.imageUrl} alt={cert.title} className="cert-image" />
                <div className="cert-issuer-badge">
                  <CheckCircle size={14} className="verified-icon" />
                  {cert.issuer}
                </div>
              </div>

              <div className="cert-info">
                <h3 className="cert-title outfit-font">{cert.title}</h3>

                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  {cert.verifyLink && cert.verifyLink !== '#' && (
                    <a href={cert.verifyLink} target="_blank" rel="noreferrer" className="cert-verify-btn">
                      Verify <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
