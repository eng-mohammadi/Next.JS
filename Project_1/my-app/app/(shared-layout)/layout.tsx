import React from "react";
import Navbar from "@/components/navbar/Navbar";

export default function sharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
