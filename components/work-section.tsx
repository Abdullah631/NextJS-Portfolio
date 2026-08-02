import type React from "react"
import type { LucideIcon } from "lucide-react"
import { Briefcase, ScanFace, FileText, ListChecks, ChefHat, MessageSquareText, Sparkles } from "lucide-react"
import { flagshipProjects, otherProjects } from "@/lib/data"

const HATCH_BG = "repeating-linear-gradient(135deg,color-mix(in srgb,var(--color-text) 4%,transparent) 0 2px,transparent 2px 9px)"

const PROJECT_ICONS: Record<string, LucideIcon> = {
  "RemoteHire.io": Briefcase,
  "Deepfake Detection System": ScanFace,
  "AI Blog Summarizer": FileText,
  "CV–Job Description Matching System": ListChecks,
  "AI Recipe Generator": ChefHat,
  "Interview AI": MessageSquareText,
}

function iconFor(title: string): LucideIcon {
  return PROJECT_ICONS[title] ?? Sparkles
}

export function WorkSection() {
  const highlighted = flagshipProjects.find((p) => p.highlight)
  const rest = flagshipProjects.filter((p) => !p.highlight)

  return (
    <section id="work" style={{ padding: "clamp(64px,11vw,128px) clamp(18px,5vw,40px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          03 — Selected work
        </div>
        <h2 data-reveal style={{ margin: "0 0 clamp(30px,5vw,54px)", fontSize: "clamp(28px,6vw,52px)", lineHeight: 1.06, letterSpacing: "-.022em" }}>
          Systems, built end to end.
        </h2>

        {highlighted && (
          <FeaturedCard
            title={highlighted.title}
            description={highlighted.description}
            tags={highlighted.tags}
            href={highlighted.href}
            Icon={iconFor(highlighted.title)}
          />
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(20px,3.5vw,32px)" }}>
          {rest.map((project) => (
            <WorkCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
              Icon={iconFor(project.title)}
            />
          ))}
        </div>

        <div data-reveal style={{ marginTop: "clamp(44px,7vw,72px)" }}>
          <h3 style={{ margin: "0 0 var(--space-4)", fontSize: "clamp(18px,3vw,22px)", letterSpacing: "-.015em" }}>Other work</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {otherProjects.map((project) => {
              const Tag = (project.href ? "a" : "div") as React.ElementType
              return (
                <Tag
                  key={project.title}
                  {...(project.href ? { href: project.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card"
                  style={{
                    background: "color-mix(in srgb, var(--color-surface) 60%, transparent)",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "var(--space-3)",
                    color: "var(--color-text)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 15 }}>{project.title}</span>
                    <span style={{ fontSize: 13, color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}>{project.description}</span>
                  </span>
                  <span style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag tag-neutral">
                        {tag}
                      </span>
                    ))}
                  </span>
                </Tag>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({
  title,
  description,
  tags,
  href,
  Icon,
}: {
  title: string
  description: string
  tags: string[]
  href?: string
  Icon: LucideIcon
}) {
  const Tag = (href ? "a" : "div") as React.ElementType
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      data-reveal
      className="card elev-sm"
      style={{
        background: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
        padding: 0,
        gap: 0,
        overflow: "hidden",
        marginBottom: "clamp(20px,3.5vw,32px)",
        color: "var(--color-text)",
        textDecoration: "none",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
        <div style={{ padding: "clamp(20px,4vw,36px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <span className="tag tag-outline">Final year project</span>
            <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>2025 – 2026</span>
          </div>
          <h3 style={{ margin: "0 0 var(--space-3)", fontSize: "clamp(24px,4.6vw,36px)", letterSpacing: "-.022em" }}>{title}</h3>
          <p style={{ margin: "0 0 var(--space-6)", fontSize: 15, lineHeight: 1.7, color: "color-mix(in srgb, var(--color-text) 76%, transparent)", textWrap: "pretty" }}>
            {description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            {tags.map((tag) => (
              <span key={tag} className="tag tag-neutral">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            minHeight: 290,
            borderLeft: "1px solid var(--color-divider)",
            background: HATCH_BG,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-2)",
            padding: "var(--space-8)",
          }}
        >
          <Icon size={34} strokeWidth={1.4} style={{ color: "var(--color-accent-300)" }} aria-hidden="true" />
          <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)", textAlign: "center" }}>
            {href ? "View live" : "Preview coming soon"}
          </div>
        </div>
      </div>
    </Tag>
  )
}

function WorkCard({
  title,
  description,
  tags,
  href,
  Icon,
}: {
  title: string
  description: string
  tags: string[]
  href?: string
  Icon: LucideIcon
}) {
  const Tag = (href ? "a" : "div") as React.ElementType
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      data-reveal
      className="card elev-sm"
      style={{ background: "color-mix(in srgb, var(--color-surface) 80%, transparent)", padding: 0, gap: 0, overflow: "hidden", color: "var(--color-text)", textDecoration: "none" }}
    >
      <div
        style={{
          height: 160,
          background: HATCH_BG,
          borderBottom: "1px solid var(--color-divider)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-2)",
          padding: "var(--space-6)",
        }}
      >
        <Icon size={28} strokeWidth={1.4} style={{ color: "var(--color-accent-300)" }} aria-hidden="true" />
        <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>{href ? "View live" : "Preview coming soon"}</div>
      </div>
      <div style={{ padding: "clamp(18px,3vw,26px)", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 className="card-title" style={{ margin: "0 0 var(--space-3)", fontSize: "clamp(19px,3.4vw,23px)" }}>
          {title}
        </h3>
        <p style={{ margin: "0 0 var(--space-4)", fontSize: 14, lineHeight: 1.7, color: "color-mix(in srgb, var(--color-text) 74%, transparent)", flex: 1, textWrap: "pretty" }}>
          {description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
          {tags.map((tag) => (
            <span key={tag} className="tag tag-neutral">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Tag>
  )
}
