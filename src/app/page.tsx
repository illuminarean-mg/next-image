import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        height: 400,
        position: "relative",
      }}
    >
      <Image src="/sample.png" alt="sample image" fill />
    </div>
  );
}
