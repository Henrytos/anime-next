import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Content({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={twMerge(`w-full space-y-2  lg:space-y-4`, className)}>
      {children}
    </section>
  );
}
