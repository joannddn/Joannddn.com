import './App.css'
import { useState } from 'react'
import Logo from './assets/Logo.png'
import { Icon } from '@iconify/react';

function App() {
  const [activeTab, setActiveTab] = useState('Software')
  const [activeProjectTab, setActiveProjectTab] = useState('Software')
  const [currentProjectIndex, setCurrentProjectIndex] = useState({
    'Software': 0,
    'Graphic Design': 0,
    'Others': 0
  })

  const skillsData = {
    Software: [
      { icon: 'vscode-icons:file-type-html', name: 'HTML' },
      { icon: 'devicon:css3', name: 'CSS' },
      { icon: 'logos:tailwindcss-icon', name: 'Tailwind CSS' },
      { icon: 'logos:javascript', name: 'JS' },
      { icon: 'logos:react', name: 'React' },
      { icon: 'logos:git-icon', name: 'GIT' },
      { icon: 'logos:github-icon', name: 'Github' },
      { icon: 'skill-icons:wordpress', name: 'WordPress' },
      { icon: 'logos:shopify', name: 'Shopify' },
      { icon: 'logos:figma', name: 'Figma' },
      { icon: 'logos:mysql', name: 'SQL' },
      { icon: 'simple-icons:openai', name: 'AI' }
    ],
    'Graphic Design': [
      { icon: 'logos:adobe-photoshop', name: 'Photoshop' },
      { icon: 'logos:adobe-illustrator', name: 'Illustrator' },
      { icon: 'logos:adobe-premiere', name: 'Premiere' },
      { icon: 'logos:adobe-after-effects', name: 'After Effects' },
      { icon: 'simple-icons:openai', name: 'Sora' },
      { icon: 'simple-icons:openai', name: 'DALL-E' },
      { icon: 'simple-icons:canva', name: 'Canva' },
      { icon: 'simple-icons:freepik', name: 'Freepik' }
    ],
    Others: [
      { icon: 'logos:microsoft-windows', name: 'Windows' },
      { icon: 'logos:linux-tux', name: 'Linux' },
      { icon: 'logos:microsoft-icon', name: 'Microsoft Office' },
      { icon: 'material-symbols:content-copy', name: 'Content Creation' },
      { icon: 'flat-color-icons:support', name: 'Technical Support' },
      { icon: 'simple-icons:openai', name: 'ChatGPT' },
      { icon: 'logos:aws', name: 'AWS' },
      { icon: 'simple-icons:hostinger', name: 'Hostinger' },
      { icon: 'devicon:cloudflare', name: 'Cloudflare' },
      { icon: 'twemoji:flag-united-states', name: 'English' },
      { icon: 'twemoji:flag-spain', name: 'Spanish' }
    ]
  };

  const projectsData = {
    'Software': [
      {
        title: 'SVGL - A beautiful library with SVG logos',
        description: 'Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.',
        technologies: ['Next.js', 'Tailwind CSS'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'AdventJS - Retos de programación con JavaScript y TypeScript',
        description: 'Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.',
        technologies: ['Next.js', 'Tailwind CSS'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'Portfolio Personal',
        description: 'Mi portfolio personal desarrollado con React y CSS moderno.',
        technologies: ['React', 'CSS'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'E-commerce Platform',
        description: 'Plataforma de comercio electrónico completa con carrito de compras.',
        technologies: ['React', 'Node.js'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      }
    ],
    'Graphic Design': [
      {
        title: 'Brand Identity Design',
        description: 'Diseño de identidad corporativa completa para startup tecnológica.',
        technologies: ['Photoshop', 'Illustrator'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'Social Media Campaign',
        description: 'Campaña visual para redes sociales con más de 100K impresiones.',
        technologies: ['After Effects', 'Photoshop'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'Print Design Collection',
        description: 'Colección de diseños para material impreso y merchandising.',
        technologies: ['Illustrator', 'Photoshop'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'UI/UX Design System',
        description: 'Sistema de diseño completo para aplicación móvil.',
        technologies: ['Figma', 'Photoshop'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      }
    ],
    'Others': [
      {
        title: 'Content Creation Strategy',
        description: 'Estrategia de contenido que aumentó el engagement en 300%.',
        technologies: ['Content Strategy', 'Analytics'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'Technical Documentation',
        description: 'Documentación técnica completa para equipo de desarrollo.',
        technologies: ['Technical Writing', 'Documentation'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'Process Automation',
        description: 'Automatización de procesos que redujo tiempo de trabajo en 50%.',
        technologies: ['Automation', 'Process Design'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      },
      {
        title: 'Training Program',
        description: 'Programa de capacitación técnica para equipo de soporte.',
        technologies: ['Training', 'Technical Support'],
        image: '/api/placeholder/400/200',
        codeUrl: '#',
        previewUrl: '#'
      }
    ]
  };

  const nextProjects = () => {
    const maxIndex = Math.max(0, projectsData[activeProjectTab].length - 2);
    setCurrentProjectIndex(prev => ({
      ...prev,
      [activeProjectTab]: Math.min(prev[activeProjectTab] + 2, maxIndex)
    }));
  };

  const prevProjects = () => {
    setCurrentProjectIndex(prev => ({
      ...prev,
      [activeProjectTab]: Math.max(prev[activeProjectTab] - 2, 0)
    }));
  };

  const handleTabChange = (tab) => {
    setActiveProjectTab(tab);
    setCurrentProjectIndex(prev => ({ ...prev, [tab]: 0 }));
  };

  const getCurrentProjects = () => {
    const startIndex = currentProjectIndex[activeProjectTab];
    return projectsData[activeProjectTab].slice(startIndex, startIndex + 2);
  };

  const canGoPrev = currentProjectIndex[activeProjectTab] > 0;
  const canGoNext = currentProjectIndex[activeProjectTab] < projectsData[activeProjectTab].length - 2;

  return (
    <div className="hero-root">
      {/* Header */}
      <header className="hero-header">
        <img src={Logo} alt="Joann Díaz Logo" className="logo-image" />
        <nav className="hero-nav">
          <a href="#" className="active">Home</a>
          <a href="#">About me</a>
          <a href="#">Skills</a>
          <a href="#">Project</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="hero-left">
          <h2 className="hero-heading">I'm <span>Joann Díaz</span></h2>
          <div className="hero-underline"></div>
          <p className="hero-subtitle">Software Developer | Graphic designer</p>
          <div className="hero-buttons">
            <button className="btn-filled">My Resume</button>
            <button className="btn-outline">Open to Work</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-outline">
            {/* Place your image here in the future */}
          </div>
        </div>
      </section>

      {/* About + Skills Section */}
      <section className="about-skills-section">
        <div className="about-skills-container">
          {/* About Me */}
          <div className="about-me">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I began my journey into the world of software through graphic design, where I discovered a passion for creating intuitive, accessible technology that enhances everyday life.<br/><br/>
              Now, as a Software Engineer and Multimedia Designer, I bring ideas to life—from concept to layout—blending creativity with functionality to craft meaningful digital experiences.
            </p>
            <div className='about-me-strengths'>
              <p>#Creative</p>
              <p>#Technical</p>
              <p>#Innovative</p>
            </div>
          </div>

          {/* Skills with Tabs */}
          <div className="skills-content">
            <h2>Skills</h2>
            {/* Tab Navigation */}
            <div className="skills-tabs">
              <button 
                className={`tab-button ${activeTab === 'Software' ? 'active' : ''}`}
                onClick={() => setActiveTab('Software')}
              >
                Software
              </button>
              <button 
                className={`tab-button ${activeTab === 'Graphic Design' ? 'active' : ''}`}
                onClick={() => setActiveTab('Graphic Design')}
              >
                Graphic Design
              </button>
              <button 
                className={`tab-button ${activeTab === 'Others' ? 'active' : ''}`}
                onClick={() => setActiveTab('Others')}
              >
                Others
              </button>
            </div>

            {/* Skills Content */}
            <div className="skills-grid">
              {skillsData[activeTab].map((skill, index) => (
                <div key={index} className={`skill-card ${activeTab === 'Graphic Design' ? 'design' : activeTab === 'Others' ? 'others small' : 'dev'}`}>
                  <Icon icon={skill.icon} className="skill-icon" />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="experience-education-section">
        <div className="experience-education-container">
          {/* Experience */}
          <div className="experience">
            <h2>Experiencia Laboral</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Web & Graphic Designer</h3>
                  <p className="company">Freelance</p>
                  <p className="date">2022 - Present</p>
                  <p>Desarrollo de sitios web responsivos y diseño de identidades visuales para diversos clientes. Especialización en WordPress, Shopify y diseño gráfico.</p>
                  <button className="learn-more">Learn More</button>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Freelance Web Designer</h3>
                  <p className="company">Independent</p>
                  <p className="date">2021 - 2022</p>
                  <p>Creación de sitios web personalizados y optimización SEO. Trabajo con clientes locales e internacionales.</p>
                  <button className="learn-more">Learn More</button>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Onsite Technical Support Specialist</h3>
                  <p className="company">Various Companies</p>
                  <p className="date">2020 - 2021</p>
                  <p>Soporte técnico especializado en hardware y software. Resolución de problemas complejos y mantenimiento de sistemas.</p>
                  <button className="learn-more">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="education">
            <h2>Estudios</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Técnico en Informática</h3>
                  <p className="company">Instituto Tecnológico</p>
                  <p className="date">2018 - 2020</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Bachillerato en Ciencias</h3>
                  <p className="company">Colegio Nacional</p>
                  <p className="date">2015 - 2018</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Certificación en Diseño Gráfico</h3>
                  <p className="company">Academia de Artes Digitales</p>
                  <p className="date">2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="projects-section">
          {/* Projects Section */}
          <div className="projects-container">
            <h2 className="section-title">Proyectos</h2>
            
            {/* Projects Tabs */}
            <div className="projects-tabs">
              <button 
                className={`tab-button ${activeProjectTab === 'Software' ? 'active' : ''}`}
                onClick={() => handleTabChange('Software')}
              >
                Software
              </button>
              <button 
                className={`tab-button ${activeProjectTab === 'Graphic Design' ? 'active' : ''}`}
                onClick={() => handleTabChange('Graphic Design')}
              >
                Graphic Design
              </button>
              <button 
                className={`tab-button ${activeProjectTab === 'Others' ? 'active' : ''}`}
                onClick={() => handleTabChange('Others')}
              >
                Others
              </button>
            </div>

            {/* Projects Content with Carousel */}
            <div className="projects-carousel">
              {/* Previous Button */}
              <button 
                className={`carousel-nav prev ${!canGoPrev ? 'disabled' : ''}`}
                onClick={prevProjects}
                disabled={!canGoPrev}
              >
              </button>

              {/* Projects Grid */}
              <div className="projects-grid">
                {getCurrentProjects().map((project, index) => (
                  <div key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-buttons">
                        <a href={project.codeUrl} className="project-btn btn-code">Code</a>
                        <a href={project.previewUrl} className="project-btn btn-preview">Preview</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button 
                className={`carousel-nav next ${!canGoNext ? 'disabled' : ''}`}
                onClick={nextProjects}
                disabled={!canGoNext}
              >
                
              </button>
            </div>

            {/* Indicators */}
            <div className="carousel-indicators">
              {Array.from({ length: Math.ceil(projectsData[activeProjectTab].length / 2) }).map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentProjectIndex[activeProjectTab] === index * 2 ? 'active' : ''}`}
                  onClick={() => setCurrentProjectIndex(prev => ({ ...prev, [activeProjectTab]: index * 2 }))}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
}

export default App