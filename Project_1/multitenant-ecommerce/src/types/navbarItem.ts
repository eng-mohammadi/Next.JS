import React from "react";

export interface INavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}
