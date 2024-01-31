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
      id={`side-link-${href}`}
      href={href}
      className={`group flex flex-col gap-1 items-center hover:underline hover:underline-offset-4 transition-all  ${
        isActive
          ? "text-white  underline underline-offset-4"
          : "text-neutral-500"
      } sm:flex-row-reverse sm:justify-between sm:items-center`}
    >
      <Icon
        className={` group-hover:w-7 group-hover:h-7 transition-all ${
          isActive && "w-7 h-7"
        } `}
      />
      <span
        className={`text-sm font-light sm:text-xl group-hover:font-semibold transition-all  ${
          isActive && "font-semibold"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}
