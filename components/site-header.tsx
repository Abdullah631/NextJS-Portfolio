import { ThemeToggle } from "@/components/theme-toggle"

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#credentials", label: "Credentials" },
]

export function SiteHeader() {
  return (
    <header
      style={{
        position: "fixed",
        top: 1,
        left: 0,
        right: 0,
        zIndex: 55,
        backdropFilter: "blur(16px)",
        background: "color-mix(in srgb, var(--color-bg) 72%, transparent)",
      }}
    >
      <div className="nav" style={{ maxWidth: 1180, margin: "0 auto", gap: "var(--space-3)" }}>
        <a
          className="nav-brand"
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            color: "var(--color-text)",
            fontSize: 16,
            letterSpacing: "-.01em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <span style={{ width: 8, height: 8, border: "1px solid var(--color-accent)", transform: "rotate(45deg)", display: "block", flexShrink: 0 }} />
          S. A. Arshad
        </a>

        {/* Scrollable so it can shrink on narrow screens without ever pushing Contact/theme-toggle off-screen. */}
        <nav style={{ display: "flex", gap: "var(--space-1)", overflowX: "auto", scrollbarWidth: "none", alignItems: "center", minWidth: 0, flex: 1 }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: 13,
                padding: "var(--space-2) var(--space-3)",
                borderRadius: "var(--radius-md)",
                color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexShrink: 0 }}>
          <a className="btn btn-primary" href="#contact" style={{ whiteSpace: "nowrap" }}>
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
