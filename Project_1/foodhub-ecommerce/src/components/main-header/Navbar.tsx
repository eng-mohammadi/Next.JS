import React from "react";
import Link from "next/link";
import Image from "next/image";

import logoImage from "@/public/images/logo/logo.png";
import { navbarData } from "@/src/data/navbar.data";
import MainHeaderBackground from "./MainHeaderBackground";

export default function Navbar() {
  return (
    <React.Fragment>
      <MainHeaderBackground />
      <header className="header">
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
          <ul className="navbar-items">
            {navbarData.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
