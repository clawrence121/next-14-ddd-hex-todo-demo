import { getUserQuery } from "@/core/getUser.query";

export default async function User() {
  const user = await getUserQuery();

  return (
    <div className={"flex flex-col gap-4 max-w-4xl mx-auto"}>
      <div>Welcome to your user page, {user.email}!</div>
    </div>
  );
}
