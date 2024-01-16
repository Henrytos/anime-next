import { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className="absolute top-1/2  max-w-[90%] space-y-5">{children}</main>
  );
}
