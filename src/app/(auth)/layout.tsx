import React, { Suspense } from "react";
import { Navigation } from "@/app/(auth)/Navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense
        fallback={
          <div
            className={
              "w-full h-16 bg-black flex justify-end text-white items-center px-4 z-50"
            }
          />
        }
      >
        <Navigation />
      </Suspense>
      <main className={"min-h-screen pt-20 pb-10"}>{children}</main>
    </>
  );
}
