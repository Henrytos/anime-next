interface imgUrls {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Trailerimgs {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Trailerimgs;
}

interface Title {
  type: string;
  title: string;
}

interface Aired {
  from: string;
  to: string | null;
  prop: {
    from: { day: number; month: number; year: number };
    to: { day: number | null; month: number | null; year: number | null };
  };
  string: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface ApiResponseAnime {
  data: Anime[];
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: imgUrls;
    webp: imgUrls;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Producer[];
  licensors: any[]; // Você pode querer criar uma interface para os licenciadores se disponível
  studios: Producer[];
  genres: Producer[];
  explicit_genres: any[]; // Você pode querer criar uma interface para os gêneros explícitos se disponível
  themes: any[]; // Você pode querer criar uma interface para os temas se disponível
  demographics: Producer[];
}

export interface ApiResponseAnimeTop {
  data: Anime[];
}

export interface ApiResponseMangaTop extends ApiResponseAnimeTop {}

interface AnimeRecommendations {
  entry: Anime;
  url: string;
}
export interface ApiResponseAnimeRecommendations {
  data: AnimeRecommendations[];
}

export interface Manga extends Anime {}
