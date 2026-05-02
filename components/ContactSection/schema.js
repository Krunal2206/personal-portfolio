import * as z from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  contactNumber: z
    .string()
    .regex(
      /^\d{10,}$/,
      "Contact Number must be at least 10 digits and contain only digits"
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
