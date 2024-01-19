import { Separator } from "../ui/separator";
import { Content } from "./content";
import { SubTitle } from "../sub-title";

export function SkeletonCarousel({ title }: { title: string }) {
  return (
    <Content>
      <SubTitle>{title}</SubTitle>
      <Separator />
      <div className="full h-44 grid grid-cols-3 gap-1">
        <div className="w-full h-full bg-zinc-500 animate-pulse" />
        <div className="w-full h-full bg-zinc-500 animate-pulse" />
        <div className="w-full h-full bg-zinc-500 animate-pulse" />
      </div>
    </Content>
  );
}
