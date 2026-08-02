export function AboutSection() {
  return (
    <section id="about" style={{ padding: "clamp(64px,11vw,128px) clamp(18px,5vw,40px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-reveal style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          01 — About
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(24px,5vw,56px)", alignItems: "start" }}>
          <div data-reveal>
            <p
              style={{
                margin: "0 0 var(--space-6)",
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "clamp(20px,4vw,30px)",
                lineHeight: 1.28,
                letterSpacing: "-.015em",
                textWrap: "pretty",
              }}
            >
              A software engineering graduate who treats <span style={{ color: "var(--color-accent-300)" }}>shipping</span> as the
              only real proof of skill.
            </p>
            <p style={{ margin: "0 0 var(--space-4)", fontSize: 15, lineHeight: 1.75, color: "color-mix(in srgb, var(--color-text) 76%, transparent)", textWrap: "pretty" }}>
              I work across the whole stack — React and Next.js on the front, Node, Django and Flask behind it, PostgreSQL and
              MongoDB underneath — and keep one foot firmly in AI/ML: computer-vision pipelines in PyTorch, semantic matching
              with Sentence-BERT, LLM integrations on Gemini, Groq and OpenAI.
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "color-mix(in srgb, var(--color-text) 76%, transparent)", textWrap: "pretty" }}>
              Right now I'm at Amperor Tech building enterprise ERP features and deploying on AWS EC2, Azure and Vercel through
              CI/CD. Open to full-stack, AI/ML and DevOps roles.
            </p>
          </div>
          <div data-reveal className="card elev-sm" style={{ background: "color-mix(in srgb, var(--color-surface) 80%, transparent)", padding: 0, overflow: "hidden", gap: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "var(--space-3) var(--space-4)", borderBottom: "1px solid var(--color-divider)" }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, border: "1px solid var(--color-accent)", transform: "rotate(45deg)", display: "block" }} />
              <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)" }}>profile.json</span>
            </div>
            <pre style={{ margin: 0, padding: "var(--space-6)", fontSize: "clamp(11px,2.5vw,12.5px)", lineHeight: 2, color: "color-mix(in srgb, var(--color-text) 80%, transparent)", overflowX: "auto" }}>
              {"{\n"}
              {"  "}
              <span style={{ color: "var(--color-neutral-500)" }}>&quot;role&quot;</span>: <span style={{ color: "var(--color-accent-300)" }}>&quot;Associate Software Engineer&quot;</span>,{"\n"}
              {"  "}
              <span style={{ color: "var(--color-neutral-500)" }}>&quot;company&quot;</span>: <span style={{ color: "var(--color-accent-300)" }}>&quot;Amperor Tech&quot;</span>,{"\n"}
              {"  "}
              <span style={{ color: "var(--color-neutral-500)" }}>&quot;base&quot;</span>: <span style={{ color: "var(--color-accent-300)" }}>&quot;Lahore, Pakistan&quot;</span>,{"\n"}
              {"  "}
              <span style={{ color: "var(--color-neutral-500)" }}>&quot;focus&quot;</span>: [<span style={{ color: "var(--color-accent-300)" }}>&quot;full-stack&quot;</span>, <span style={{ color: "var(--color-accent-300)" }}>&quot;ai/ml&quot;</span>, <span style={{ color: "var(--color-accent-300)" }}>&quot;devops&quot;</span>],{"\n"}
              {"  "}
              <span style={{ color: "var(--color-neutral-500)" }}>&quot;degree&quot;</span>: <span style={{ color: "var(--color-accent-300)" }}>&quot;BS SE · PU FCIT · 2026&quot;</span>,{"\n"}
              {"  "}
              <span style={{ color: "var(--color-neutral-500)" }}>&quot;open_to_work&quot;</span>: <span style={{ color: "var(--color-accent)" }}>true</span>
              {"\n}"}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
