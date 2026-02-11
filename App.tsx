
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
import { PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS, VOLUNTEER, COURSES } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'experience', 'projects', 'school', 'skills', 'certifications', 'volunteer'];
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const NavItem = ({ id, label }: { id: string, label: string }) => (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className={`relative px-4 py-2 transition-all font-mono text-sm tracking-widest ${activeSection === id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
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
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`${scrolled ? 'w-12 h-12' : 'w-20 h-20'} bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white/10 group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.1)]`}>
              <img src="/devx.jpg" alt="DXW" className="w-full h-full object-cover" onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div class="text-xs font-bold text-blue-500">DXW</div>';
                }
              }} />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight block leading-none">DEVAM TRIVEDI</span>
              <span className="text-sm font-mono text-blue-500/80 uppercase tracking-[0.2em]">Cybersecurity Professional</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <NavItem id="hero" label="ROOT" />
            <NavItem id="experience" label="EXPERIENCE" />
            <NavItem id="projects" label="PROJECTS" />
            <NavItem id="school" label="SCHOOL WORK" />
            <NavItem id="skills" label="PROFICIENCY" />
            <NavItem id="certifications" label="CERTS" />
            <NavItem id="volunteer" label="IMPACT" />
          </nav>

          <div className="hidden md:block">
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-bold font-mono hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
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
          <NavItem id="school" label="SCHOOL WORK" />
          <NavItem id="skills" label="PROFICIENCY" />
          <NavItem id="certifications" label="CERTIFICATIONS" />
          <NavItem id="volunteer" label="VOLUNTEER" />
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-24 md:pt-36 pb-24">

        {/* Hero Section */}
        <section id="hero" className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase mb-4 pulse-glow">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></span>
                <span className="font-bold text-glow">Security Protocol Active</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
                Securing the <br />
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

              <div className="flex items-center space-x-8 text-gray-400 pt-4 font-bold">
                <a href="https://linkedin.com/in/devamstark" target="_blank" className="hover:text-blue-500 transition-colors flex items-center space-x-2"><Linkedin className="w-5 h-5" /> <span className="text-sm font-mono tracking-wider">LINKEDIN</span></a>
                <a href="https://github.com/Devamstark" target="_blank" className="hover:text-white transition-colors flex items-center space-x-2"><Github className="w-5 h-5" /> <span className="text-sm font-mono tracking-wider">GITHUB</span></a>
                <a href="mailto:Devam9131@gmail.com" className="hover:text-blue-400 transition-colors flex items-center space-x-2"><Mail className="w-5 h-5" /> <span className="text-sm font-mono tracking-wider">EMAIL</span></a>
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
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="mb-2 text-sm font-mono text-blue-400 font-bold uppercase tracking-widest">{exp.period}</div>
                      <h5 className="text-2xl font-bold text-white mb-1">{exp.role}</h5>
                      <div className="text-blue-400/90 mb-6 flex items-center font-bold text-base italic">
                        {exp.company} <span className="mx-2 text-gray-600">|</span> {exp.location}
                      </div>
                      <ul className="space-y-4">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-base text-gray-300 flex items-start leading-relaxed">
                            <span className="text-blue-500 mr-3 mt-1.5">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="text-sm font-mono text-blue-400 mb-3 font-bold uppercase tracking-widest">{edu.expected}</div>
                    <h5 className="text-xl font-bold text-white mb-2">{edu.degree}</h5>
                    <p className="text-gray-300 font-semibold mb-4">{edu.institution}</p>
                    <div className="flex items-center text-sm text-gray-400 bg-black/40 px-4 py-2 rounded-lg w-fit font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" /> {edu.location}
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
                    <div key={lang.name} className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
                      <span className="text-xl font-bold text-white">{lang.name}</span>
                      <span className="text-sm font-mono text-blue-400 uppercase tracking-wider font-bold">{lang.level}</span>
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
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col h-full group hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu className="w-24 h-24" />
                </div>

                <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {project.category === 'Cybersecurity' ? <Lock className="text-blue-500 w-7 h-7" /> : <Network className="text-blue-500 w-7 h-7" />}
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-gray-300 text-base leading-relaxed mb-8 flex-grow">{project.description}</p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/10 text-xs font-mono text-gray-300 font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center text-sm font-bold font-mono tracking-widest text-blue-400 group-hover:text-white transition-colors uppercase"
                  >
                    View Source <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* School Work Section */}
        <section id="school" className="mb-48 scroll-mt-32">
          <div className="mb-16">
            <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Academic Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">School Work & Academic Projects</h3>
          </div>

          {/* Section: List of Core or Required Courses for CIS Majors */}
          <div className="mb-24">
            <div className="mb-12">
              <h4 className="text-2xl font-bold flex items-center">
                <Award className="mr-3 w-6 h-6 text-blue-500" /> Section: Core CIS Courses
              </h4>
              <p className="text-gray-300 text-base mt-2">Required courses for CIS Majors with highlighted key academic artifacts.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 text-blue-500 uppercase tracking-widest">Course Code / Name</th>
                    <th className="p-4 text-center">Best Project</th>
                    <th className="p-4 text-center">Case Study</th>
                    <th className="p-4 text-center">Research</th>
                    <th className="p-4 text-center">Paper</th>
                  </tr>
                </thead>
                <tbody>
                  {COURSES.map((course, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">{course.code}</span>
                          <span className="text-xs text-gray-400 font-medium">{course.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">{course.artifacts?.bestProject ? <span className="text-blue-500 font-bold text-lg">X</span> : '-'}</td>
                      <td className="p-4 text-center">{course.artifacts?.caseStudy ? <span className="text-blue-500 font-bold text-lg">X</span> : '-'}</td>
                      <td className="p-4 text-center">{course.artifacts?.research ? <span className="text-blue-500 font-bold text-lg">X</span> : '-'}</td>
                      <td className="p-4 text-center">{course.artifacts?.paper ? <span className="text-blue-500 font-bold text-lg">X</span> : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-24">
            {COURSES.filter(c => c.reflection.length > 0).map((course, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded text-blue-400 text-xs font-mono font-bold tracking-widest">{course.code}</span>
                      {course.status && (
                        <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wide ${course.status === 'COMPLETED' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'}`}>
                          {course.status}
                        </span>
                      )}
                    </div>
                    <h4 className="text-3xl font-bold text-white">{course.name}</h4>
                    <p className="text-gray-200 mt-4 max-w-3xl leading-relaxed italic text-base">{course.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.artifacts && Object.entries(course.artifacts).map(([key, value]) => value && (
                      <span key={key} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs font-mono text-gray-300 uppercase tracking-widest font-bold">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-12 space-y-6">
                    <h5 className="text-sm font-mono text-blue-500 flex items-center mb-4 uppercase tracking-widest">
                      <FileText className="mr-2 w-4 h-4" /> Reflection Section
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {course.reflection.map((para, i) => (
                        <p key={i} className="text-base text-gray-300 leading-relaxed indent-4">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-12 mt-8">
                    <h5 className="text-sm font-mono text-blue-500 flex items-center mb-6 uppercase tracking-widest">
                      <Cpu className="mr-2 w-4 h-4" /> Sample Projects
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.projects.map((proj, i) => (
                        <div key={i} className="p-6 bg-black/30 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                          <h6 className="font-bold text-white text-lg mb-2">{proj.title}</h6>
                          <p className="text-base text-gray-300 leading-relaxed mb-4">{proj.description}</p>
                          {proj.link && (
                            <a href={proj.link} className="text-xs font-mono text-blue-400 flex items-center hover:underline font-bold">
                              VIEW_SOURCE <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
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
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                <Shield className="text-red-500 w-6 h-6 cyber-glow" />
              </div>
              <h5 className="text-lg font-bold font-mono">Cybersecurity</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.cybersecurity.map(s => <span key={s} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">{s}</span>)}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Network className="text-blue-500 w-6 h-6 cyber-glow" />
              </div>
              <h5 className="text-lg font-bold font-mono">Networking</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.networking.map(s => <span key={s} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">{s}</span>)}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TerminalIcon className="text-green-500 w-6 h-6 cyber-glow" />
              </div>
              <h5 className="text-lg font-bold font-mono">Programming</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.languages.map(s => <span key={s} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">{s}</span>)}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl space-y-6 hover:bg-white/[0.15] hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Cpu className="text-purple-500 w-6 h-6 cyber-glow" />
              </div>
              <h5 className="text-lg font-bold font-mono">Cloud & Tools</h5>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map(s => <span key={s} className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">{s}</span>)}
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
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Validated technical expertise through industry-recognized certifications from Cisco, Google, and specialized security labs.
              </p>
              <div className="w-full h-px bg-white/5 mb-8"></div>
              <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm uppercase">
                <Shield className="w-4 h-4" /> <span>Credential Verified</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start group hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:rotate-6 transition-transform cyber-glow">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white mb-2">{cert.name}</h5>
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm font-mono text-blue-400/90 uppercase tracking-widest font-bold">{cert.issuer}</span>
                      <span className="text-xs text-gray-500 uppercase font-medium">{cert.date}</span>
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
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 cyber-glow">
                  <Heart className="text-blue-500 w-6 h-6" />
                </div>
                <div className="text-sm font-mono text-blue-400 mb-3 uppercase tracking-widest">{item.period}</div>
                <h5 className="text-xl font-bold text-white mb-2">{item.org}</h5>
                <p className="text-base font-medium text-gray-200 mb-4">{item.role}</p>
                <p className="text-base text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="border-t border-white/5 pt-32 text-center">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.5em] uppercase mb-8">Secure Access Requested</h2>
          <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">Initiate Secure <br />Collaboration.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            <a href="mailto:Devam9131@gmail.com" className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform text-flicker" />
              <div className="text-sm font-mono text-gray-400 mb-2 uppercase tracking-widest font-bold">E-Mail Channel</div>
              <div className="text-xl font-bold text-white">Devam9131@gmail.com</div>
            </a>

            <a href="tel:+15513449705" className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform text-flicker" />
              <div className="text-sm font-mono text-gray-400 mb-2 uppercase tracking-widest font-bold">Secure Line</div>
              <div className="text-xl font-bold text-white">+1 (551) 344-9705</div>
            </a>

            <a href="https://linkedin.com/in/devamstark" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <Linkedin className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform text-flicker" />
              <div className="text-sm font-mono text-gray-400 mb-2 uppercase tracking-widest font-bold">Connect Network</div>
              <div className="text-xl font-bold text-white">LinkedIn Profile</div>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <p className="text-xs font-mono uppercase tracking-[0.5em] text-blue-400 font-bold">Environment Encrypted & Active</p>
            <p className="text-xs text-gray-500 font-medium">© 2025 DEVAM TRIVEDI. ENGINEERED FOR HIGH-AVAILABILITY.</p>
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
