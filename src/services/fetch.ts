import { Poster } from "@/components/carousel-poster";
import { ApiResponseAnime } from "@/types/anime";
import { ApiResponseCharacter, DataItem } from "@/types/character";

export async function fetchCharacters(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
  const { data }: ApiResponseCharacter = await res.json();
  let characters: DataItem[] = data.slice(0, 20);
  const charactesPoster = characters.reduce((posters, character) => {
    let poster = {
      id: character.character.mal_id,
      name: character.character.name,
      img: character.character.images.jpg.image_url,
    };
    posters.push(poster);
    return posters;
  }, [] as Poster[]);

  const characterVoice = characters.reduce((posters, character) => {
    let poster = {
      id: character.voice_actors[0].person.mal_id,
      name: character.voice_actors[0].person.name,
      img: character.voice_actors[0].person.images.jpg.image_url,
    };
    posters.push(poster);
    return posters;
  }, [] as Poster[]);
  return { charactesPoster, characterVoice };
}

export async function fetchAnime(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const { data }: ApiResponseAnime = await res.json();

  return data;
}
