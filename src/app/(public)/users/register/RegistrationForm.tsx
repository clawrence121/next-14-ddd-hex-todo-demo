"use client";

import { useFormState, useFormStatus } from "react-dom";
import { registerUser } from "@/app/(public)/users/register/actions";

export function RegistrationForm() {
  const [state, action] = useFormState(registerUser, null);

  return (
    <form action={action} className={"flex flex-col gap-2"}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id={"email"} className={"border"} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id={"password"}
        className={"border"}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id={"confirmPassword"}
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
