"use client"

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{"Let's Connect"}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm"} always open to discussing new projects, creative ideas, or opportunities to be part of your
              vision.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" asChild>
                <a href="https://github.com/Abdullah631" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/sheikh-abdullah-arshad-a6634a260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <a href="mailto:abdullah.arshad1823@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-3">
              <a
                href="mailto:abdullah.arshad1823@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>abdullah.arshad1823@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <div className="space-y-1">
                  <p>(+92) 322 7245591</p>
                  <p>(+92) 332 4920988</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => {
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sheikh Abdullah Arshad. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
