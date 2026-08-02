"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const BOOT_LINES = [
  "mount /dev/portfolio ................. ok",
  "loading terrain mesh ................. ok",
  "spawning structures [64] ............. ok",
  "compiling shaders .................... ok",
  "resolving profile: s.a.arshad ........ ok",
  "environment ready.",
]

const BOOT_MS = 2800
const DEFAULT_ACC = "#9184d9"
const DEFAULT_NEU = "#9397ab"

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "")
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean
  const int = Number.parseInt(full, 16)
  if (Number.isNaN(int)) return { r: 145, g: 132, b: 217 }
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 }
}

export function SceneEngine() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bootRef = useRef<HTMLDivElement>(null)
  const bootLogRef = useRef<HTMLDivElement>(null)
  const bootBarRef = useRef<HTMLDivElement>(null)
  const bootPctRef = useRef<HTMLDivElement>(null)
  const progRef = useRef<HTMLDivElement>(null)

  const { resolvedTheme } = useTheme()
  const colorsRef = useRef({ ACC: DEFAULT_ACC, NEU: DEFAULT_NEU })

  useEffect(() => {
    const style = getComputedStyle(document.documentElement)
    colorsRef.current = {
      ACC: style.getPropertyValue("--color-accent").trim() || DEFAULT_ACC,
      NEU: style.getPropertyValue("--color-neutral-500").trim() || DEFAULT_NEU,
    }
  }, [resolvedTheme])

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const density = 1
    const motion = 1 // props.motion=7 in the source design → 7/7

    let W = 0
    let H = 0
    let rails: number[] | null = null
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      W = cv.clientWidth
      H = cv.clientHeight
      cv.width = Math.round(W * dpr)
      cv.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      rails = null
    }
    resize()
    window.addEventListener("resize", resize)

    const rnd = (s: number) => {
      const x = Math.sin(s * 127.1) * 43758.5453
      return x - Math.floor(x)
    }
    const SPACING = 5
    const LOOP = 560
    const towers = Array.from({ length: 64 }, (_, i) => ({
      z: 16 + i * (LOOP / 64) + rnd(i + 40) * 4,
      x: (rnd(i) > 0.5 ? 1 : -1) * (7 + rnd(i + 7) * 15),
      w: 1.6 + rnd(i + 11) * 3.4,
      h: 2.5 + rnd(i + 19) * 11,
      d: 1.6 + rnd(i + 23) * 3,
      hot: rnd(i + 31) > 0.84,
    }))
    const motes = Array.from({ length: 54 }, (_, i) => ({
      x: (rnd(i + 3) - 0.5) * 64,
      y: (rnd(i + 5) - 0.5) * 24,
      z: 6 + rnd(i + 9) * LOOP,
    }))

    let scrollP = 0
    let camZ = 0
    let targetZ = 0
    let tilt = 0
    let targetTilt = 0
    const TRACK = 560
    let f = 0
    let cxp = 0
    let cyp = 0
    const setCam = () => {
      f = Math.min(W, 1500) * 0.62
      cxp = W / 2
      cyp = H * 0.56
    }

    const A = [0.1, 0.26, 0.46, 0.72]
    let paths: Path2D[] = []
    const resetPaths = () => {
      paths = []
      for (let i = 0; i < 8; i++) paths.push(new Path2D())
    }
    const seg = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, a: number, accent: boolean) => {
      if (z1 <= 0.5 || z2 <= 0.5 || a <= 0.02) return
      const b = a < 0.18 ? 0 : a < 0.36 ? 1 : a < 0.6 ? 2 : 3
      const p = paths[accent ? b + 4 : b]
      p.moveTo(cxp + (x1 * f) / z1, cyp + ((y1 + tilt * 2) * f) / z1)
      p.lineTo(cxp + (x2 * f) / z2, cyp + ((y2 + tilt * 2) * f) / z2)
    }
    let ACC = colorsRef.current.ACC
    let NEU = colorsRef.current.NEU
    const flush = () => {
      ctx.lineWidth = 1
      for (let i = 0; i < 8; i++) {
        ctx.globalAlpha = A[i % 4]
        ctx.strokeStyle = i > 3 ? ACC : NEU
        ctx.stroke(paths[i])
      }
      ctx.globalAlpha = 1
    }

    const bootEl = bootRef.current
    const logEl = bootLogRef.current
    const barEl = bootBarRef.current
    const pctEl = bootPctRef.current
    let bootT = 0
    let booting = !reduced
    let buildR = reduced ? 1 : 0
    let li = 0
    let txt = ""
    if (reduced && bootEl) {
      bootEl.style.opacity = "0"
      bootEl.style.visibility = "hidden"
    }

    const revs = document.querySelectorAll<HTMLElement>("[data-reveal]")
    revs.forEach((el) => {
      el.style.transition = "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)"
      if (!reduced) {
        el.style.opacity = "0"
        el.style.transform = "translateY(22px)"
      }
    })
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = "1"
            el.style.transform = "none"
            io.unobserve(el)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    )
    revs.forEach((el) => io.observe(el))

    const progEl = progRef.current
    let pendingScroll = false

    const readScroll = () => {
      pendingScroll = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollP = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      targetZ = scrollP * TRACK
      if (progEl) progEl.style.width = (scrollP * 100).toFixed(1) + "%"
    }
    const onScroll = () => {
      if (!pendingScroll) {
        pendingScroll = true
        requestAnimationFrame(readScroll)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    readScroll()

    const onMove = (e: PointerEvent) => {
      targetTilt = (e.clientY / window.innerHeight - 0.5) * -1.4
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    let last = performance.now()
    let raf = 0

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      ACC = colorsRef.current.ACC
      NEU = colorsRef.current.NEU

      let dt = now - last
      last = now
      if (dt > 100) dt = 100
      const t = now / 1000

      if (booting) {
        bootT += dt
        const p = Math.min(1, bootT / BOOT_MS)
        buildR = p
        if (barEl) barEl.style.width = (p * 100).toFixed(0) + "%"
        if (pctEl) pctEl.textContent = Math.round(p * 100) + "%"
        const want = Math.floor(p * BOOT_LINES.length + 0.0001)
        while (li < want && li < BOOT_LINES.length) {
          txt += (txt ? "\n" : "") + BOOT_LINES[li]
          li++
        }
        if (logEl && logEl.textContent !== txt) logEl.textContent = txt
        if (p >= 1) {
          booting = false
          if (logEl) logEl.textContent = BOOT_LINES.join("\n")
          if (bootEl) {
            bootEl.style.opacity = "0"
            setTimeout(() => {
              bootEl.style.visibility = "hidden"
            }, 950)
          }
        }
      }

      camZ += (targetZ - camZ) * Math.min(1, (dt / 1000) * 5)
      tilt += (targetTilt - tilt) * Math.min(1, (dt / 1000) * 3)
      const cz = camZ - (reduced ? 0 : Math.sin(t * 0.5) * 0.3 * motion)

      setCam()
      ctx.clearRect(0, 0, W, H)
      resetPaths()

      const ease = buildR * buildR * (3 - 2 * buildR)
      const FAR = 110 * ease
      if (FAR < 4) {
        flush()
        return
      }
      const LATERAL = (24 + Math.min(W, 1600) / 62) * (0.4 + 0.6 * ease) * density
      const near = 2.6

      const k0 = Math.ceil((cz + near) / SPACING)
      const kN = Math.ceil(FAR / SPACING)
      for (let k = k0; k < k0 + kN; k++) {
        const z = k * SPACING - cz
        if (z < near) continue
        const fade = 1 - z / FAR
        const accentRung = ((k % 6) + 6) % 6 === 0
        seg(-LATERAL, 6, z, LATERAL, 6, z, fade * fade * (accentRung ? 0.8 : 0.5), accentRung)
      }

      const cols = Math.round(9 * density)
      if (!rails) {
        rails = []
        for (let i = -cols; i <= cols; i++) rails.push(i * (1 / cols))
      }
      for (let i = 0; i < rails.length; i++) {
        const x = rails[i] * LATERAL
        const a = 0.34 * (1 - Math.abs(rails[i]))
        seg(x, 6, near, x, 6, Math.max(near + 1, FAR * 0.85), a, false)
      }

      let drawn = 0
      for (let i = 0; i < towers.length && drawn < 20; i++) {
        const tw = towers[i]
        let z0 = tw.z - (cz % LOOP)
        if (z0 < -24) z0 += LOOP
        if (z0 < near || z0 > FAR) continue
        drawn++
        const fade = 1 - z0 / FAR
        const a = fade * fade * 0.85
        const zb = z0 + tw.d
        const x0 = tw.x - tw.w / 2
        const x1 = tw.x + tw.w / 2
        const yT = 6 - tw.h
        const acc = tw.hot
        seg(x0, yT, z0, x1, yT, z0, a, acc)
        seg(x1, yT, z0, x1, 6, z0, a, acc)
        seg(x1, 6, z0, x0, 6, z0, a, acc)
        seg(x0, 6, z0, x0, yT, z0, a, acc)
        seg(x0, yT, zb, x1, yT, zb, a * 0.5, acc)
        seg(x1, yT, zb, x1, 6, zb, a * 0.5, acc)
        seg(x0, yT, z0, x0, yT, zb, a * 0.5, acc)
        seg(x1, yT, z0, x1, yT, zb, a * 0.5, acc)
        if (z0 < FAR * 0.4) {
          const floors = Math.min(6, Math.round(tw.h / 2.2))
          for (let fl = 1; fl < floors; fl++) {
            const y = 6 - (tw.h * fl) / floors
            seg(x0, y, z0, x1, y, z0, a * 0.3, acc)
          }
        }
      }

      flush()

      ctx.globalAlpha = 0.5
      ctx.fillStyle = NEU
      ctx.beginPath()
      for (let i = 0; i < motes.length; i++) {
        const m = motes[i]
        let z = m.z - (cz % LOOP)
        if (z < near) z += LOOP
        if (z > FAR) continue
        const sx = cxp + (m.x * f) / z
        const sy = cyp + ((m.y + tilt * 2) * f) / z
        const r = Math.max(0.5, (f / z) * 0.008)
        ctx.moveTo(sx + r, sy)
        ctx.arc(sx, sy, r, 0, 6.283)
      }
      ctx.fill()

      const { r: hr, g: hg2, b: hb } = hexToRgb(ACC)
      const hy = cyp + ((6 + tilt * 2) * f) / FAR
      const grad = ctx.createLinearGradient(0, hy - 80, 0, hy + 34)
      grad.addColorStop(0, `rgba(${hr},${hg2},${hb},0)`)
      grad.addColorStop(0.74, `rgba(${hr},${hg2},${hb},${(0.1 * ease).toFixed(3)})`)
      grad.addColorStop(1, `rgba(${hr},${hg2},${hb},0)`)
      ctx.globalAlpha = 1
      ctx.fillStyle = grad
      ctx.fillRect(0, hy - 80, W, 114)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("pointermove", onMove)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, display: "block" }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(125% 78% at 50% 2%, transparent 26%, color-mix(in srgb, var(--color-bg) 60%, transparent) 68%, var(--color-bg) 100%)",
        }}
      />

      <div
        ref={bootRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "var(--color-bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-6)",
          padding: "var(--space-8)",
          transition: "opacity .9s ease, visibility .9s",
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)" }}>
          Initializing environment
        </div>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(26px,6.4vw,54px)",
            letterSpacing: "-.02em",
            lineHeight: 1.08,
            textAlign: "center",
          }}
        >
          Sheikh Abdullah Arshad
        </div>
        <div
          ref={bootLogRef}
          style={{
            fontSize: "clamp(11px,2.4vw,13px)",
            lineHeight: 1.95,
            color: "var(--color-neutral-500)",
            width: "min(520px,92vw)",
            minHeight: 150,
            whiteSpace: "pre-wrap",
            fontVariantNumeric: "tabular-nums",
          }}
        />
        <div
          style={{
            width: "min(520px,92vw)",
            height: 1,
            background:
              "linear-gradient(to right, transparent, var(--color-divider) 48px, var(--color-divider) calc(100% - 48px), transparent)",
            position: "relative",
          }}
        >
          <div
            ref={bootBarRef}
            style={{ position: "absolute", left: 0, top: 0, height: 1, width: "0%", background: "var(--color-accent)", transition: "width .25s linear" }}
          />
        </div>
        <div
          ref={bootPctRef}
          style={{ fontSize: 11, letterSpacing: ".1em", color: "var(--color-neutral-500)", fontVariantNumeric: "tabular-nums" }}
        >
          0%
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          zIndex: 60,
          background: "color-mix(in srgb, var(--color-text) 8%, transparent)",
        }}
      >
        <div ref={progRef} style={{ height: "100%", width: "0%", background: "var(--color-accent)" }} />
      </div>
    </>
  )
}
