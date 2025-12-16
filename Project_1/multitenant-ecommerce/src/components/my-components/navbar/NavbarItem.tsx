import Link from "next/link";
import { INavbarItemProps } from "../../../../types/navbarItem";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";

export default function NavbarItem({
  href,
  children,
  isActive,
}: INavbarItemProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
