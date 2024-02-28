import Image from "next/image";
import { getAssetsByTagWithImageURL } from "../utils/contentful";
export default async function HeroImageRow() {
  const data = await getAssetsByTagWithImageURL("heroSection");

  return (
    <div className="w-full mx-auto flex h-[180px] relative gap-4 justify-center">
      {data.map((image) => (
        <div key={image.title}>
          <Image
            src={`https:${image.file.url}`}
            alt={image.title}
            width={90}
            height={160}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
