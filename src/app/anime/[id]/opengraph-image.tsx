import { fetchAnime } from "@/services/fetch";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "";
export const size = {
  width: 400,
  height: 630,
};

export const contentType = "image/jpg";

interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export default async function Image({ params }: DetaislAnimeProps) {
  const animeId = +params.id;
  const anime = await fetchAnime(animeId);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: `#232323`,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
