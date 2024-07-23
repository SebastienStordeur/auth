"use client";

import { sign } from "crypto";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React from "react";

interface headerProps {
  session: Session | null;
}

export default function Header({ session }: { session: Session | null }) {
  console.log(session);
  console.log("HEADER");
  return (
    <header id="header" className="bg-red-400">
      <nav></nav>
      {!session && <button onClick={() => signIn()}>LOGIN</button>}
      {session && <button onClick={() => signOut()}>LOGOUT</button>}
    </header>
  );
}
