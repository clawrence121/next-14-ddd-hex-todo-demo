import { getServerContext } from "@/infrastructure/serverContext";
import bcrypt from "bcrypt";
import { UserService } from "@/domain/user.service";
import { LoginUserRequest } from "@/core/loginUser.request";

export const loginUserCommand = async (request: LoginUserRequest) => {
  const serverContext = getServerContext();
  const usersRepository = serverContext.UsersRepository;

  const existingUser = await usersRepository.findByEmail(request.email);

  if (!existingUser) {
    throw new Error("Invalid username or password");
  }

  if (!(await bcrypt.compare(request.password, existingUser.passwordHash))) {
    throw new Error("Invalid username or password");
  }

  UserService.login(existingUser);
};
