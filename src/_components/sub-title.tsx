import clsx from "clsx";
import { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
  isDifferent?: boolean;
  className?: string;
}
export function SubTitle({ children, isDifferent, className }: SubTitleProps) {
  const baseStyleSubTitle = "text-xl font-bold  antialiased lg:text-2xl";
  return (
    <h2
      className={clsx(
        baseStyleSubTitle,
        !isDifferent && "text-secondary-foreground",
        isDifferent && "text-primary/80",
        className
      )}
    >
      {children}
    </h2>
  );
}
