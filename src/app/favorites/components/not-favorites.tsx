import { SubTitle } from "@/components/sub-title";
import Image from "next/image";

export function NotFavorites() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <SubTitle>no favorites</SubTitle>
      <Image
        src="/imgs/not.gif"
        alt="anya chorando"
        width={400}
        height={400}
        className="max-w-60 object-cover"
      />
    </div>
  );
}
