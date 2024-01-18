import { Poster } from "@/components/carousel-poster";
import { Anime } from "@/types/anime";
import { DataItem, Voice } from "@/types/character";
import { Animeimg } from "@/types/picture";
import { AnimePicture } from "./fetch";

export function sortCharacters(data: DataItem[]) {
  const characters = data
    .sort((a, b) => b.favorites - a.favorites)
    .slice(0, 10);
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
      const targetCharacter =
        character.voice_actors.find(
          (voice) => voice.language === "Portuguese (BR)"
        ) ?? character.voice_actors[0];

      let poster = {
        id: targetCharacter.person.mal_id,
        name: targetCharacter.person.name,
        img: targetCharacter.person.images.jpg.image_url,
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

export function peopleCharacterPoster(voices: Voice[]) {
  const characters = voices.map((character) => {
    return {
      id: character.anime.mal_id,
      img: character.character.images.jpg.image_url,
      name: character.character.name,
    };
  });

  const charactersPoster = characters
    .reduce((acc, currentItem) => {
      const isNameUnique = !acc.some(
        (item: Poster) => item.name === currentItem.name
      );

      if (isNameUnique) {
        acc.push(currentItem);
      }

      return acc;
    }, [] as Poster[])
    .slice(0, 10);

  return charactersPoster;
}
