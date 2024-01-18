// Arquivo types.ts

interface imgUrls {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Animeimg {
  jpg: imgUrls;
  webp: imgUrls;
}

export interface ApiResponseAnimePicture {
  data: Animeimg[];
}
