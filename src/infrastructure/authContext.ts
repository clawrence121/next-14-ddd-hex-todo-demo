import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { z } from "zod";
import { logger } from "@/utils/logger";
import { cache } from "react";
import { redirect } from "next/navigation";

const PRIVATE_KEY = "test-private-key";

export const getAuthContext = cache(() => {
  const cookie = cookies().get("x-next-auth");

  if (!cookie) {
    redirect("/users/login");
  }

  try {
    const token = z
      .object({ id: z.number() })
      .parse(jwt.verify(cookie.value, PRIVATE_KEY));

    return {
      userId: token.id,
    };
  } catch (e) {
    logger.debug("Unable to verify token", e);

    redirect("/users/login");
  }
});
