import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoImage from "@/public/images/logo/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <React.Fragment>
      <MainHeaderBackground />
      <header className="navbar-header">
        <Link className="logo" href="/">
          <Image
            src={logoImage}
            alt="A plate with food on it"
            className="logo-image"
            priority
          />
          NextLevel Food
        </Link>
        <nav>
          <NavLink />
        </nav>
      </header>
    </React.Fragment>
  );
}
