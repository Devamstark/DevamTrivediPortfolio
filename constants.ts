
import { Project, Experience, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    title: "DevXWorld Stock Analyzer",
    description: "Built a real-time stock analysis web application for Indian investors using Python (Flask) and JavaScript, featuring live NSE data, AI-driven recommendations, and a fair value calculator.",
    technologies: ["Python", "Flask", "JavaScript", "NSE API"],
    link: "https://github.com/Devamstark/DevXWorldStockanalyzer",
    category: "Web"
  },
  {
    title: "DevXWorld Risk Scanner",
    description: "Developed an AI-inspired browser extension to evaluate website risk by analyzing page content and identifying potential phishing or malicious patterns.",
    technologies: ["JavaScript", "CSS", "HTML", "Python"],
    link: "https://github.com/Devamstark/DevXWorld-RiskScanner",
    category: "Cybersecurity"
  },
  {
    title: "DevXsocial - Universal Username Checker",
    description: "Developed a client-side application to instantly check username availability across 50+ social media platforms, featuring a responsive UI, dark mode, and real-time filtering.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Devamstark/DevXsocial",
    category: "Cybersecurity"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "NCIB",
    location: "Ahmedabad, Gujarat",
    role: "Cyber Expert",
    period: "January 2020 – April 2022",
    highlights: [
      "Monitored current reports of computer viruses and updated virus protection systems.",
      "Regulated access to safeguarded information in computer files.",
      "Analyzed CDR (Call Details Record) and IPDR (Internet Protocol Details Records).",
      "Collected data of internet violators from social media platforms and disseminated information to users."
    ]
  },
  {
    company: "A.J Industries",
    location: "Ahmedabad, Gujarat",
    role: "Computer Operator",
    period: "December 2018 – May 2019",
    highlights: [
      "Managed computer work at the workshop, created data sheets, and maintained records.",
      "Performed administrative duties, including serving as a department head.",
      "Participated in campus and community events and assisted with technical tasks."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Monroe College",
    location: "New Rochelle, NY",
    degree: "Computer Science (B.S.) - Cyber Security and information System Security",
    expected: "Expected April 2026"
  },
  {
    institution: "Tech Defense Lab",
    location: "Ahmedabad, Gujarat",
    degree: "Ethical Hacking Course, Computer Programming",
    expected: "July 2019"
  },
  {
    institution: "GLM International School",
    location: "Ahmedabad, Gujarat",
    degree: "High school",
    expected: "August 2018"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "CyberOps Associate", issuer: "Cisco", date: "Jan 2025" },
  { name: "CCNA 3: Enterprise Networking, Security, and Automation", issuer: "Cisco", date: "Jan 2025" },
  { name: "CCNAv7 2: Switching, Routing, and Wireless Essentials", issuer: "Cisco", date: "April 2024" },
  { name: "CCNA 1: Introduction to Networks", issuer: "Cisco", date: "Jan 2024" },
  { name: "Google Analytics", issuer: "Google", date: "Nov 2022" },
  { name: "Google Analytics for Beginners", issuer: "Google", date: "Nov 2022" }
];

export const VOLUNTEER = [
  {
    org: "Ghatlodiya Police Station",
    role: "Community Safety Volunteer",
    period: "COVID-19 Pandemic",
    desc: "Assisted in community safety and outreach efforts during the COVID-19 pandemic in Ahmedabad."
  },
  {
    org: "Temple Vraj, PA",
    role: "Community Service Volunteer",
    period: "Ongoing",
    desc: "Contributing to the temple's various community and social service initiatives."
  },
  {
    org: "Local Charity",
    role: "Social Worker",
    period: "Local Area",
    desc: "Engaged in charity work, providing support to old-age homes and orphanages."
  }
];

export const SKILLS = {
  cybersecurity: ["Ethical Hacking", "VAPT", "Security Assessment", "Data Analysis"],
  networking: ["Physical Networking", "Router Setup", "Troubleshooting", "Switching", "Wireless Essentials"],
  languages: ["C++", "Python", "JavaScript", "HTML/CSS"],
  tools: ["AWS", "Salesforce CRM", "SEO", "Digital Marketing"],
  soft: ["Human Rights Advocacy", "Social Work", "Digital Marketing"],
  spokenLanguages: [
    { name: "English", level: "Fluent" },
    { name: "Gujarati", level: "Native" },
    { name: "Hindi", level: "Fluent" }
  ]
};
