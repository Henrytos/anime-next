import { CarouselPosters } from "@/_components/carousel-poster";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { Separator } from "@/_components/ui/separator";
import { fetchAnimeRecommendations } from "@/_services/fetch";

export async function RecommendationsAnimes({ animeId }: { animeId: number }) {
  const animesRecommendations = await fetchAnimeRecommendations(animeId);
  return (
    <Content>
      {animesRecommendations.length > 0 && (
        <>
          <SubTitle>Recommendations:</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animesRecommendations} />
        </>
      )}
    </Content>
  );
}
