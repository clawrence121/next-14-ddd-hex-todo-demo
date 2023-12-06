import { RegistrationForm } from "@/app/(public)/users/register/RegistrationForm";

export default function UsersRegisterPage() {
  return (
    <div
      className={
        "max-w-xl gap-2 flex flex-col min-h-screen mx-auto justify-center"
      }
    >
      <h1>Welcome to UsersRegisterPage!</h1>
      <h2>We are really cool!</h2>
      <RegistrationForm />
    </div>
  );
}
