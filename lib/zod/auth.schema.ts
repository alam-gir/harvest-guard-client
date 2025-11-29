import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().refine((val) => /\S+@\S+\.\S+/.test(val), {message: "Invalid email address", path: [] }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z
    .string()
    .optional()
    .refine(
    (val) =>
      !val ||
      /^(\+8801|8801|01)[3-9]\d{8}$/.test(val),
    { message: "Invalid Bangladesh phone number" } )
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

// Login schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

