import { z } from "zod";

export const LoginUserRequest = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginUserRequest = z.infer<typeof LoginUserRequest>;
