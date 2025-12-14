import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">Sheikh Abdullah Arshad</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">Full Stack Web + AI Developer</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I build modern, scalable web applications with a focus on AI integration. Passionate about creating seamless
            user experiences and solving complex problems with clean, efficient code.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent-highlight text-accent-highlight-foreground hover:bg-accent-highlight/90"
              asChild
            >
              <a href="mailto:abdullah.arshad1823@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Abdullah631" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/sheikh-abdullah-arshad-a6634a260/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="mailto:abdullah.arshad1823@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              abdullah.arshad1823@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              (+92) 332 4920988
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
