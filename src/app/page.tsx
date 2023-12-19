import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: 400,
      }}
    >
      <Image
        style={{
          objectFit: "contain",
        }}
        src="/sample.png"
        alt="sample image"
        fill
      />
    </div>
  );
}
