import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  subject: z.string().min(1, "Choose a subject"),
  message: z
    .string()
    .trim()
    .min(10, "Please share at least 10 characters so we can help"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
