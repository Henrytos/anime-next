import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-3 gap-2 lg:grid-cols-5 relative lg:gap-3">
      {" "}
      {children}
    </main>
  );
}
