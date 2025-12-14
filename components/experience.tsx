import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Experience & Leadership</h2>

        <div className="space-y-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-highlight/20">
                  <Briefcase className="h-6 w-6 text-accent-highlight" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Full Stack Web + AI Developer (Intern)</CardTitle>
                  <p className="text-muted-foreground">Nexium – Remote</p>
                  <p className="text-sm text-muted-foreground">June 2025 – July 2025</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent-highlight mt-1.5">•</span>
                  <span>
                    Engineered multiple Single Page Applications (SPA) using Next.js, React.js, and Tailwind CSS,
                    ensuring full responsiveness and optimal UX
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-highlight mt-1.5">•</span>
                  <span>Integrated LLM APIs and Pexels API in multiple projects for enhanced functionality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-highlight mt-1.5">•</span>
                  <span>
                    Developed backend with Next.js API routes with authentication via Supabase Magic Link Login, and
                    deployed on Vercel
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-highlight mt-1.5">•</span>
                  <span>
                    Improved frontend performance by building clean, reusable React components and optimizing page load
                    speed
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-highlight/20">
                    <Award className="h-6 w-6 text-accent-highlight" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Microsoft Learn Student Ambassador</CardTitle>
                    <p className="text-sm text-muted-foreground">FCIT • 2024 - Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Managing programming competitions and covering university events as a videographer
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-highlight/20">
                    <Award className="h-6 w-6 text-accent-highlight" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">Sports Society</CardTitle>
                    <p className="text-sm text-muted-foreground">FCIT • 2024 - Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Managing eSport competitions and setting up matches for tournaments
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <Badge variant="secondary" className="mt-1">
                  AWS
                </Badge>
                <p className="text-muted-foreground">
                  Fundamentals of Machine Learning and Artificial Intelligence — AWS Skill Builder (2024)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="secondary" className="mt-1">
                  Coursera
                </Badge>
                <p className="text-muted-foreground">Google Prompt Essentials — Coursera (2024)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
