import { ReactNode } from "react";
import { Button } from "./ui/button";

export function ButtonLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Button
      asChild
      className=" w-full border border-primary bg-transparent text-primary rounded underline "
      variant={"outline"}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </Button>
  );
}
