import Image from "next/image";
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
import HeroImageRow from "./components/HeroImageRow";
import CaseStudySection from "./components/CaseStudySection";

export default async function Home() {
  const logos = await generateLogoIds();
  return (
    <main className=" relative z-20 pb-24">
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
      <HeroImageRow />
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
      <ServiceGrid />
      {/* how it works */}
      <Timeline />
      {/* <VideoGrid /> */}
      {/* services */}
      {/* case study */}
      <CaseStudySection />
      <section className="section-padding"></section>
      {/* Form */}
      <ContactForm type={"strategy"} />
    </main>
  );
}
