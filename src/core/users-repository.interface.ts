import { UserEntity } from "@/domain/user.entity";

export type UsersRepositoryInterface = {
  create: (email: string, passwordHash: string) => Promise<UserEntity>;
  getUserById: (id: number) => Promise<UserEntity | null>;
  findByEmail: (email: string) => Promise<UserEntity | null>;
};
