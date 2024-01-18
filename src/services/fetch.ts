import {
  Anime,
  ApiResponseAnime,
  ApiResponseAnimeRecommendations,
  ApiResponseAnimeTop,
} from "@/types/anime";
import { ApiResponseCharacter, CharacterOne } from "@/types/character";
import { ApiResponseAnimePicture } from "@/types/picture";
import { Api } from "./api";
import { sortCharacters, sortPictures, sortPoster } from "./sorts";
import { wait } from "./wait";

export type AnimePicture = {
  img: string;
};

export async function fetchCharacters(id: number) {
  const { data }: ApiResponseCharacter = await Api(`anime/${id}/characters`);
  const { characterVoice, charactesPoster } = sortCharacters(data);
  return { charactesPoster, characterVoice };
}

export async function fetchOneCharacter(id: number) {
  const { data } = await Api(`characters/${id}`);
  const Character: CharacterOne = data;
  return { ...Character };
}

export async function fetchAnime(id: number) {
  const { data } = await Api(`anime/${id}`);
  const anime: Anime = data;
  return anime;
}

export async function fetchTopAnimes() {
  const { data }: ApiResponseAnimeTop = await Api("top/anime");
  const animes = sortPoster(data);
  return animes;
}

export async function fetchAnimes(id: number) {
  await wait(350);
  const { data }: ApiResponseAnime = await Api(
    `anime?genres=${id}&limit=20&order_by=score&sort=desc`
  );
  const animes = sortPoster(data);
  return animes;
}

export async function fetchAnimePictures(id: number) {
  const { data }: ApiResponseAnimePicture = await Api(`anime/${id}/pictures`);
  const pictures = sortPictures(data);
  return pictures;
}

export async function fetchCharacterPictures(id: number) {
  const { data }: ApiResponseAnimePicture = await Api(
    `characters/${id}/pictures`
  );
  const pictures = sortPictures(data);
  return pictures;
}

export async function fetchAnimeRecommendations(id: number) {
  await wait(200);
  const { data }: ApiResponseAnimeRecommendations = await Api(
    `anime/${id}/recommendations`
  );
  const animes = data.map((anime) => anime.entry).slice(0, 10);
  const recommendations = sortPoster(animes);
  return recommendations;
}
