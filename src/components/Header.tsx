"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React from "react";

export default function Header({ session }: { session: Session | null }) {
  console.log(session);
  return (
    <header id="header" className="flex items-center h-14 w-full bg-red-400">
      <nav>
        {!session && <button onClick={() => signIn()}>LOGIN</button>}
        {session && (
          <>
            <button onClick={() => signOut()}>LOGOUT</button>
            {session.user?.name}
          </>
        )}
      </nav>
    </header>
  );
}
