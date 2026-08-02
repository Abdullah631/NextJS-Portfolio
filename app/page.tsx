import { SceneEngine } from "@/components/scene-engine"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { WorkSection } from "@/components/work-section"
import { StackSection } from "@/components/stack-section"
import { CredentialsSection } from "@/components/credentials-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <SceneEngine />
      <SiteHeader />
      <main id="top" style={{ position: "relative", zIndex: 10 }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <StackSection />
        <CredentialsSection />
        <ContactSection />
      </main>
    </div>
  )
}
