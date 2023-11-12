import { z } from "zod";

export const UserEntity = z.object({
  id: z.number(),
  email: z.string(),
  passwordHash: z.string(),
});
export type UserEntity = z.infer<typeof UserEntity>;
