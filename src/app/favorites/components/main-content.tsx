import { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  return <main className="space-y-4"> {children}</main>;
}
