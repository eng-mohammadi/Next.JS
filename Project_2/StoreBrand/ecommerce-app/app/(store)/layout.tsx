import React from "react";
import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="pt-24"></div>
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
