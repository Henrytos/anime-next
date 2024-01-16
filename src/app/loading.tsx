import { Container } from "@/components/constainer";
import Image from "next/image";

export default function Loading() {
  return (
    <Container>
      <Image
        src="/imgs/loading.gif"
        alt="loading"
        width={500}
        height={500}
        className="m-auto max-w-60 object-cover max-h-60"
      />
    </Container>
  );
}
