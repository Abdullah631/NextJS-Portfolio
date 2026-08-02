import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  company: z.string().max(0, "").optional().default(""),
})

export type ContactFormValues = z.infer<typeof contactSchema>
