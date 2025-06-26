import './App.css'
import { useState } from 'react'
import Logo from './assets/Logo.png'
import { Icon } from '@iconify/react';

function App() {
  const [activeTab, setActiveTab] = useState('Software');

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
            {/* <img src="your-image.jpg" alt="Joann Díaz" /> */}
            {/* Optionally add X elements here for decoration */}
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
              <p>#Adaptable </p>
              <p>#Collaborative Team Player</p>
              <p>#Eagerness to Learn</p>
              <p>#Problem Solver</p>
              <p>#Passionate </p>
            </div>
          </div>
          {/* Skills with Tabs */}
          <div className="skills">
            <h2 className="section-title">Skills</h2>
            
            {/* Tab Navigation */}
            <div className="skills-tabs">
              <button 
                className={`tab-button ${activeTab === 'Software' ? 'active' : ''}`}
                onClick={() => setActiveTab('Software')}
              >
                Software Developer
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
            <div className="skills-content">
              <div className="skills-grid">
                {skillsData[activeTab].map((skill, index) => (
                  <div key={index} className={`skill-card ${activeTab.toLowerCase().replace(' ', '')}`}>
                    <div className="skill-icon">
                      <Icon icon={skill.icon} width="40" height="40" />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience & Education Section */}
      <section className="experience-education-section">
        <div className="experience-education-container">
          {/* Experience */}
          <div className="experience">
            <h2 className="section-title">Experiencia Laboral</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Web & Graphic Designer</h3>
                  <h4 className="company">Moonshiip — Colorado, US</h4>
                  <p className="date">2023 – 2025</p>
                  <p className="description">
                    Designed and developed websites for small and medium-sized businesses using WordPress and other tools.
                    <br/><br/>
                    Created visual content and managed social media accounts for various clients and brands.
                    <br/><br/>
                    Oversaw advertising campaigns, ensuring consistent content delivery and optimized brand visibility across platforms.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Freelance Web Designer</h3>
                  <h4 className="company">Remote — Venezuela</h4>
                  <p className="date">2020 – 2022</p>
                  <p className="description">
                    Built responsive websites for small and medium-sized businesses using WordPress.
                    <br/><br/>
                    Collaborated with clients to understand their needs and deliver customized digital solutions.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Onsite Technical Support Specialist</h3>
                  <h4 className="company">DataWise — Argentina</h4>
                  <p className="date">2019 – 2020</p>
                  <p className="description">
                    Provided onsite technical support, including hardware installation, configuration, and maintenance.
                    <br/><br/>
                    Troubleshot and resolved technical issues to reduce system downtime and improve productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="education">
            <h2 className="section-title">Estudios</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Web Development School</h3>
                  <h4 className="company">Platzi (Online)</h4>
                  <p className="date">2023 – Present</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">English Academy</h3>
                  <h4 className="company">Platzi (Online)</h4>
                  <p className="date">2023 – Present</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Graphic Design School</h3>
                  <h4 className="company">Platzi (Online)</h4>
                  <p className="date">2020 – 2022</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Bachelor of Arts in Graphic Design</h3>
                  <h4 className="company">Arturo Michelena University — Venezuela</h4>
                  <p className="date">2016 – 2018</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">High School Diploma – Science Focus</h3>
                  <h4 className="company">El Santuario Educational Unit — Venezuela</h4>
                  <p className="date">2012 – 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
