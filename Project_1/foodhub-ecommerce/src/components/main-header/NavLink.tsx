"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navbarData } from "@/src/data/navbar.data";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <ul className="navbar-items">
      {navbarData.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={clsx(
              "navbar-link",
              pathname.startsWith(item.href) && "navbar-active"
            )}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
