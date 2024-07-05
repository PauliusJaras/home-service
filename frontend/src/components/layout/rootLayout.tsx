import React, { ReactNode } from "react";
import Navbar from "../navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
