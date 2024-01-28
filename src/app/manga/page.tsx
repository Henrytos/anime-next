import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { fetchMangas, fetchTopMangas } from "@/services/fetch";
import { GenresType } from "@/types/geners-anime";

export default async function MangasPage() {
  const mangas = await fetchTopMangas();
  const mangaToIsekai = await fetchMangas(GenresType.Isekai);
  const mangaToComedy = await fetchMangas(GenresType.Comedy);
  const mangaToRomance = await fetchMangas(GenresType.Romance);
  const mangaToAction = await fetchMangas(GenresType.Action);
  const mangaToAdventure = await fetchMangas(GenresType.Adventure);
  const mangaToSchool = await fetchMangas(GenresType.School);
  console.log(mangas);
  return (
    <Container>
      <Content>
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters type="manga" posters={mangas} />
        <SubTitle>Isekai</SubTitle>
        <CarouselPosters type="manga" posters={mangaToIsekai} />
        <SubTitle>Comedia</SubTitle>
        <CarouselPosters type="manga" posters={mangaToComedy} />
        <SubTitle>Romance</SubTitle>
        <CarouselPosters type="manga" posters={mangaToRomance} />
        <SubTitle>Ação</SubTitle>
        <CarouselPosters type="manga" posters={mangaToAction} />
        <SubTitle>Aventura</SubTitle>
        <CarouselPosters type="manga" posters={mangaToAdventure} />
        <SubTitle>Schol</SubTitle>
        <CarouselPosters type="manga" posters={mangaToSchool} />
      </Content>
    </Container>
  );
}
