import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, { message: "You should enter at least 3 characters" }).max(2200),
  email: z.string().email({ message: "You should enter a valid email" }),
  message: z.string().min(12, { message: "You should enter at least 12 characters" }).max(2200)
})