import { ReactNode } from "react";

export function Content({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`space-y-2 ${className}`}>{children}</section>;
}
