"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2, Send } from "lucide-react"

import { contactSchema, type ContactFormValues } from "@/lib/validations/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error ?? "Something went wrong. Please try again.")
      }

      toast.success("Message sent — thanks for reaching out!", {
        description: "I'll get back to you as soon as I can.",
      })
      reset()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to send message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card elev-sm"
      style={{ background: "color-mix(in srgb, var(--color-surface) 80%, transparent)", padding: "clamp(18px,3vw,26px)", gap: "var(--space-4)" }}
    >
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }} {...register("company")} />

      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" className="input" placeholder="Your name" {...register("name")} />
        {errors.name && <p style={{ margin: "4px 0 0", fontSize: 12, color: "#e5877f" }}>{errors.name.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" className="input" placeholder="you@example.com" {...register("email")} />
        {errors.email && <p style={{ margin: "4px 0 0", fontSize: 12, color: "#e5877f" }}>{errors.email.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" className="input" rows={5} placeholder="Tell me about your project or question..." {...register("message")} />
        {errors.message && <p style={{ margin: "4px 0 0", fontSize: 12, color: "#e5877f" }}>{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block" style={{ padding: "var(--space-3) var(--space-6)" }}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
          </>
        )}
      </button>
      <style>{"@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"}</style>
    </form>
  )
}
