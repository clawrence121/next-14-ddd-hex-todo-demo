import TodosList from "@/app/(auth)/todos/TodosList";
import NewTodoForm from "@/app/(auth)/todos/NewTodoForm";
import { Suspense } from "react";

export default function Todos() {
  return (
    <div className={"flex flex-col gap-4 max-w-4xl mx-auto"}>
      <div>Welcome to Todos!</div>
      <div>
        <span>Current todos:</span>
        <Suspense fallback={"Loading..."}>
          <TodosList />
        </Suspense>
      </div>
      <NewTodoForm />
    </div>
  );
}
