import { Container } from "@/_components/constainer";
import { Content } from "./_components/content";
import { SubTitle } from "@/_components/sub-title";
import { Skeleton } from "@/_components/skeleton";

export default function LoadingQuery() {
  return (
    <Container>
      <SubTitle>Animes...</SubTitle>
      <Content>
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
      </Content>
      <SubTitle>Mangás...</SubTitle>
      <Content>
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
        <Skeleton className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 w-full rounded" />
      </Content>
    </Container>
  );
}
