import { profile } from "@/lib/data"
import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section id="contact" style={{ padding: "clamp(72px,12vw,140px) clamp(18px,5vw,40px) clamp(44px,7vw,80px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          06 — Contact
        </div>
        <h2
          data-reveal
          style={{ margin: "0 0 clamp(26px,5vw,44px)", fontSize: "clamp(32px,8vw,76px)", lineHeight: 1.02, letterSpacing: "-.028em", textWrap: "balance" }}
        >
          Let&apos;s build something that ships.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,4vw,40px)", alignItems: "start" }}>
          <div data-reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "clamp(16px,3vw,28px)", marginBottom: "clamp(32px,5vw,48px)" }}>
              <a href={`mailto:${profile.email}`} style={{ paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-divider)", color: "var(--color-text)", textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "var(--space-3)" }}>Email</div>
                <div style={{ fontSize: "clamp(14px,3vw,16px)", color: "var(--color-accent-300)", wordBreak: "break-all" }}>{profile.email}</div>
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} style={{ paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-divider)", color: "var(--color-text)", textDecoration: "none", display: "block" }}>
                <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "var(--space-3)" }}>Phone</div>
                <div style={{ fontSize: "clamp(14px,3vw,16px)" }}>{profile.phone}</div>
              </a>
              <div style={{ paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-divider)" }}>
                <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: "var(--space-3)" }}>Location</div>
                <div style={{ fontSize: "clamp(14px,3vw,16px)" }}>{profile.location} · remote-friendly</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", maxWidth: 440 }}>
              Prefer a form? Send a message directly and I&apos;ll reply from my inbox — no account needed.
            </p>
          </div>

          <div data-reveal>
            <ContactForm />
          </div>
        </div>

        <footer
          style={{
            marginTop: "clamp(44px,7vw,80px)",
            paddingTop: "var(--space-6)",
            background:
              "linear-gradient(to right,transparent,var(--color-divider) 48px,var(--color-divider) calc(100% - 48px),transparent) no-repeat top / 100% 1px",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            letterSpacing: ".06em",
            color: "var(--color-neutral-600)",
          }}
        >
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </span>
        </footer>
      </div>
    </section>
  )
}
