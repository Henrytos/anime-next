import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-3 gap-2  md:grid-cols-4  lg:grid-cols-5 relative sm:gap-3 lg:gap-4">
      {" "}
      {children}
    </main>
  );
}
