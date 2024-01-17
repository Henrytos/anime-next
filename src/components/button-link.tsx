import { ComponentProps, ReactNode } from "react";
import { Button } from "./ui/button";

interface ButtonLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
}

export function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <Button
      asChild
      className=" w-full border border-primary bg-transparent text-primary rounded underline "
      variant={"outline"}
    >
      <a {...props}>{children}</a>
    </Button>
  );
}
