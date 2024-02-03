import { Separator } from "../ui/separator";
import { Content } from "./content";
import { SubTitle } from "../sub-title";
import { Skeleton } from "../skeleton";

export function SkeletonCarousel({ title }: { title: string }) {
  return (
    <Content>
      <SubTitle>{title}</SubTitle>
      <Separator />
      <div className="full   grid grid-cols-3 gap-1  lg:gap-4 md:grid-cols-4 lg:grid-cols-5">
        <Skeleton className="w-full h-44 sm:h-72 md:h-80" />
        <Skeleton className="w-full h-44 sm:h-72 md:h-80" />
        <Skeleton className="w-full h-44 sm:h-72 md:h-80" />
        <Skeleton className="w-full h-44 sm:h-72 md:h-80" />
        <Skeleton className="w-full h-44 sm:h-72 md:h-80" />
      </div>
    </Content>
  );
}
