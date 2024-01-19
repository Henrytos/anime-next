import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SkeletonCarousel } from "@/components/details/skeleton-carousel";

export default function LoadingAnimes() {
  return (
    <>
      <Container>
        <Content>
          <SkeletonCarousel title="Em alta" />
          <SkeletonCarousel title="Isekai" />
          <SkeletonCarousel title="Comedia" />
          <SkeletonCarousel title="Romance" />
          <SkeletonCarousel title="Ação" />
          <SkeletonCarousel title="Aventura" />
          <SkeletonCarousel title="School" />
        </Content>
      </Container>
    </>
  );
}
