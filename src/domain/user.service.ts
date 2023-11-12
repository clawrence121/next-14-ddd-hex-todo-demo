import { UserEntity } from "@/domain/user.entity";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const PRIVATE_KEY = "test-private-key";

export const UserService = {
  login: (user: UserEntity) => {
    // n.b. this shouldn't be in the domain service but here for now for simplicity
    const token = jwt.sign({ id: user.id, email: user.email }, PRIVATE_KEY);

    cookies().set("x-next-auth", token, {
      secure: true,
      // httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
    });
  },
};
