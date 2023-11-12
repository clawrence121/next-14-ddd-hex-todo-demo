import { z } from "zod";

export const RegisterUserRequest = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});
export type RegisterUserRequest = z.infer<typeof RegisterUserRequest>;
