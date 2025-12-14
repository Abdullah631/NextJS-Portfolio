import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C#", "Python", "JavaScript", "C++", "C"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "ShadCN"],
    },
    {
      title: "Backend Development",
      skills: [".NET Framework", "Node.js", "Express.js", "Django", "Flask", "Java Servlets", "PHP"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Supabase", "Oracle", "ADO.NET"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git/GitHub", "Agile (Scrum)", "Responsive Design", "CI/CD", "Vercel"],
    },
    {
      title: "AI & APIs",
      skills: ["Google Gemini API", "LLM Integration", "Pexels API", "Socket.IO"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-accent-highlight/20 text-accent-highlight-foreground hover:bg-accent-highlight/30"
                    >
                      {skill}
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
