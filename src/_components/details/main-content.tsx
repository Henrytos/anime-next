import { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <main className="absolute top-1/2 w-full  max-w-[90%] space-y-5 left-1/2 -translate-x-1/2">
      {children}
    </main>
  );
}
