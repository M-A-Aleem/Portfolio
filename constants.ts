import { Experience, Project, SkillCategory, SocialLink } from './types';

export const PROFILE_IMAGE = "https://github.com/M-A-Aleem/Images-/blob/main/ghibli.jpg?raw=true";

export const INTRO_DATA = {
  name: "MOHAMMED ABDUL ALEEM",
  role: "Software & Backend Engineer",
  location: "Hyderabad, Telangana, India",
  tagline: "Building intelligent systems for a smarter future"
};

export const ABOUT_TEXT = `Software Engineer with experience managing 12 mission-critical microservices at Experian and resolving high-severity production issues, including recovering 10,000+ missing records during an AWS outage. Strong in Java, Spring Boot, Python, AWS, distributed systems, and debugging complex data flows. Renowned for my innovative approach to AI and cloud technologies.`;

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Experian India",
    role: "Software Development Engineer (Contract)",
    period: "Mar 2025 - Nov 2025",
    description: "Managed and maintained 12 mission-critical microservices within core credit reporting team processing enterprise credit operations for one of the Big Three credit bureaus. Successfully migrated 5 legacy applications to modern cloud infrastructure with zero downtime. Resolved critical production bugs including recovering 10,000+ missing records during AWS service outage.",
    technologies: ["Java", "Spring Boot", "AWS", "Kafka", "Redis", "Splunk", "Jenkins"],
    logo: "https://logo.clearbit.com/experian.com"
  },
  {
    company: "Shipd",
    role: "Software Engineer",
    period: "Jun 2024 - Dec 2024",
    description: "Ranked 4th among platform engineers with 150+ successfully completed paid programming assignments in Python and Java. Developed quantum circuit simulator demonstrating advanced problem-solving capabilities. Created 100+ technical assessments for database and AI domains.",
    technologies: ["Python", "Java", "Quantum Computing", "Database Systems", "AI/ML Frameworks"],
    logo: "https://logo.clearbit.com/shipd.com"
  },
  {
    company: "Clariant India Private Limited",
    role: "Automation Engineer Intern",
    period: "Jan 2023 - Jun 2023",
    description: "Gained hands-on experience automating reactor operations in chemical manufacturing processes. Developed expertise in semantic automation techniques for industrial control systems.",
    technologies: ["Industrial Automation", "Python", "Control Systems"],
    logo: "https://logo.clearbit.com/clariant.com"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "Helping Eye",
    subtitle: "Computer Vision for Accessibility",
    description: "Developed real-time object detection system using TensorFlow and OpenCV, achieving 87% mAP score. Built assistive technology application for visually impaired users with voice-guided navigation.",
    techStack: ["React.js", "OpenCV", "TensorFlow", "Python", "Computer Vision"],
    image: "https://github.com/M-A-Aleem/Images-/blob/main/aaaaaaaaa.jpg?raw=true"
  },
  {
    id: "02",
    title: "Virtual CA",
    subtitle: "AI-Powered Virtual Assistant",
    description: "Built intelligent virtual chartered accountant using advanced prompt engineering and JSON prompting techniques. Implemented responsive frontend using React TypeScript with serverless API integration.",
    techStack: ["React", "TypeScript", "OpenAI GPT API", "Prompt Engineering"],
    image: "https://github.com/M-A-Aleem/Images-/blob/main/bbb.jpg?raw=true"
  },
  {
    id: "03",
    title: "V-Chat",
    subtitle: "AI Video Chatbot",
    description: "Created interactive video chatbot leveraging GPT-4 and NLP techniques. Integrated Whisper v2 API for accurate speech-to-text conversion. Built responsive frontend using React for seamless user experience.",
    techStack: ["Python", "Flask", "OpenAI GPT-4", "Whisper v2", "React"],
    image: "https://github.com/M-A-Aleem/Images-/blob/main/cg.jpg?raw=true"
  },
  {
    id: "04",
    title: "UNI-Together",
    subtitle: "Campus Network Design",
    description: "Designed and simulated comprehensive university campus network architecture supporting 5,000+ concurrent users. Implemented routing protocols, VLANs, and security configurations.",
    techStack: ["Cisco Packet Tracer", "Network Design", "VLAN", "Network Security"],
    image: "https://github.com/M-A-Aleem/Images-/blob/main/edfde.jpg?raw=true"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Expertise in developing and deploying AI models, NLP, and computer vision.",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    color: "bg-rose-100",
    icon: "brain"
  },
  {
    title: "Cloud & DevOps",
    description: "Proficient in cloud infrastructure, CI/CD pipelines, and containerization.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    color: "bg-sky-100",
    icon: "cloud"
  },
  {
    title: "Full-Stack Development",
    description: "Skilled in building end-to-end applications with robust backends.",
    skills: ["Java", "Python", "React.js", "Spring Boot"],
    color: "bg-amber-100",
    icon: "code"
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
  school: "Muffakham Jah College of Engineering and Technology",
  year: "Sep 2021 - May 2025" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/maaleem1104", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/M-A-Aleem", icon: "github" },
  { platform: "Email", url: "mailto:mdabdulaleem1104@gmail.com", icon: "mail" }
];