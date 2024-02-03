import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface SideLinkProps extends ComponentProps<"a"> {
  icon: ElementType;
  isInModalLink?: boolean;
}

export function SideLink({
  icon: Icon,
  children,
  href,
  isInModalLink,
}: SideLinkProps) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      id={`side-link-${href}`}
      href={href ?? "/"}
      className={twMerge(
        "group flex flex-col gap-1 items-center hover:underline hover:underline-offset-4 transition-all ",
        clsx({
          "text-white  underline underline-offset-4": isActive,
          "text-neutral-500": isActive != true,
          "flex-row-reverse justify-between items-center":
            isInModalLink == true,
        })
      )}
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
