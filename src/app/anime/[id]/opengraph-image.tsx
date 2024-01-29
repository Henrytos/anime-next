import { fetchAnime } from "@/services/fetch";
import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

export const runtime = "edge";

export const alt = "";

export const size = {
  width: 300,
  height: 435,
};

export const contentType = "image/png";

interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export default async function Image({ params }: DetaislAnimeProps) {
  const anime = await fetchAnime(+params.id);

  const animeImageURL = new URL(anime.images.jpg.large_image_url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={animeImageURL} alt="" style={{ width: "100%" }} />
      </div>
    ),
    {
      ...size,
    }
  );
}
