import { Container } from "@/components/constainer";
import { Content } from "./components/content";
import { SubTitle } from "@/components/sub-title";
import { Skeleton } from "@/components/skeleton";

export default function LoadingQuery() {
  return (
    <Container>
      <SubTitle>Animes...</SubTitle>
      <Content>
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
      </Content>
      <SubTitle>Mangás...</SubTitle>
      <Content>
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
        <Skeleton className="h-44 w-full rounded" />
      </Content>
    </Container>
  );
}
