import { ReactNode } from "react";

export function RankAnime({ children }: { children: ReactNode }) {
  return (
    <h2 className="absolute top-2 right-4 text-neutral-900 text-2xl font-bold">
      {children}
    </h2>
  );
}
