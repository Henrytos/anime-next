import { Poster } from "@/components/carousel-poster";
import { Anime } from "@/types/anime";
import { DataItem } from "@/types/character";
import { Animeimg } from "@/types/picture";
import { AnimePicture } from "./fetch";

export function sortCharacters(data: DataItem[]) {
  const characters = data
    .sort((a, b) => b.favorites - a.favorites)
    .slice(0, 20);
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
    if (
      character.voice_actors &&
      character.voice_actors[0] &&
      character.voice_actors[0].person
    ) {
      let poster = {
        id: character.voice_actors[0].person.mal_id,
        name: character.voice_actors[0].person.name,
        img: character.voice_actors[0].person.images.jpg.image_url,
      };
      posters.push(poster);
    }
    return posters;
  }, [] as Poster[]);
  return { charactesPoster, characterVoice };
}

export function sortPoster(data: Anime[]) {
  const anime = data.reduce((animesPosters, anime) => {
    let animePoster = {
      id: anime.mal_id,
      name: anime.title,
      img: anime.images.jpg.large_image_url,
    };
    animesPosters.push(animePoster);
    return animesPosters;
  }, [] as Poster[]);

  return anime;
}

export function sortPictures(data: Animeimg[]) {
  const pictures = data.reduce((pictures, picture) => {
    let img = {
      img:
        picture.jpg.large_image_url ||
        picture.jpg.image_url ||
        picture.jpg.small_image_url,
    };
    pictures.push(img);
    return pictures;
  }, [] as AnimePicture[]);

  return pictures;
}
