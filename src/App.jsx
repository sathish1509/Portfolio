import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code2, Database, Layout, PenTool, Award, Send, ChevronUp, CheckCircle2, Globe, Cpu, Briefcase, Instagram } from 'lucide-react';
import './App.css';
import ProfilePhoto from './assets/photo.png';
import VibrociaImg from './assets/vibrocia.png';
import CurrencyImg from './assets/currency.png';
import CaloriesImg from './assets/calories.png';
import HostelImg from './assets/hostel.png';
import NielitImg from './assets/nielit_internship.jpg';
import GdgImg from './assets/gdg_hackathon.png';
import YugamImg from './assets/yugam_2026.jpg';
import MlImg from './assets/ml_presentation.png';

// Components
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="logo">
          SATHISH
        </div>
        <div className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#internship" className="nav-link">Internship</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#journey" className="nav-link">Journey</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="back-to-top"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      onClick={scrollToTop}
    >
      <ChevronUp size={24} />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span 
          className="project-tag"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to my universe
        </motion.span>
        <h1 className="hero-title">
          I'm <span className="text-gradient">Sathish</span>
        </h1>
        <h2 className="hero-subtitle">
          Computer Science Engineering Student | Cloud, Web & ML Developer
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '15px auto' }}>
          Building practical applications that combine efficient backend systems with intuitive user experiences across Cloud Computing and Machine Learning.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="https://drive.google.com/file/d/1BLLCdPk9Okv4K3XE8O7fwcb5kwXTyeMV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Download size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          {[
            { Icon: Github, link: "https://github.com/sathish1509", name: "github" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/sathish-p-700b2a313/", name: "linkedin" },
            { Icon: Instagram, link: "https://www.instagram.com/_sathish_1509_/", name: "instagram" },
            { Icon: Mail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=sathishmasi2006@gmail.com", name: "mail" }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`social-icon ${item.name}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 5 : -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <item.Icon size={22} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero-image-wrapper">
          <img src={ProfilePhoto} alt="Sathish" className="hero-image" />
          <div className="hero-image-glow"></div>
          
          {/* Floating Icons */}
          <motion.div className="floating-icon icon-1" whileHover={{ scale: 1.2 }}><Code2 size={24} /></motion.div>
          <motion.div className="floating-icon icon-2" whileHover={{ scale: 1.2 }}><Database size={24} /></motion.div>
          <motion.div className="floating-icon icon-3" whileHover={{ scale: 1.2 }}><Globe size={24} /></motion.div>
          <motion.div className="floating-icon icon-4" whileHover={{ scale: 1.2 }}><Cpu size={24} /></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        About Me
      </motion.h2>
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <p>
            Hello! I'm Sathish, a Computer Science Engineering student with a strong interest in Cloud Computing, Web Development, and Machine Learning. I enjoy building practical applications that combine efficient backend systems with intuitive user experiences.
          </p>
          <p>
            Through my academic projects and personal work, I focus on developing scalable web applications, working with modern technologies, and applying machine learning techniques to solve real-world problems. I am always eager to explore new tools and frameworks that help me improve my development skills.
          </p>
          <p>
            Beyond coding, I actively participate in hackathons and technical events, where I collaborate with others, learn emerging technologies, and continuously challenge myself to grow as a developer.
          </p>
        </motion.div>
        <motion.div 
          className="about-image glass"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}
        >
          <div style={{ textAlign: 'center' }}>
            <Code2 size={100} color="var(--accent-primary)" />
            <h3 style={{ marginTop: '20px' }}>CSE Student</h3>
            <p className="text-gradient" style={{ fontWeight: 600 }}>Innovator & Builder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Internship = () => {
  const internships = [
    {
      company: "National Institute of Electronics & Information Technology (NIELIT), Calicut",
      role: "Web Application Development Intern",
      duration: "4-Week Internship",
      desc: "Gained hands-on experience in web application development using the Django framework. Worked on developing dynamic web applications, understanding backend architecture, and implementing data-driven features while strengthening skills in Python and practical software design."
    }
  ];

  return (
    <section id="internship">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Internship
      </motion.h2>
      <div className="projects-grid">
        {internships.map((item, idx) => (
          <motion.div 
            key={idx}
            className="glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -10 }}
            style={{ textAlign: 'center' }}
          >
             <div style={{ 
               width: '60px', 
               height: '60px', 
               background: 'rgba(124, 58, 237, 0.1)',
               borderRadius: '12px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               color: 'var(--accent-primary)',
               margin: '0 auto 20px'
             }}>
               <Briefcase size={32} />
             </div>
             <div className="project-tag" style={{ marginBottom: '10px' }}>{item.duration}</div>
             <h3 className="project-title" style={{ marginBottom: '5px' }}>{item.role}</h3>
             <p className="text-gradient" style={{ fontWeight: 600, marginBottom: '15px' }}>{item.company}</p>
             <p className="project-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 size={20} />,
      skills: [
        { name: "C", logo: `${CDN}/c/c-original.svg` },
        { name: "Python", logo: `${CDN}/python/python-original.svg` },
        { name: "Java", logo: `${CDN}/java/java-original.svg` },
        { name: "C++", logo: `${CDN}/cplusplus/cplusplus-original.svg` },
        { name: "JavaScript", logo: `${CDN}/javascript/javascript-original.svg` }
      ]
    },
    {
      title: "Web Development",
      icon: <Layout size={20} />,
      skills: [
        { name: "HTML", logo: `${CDN}/html5/html5-original.svg` },
        { name: "CSS", logo: `${CDN}/css3/css3-original.svg` },
        { name: "React", logo: `${CDN}/react/react-original.svg` },
        { name: "Django", logo: `${CDN}/django/django-plain.svg` },
        { name: "Node.js", logo: `${CDN}/nodejs/nodejs-original.svg` }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: [
        { name: "MongoDB", logo: `${CDN}/mongodb/mongodb-original.svg` },
        { name: "PostgreSQL", logo: `${CDN}/postgresql/postgresql-original.svg` }
      ]
    },
    {
      title: "Tools & Design",
      icon: <PenTool size={20} />,
      skills: [
        { name: "Git", logo: `${CDN}/git/git-original.svg` },
        { name: "Figma", logo: `${CDN}/figma/figma-original.svg` },
        { name: "Canva", logo: `${CDN}/canva/canva-original.svg` },
        { name: "VS Code", logo: `${CDN}/vscode/vscode-original.svg` }
      ]
    }
  ];

  return (
    <section id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Technical Skills
      </motion.h2>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            className="glass-card skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
          >
            <h3>{cat.icon} {cat.title}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <motion.span 
                  key={sIdx} 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(124, 58, 237, 0.1)', borderColor: 'var(--accent-primary)' }}
                >
                  <img src={skill.logo} alt={skill.name} className="skill-logo" onError={(e) => { e.target.style.display='none'; }} />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Currency Converter",
      tag: "Web App",
      desc: "Real-time currency conversion tool featuring historical data and a responsive dashboard.",
      tech: ["Python", "Django", "MongoDB"],
      link: "https://github.com/sathish1509/currency-converter",
      image: CurrencyImg,
      status: "Completed"
    },
    {
      title: "Calories Burnt Prediction",
      tag: "Machine Learning",
      desc: "ML model that predicts calories burnt during exercise based on person's health data and activity.",
      tech: ["Scikit-Learn", "Matplotlib", "Python"],
      link: "https://github.com/sathish1509/Calories-burnt-prediction",
      image: CaloriesImg,
      status: "Completed"
    },
    {
      title: "Hostel Complaint Platform",
      tag: "MERN Stack",
      desc: "A complete management system for students and wardens to raise and track hostel-related issues.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/sathish1509/hostel-complaint-platform",
      image: HostelImg,
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            className="glass-card project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img 
                src={proj.image} 
                alt={proj.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-color), transparent)', opacity: 0.6 }}></div>
              <span className={`status-badge ${proj.status === 'Ongoing' ? 'status-ongoing' : 'status-completed'}`}>
                {proj.status}
              </span>
            </div>
            <span className="project-tag">{proj.tag}</span>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-tech">
              {proj.tech.map((t, tIdx) => (
                <span key={tIdx} className="tech-item">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <motion.a whileHover={{ scale: 1.2 }} href={proj.link} className="social-icon"><Github size={24} /></motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "3rd Prize in IoT Solutions Sprint – Yugam 2026",
      provider: "KCT, Coimbatore",
      desc: "Secured 3rd place in the IoT Solutions Sprint at Yugam 2026, an inter-college techno-cultural festival hosted by Kumaraguru College of Technology.",
      icon: <Award size={32} />
    },
    {
      title: "GDG TechSprint Hackathon Participant",
      provider: "Sri Sairam Engineering College",
      desc: "Participated in the GDG TechSprint Hackathon organized by Google Developer Groups, collaborating on innovative technology solutions.",
      icon: <Cpu size={32} />
    }
  ];

  return (
    <section id="achievements">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Achievements
      </motion.h2>
      <div className="projects-grid">
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            className="glass-card"
            style={{ textAlign: 'center', padding: '40px 30px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
          >
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              margin: '0 auto 20px',
              boxShadow: '0 8px 20px rgba(124, 58, 237, 0.4)'
            }}>
              {item.icon}
            </div>
            <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
            <p className="project-tag" style={{ marginBottom: '15px' }}>{item.provider}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Journey = () => {
  const milestones = [
    {
      title: "Sri Eshwer College of Engineering",
      desc: "B.E. Computer Science and Engineering",
      date: "2024 - 2028"
    },
    {
      title: "Vivek Vidalaya Matric Higher Secondary School",
      desc: "Higher Secondary Certificate (HSC)",
      date: "2022 - 2024"
    },
    {
      title: "Sree Sakthi Matric Higher Secondary School",
      desc: "Secondary School Leaving Certificate (SSLC)",
      date: "2021 - 2022"
    }
  ];

  return (
    <section id="journey">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        My Journey
      </motion.h2>
      <div className="timeline">
        {milestones.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <motion.div 
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.div 
              className="timeline-content glass-card"
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <span className="project-tag" style={{ fontSize: '0.7rem' }}>{item.date}</span>
              <h3 style={{ margin: '5px 0 10px 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { 
      src: NielitImg, 
      title: 'NIELIT 4-Week Internship – Django Web Development', 
      desc: 'Completed a 4-week internship at NIELIT Calicut where I gained hands-on experience in Python and Django, developing web applications and strengthening my backend development skills.' 
    },
    { 
      src: GdgImg, 
      title: 'GDG TechSprint Hackathon – Sri Sairam Engineering College', 
      desc: 'This moment captures my participation in the GDG TechSprint Hackathon organized by Google Developer Groups on Campus at Sri Sairam Engineering College. The event brought together students from different institutions to collaborate and innovate.' 
    },
    { 
      src: YugamImg, 
      title: 'Yugam 2026 – 3rd Prize in IoT Solutions Sprint', 
      desc: 'This moment captures my achievement of securing the 3rd prize in the IoT Solutions Sprint during Yugam 2026, the annual techno-cultural festival hosted by Kumaraguru College of Technology, Coimbatore.' 
    },
    { 
      src: MlImg, 
      title: 'Machine Learning Project Presentation – NIELIT Calicut', 
      desc: 'Presented the final team project developed during a 4-week Machine Learning internship, showcasing practical implementation of ML concepts.' 
    }
  ];

  return (
    <section id="gallery">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Gallery
      </motion.h2>
      <div className="gallery-container">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            className="gallery-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="gallery-image-wrapper">
              <img src={img.src} alt={img.title} className="gallery-image-tilted" />
            </div>
            <div className="gallery-text">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOTE: Replace 'YOUR_FORMSPREE_ID' with your actual ID from Formspree.io
      const response = await fetch("https://formspree.io/f/xaqpozzg", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section id="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Get In Touch
      </motion.h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3>Let's build something <span className="text-gradient">amazing</span> together.</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            I am always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>

          <div className="contact-socials">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sathishmasi2006@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-social-icon mail">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/sathish-p-700b2a313" target="_blank" rel="noopener noreferrer" className="contact-social-icon linkedin">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/sathish1509" target="_blank" rel="noopener noreferrer" className="contact-social-icon github">
              <Github size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="5" 
                placeholder="Your Message" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <motion.button 
              className={`btn ${isSent ? 'btn-success' : 'btn-primary'}`}
              style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting || isSent}
            >
              {isSubmitting ? (
                <>Sending... <div className="spinner"></div></>
              ) : isSent ? (
                <>Message Sent! <CheckCircle2 size={20} /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
      <div className="logo" style={{ marginBottom: '20px' }}>
        SATHISH
      </div>
      <div className="hero-socials" style={{ justifyContent: 'center', marginTop: '20px' }}>
        {[
          { Icon: Github, link: "https://github.com/sathish1509" },
          { Icon: Linkedin, link: "https://www.linkedin.com/in/sathish-p-700b2a313/" },
          { Icon: Instagram, link: "https://www.instagram.com/_sathish_1509_/" },
          { Icon: Mail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=sathishmasi2006@gmail.com" }
        ].map((item, i) => (
          <motion.a 
            key={i}
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.Icon size={20} />
          </motion.a>
        ))}
      </div>
    </footer>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
        transformOrigin: '0%',
        zIndex: 10001,
        scaleX
      }}
      className="progress-bar"
    />
  );
};

const LandingPage = ({ onEnter }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnter();
    }, 1200); // Drastically reduced to 1.2 seconds
    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <motion.div 
      className="landing-page"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="landing-content">
        <div className="loader-v2">
          {/* Circular Progress SVG */}
          <div className="svg-container">
            <svg viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
          </div>

          {/* Animated Background Rings */}
          <div className="rings-container">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="pulse-ring"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0.5, 1.8],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut"
                }}
                style={{
                  borderColor: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)'
                }}
              />
            ))}
          </div>

          {/* Central Core */}
          <div className="core-container">
            <motion.div 
              className="main-orb"
              animate={{
                boxShadow: [
                  '0 0 20px var(--accent-primary)',
                  '0 0 50px var(--accent-secondary)',
                  '0 0 20px var(--accent-primary)'
                ],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="inner-glow"></div>
            </motion.div>

            {/* Orbiting Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="orbit-particle"
                style={{
                  rotate: i * 30
                }}
                animate={{
                  rotate: (i * 30) + 360,
                }}
                transition={{
                  duration: 5 + (i * 0.3),
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div 
                  className="particle-dot"
                  animate={{
                    scale: [0.5, 1, 0.5],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                  style={{
                    background: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : '#3b82f6',
                    top: '-50px'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Loading Text */}
          <motion.div 
            className="loading-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="loading-title">INITIALIZING</h2>
            <div className="loading-bar-container">
              <motion.div 
                className="loading-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="loading-status">Quick launch...</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Orbs for Landing Page */}
      <div className="landing-orbs">
        <div className="landing-orb orb-1"></div>
        <div className="landing-orb orb-2"></div>
      </div>
    </motion.div>
  );
};

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!showPortfolio ? (
        <LandingPage key="landing" onEnter={() => setShowPortfolio(true)} />
      ) : (
        <motion.div 
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="app-container"
        >
          {/* Background Elements */}
          <div className="bg-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>

          <div className="edge-glow"></div>
          <ScrollProgress />
          <Navbar />
          
          <main className="main-content">
            <Hero />
            <About />
            <Internship />
            <Skills />
            <Projects />
            <Achievements />
            <Journey />
            <Gallery />
            <Contact />
          </main>

          <BackToTop />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
