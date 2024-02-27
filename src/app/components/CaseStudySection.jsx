import { getCaseStudiesContent } from "../utils/contentful";
import FeatureCard from "./FeatureCard";
export default async function CaseStudySection() {
  const caseStudies = await getCaseStudiesContent();
  return (
    <section
      className="section-y-padding flex flex-col gap-8 section-x-padding"
      id="caseStudies"
    >
      {caseStudies.map((cs, index) =>
        index % 2 === 0 ? (
          <FeatureCard position="left" content={cs} key={cs + index} />
        ) : (
          <FeatureCard position="right" content={cs} key={cs + index} />
        )
      )}
    </section>
  );
}
