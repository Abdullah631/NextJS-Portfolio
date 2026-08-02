import { education, certifications } from "@/lib/data"
import { Testimonial } from "@/components/testimonial"

export function CredentialsSection() {
  return (
    <section id="credentials" style={{ padding: "clamp(64px,11vw,128px) clamp(18px,5vw,40px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          05 — Credentials
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(20px,3.5vw,32px)" }}>
          <div data-reveal>
            <h2 style={{ margin: "0 0 var(--space-6)", fontSize: "clamp(24px,4.4vw,34px)", letterSpacing: "-.02em" }}>Education</h2>
            {education.map((item, index) => (
              <div
                key={item.degree}
                className="card elev-sm"
                style={{
                  background: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
                  padding: "clamp(16px,3vw,24px)",
                  marginBottom: index < education.length - 1 ? "var(--space-4)" : 0,
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 style={{ margin: 0, fontSize: 17 }}>{item.degree}</h3>
                  <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>{item.period}</span>
                </div>
                <div style={{ fontSize: 14, color: "color-mix(in srgb, var(--color-text) 74%, transparent)" }}>{item.school}</div>
                <div style={{ fontSize: 13, color: "var(--color-accent-300)", fontVariantNumeric: "tabular-nums" }}>{item.detail}</div>
              </div>
            ))}
            <div style={{ marginTop: "var(--space-4)" }}>
              <Testimonial />
            </div>
          </div>
          <div data-reveal>
            <h2 style={{ margin: "0 0 var(--space-6)", fontSize: "clamp(24px,4.4vw,34px)", letterSpacing: "-.02em" }}>Certifications</h2>
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="card elev-sm"
                style={{
                  background: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
                  padding: "clamp(16px,3vw,24px)",
                  marginBottom: "var(--space-4)",
                  flexDirection: "row",
                  gap: "var(--space-4)",
                  alignItems: "flex-start",
                }}
              >
                <span aria-hidden="true" style={{ flex: "none", marginTop: 6, width: 9, height: 9, border: "1px solid var(--color-accent)", transform: "rotate(45deg)", display: "block" }} />
                <div>
                  <h3 style={{ margin: "0 0 var(--space-2)", fontSize: 16, lineHeight: 1.35 }}>{cert.name}</h3>
                  <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
