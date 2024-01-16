interface CharacterImage {
  image_url: string;
}

export interface Character {
  mal_id: number;
  url: string;
  images: {
    jpg: CharacterImage;
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
}

interface VoiceActor {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  language: string;
}

export interface DataItem {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}

export interface ApiResponseCharacter {
  data: DataItem[];
}

interface CharacterOne extends Character {
  name_kanji: string;
  nicknames: [];
  favorites: number;
  about: string;
}

export interface CharacterResponse {
  data: CharacterOne;
}
