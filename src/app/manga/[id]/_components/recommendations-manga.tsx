import { CarouselPosters } from "@/_components/carousel-poster";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { Separator } from "@/_components/ui/separator";
import { fetchMangaRecommendations } from "@/_services/fetch";

export async function RecommendationsManga({ mangaId }: { mangaId: number }) {
  const animesRecommendations = await fetchMangaRecommendations(mangaId);
  return (
    <Content>
      {animesRecommendations.length > 0 && (
        <>
          <SubTitle>Recommendations:</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={animesRecommendations} />
        </>
      )}
    </Content>
  );
}
