import React, { Suspense } from "react";
import User from "@/app/(auth)/users/me/User";

export default async function UserPage() {
  return (
    <div>
      hello this is the user page, info loading through suspense
      <Suspense fallback={<div>Loading...</div>}>
        <User />
      </Suspense>
    </div>
  );
}
