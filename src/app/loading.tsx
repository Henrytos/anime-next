import { Container } from "@/components/constainer";
import Image from "next/image";

export default function Loading() {
  return (
    <Container>
      <div className="flex h-full justify-center items-center">
        <Image
          src="/imgs/loading.gif"
          alt="loading"
          width={500}
          height={500}
          className=" max-w-60 object-cover max-h-60"
        />
      </div>
    </Container>
  );
}
