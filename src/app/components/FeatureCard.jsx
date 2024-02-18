export default function FeatureCard({ content, position }) {
  const cs = content;
  return (
    <>
      <div className="flex flex-col max-w-[80%] h-fit mx-auto gap-8 pb-8 border-white border-[0.5px] overflow-hidden rounded-[32px]  md:flex-row md:w-full md:max-w-full md:h-[300px]">
        <div className="flex items-center justify-center">
          <img
            className="w-full"
            src="https://via.placeholder.com/300"
            alt="placeholder"
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center w-fit px-4  gap-2 text-center ${
            position === "left" ? "md:order-last" : null
          }`}
        >
          <h2 className="uppercase">{cs.name}</h2>
          <p className="">{cs.resultsSnippet}</p>
        </div>
      </div>
    </>
  );
}
