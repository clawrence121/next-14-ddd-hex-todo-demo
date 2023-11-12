"use client";

import { useFormState } from "react-dom";
import { createTodo } from "@/app/(auth)/todos/actions";

export default function NewTodoForm() {
  const [state, action] = useFormState(createTodo, null);

  return (
    <form action={action} className={"flex flex-col p-2 border"}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" className={"border"} />
      <button type="submit">Create todo</button>
      {state?.errors.message && (
        <span className={"text-red-500"}>{state.errors.message}</span>
      )}
    </form>
  );
}
