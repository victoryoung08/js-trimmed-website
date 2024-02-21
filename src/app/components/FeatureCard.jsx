import { getAssetsInfo, getHeroImage } from "@/app/utils/contentful";
import Image from "next/image";

export default async function FeatureCard({ content, position }) {
  const cs = content;
  const assets = await getAssetsInfo();

  const ids = cs.heroImage?.sys.id;
  const imageUrl = await getHeroImage(ids);

  return (
    <>
      <div className="flex flex-col max-w-[80%] h-fit mx-auto mb-8 border-white border-[0.5px] overflow-hidden rounded-[32px] md:flex-row md:w-full md:max-w-full md:h-[300px] md:items-center md:justify-center">
        <div className="flex items-center justify-center h-[50%] md:h-[300px] md:w-[50%]">
          <Image
            src={imageUrl}
            width={500}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center w-full px-4 py-12 gap-2 text-center h-full  ${
            position === "left" ? "md:order-last" : null
          }`}
        >
          <h2 className="uppercase text-center">{cs.name}</h2>
          <p className="">{cs.resultsSnippet}</p>
        </div>
      </div>
    </>
  );
}
