import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import restaurantImage from '../assets/linkedin 1.PNG';
import busBookingImage from '../assets/booking system.PNG';
import pacmanImage from '../assets/pacman.jpg';
import brickAndBallImage from '../assets/brick and ball game.PNG';
import LudoImg from '../assets/ludo.PNG';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case the backend isn't running yet
  const fallbackProjects = [
    {
      _id: '1',
      title: 'Ludo Royale',
      description: 'An immersive online multiplayer Ludo experience featuring real-time voice chat, bringing friends and family together for classic board game fun from anywhere in the world.',
      technologies: ['React', 'NodeJS', 'Socket.io', 'MongoDB', 'WebRTC'],
      githubLink: 'https://github.com/Aadi0118/Ludo-Royale',
      liveLink: 'https://ludo-royale-9cpy.onrender.com',
      imageUrl: LudoImg
    },
    {
      _id: '2',
      title: 'Shree Family Restaurant Website',
      description: 'A comprehensive full-stack restaurant management and online ordering system. Features include a dynamic digital menu, real-time table reservations, secure user authentication, and a dedicated admin dashboard for managing orders seamlessly.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: 'https://shree-restaurant-seven.vercel.app/',
      imageUrl: restaurantImage
    },
    {
      _id: '3',
      title: 'Bus Booking System',
      description: 'A full-stack MERN web application for booking bus tickets. It features a complete reservation flow, seat selection, and a mock credit card payment gateway that automatically generates digital tickets upon successful transactions.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Passport Js', 'Bootstrap 4', 'SCSS', 'Axios'],
      githubLink: 'https://github.com/Aadi0118/MERN-STACK-BUSS-BOOKING-SYSTEM/tree/main/MERN-BUS-APP-master',
      liveLink: '#',
      imageUrl: busBookingImage
    },
    {
      _id: '4',
      title: 'Pacman Game',
      description: 'A classic Pacman arcade game clone developed entirely in Python. It features custom game logic, enemy ghost AI behavior, collision detection, and score tracking.',
      technologies: ['Python', 'Pygame', 'Tkinter', 'Game Development'],
      githubLink: 'https://github.com/Aadi0118/mini-project',
      liveLink: '#',
      imageUrl: pacmanImage
    },
    {
      _id: '5',
      title: 'Brick and Ball Game',
      description: 'An engaging retro-style arcade game developed in Java. It features custom 2D physics, dynamic paddle mechanics, collision detection, and smooth block-breaking gameplay.',
      technologies: ['Java', 'Swing/AWT', 'Game Development', 'OOP'],
      githubLink: '#',
      liveLink: 'https://www.linkedin.com/posts/aditya-kumar-sinha-the-best-coder-ig_java-gamedevelopment-programming-activity-7300203753196949508-kvsN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_JPOUBkHYg64d1KMU_dJh97CbPBxIJFbA',
      imageUrl: brickAndBallImage
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/projects`);
        if (res.ok) {
          const data = await res.json();
          // If no projects in DB, use fallback
          setProjects(data.length > 0 ? data : fallbackProjects);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.error('Failed to fetch projects, using fallback data:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title outfit-font">Featured <span className="accent-text">Projects</span></h2>
          <p className="section-subtitle">Here are some of my recent works.</p>
        </motion.div>

        {loading ? (
          <div className="loading-state">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                className="project-card glass-panel"
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
                <div className="project-image-container">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                  ) : (
                    <div className="project-image-placeholder"></div>
                  )}
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubLink && project.githubLink !== '#' && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="icon-link">
                          <Code size={20} />
                        </a>
                      )}
                      {project.liveLink && project.liveLink !== '#' && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="icon-link">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-title outfit-font">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
