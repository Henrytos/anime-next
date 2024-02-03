import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ElementType } from "react";

interface SideLinkProps extends ComponentProps<"a"> {
  icon: ElementType;
}

export function SideLink({ icon: Icon, children, href }: SideLinkProps) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      id={`side-link-${href}`}
      href={href ?? "/"}
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
