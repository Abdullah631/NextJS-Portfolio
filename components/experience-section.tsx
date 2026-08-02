import { experience } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "clamp(64px,11vw,128px) clamp(18px,5vw,40px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          02 — Experience
        </div>
        <h2 data-reveal style={{ margin: "0 0 clamp(30px,5vw,54px)", fontSize: "clamp(28px,6vw,52px)", lineHeight: 1.06, letterSpacing: "-.022em" }}>
          Deployment log
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px,3.5vw,32px)" }}>
          {experience.map((job, index) => (
            <article
              key={job.role + job.company}
              data-reveal
              style={{
                position: "relative",
                paddingLeft: "clamp(20px,4vw,34px)",
                background: "linear-gradient(180deg,var(--color-divider),transparent) no-repeat left top / 1px 100%",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: -3,
                  top: 7,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: index === 0 ? "var(--color-accent)" : "var(--color-neutral-600)",
                  boxShadow: index === 0 ? "0 0 0 4px var(--color-bg), 0 0 14px var(--color-accent)" : "0 0 0 4px var(--color-bg)",
                }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", alignItems: "baseline", justifyContent: "space-between" }}>
                <h3 style={{ margin: 0, fontSize: "clamp(19px,3.6vw,25px)", letterSpacing: "-.015em" }}>
                  {job.role} <span style={{ color: index === 0 ? "var(--color-accent-300)" : "var(--color-neutral-400)" }}>· {job.company}</span>
                </h3>
                <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>{job.period}</span>
              </div>
              <ul style={{ margin: "var(--space-4) 0 0", paddingLeft: 17, display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: 14.5, lineHeight: 1.65, color: "color-mix(in srgb, var(--color-text) 76%, transparent)" }}>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
