// Arquivo types.ts

interface ImageUrls {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface AnimeImage {
  jpg: ImageUrls;
  webp: ImageUrls;
}

export interface ApiResponseAnimePicture {
  data: AnimeImage[];
}
