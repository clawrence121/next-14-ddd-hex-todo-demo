"use server";

import { logger } from "@/utils/logger";
import { redirect } from "next/navigation";
import { loginUserCommand } from "@/core/loginUser.command";
import { LoginUserRequest } from "@/core/loginUser.request";
import { cookies } from "next/headers";

export const loginUser = async (_prevState: unknown, form: FormData) => {
  cookies().delete("x-next-auth"); // remove any stale tokens from previous sessions

  try {
    const request = LoginUserRequest.parse(Object.fromEntries(form.entries()));
    await loginUserCommand(request);
  } catch (e: any) {
    logger.info("Unable to login user", e);

    return {
      status: "error",
      message: e.message,
    };
  }

  return redirect("/todos");
};
