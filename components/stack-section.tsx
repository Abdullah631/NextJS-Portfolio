import { skillCategories } from "@/lib/data"

export function StackSection() {
  return (
    <section id="stack" style={{ padding: "clamp(64px,11vw,128px) clamp(18px,5vw,40px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          04 — Stack
        </div>
        <h2 data-reveal style={{ margin: "0 0 clamp(30px,5vw,54px)", fontSize: "clamp(28px,6vw,52px)", lineHeight: 1.06, letterSpacing: "-.022em" }}>
          Loadout
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "clamp(20px,3vw,30px)" }}>
          {skillCategories.map((category) => (
            <div key={category.title} data-reveal>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  paddingBottom: "var(--space-3)",
                  borderBottom: "1px solid var(--color-divider)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {category.title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {category.skills.map((skill) => (
                  <span key={skill} className="tag tag-neutral">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
