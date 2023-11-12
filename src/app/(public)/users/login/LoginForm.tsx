"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginUser } from "@/app/(public)/users/login/actions";

export function LoginForm() {
  const [state, action] = useFormState(loginUser, null);

  return (
    <form action={action} className={"flex flex-col gap-2"}>
      <input type="text" name="email" id={"email"} className={"border"} />
      <input
        type="password"
        name="password"
        id={"password"}
        className={"border"}
      />
      <SubmitButton />
      {state?.status === "error" && (
        <div className={"bg-red-300"}>{state?.message}</div>
      )}
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : "Submit"}
    </button>
  );
};
