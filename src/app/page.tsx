import Image from "next/image";
import sampleImage from "../../public/sample.png";

export default function Home() {
  return (
    <Image src={sampleImage} alt="sample image" fill objectFit="contain" />
  );
}
