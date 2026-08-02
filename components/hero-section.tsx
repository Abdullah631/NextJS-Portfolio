import { profile } from "@/lib/data"

const STATS = [
  { value: "90–95%", label: "Deepfake accuracy" },
  { value: "15–25%", label: "Load time cut" },
  { value: "3+", label: "SPAs shipped" },
  { value: "3.34", label: "CGPA · BS SE 2026" },
]

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(96px,14vw,140px) clamp(18px,5vw,40px) clamp(60px,9vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%" }}>
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            fontSize: 11,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "var(--space-8)",
          }}
        >
          <span style={{ width: "clamp(20px,5vw,44px)", height: 1, background: "var(--color-accent)", display: "block" }} />
          Software engineer · Lahore, PK
        </div>

        <h1
          data-reveal
          style={{ margin: 0, fontSize: "clamp(38px,10vw,104px)", lineHeight: 1.02, letterSpacing: "-.028em", textWrap: "balance" }}
        >
          I build systems that <span style={{ color: "var(--color-accent-300)" }}>see</span>,{" "}
          <span style={{ color: "var(--color-accent-300)" }}>read</span> and ship.
        </h1>

        <p
          data-reveal
          style={{
            margin: "var(--space-8) 0 0",
            maxWidth: 600,
            fontSize: "clamp(15px,3.2vw,18px)",
            lineHeight: 1.7,
            color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
            textWrap: "pretty",
          }}
        >
          Full-stack engineer shipping enterprise ERP at <span style={{ color: "var(--color-text)" }}>Amperor Tech</span>, with
          production AI/ML across NLP, computer vision and LLM systems. React, Next.js, Django, PyTorch, AWS.
        </p>

        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "var(--space-8)" }}>
          <a className="btn btn-primary" href="#work" style={{ padding: "var(--space-3) var(--space-6)" }}>
            Enter the work <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noopener noreferrer" style={{ padding: "var(--space-3) var(--space-6)" }}>
            GitHub <span aria-hidden="true" style={{ opacity: 0.6 }}>↗</span>
          </a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: "var(--space-3) var(--space-6)" }}>
            LinkedIn <span aria-hidden="true" style={{ opacity: 0.6 }}>↗</span>
          </a>
        </div>

        <div
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: "var(--space-4)",
            marginTop: "clamp(40px,7vw,72px)",
            maxWidth: 820,
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} style={{ paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-divider)" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: "clamp(22px,5vw,30px)",
                  color: "var(--color-accent-300)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginTop: "var(--space-2)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{
            marginTop: "clamp(34px,6vw,54px)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            fontSize: 10.5,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
          }}
        >
          <span style={{ display: "block", width: 1, height: 30, background: "linear-gradient(180deg,var(--color-accent),transparent)" }} />
          Scroll to descend
        </div>
      </div>
    </section>
  )
}
