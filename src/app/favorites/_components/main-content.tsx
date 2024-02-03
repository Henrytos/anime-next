import { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  return <main className="space-y-4 lg:space-y-6">{children}</main>;
}
