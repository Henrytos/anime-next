interface Characterimg {
  image_url: string;
}

export interface Character {
  mal_id: number;
  url: string;
  images: {
    jpg: Characterimg;
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

export interface CharacterOne extends Character {
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

export interface CharacterResponse {
  data: CharacterOne;
}

export interface People extends Character {
  alternate_names: string[];
  favorites: number;
  about: string;
  voices: Voice[];
}

export interface Voice {
  role: string;
  character: Character;
  anime: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
}
