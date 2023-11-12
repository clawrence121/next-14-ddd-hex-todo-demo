import { getAuthContext } from "@/infrastructure/authContext";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import React from "react";
import { getUserQuery } from "@/core/getUser.query";

// Navigation is a separate component, wrapped in a Suspense boundary
// that works as a little hack to offload the auth check server work outside
// the main content to allow for as much partial pre-rendering as possible.
export async function Navigation() {
  getAuthContext();
  const user = await getUserQuery();

  return (
    <div
      className={
        "w-full h-16 bg-black flex justify-between text-white items-center px-4 z-50"
      }
    >
      <form
        action={async () => {
          "use server";
          redirect("/users/me");
        }}
      >
        <button>Welcome, {user.email}</button>
      </form>
      <form
        action={async () => {
          "use server";
          cookies().delete("x-next-auth");
          redirect("/users/login");
        }}
      >
        <button>Log out</button>
      </form>
    </div>
  );
}
