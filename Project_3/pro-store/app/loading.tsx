import Image from "next/image";

export default function loading() {
  return (
    <div className="w-screen h-screen flex-center">
      <Image
        src="/loading/loader.gif"
        height={150}
        width={150}
        alt="Loading..."
      />
    </div>
  );
}
