"use client";

import { SessionProvider } from "next-auth/react";
import MyContext from "./components/MyContext";

function SessionWrapper({ children,session }) {
  return (
    <SessionProvider session={session}>
      <MyContext>{children}</MyContext>;
    </SessionProvider>
  );
}

export default SessionWrapper;
