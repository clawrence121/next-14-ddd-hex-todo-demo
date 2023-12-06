import { LoginForm } from "@/app/(public)/users/login/LoginForm";
import { redirect } from "next/navigation";

export default function UsersLoginPage() {
  return (
    <div
      className={
        "max-w-xl gap-2 flex flex-col min-h-screen mx-auto justify-center"
      }
    >
      <h1>Welcome to the Users Login Page!</h1>
      <h2>9/10 users would recommend our Todo product to their Aunt</h2>
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
