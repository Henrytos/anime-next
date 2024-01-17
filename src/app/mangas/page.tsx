import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { fetchTopMangas } from "@/services/fetch";
export default async function MangasPage() {
  const mangas = await fetchTopMangas();
  return (
    <Container>
      <Content>
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={mangas} />
      </Content>
    </Container>
  );
}
