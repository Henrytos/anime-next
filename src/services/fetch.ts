import { Poster } from "@/components/carousel-poster";
import { ApiResponseAnime } from "@/types/anime";
import { ApiResponseCharacter } from "@/types/character";

export async function fetchCharacters(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
  const { data }: ApiResponseCharacter = await res.json();
  let characters = data.slice(0, 6);

  const charactesPoster = characters.reduce((posters, character) => {
    let poster = {
      id: character.character.mal_id,
      name: character.character.name,
      img: character.character.images.jpg.image_url,
    };
    posters.push(poster);
    return posters;
  }, [] as Poster[]);

  return { charactesPoster };
}

export async function fetchAnime(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const { data }: ApiResponseAnime = await res.json();
  return data;
}
