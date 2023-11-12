import { getServerContext } from "@/infrastructure/serverContext";
import { cache } from "react";
import { getAuthContext } from "@/infrastructure/authContext";

export const getUserQuery = cache(async () => {
  const { userId } = getAuthContext();

  const serverContext = getServerContext();
  const usersRepository = serverContext.UsersRepository;

  const user = await usersRepository.getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
});
