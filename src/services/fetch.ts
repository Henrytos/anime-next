import { Poster } from "@/components/carousel-poster";
import { ApiResponseAnime, ApiResponseAnimeTop } from "@/types/anime";
import {
  ApiResponseCharacter,
  Character,
  CharacterResponse,
  DataItem,
} from "@/types/character";
import { ApiResponseAnimePicture } from "@/types/picture";

export type AnimePicture = {
  img: string;
};

export async function fetchCharacters(id: number) {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    if (!res.ok) {
      throw new Error(`Error fetching characters for anime ${id}`);
    }
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
  } catch (error) {
    console.log(error);
    return { charactesPoster: [], characterVoice: [] };
  }
}

export async function fetchOneCharacter(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}`);
  if (!res.ok) {
    throw new Error(`Error fetching characters for anime ${id}`);
  }
  const { data }: CharacterResponse = await res.json();
  const character = {
    ...data,
  };
  return character;
}

export async function fetchAnime(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  if (!res.ok) {
    throw new Error(`Error fetching characters for anime ${id}`);
  }
  const { data }: ApiResponseAnime = await res.json();

  return data;
}

export async function fetchTopAnimes() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  if (!res.ok) {
    throw new Error(`Error fetching characters for anime `);
  }
  const { data }: ApiResponseAnimeTop = await res.json();
  const animes = data.slice(0, 9).reduce((animesPosters, anime) => {
    let animePoster = {
      id: anime.mal_id,
      name: anime.title,
      img: anime.images.jpg.large_image_url,
    };
    animesPosters.push(animePoster);
    return animesPosters;
  }, [] as Poster[]);

  return animes;
}

export async function fetchAnimes(id: number) {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?genres=${id}&limit=10&order_by=score&sort=desc`
    );
    if (!res.ok) {
      console.log(res);
      throw new Error(`Error fetching characters for anime ${id}`);
    }
    const { data }: ApiResponseAnimeTop = await res.json();
    const animes = data.reduce((animesPosters, anime) => {
      let animePoster = {
        id: anime.mal_id,
        name: anime.title,
        img: anime.images.jpg.large_image_url,
      };
      animesPosters.push(animePoster);
      return animesPosters;
    }, [] as Poster[]);

    return animes;
  } catch (error) {
    console.log(error);
    return [] as Poster[];
  }
}

export async function fetchAnimePictures(id: number) {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`);
    if (!res.ok) {
      throw new Error(`Error fetching characters for anime ${id}`);
    }
    const { data }: ApiResponseAnimePicture = await res.json();

    const animePictures = data.reduce((pictures, picture) => {
      let img = {
        img: picture.jpg.large_image_url,
      };
      pictures.push(img);
      return pictures;
    }, [] as AnimePicture[]);

    return animePictures;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchCharacterPictures(id: number) {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/characters/${id}/pictures`
    );

    const { data }: ApiResponseAnimePicture = await res.json();
    const animePictures = data.reduce((pictures, picture) => {
      let img = {
        img: picture.jpg.image_url,
      };
      pictures.push(img);
      return pictures;
    }, [] as AnimePicture[]);
    return animePictures;
  } catch (error) {
    console.log(error);
    return [] as AnimePicture[];
  }
}
