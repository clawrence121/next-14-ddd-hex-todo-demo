import { LoginForm } from "@/app/(public)/users/login/LoginForm";
import { redirect } from "next/navigation";

export default function UsersLoginPage() {
  return (
    <div
      className={
        "max-w-xl gap-2 flex flex-col min-h-screen mx-auto justify-center"
      }
    >
      <h1>Welcome to UsersLoginPage!</h1>
      <LoginForm />
      <form
        action={async () => {
          "use server";
          redirect("/users/register");
        }}
      >
        <button>Register</button>
      </form>
    </div>
  );
}