import { Galery, GaleryContent } from "@/components/galery";
import { fetchAnimePictures } from "@/services/fetch";

export async function GaleryAnime({ animeId }: {animeId:number}) { 
   const pictures = await fetchAnimePictures(animeId);

  return (
    <GaleryContent>
      <Galery pictures={pictures} />
    </GaleryContent>
  );
}