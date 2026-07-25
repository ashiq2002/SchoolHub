import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().trim().min(1, "Enter your email address").email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password").min(8, "Password must contain at least 8 characters"),
  remember: z.boolean(),
});

export const recoverySchema = z.object({
  email: z.string().trim().min(1, "Enter your email address").email("Enter a valid email address"),
});

export const otpSchema = z.object({
  code: z.string().regex(/^\d{6}$/, "Enter the 6-digit verification code"),
});

export type SignInValues = z.infer<typeof signInSchema>;
export type RecoveryValues = z.infer<typeof recoverySchema>;
