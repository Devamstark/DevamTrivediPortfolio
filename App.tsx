
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal as TerminalIcon, 
  Network, 
  Lock, 
  Cpu, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Award,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Heart,
  FileText,
  Languages,
  ArrowRight
} from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';
import Terminal from './components/Terminal';
import CyberAssistant from './components/CyberAssistant';
import { PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS, VOLUNTEER } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'experience', 'projects', 'skills', 'certifications', 'volunteer'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ id, label }: { id: string, label: string }) => (
    <a 
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className={`relative px-4 py-2 transition-all font-mono text-xs tracking-widest ${
        activeSection === id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
      }`}
    >
      {label}
      {activeSection === id && (
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
      )}
    </a>
  );

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      <MatrixBackground />
      <CyberAssistant />

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/30 rounded flex items-center justify-center group-hover:bg-blue-600/20 transition-all duration-300">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block leading-none">DEVAM TRIVEDI</span>
              <span className="text-[10px] font-mono text-blue-500/80 uppercase tracking-[0.2em]">Cybersecurity Professional</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <NavItem id="hero" label="ROOT" />
            <NavItem id="experience" label="EXPERIENCE" />
            <NavItem id="projects" label="PROJECTS" />
            <NavItem id="skills" label="PROFICIENCY" />
            <NavItem id="certifications" label="CERTS" />
            <NavItem id="volunteer" label="IMPACT" />
          </nav>

          <div className="hidden md:block">
            <a 
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              DOWNLOAD_CV
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
          <NavItem id="hero" label="ROOT" />
          <NavItem id="experience" label="EXPERIENCE" />
          <NavItem id="projects" label="PROJECTS" />
          <NavItem id="skills" label="PROFICIENCY" />
          <NavItem id="certifications" label="CERTIFICATIONS" />
          <NavItem id="volunteer" label="VOLUNTEER" />
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-24">
        
        {/* Hero Section */}
        <section id="hero" className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-4 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Security Protocol Active</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
                Securing the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600">Digital Asset.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
                Results-driven Cybersecurity Specialist & Computer Science student at Monroe College. 
                Expert in Ethical Hacking, VAPT, and Network Security with a commitment to human rights advocacy.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="./resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl flex items-center font-bold transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)]"
                >
                  <FileText className="mr-2 w-5 h-5" /> View Full Resume
                </a>
                <a 
                  href="https://github.com/Devamstark" 
                  target="_blank"
                  className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all hover:border-blue-500/50"
                >
                  Source Repositories
                </a>
              </div>

              <div className="flex items-center space-x-8 text-gray-500 pt-4">
                <a href="https://linkedin.com/in/devamstark" target="_blank" className="hover:text-blue-500 transition-colors flex items-center space-x-2"><Linkedin className="w-5 h-5" /> <span className="text-xs font-mono">LINKEDIN</span></a>
                <a href="https://github.com/Devamstark" target="_blank" className="hover:text-white transition-colors flex items-center space-x-2"><Github className="w-5 h-5" /> <span className="text-xs font-mono">GITHUB</span></a>
                <a href="mailto:Devam9131@gmail.com" className="hover:text-blue-400 transition-colors flex items-center space-x-2"><Mail className="w-5 h-5" /> <span className="text-xs font-mono">EMAIL</span></a>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-2xl rounded-3xl animate-pulse"></div>
              <Terminal />
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="mb-48 scroll-mt-32">
          <div className="mb-16">
            <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Professional Timeline</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Experience & Education</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h4 className="text-lg font-mono text-white flex items-center border-b border-white/5 pb-4">
                <Briefcase className="mr-3 w-5 h-5 text-blue-500" /> Professional Experience
              </h4>
              <div className="space-y-12">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-blue-900 group">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] group-hover:scale-125 transition-transform"></div>
                    <div className="mb-2 text-xs font-mono text-blue-500 uppercase tracking-widest">{exp.period}</div>
                    <h5 className="text-2xl font-bold text-white mb-1">{exp.role}</h5>
                    <div className="text-blue-400/80 mb-6 flex items-center font-semibold text-sm italic">
                      {exp.company} <span className="mx-2 text-gray-700">|</span> {exp.location}
                    </div>
                    <ul className="space-y-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start leading-relaxed">
                          <span className="text-blue-500 mr-3 mt-1.5">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-lg font-mono text-white flex items-center border-b border-white/5 pb-4">
                <GraduationCap className="mr-3 w-5 h-5 text-blue-500" /> Academic Background
              </h4>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
                    <div className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-widest">{edu.expected}</div>
                    <h5 className="text-xl font-bold text-white mb-2">{edu.degree}</h5>
                    <p className="text-gray-400 font-medium mb-4">{edu.institution}</p>
                    <div className="flex items-center text-xs text-gray-500 bg-black/40 px-3 py-1.5 rounded-lg w-fit">
                      <MapPin className="w-3 h-3 mr-2 text-blue-500" /> {edu.location}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-mono text-white flex items-center border-b border-white/5 pb-4 mb-8">
                  <Languages className="mr-3 w-5 h-5 text-blue-500" /> Linguistic Skills
                </h4>
                <div className="flex flex-wrap gap-4">
                  {SKILLS.spokenLanguages.map((lang) => (
                    <div key={lang.name} className="px-6 py-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex flex-col">
                      <span className="text-lg font-bold text-white">{lang.name}</span>
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-tighter">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-48 scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Technical Deployments</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
            </div>
            <a href="https://github.com/Devamstark" target="_blank" className="flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors font-mono">
              ALL_REPOSITORIES <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group relative bg-gradient-to-b from-gray-900/50 to-black border border-white/10 p-8 rounded-3xl flex flex-col h-full hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu className="w-24 h-24" />
                </div>
                
                <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {project.category === 'Cybersecurity' ? <Lock className="text-blue-500 w-7 h-7" /> : <Network className="text-blue-500 w-7 h-7" />}
                </div>
                
                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-mono text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="flex items-center text-xs font-bold font-mono tracking-widest text-white group-hover:text-blue-400 transition-colors uppercase"
                  >
                    View Source <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Proficiency */}
        <section id="skills" className="mb-48 scroll-mt-32">
           <div className="mb-16">
            <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Competency Matrix</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Proficiency & Tech Stack</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                <Shield className="text-red-500 w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold font-mono">Cybersecurity</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.cybersecurity.map(s => <span key={s} className="px-3 py-1.5 bg-black/50 border border-white/5 rounded-lg text-xs text-gray-400">{s}</span>)}
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Network className="text-blue-500 w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold font-mono">Networking</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.networking.map(s => <span key={s} className="px-3 py-1.5 bg-black/50 border border-white/5 rounded-lg text-xs text-gray-400">{s}</span>)}
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TerminalIcon className="text-green-500 w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold font-mono">Programming</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.languages.map(s => <span key={s} className="px-3 py-1.5 bg-black/50 border border-white/5 rounded-lg text-xs text-gray-400">{s}</span>)}
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Cpu className="text-purple-500 w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold font-mono">Cloud & Tools</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map(s => <span key={s} className="px-3 py-1.5 bg-black/50 border border-white/5 rounded-lg text-xs text-gray-400">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-48 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
               <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Credentials</h2>
               <h3 className="text-4xl font-bold mb-6">Certifications & Training</h3>
               <p className="text-gray-400 leading-relaxed mb-8">
                 Validated technical expertise through industry-recognized certifications from Cisco, Google, and specialized security labs.
               </p>
               <div className="w-full h-px bg-white/5 mb-8"></div>
               <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm uppercase">
                 <Shield className="w-4 h-4" /> <span>Credential Verified</span>
               </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-r from-gray-900/40 to-black border border-white/5 rounded-2xl flex items-start group hover:border-blue-500/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:rotate-6 transition-transform">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white mb-2">{cert.name}</h5>
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs font-mono text-blue-400/80 uppercase tracking-widest">{cert.issuer}</span>
                      <span className="text-[10px] text-gray-600 uppercase">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="mb-48 scroll-mt-32">
           <div className="mb-16">
            <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Social Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Volunteer & Outreach</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VOLUNTEER.map((item, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/20 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="text-blue-500 w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-blue-400 mb-3 uppercase tracking-widest">{item.period}</div>
                <h5 className="text-xl font-bold text-white mb-2">{item.org}</h5>
                <p className="text-sm font-medium text-gray-300 mb-4">{item.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="border-t border-white/5 pt-32 text-center">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.5em] uppercase mb-8">Secure Access Requested</h2>
          <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">Initiate Secure <br/>Collaboration.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            <a href="mailto:Devam9131@gmail.com" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">E-Mail Channel</div>
              <div className="text-lg font-bold text-white">Devam9131@gmail.com</div>
            </a>
            
            <a href="tel:+15513449705" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Secure Line</div>
              <div className="text-lg font-bold text-white">+1 (551) 344-9705</div>
            </a>

             <a href="https://linkedin.com/in/devamstark" target="_blank" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
              <Linkedin className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Connect Network</div>
              <div className="text-lg font-bold text-white">LinkedIn Profile</div>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 opacity-40 hover:opacity-100 transition-opacity">
             <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
             <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-blue-400">Environment Encrypted & Active</p>
             <p className="text-[10px] text-gray-600">© 2025 DEVAM TRIVEDI. ENGINEERED FOR HIGH-AVAILABILITY.</p>
          </div>
        </section>
      </main>

      {/* Background Decorative Pulses */}
      <div className="fixed -bottom-64 -left-64 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-20"></div>
      <div className="fixed top-1/2 -right-64 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-20 animate-pulse"></div>
    </div>
  );
};

export default App;
