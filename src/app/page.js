import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
// import VideoGrid from "./components/VideoGrid/VideoGrid";
import {
  getFields,
  getLogos,
  getCaseStudiesContent,
  generateLogoIds,
} from "./utils/contentful";
import ServiceGrid from "./components/ServiceGrid";
import Timeline from "./components/Timeline";
import ContactForm from "./components/ContactForm";
import Head from "next/head";
import LogoGrid from "./components/LogoGrid";
import HeroSection from "./components/HeroSection";

export default async function Home() {
  // const logos = await getLogos();
  const caseStudies = await getCaseStudiesContent();
  const logos = await generateLogoIds();
  return (
    <main className=" relative z-20">
      <Head>
        <title>
          Fill up your business with leads| Digital Marketing and Social Media
          Marketing | Trimmed Marketing
        </title>
        <meta
          name="description"
          content="Want more qualified leads? Sick of low views and visibility on social media? We focus on leads - not just likes."
          key="desc"
        />
      </Head>
      <section className="flex flex-col items-center py-24 gap-12 h-fit section-x-padding">
        <HeroSection />
      </section>

      {/* LOGO GRID */}
      <LogoGrid data={logos} />
      {/* mission statement */}
      <section className="section-y-padding section-x-padding lg:px-96">
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
            <span>We do exactly this.</span>
          </p>
        </div>
      </section>
      {/* how it works */}
      <Timeline />
      {/* <VideoGrid /> */}
      {/* services */}
      {/* <ServiceGrid /> */}
      {/* case study */}
      <section className="section-y-padding flex flex-col gap-8 section-x-padding">
        {caseStudies.map((cs, index) =>
          index % 2 === 0 ? (
            <FeatureCard position="left" content={cs} key={cs + index} />
          ) : (
            <FeatureCard position="right" content={cs} key={cs + index} />
          )
        )}
      </section>
      <section className="section-padding"></section>
      {/* Form */}
      <ContactForm type={"strategy"} />
    </main>
  );
}
