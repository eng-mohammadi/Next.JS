import { INavbarItemProps } from "./navbarItem";

export interface INavbarSidebarProps {
  items: INavbarItemProps[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
