
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  category: 'Cybersecurity' | 'Web' | 'Networking';
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  expected: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Course {
  code: string;
  name: string;
  description: string;
  reflection: string[];
  projects: {
    title: string;
    description: string;
    link?: string;
  }[];
  artifacts: {
    bestProject?: boolean;
    caseStudy?: boolean;
    research?: boolean;
    paper?: boolean;
  };
  status?: 'COMPLETED' | 'IN PROGRESS';
}
