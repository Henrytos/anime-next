import { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return <main className="grid grid-cols-3 gap-2"> {children}</main>;
}
