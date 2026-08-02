import { Quote } from "lucide-react"
import { testimonial } from "@/lib/data"

export function Testimonial() {
  return (
    <div
      data-reveal
      className="card elev-sm"
      style={{ background: "color-mix(in srgb, var(--color-surface) 80%, transparent)", padding: "clamp(18px,3vw,26px)" }}
    >
      <Quote size={22} style={{ color: "var(--color-accent-300)", marginBottom: "var(--space-3)" }} />
      <p style={{ margin: "0 0 var(--space-3)", fontSize: 16, lineHeight: 1.6, fontStyle: "italic", color: "var(--color-text)" }}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p style={{ margin: 0, fontSize: 13, color: "var(--color-neutral-500)" }}>
        <span style={{ color: "var(--color-text)", fontWeight: 500 }}>{testimonial.author}</span> · {testimonial.role}
      </p>
    </div>
  )
}
