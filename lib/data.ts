export const profile = {
  name: "Sheikh Abdullah Arshad",
  title: "Software Engineer — Full-Stack Development | AI/ML | Cloud & DevOps",
  tagline: "I build modern, scalable web applications with a focus on AI integration.",
  bio: "Full-stack software engineer with production experience building scalable web applications and AI/ML systems spanning NLP, computer vision, and LLM integration. Currently shipping enterprise ERP features at Amperor Tech, with hands-on deployment experience across AWS, Azure, and Vercel.",
  location: "Lahore, Pakistan",
  email: "abdullah.arshad1823@gmail.com",
  phone: "+92 322 7245591",
  github: "https://github.com/Abdullah631",
  linkedin: "https://www.linkedin.com/in/sheikh-abdullah-arshad-a6634a260/",
}

export const about = {
  paragraphs: [
    "I'm a Software Engineering graduate (BS, FCIT — University of the Punjab, 2026) with production experience building scalable web applications using React, Next.js, Node.js, Django, and Flask, alongside AI/ML systems spanning NLP, computer vision, and LLM integration.",
    "Currently, I'm an Associate Software Engineer at Amperor Tech, shipping enterprise ERP features and building notification systems on Azure. Before that, I engineered production SPAs and AI-powered features during my internship at Nexium, and built an AI-powered remote hiring platform with deepfake detection as my final year project — achieving 90%+ accuracy on real-world ML pipelines.",
    "Beyond code, I've managed programming competitions and eSports tournaments with MLSA and Sports Society at FCIT, and covered university events as a photographer and videographer with FIMS.",
  ],
  highlights: [
    { label: "Education", value: "BS Software Engineering", sub: "FCIT, University of the Punjab · 2022 – 2026" },
    { label: "Location", value: "Lahore, Pakistan", sub: "Open to remote & on-site roles" },
    { label: "Focus", value: "Full-Stack + AI/ML", sub: "Cloud & DevOps deployment" },
  ],
}

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "Python", "Java", "C#", "C/C++"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "ShadCN", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "Java Servlets", "ASP.NET", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL (Supabase)", "MySQL", "MongoDB", "Oracle"],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Sentence-BERT",
      "Hugging Face",
      "Gemini / Groq / OpenAI APIs",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2)", "Azure DevOps", "Docker", "CI/CD", "Vercel", "Render", "Railway", "GitHub"],
  },
]

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Amperor Tech",
    location: "Lahore, Pakistan",
    period: "Feb 2026 – Present",
    bullets: [
      "Optimized the end-to-end scheduling and service-ticket lifecycle system for CRV Surveillance using Next.js and Flask, improving real-time technician assignment, rescheduling workflows, labor-time calculations, and timezone consistency.",
      "Engineered a subcontractor management portal with secure tokenized login-less access and centralized ticket workflows, streamlining coordination across external teams.",
      "Built automated email and in-app notification systems using Azure Communication Services, improving response coordination across service-ticket workflows.",
      "Collaborate cross-functionally using GitHub and Azure DevOps for version control, CI/CD, sprint planning, and agile feature delivery.",
    ],
  },
  {
    role: "Full-Stack Web + AI Development Intern",
    company: "Nexium (Remote)",
    location: "Lahore, Pakistan",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Developed and deployed 3+ production-ready SPAs using Next.js, React, and Tailwind CSS, cutting page load time by 15–25% through code splitting and component reuse.",
      "Built an AI-powered recipe-generation app integrating Gemini/Groq LLM APIs, Supabase magic-link auth, and MongoDB, deployed via Docker and Vercel.",
      "Integrated third-party LLM and Pexels APIs to power AI-driven content-generation features across multiple client projects.",
    ],
  },
]

export const leadership = [
  {
    title: "MLSA (Microsoft Learn Student Ambassador)",
    org: "FCIT",
    period: "2024 – Present",
    description: "Managed programming competitions and covered university events as a videographer.",
  },
  {
    title: "Sports Society",
    org: "FCIT",
    period: "2024 – Present",
    description: "Managed eSport competitions and set up matches for tournaments.",
  },
]

export const certifications = [
  {
    issuer: "AWS",
    name: "Fundamentals of Machine Learning and Artificial Intelligence",
    year: "2025",
  },
  {
    issuer: "Coursera",
    name: "Design Prompts for Everyday Work Tasks (Google)",
    year: "2025",
  },
]

export const education = [
  {
    degree: "BS Software Engineering",
    school: "FCIT, University of the Punjab, Lahore",
    period: "2022 – 2026",
    detail: "CGPA: 3.34/4.00",
  },
  {
    degree: "Intermediate",
    school: "Aspire Group of Colleges, Lahore",
    period: "2019 – 2021",
    detail: "1091/1100",
  },
]

export const flagshipProjects = [
  {
    title: "RemoteHire.io",
    description:
      "AI-powered remote hiring platform (Final Year Project) managing candidate profiles, CVs, interviews, and assessments in real time, with a deepfake-detection pipeline for video interviews and Groq-powered CV-to-JD scoring.",
    tags: ["React.js", "Django REST Framework", "Supabase", "OpenCV", "ResNet-50", "AWS EC2"],
    href: "https://remote-hire-io.vercel.app/",
    highlight: true,
  },
  {
    title: "Deepfake Detection System",
    description:
      "Real-time video-authenticity detection pipeline achieving 90–95% accuracy, reducing false positives by 30–40% using frame-level inference with majority voting.",
    tags: ["EfficientNet-B0", "ResNet", "MTCNN", "PyTorch", "OpenCV"],
    href: "https://huggingface.co/bilalkhawar22/deepfake-detect-resnet",
  },
  {
    title: "AI Blog Summarizer",
    description:
      "AI-first content pipeline for summarization and Urdu translation using custom NLP logic, cutting manual content prep time by ~70%.",
    tags: ["Next.js", "ShadCN", "Supabase", "MongoDB"],
    href: "https://my-blog-summarizer.vercel.app/",
  },
  {
    title: "CV–Job Description Matching System",
    description:
      "NLP matching engine using Sentence-BERT embeddings, cosine similarity, and Scikit-learn regression to generate candidate-job match scores, automating skill extraction.",
    tags: ["Sentence-BERT", "Scikit-learn", "React", "Django"],
    href: "https://cv-matching-web-app.vercel.app/",
  },
  {
    title: "AI Recipe Generator",
    description:
      "Ingredient-based recipe suggestion app with Gemini/Groq LLM APIs, Supabase magic-link auth, and Pexels imagery, deployed via Docker and Vercel.",
    tags: ["Next.js", "Node.js", "MongoDB", "Gemini API"],
    href: "https://my-recipe-ai-lake.vercel.app/",
  },
  {
    title: "Interview AI",
    description:
      "AI-driven interview preparation system enabling text and voice-based practice, with automated scoring and feedback powered by Gemini NLP APIs.",
    tags: ["MERN Stack", "Gemini API", "Voice Recognition"],
    href: "https://interview-ai-opal.vercel.app/",
  },
]

export const otherProjects = [
  {
    title: "AI Code Reviewer",
    description: "AI-powered code review system using Google Gemini API to analyze and suggest code-quality improvements.",
    tags: ["MERN Stack", "Gemini API"],
    href: "https://github.com/Abdullah631/AI-Code-Reviewer",
  },
  {
    title: "Quote Generator",
    description: "Dynamic quote generator powered by the Gemini API with a clean, modern interface.",
    tags: ["Next.js", "Gemini API"],
    href: "https://qoute-generator-bice.vercel.app/",
  },
  {
    title: "Online Chess Game",
    description: "Real-time multiplayer chess with live move updates, legal move validation, and game-state sync.",
    tags: ["Node.js", "Socket.IO", "Chess.js"],
  },
  {
    title: "E-commerce Bookstore",
    description: "Online bookstore with secure auth, searchable catalog, COD cart, and an admin inventory panel.",
    tags: ["ASP.NET", "MySQL", "Bootstrap"],
    href: "https://github.com/Abdullah631/Full-Stack-Bookstore",
  },
  {
    title: "Web-Based Gym Management System",
    description: "Gym management system with session handling and MySQL-backed member/payment records.",
    tags: ["Java Servlets", "JSP", "MySQL"],
    href: "https://github.com/Abdullah631/Web-Gym-Manager",
  },
]

export const testimonial = {
  quote:
    "Has shown great initiative in picking up the flow and requirements quickly. Demonstrates strong responsibility and can be relied on to manage tasks effectively.",
  author: "Engineering Manager",
  role: "Amperor Tech",
}
