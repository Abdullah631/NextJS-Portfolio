import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "RemoteHire.io",
      description:
        "Final Year Project: Comprehensive job posting platform with CV analysis, real-time interviews, deepfake detection during interviews, and live assessments using ML, AI, and Web technologies.",
      tags: ["React", "Django", "ML", "AI", "Computer Vision"],
      highlight: true,
    },
    {
      title: "AI Blog Summarizer",
      description:
        "AI-enabled blog summarizer with custom NLP logic for automated text extraction, summarization, and Urdu translation. Features optimized data storage with Supabase and MongoDB.",
      tags: ["Next.js", "Gemini API", "MongoDB", "Supabase", "ShadCN"],
    },
    {
      title: "Interview AI",
      description:
        "AI-driven interview preparation platform where users practice via text or voice, receiving automated scoring and improvement feedback powered by Gemini NLP.",
      tags: ["MERN Stack", "Gemini API", "Voice Recognition", "MongoDB"],
    },
    {
      title: "AI Recipe Generator",
      description:
        "Generate personalized recipes using AI with beautiful imagery from Pexels API. Features modern UI and robust data management.",
      tags: ["Next.js", "Tailwind", "Gemini API", "Pexels API", "MongoDB"],
    },
    {
      title: "AI Code Reviewer",
      description:
        "AI-powered code reviewer leveraging Google Gemini API to analyze, review, and suggest improvements for code quality.",
      tags: ["React", "Node.js", "Gemini API", "MongoDB"],
    },
    {
      title: "Web-Based Chess Game",
      description:
        "Real-time multiplayer chess game with live move updates, legal move validation, and seamless game state synchronization.",
      tags: ["Node.js", "Socket.IO", "Chess.js", "JavaScript"],
    },
    {
      title: "Location Tracker",
      description:
        "Real-time location tracking application using Socket.IO for live updates and seamless communication.",
      tags: ["Node.js", "Socket.IO", "Express.js"],
    },
    {
      title: "E-commerce Bookstore",
      description:
        "Online bookstore with secure authentication, searchable catalog, shopping cart with COD, and admin panel for order tracking and inventory management.",
      tags: ["ASP.NET", "ADO.NET", "MySQL", "Bootstrap"],
    },
    {
      title: "Quote Generator",
      description: "Dynamic quote generator powered by Gemini API with clean, modern interface.",
      tags: ["Next.js", "Gemini API", "Tailwind"],
    },
    {
      title: "Gym Management System (Web)",
      description:
        "User-friendly gym management system with session management and MySQL integration for user and payment records.",
      tags: ["JSP", "Java Servlets", "MySQL", "JavaScript"],
    },
    {
      title: "Weather App",
      description: "Real-time weather application with clean UI and accurate weather data.",
      tags: ["React", "Node.js", "API Integration"],
    },
    {
      title: "Gym Management System (Console)",
      description: "Console-based gym management system demonstrating OOP principles.",
      tags: ["C++", "OOP"],
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
        <p className="text-lg text-muted-foreground mb-12">
          A selection of projects showcasing my full-stack development and AI integration skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`bg-card border-border hover:border-accent-highlight/50 transition-all duration-300 group ${
                project.highlight ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-accent-highlight transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.highlight && (
                      <Badge className="mb-2 bg-accent-highlight text-accent-highlight-foreground">FYP</Badge>
                    )}
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs bg-accent-highlight/10 border-accent-highlight/30 text-accent-highlight-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
