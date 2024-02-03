import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SkeletonCarousel } from "@/_components/details/skeleton-carousel";

export default function LoadingMangas() {
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
