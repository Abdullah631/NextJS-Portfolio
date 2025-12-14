export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About Me</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a BS Software Engineering student at FCIT, Punjab University, with a strong foundation in full-stack
            development and AI integration. My expertise spans from building responsive frontends with React and Next.js
            to developing robust backends with Node.js, .NET, and Django.
          </p>
          <p>
            During my internship at Nexium, I engineered multiple Single Page Applications, integrated LLM APIs, and
            implemented authentication systems using Supabase. I'm passionate about leveraging AI to create innovative
            solutions that solve real-world problems.
          </p>
          <p>
            Beyond coding, I actively contribute to university events as a videographer and photographer for MLSA and
            FIMS, and manage programming competitions and eSports tournaments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
            <p className="text-muted-foreground">BS Software Engineering</p>
            <p className="text-sm text-muted-foreground">FCIT, Punjab University</p>
            <p className="text-sm text-muted-foreground">2022 - Present</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Location</h3>
            <p className="text-muted-foreground">Lahore, Pakistan</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Interests</h3>
            <p className="text-muted-foreground">AI/ML, Web Development</p>
            <p className="text-muted-foreground">Photography, Videography</p>
          </div>
        </div>
      </div>
    </section>
  )
}
