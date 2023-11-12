import { getServerContext } from "@/infrastructure/serverContext";
import { RegisterUserRequest } from "@/core/registerUser.request";
import bcrypt from "bcrypt";
import { UserService } from "@/domain/user.service";

export const registerUserCommand = async (request: RegisterUserRequest) => {
  const serverContext = getServerContext();
  const usersRepository = serverContext.UsersRepository;

  if (request.password !== request.confirmPassword) {
    throw new Error("Password and password confirmation do not match");
  }

  const existingUser = await usersRepository.findByEmail(request.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(request.password, 10);

  const user = await usersRepository.create(request.email, passwordHash);

  UserService.login(user);
};
