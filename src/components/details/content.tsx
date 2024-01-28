import { ReactNode } from "react";

export function Content({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`space-y-2 ${className} lg:space-y-4`}>
      {children}
    </section>
  );
}
