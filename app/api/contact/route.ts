import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations/contact"
import ContactEmail from "@/emails/contact-email"

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
  }

  const { name, email, message, company } = parsed.data
  if (company) {
    // Honeypot field was filled — silently reject as if it succeeded.
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>"

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variables")
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    react: ContactEmail({ name, email, message }),
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
