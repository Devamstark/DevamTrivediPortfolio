
import { Project, Experience, Education, Certification, Course } from './types';

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

export const COURSES: Course[] = [
  {
    code: "IT445",
    name: "CYBER OPS",
    description: "This course focuses on security principles and terminology, the types of attacks and vulnerabilities, and the security of a network, including the components of a network and their security. Students learn to analyze security alerts and respond to incidents.",
    status: "COMPLETED",
    artifacts: { bestProject: true, caseStudy: true },
    reflection: [
      "In IT445 Cyber Ops, I gained a comprehensive understanding of the operational side of cybersecurity. This course bridged the gap between theoretical security concepts and practical incident response. I learned how to monitor, detect, and analyze security threats within a Network Operations Center (NOC) and Security Operations Center (SOC) environment.",
      "The hands-on labs were particularly impactful, as they allowed me to work with real-world security tools like Wireshark and Squant. Analyzing packet captures and identifying malicious patterns helped me develop a sharp eye for network anomalies. This practical experience is invaluable for any aspiring security professional.",
      "One of the key takeaways from the course was the importance of the Diamond Model of Intrusion Analysis and the Cyber Kill Chain. Understanding the progression of an attack allowed me to think like an adversary and implement more effective defensive strategies. It also highlighted the necessity of thorough documentation and reporting during an incident.",
      "Reflecting on this course, I feel much more confident in my ability to handle complex security incidents. It has reinforced my passion for cybersecurity operations and provided me with the foundational skills needed to contribute effectively to a security team. I plan to continue building on this knowledge as I progress in my career."
    ],
    projects: [
      {
        title: "Network Intrusion Analysis",
        description: "Analyzed a simulated brute-force attack on a local network using Wireshark, identifying the attacker's IP and the vulnerability exploited."
      }
    ]
  },
  {
    code: "IT373",
    name: "Network Security",
    description: "An in-depth look at the technologies and practices used to secure network infrastructure. Topics include firewalls, intrusion detection systems, VPNs, and secure network design.",
    status: "COMPLETED",
    artifacts: { bestProject: true, caseStudy: true },
    reflection: [
      "Network Security (IT373) provided me with the technical depth required to protect modern enterprise infrastructures. I learned how to design and implement robust security perimeters using a multi-layered defense-in-depth approach. This course covered everything from basic ACLs to complex VPN configurations.",
      "Implementing firewall rules and configuring IPS/IDS systems taught me the balance between security and accessibility. I realized that security is not just about blocking everything, but about creating a managed environment where legitimate traffic can flow securely while threats are mitigated in real-time.",
      "The course also emphasized the security of various network protocols. Learning how to secure protocols like SSH, HTTPS, and SNMP was a critical part of my learning journey. I now understand the vulnerabilities inherent in many legacy protocols and the importance of using encrypted alternatives.",
      "Overall, IT373 has been one of the most practical courses in my degree. The skills I've acquired in configuring security appliances and monitoring network traffic are directly applicable to the roles I seek in the cybersecurity industry. It has truly solidified my understanding of how to build a resilient network."
    ],
    projects: [
      {
        title: "Enterprise VPN Deployment",
        description: "Designed and configured a site-to-site VPN connection between two simulated corporate offices using Cisco ASA firewalls."
      }
    ]
  },
  {
    code: "IT387",
    name: "Ethical Hacking",
    description: "Introduction to the tools and techniques used by ethical hackers to identify and exploit vulnerabilities. Focuses on reconnaissance, scanning, exploitation, and post-exploitation.",
    status: "IN PROGRESS",
    artifacts: { bestProject: true },
    reflection: [
      "Ethical Hacking (IT387) has been an eye-opening experience into the mind of an attacker. By learning offensive security techniques, I am becoming a much more effective defender. This course covers the entire hacking lifecycle, from initial reconnaissance to maintaining access.",
      "The most exciting part of the course has been the penetration testing labs. Using tools like Nmap, Metasploit, and Burp Suite in a controlled environment has allowed me to see how vulnerabilities are exploited in the real world. This hands-on approach makes the theory much more tangible and easier to grasp.",
      "Ethical considerations are a major component of this course. We've discussed the importance of authorization, scope, and the legal frameworks surrounding penetration testing. Understanding the responsibility that comes with these skills is just as important as the technical skills themselves.",
      "Even though the course is still in progress, I've already gained immense value. I am learning to identify subtle misconfigurations that could lead to devastating breaches. I am eager to complete the remaining modules and apply this 'hacker mindset' to strengthen security postures."
    ],
    projects: [
      {
        title: "Vulnerability Assessment Lab",
        description: "Conducted a full-scale vulnerability scan on a target subnet, identified critical flaws, and provided remediation steps in a formal report."
      }
    ]
  },
  {
    code: "IT455",
    name: "Security Strategies",
    description: "Explores the development and implementation of security policies, standards, and procedures. Covers risk management, compliance, and auditing.",
    status: "COMPLETED",
    artifacts: { bestProject: true, caseStudy: true, research: true },
    reflection: [
      "IT455 Security Strategies focused on the high-level management of cybersecurity within an organization. I learned that technical tools are only one part of the solution; a strong security posture requires clear policies, procedures, and a culture of security awareness.",
      "Developing a comprehensive risk management plan was a key project in this course. Learning how to identify assets, assess threats, and calculate potential impact helped me understand how to prioritize security investments based on business needs rather than just technical trends.",
      "I also gained a better understanding of regulatory compliance, such as HIPAA, GDPR, and PCI-DSS. Knowing how these frameworks influence security strategy is essential for working in any regulated industry. It showed me how security intersects with legal and business requirements.",
      "This course has prepared me to think strategically about security. I now see the 'big picture' of how security fits into the overall goals of an organization. This knowledge will be crucial for my long-term goal of moving into security leadership roles."
    ],
    projects: [
      {
        title: "Corporate Security Policy Development",
        description: "Drafted a comprehensive Acceptable Use Policy (AUP) and an Incident Response Plan for a medium-sized enterprise."
      }
    ]
  },
  {
    code: "IT477",
    name: "Network and Computer Forensics",
    description: "Investigation of cybercrimes through the collection and analysis of digital evidence. Topics include disk imaging, memory forensics, and log analysis.",
    status: "COMPLETED",
    artifacts: { bestProject: true, caseStudy: true },
    reflection: [
      "In IT477, I learned the meticulous process of digital forensics. This course taught me how to preserve the chain of custody and extract evidence from various digital sources without altering the original data. It's a field that requires extreme attention to detail and a methodical approach.",
      "Working with forensic imaging tools and analysis suites like Autopsy and FTK Imager was a highlight. I learned how to recover deleted files, analyze file systems, and reconstruct user activities on a target machine. It felt like being a digital detective, piecing together a puzzle.",
      "The course also covered the legal and ethical aspects of digital investigations. We discussed how evidence must be gathered and presented to be admissible in court. This highlighted the importance of standard operating procedures and the role of a forensic expert in the justice system.",
      "Reflecting on IT477, I have developed a deep appreciation for the forensic process. It has taught me to be more thorough in my analysis and to always verify my findings. These skills are highly transferable to incident response and general security analysis."
    ],
    projects: [
      {
        title: "Digital Evidence Extraction",
        description: "Extracted and analyzed artifacts from a disk image to identify signs of unauthorized data exfiltration."
      }
    ]
  },
  // Additional courses for the Section A list
  {
    code: "IT295",
    name: "Systems Analysis and Design",
    description: "The study of the systems development life cycle (SDLC). Students learn to analyze business requirements and design technical solutions.",
    artifacts: { research: true, paper: true },
    reflection: [],
    projects: []
  },
  {
    code: "IT494",
    name: "IT Project Management",
    description: "Principles of managing IT projects, including scope, time, cost, quality, and risk management using traditional and agile methodologies.",
    artifacts: { bestProject: true, caseStudy: true, research: true },
    reflection: [],
    projects: []
  },
  {
    code: "IT495",
    name: "Senior Seminar",
    description: "A capstone course where students apply their knowledge to a significant IT project or research paper.",
    status: "IN PROGRESS",
    artifacts: { bestProject: true, caseStudy: true },
    reflection: [],
    projects: []
  }
];
