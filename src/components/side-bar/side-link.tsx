import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType, ReactNode } from "react";

interface SideLinkProps {
  icon: ElementType;
  children: ReactNode;
  href: string;
}

export function SideLink({ icon: Icon, children, href }: SideLinkProps) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      href={href}
      className={`flex flex-col gap-1 items-center  ${
        isActive ? "text-white" : "text-neutral-500"
      } sm:flex-row-reverse sm:justify-between sm:items-center`}
    >
      <Icon />
      <span className="text-sm font-light sm:text-xl">{children}</span>
    </Link>
  );
}
