import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
// import VideoGrid from "./components/VideoGrid/VideoGrid";
import { getFields, getLogos, getCaseStudiesContent } from "./utils/contentful";

export default async function Home() {
  const logos = await getLogos();
  const caseStudies = await getCaseStudiesContent();
  return (
    <main className="px-2 sm:px-12 md:px-48">
      <section className="flex flex-col items-center py-24 gap-12 h-fit">
        <div className="text-center ">
          <h1 className="uppercase">
            More Customers
            <br />
            you love to work with.
          </h1>
          <p className="">
            If only more people knew about your business. <br /> We damn good
            content to get their attention, and turn followers into customers.
          </p>
          <button>SOUNDS GOOD, LET&apos;S ROLL</button>
        </div>
        <div className="w-full h-48 max-w-[80%] bg-white rounded-xl"></div>
      </section>
      {/* LOGO GRID */}
      <section className="flex gap-4 overflow-hidden">
        <div className="border-white border-[0.5px] w-fit h-16 rounded-[32px]">
          <img src="" alt="" className="w-32" />
        </div>
        <div className="border-white border-[0.5px] w-fit h-16 rounded-[32px]">
          <img src="" alt="" className="w-64" />
        </div>
        <div className="border-white border-[0.5px] w-fit h-16 rounded-[32px]">
          <img src="" alt="" className="w-32" />
        </div>
      </section>
      {/* mission statement */}
      {/* feature row */}
      {/* <VideoGrid /> */}
      {/* case study */}
      <section>
        {caseStudies.map((cs, index) =>
          index % 2 === 0 ? (
            <FeatureCard position="left" content={cs} key={cs + index} />
          ) : (
            <FeatureCard position="right" content={cs} key={cs + index} />
          )
        )}
      </section>
    </main>
  );
}
