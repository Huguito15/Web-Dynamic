import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  weddingDate: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  // Honeypot anti-spam: debe llegar vacío desde un usuario real.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
