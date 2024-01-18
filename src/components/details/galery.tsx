import { fetchAnimePictures, fetchMangaPictures } from "@/services/fetch";
import { Galery, GaleryContent } from "./galery-list";

export async function GaleryAnime({ animeId }: { animeId: number }) {
  const pictures = await fetchAnimePictures(animeId);

  return (
    <GaleryContent>
      <Galery pictures={pictures} />
    </GaleryContent>
  );
}

export async function GaleryManga({ mangaId }: { mangaId: number }) {
  const pictures = await fetchMangaPictures(mangaId);

  return (
    <GaleryContent>
      <Galery pictures={pictures} />
    </GaleryContent>
  );
}
