import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sheikh Abdullah Arshad - Full Stack Web + AI Developer",
  description:
    "Portfolio of Sheikh Abdullah Arshad - Full Stack Web + AI Developer specializing in React, Next.js, Node.js, and AI integration. View my projects, experience, and skills.",
  keywords: ["Abdullah Arshad", "Full Stack Developer", "AI Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Sheikh Abdullah Arshad" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
