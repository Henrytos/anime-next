import { ReactNode } from "react";
import { MagicMotion } from "react-magic-motion";

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <MagicMotion>
      <main className="space-y-4 lg:space-y-6">{children}</main>
    </MagicMotion>
  );
}
