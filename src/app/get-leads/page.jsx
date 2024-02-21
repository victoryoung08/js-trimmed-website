import AlternatingText from "../components/AlternatingText";
import FeatureRow from "../components/FeatureRow";

const featureSections = [
  {
    heading: "solution 1",
    body: "benefits to solution 1",
  },
  {
    heading: "solution 2",
    body: "benefits to solution 2",
  },
  {
    heading: "solution 3",
    body: "benefits to solution 3",
  },
];

const roadmap = [
  {
    heading: "Get in front of customers",
    body: " Most people haven't heard of you. We leverage social media with some damn good content to get you in front of them.",
  },
  {
    heading: "Become a no-brainer",
    body: "Position your business to be the saviour for your customers. Be the solution to end their pain and problems.",
  },
  {
    heading: "Capture Leads not Like",
    body: "Likes are great, but we prefer booked appointments and dollar signs. We focus all our efforts on revenue and build you a landing page that brings in more leads, inquiries and messages.",
  },
];

export default function GetLeads() {
  return (
    <main className="section-x-padding relative z-10">
      <section className="py-36 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase">More qualified leads</h1>
          <p>
            Reach new audiences with social media.
            <br />
            Position your business as the ONLY solution for them.
            <br />
            And deliver the final blow with a high converting landing page
          </p>
        </div>
        <div>
          <button className="button large uppercase">Are we a good fit?</button>
        </div>
      </section>
      {/* logos */}
      {/* objections */}
      <section className="py-28">
        <div className="text-center flex flex-col gap-4">
          <h2 className="uppercase">
            It&apos;s more than a professional high quality 4k video
          </h2>
          <p>
            Are you stumped as to why your cinematic video done by a
            videographer doesn&apos;t bring in customers? It&apos;s more than just a
            video. <br />
            We position your business as the go-to solution so the people who
            find you have no reason NOT to do business with you
          </p>
        </div>
      </section>
      {/* Solution Benefits */}
      {featureSections.map((feature, index) => (
        <FeatureRow data={feature} index={index} key={index} />
      ))}

      {/* 3 prong approach */}
      <section className="max-w-[75%] mx-auto flex flex-col">
        {roadmap.map((road, index) => (
          <AlternatingText data={road} index={index} key={index} />
        ))}
      </section>
    </main>
  );
}
