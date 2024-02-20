import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
// import VideoGrid from "./components/VideoGrid/VideoGrid";
import { getFields, getLogos, getCaseStudiesContent } from "./utils/contentful";
import ServiceGrid from "./components/ServiceGrid";
import Timeline from "./components/Timeline";
import ContactForm from "./components/ContactForm";

export default async function Home() {
  const logos = await getLogos();
  const caseStudies = await getCaseStudiesContent();

  return (
    <main className="section-x-padding relative z-20">
      <section className="flex flex-col items-center py-24 gap-12 h-fit">
        <div className="text-center flex flex-col gap-4 items-center ">
          <h1 className="uppercase">
            More Customers
            <br />
            you <span className="">love</span>
            to work with.
          </h1>
          <p className="">
            If only more people knew about your business. <br /> We damn good
            content to get their attention, and turn followers into customers.
          </p>
          <button className="button large">SOUNDS GOOD, LET&apos;S ROLL</button>
        </div>
        <div className="w-full h-32 bg-white"></div>
      </section>
      {/* LOGO GRID */}
      <section className="flex gap-4 overflow-hidden section-y-padding sm">
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
      <section className="section-y-padding">
        <div>
          <h2 className="uppercase">We chase leads</h2>
          <p>
            Our goal is get you in front of people who want to buy.
            <br /> Not browsers, not window shoppers... no low ballers either.
            <br />
            <br />
            <span className="font-extrabold">
              People pay to solve problems.
            </span>
            <br />
            We create content that shows you do.
            <br />
            <br />
            <span className="font-extrabold">
              And your business needs to connect with these people.
            </span>
            <br />
            Our paid ads strategy does exactly this.
          </p>
        </div>
      </section>
      {/* how it works */}
      <Timeline />
      {/* <VideoGrid /> */}
      {/* services */}
      {/* <ServiceGrid /> */}
      {/* case study */}
      <section className="section-y-padding flex flex-col gap-8">
        {caseStudies.map((cs, index) =>
          index % 2 === 0 ? (
            <FeatureCard position="left" content={cs} key={cs + index} />
          ) : (
            <FeatureCard position="right" content={cs} key={cs + index} />
          )
        )}
      </section>
      {/* Form */}
      <ContactForm type={"strategy"} />
    </main>
  );
}
