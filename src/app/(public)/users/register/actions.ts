"use server";

import { RegisterUserRequest } from "@/core/registerUser.request";
import { registerUserCommand } from "@/core/registerUser.command";
import { logger } from "@/utils/logger";
import { redirect } from "next/navigation";

export const registerUser = async (_prevState: unknown, form: FormData) => {
  try {
    const request = RegisterUserRequest.parse(
      Object.fromEntries(form.entries()),
    );

    await registerUserCommand(request);
  } catch (e: any) {
    logger.info("Unable to register user", e);

    return {
      status: "error",
      message: e.message,
    };
  }

  redirect("/todos");
};
