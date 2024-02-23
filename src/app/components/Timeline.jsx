const roadmap = [
  {
    title: "Get Started",
    description: "Book a call or get straight into our process.",
  },
  {
    title: "Built to sell",
    description:
      "Laser in on your customer and create an offer so good they can't say no",
  },
  {
    title: "Content that hits",
    description:
      "Begin to develop and shoot content that positions your business as #1 in your industry.",
  },
  {
    title: "Get in front of them",
    description:
      "We'll implement our paid ads process to get qualified leads coming in",
  },
];

export default function Timeline() {
  return (
    <section className="section-y-padding max-w-[600px] mx-auto section-x-padding">
      <div className="relative w-full h-[600px] flex flex-col items-center justify-evenly">
        <div
          id="midline"
          className="absolute border-white border-[0.5px] h-full top-1/2 left-1/2 translate-x-[50%] translate-y-[-50%]"
        >
          {" "}
          <div className="relative h-full">
            <div className="border-[0.5px] border-white rounded-[50%] w-[16px] h-[16px] absolute top-[-1px] left-[-8px] bg-black"></div>
            <div className="border-[0.5px] border-white rounded-[50%] w-[16px] h-[16px] absolute top-[25%] left-[-8px] bg-black"></div>
            <div className="border-[0.5px] border-white rounded-[50%] w-[16px] h-[16px] absolute top-[50%] left-[-8px] bg-black"></div>
            <div className="border-[0.5px] border-white rounded-[50%] w-[16px] h-[16px] absolute top-[75%] left-[-8px] bg-black"></div>
          </div>
        </div>
        {roadmap.map((step, index) => (
          <div
            className={`h-[100%] w-full flex flex-col justify-center ${
              index % 2 === 0 ? "items-start text-left" : "items-end text-right"
            }`}
            key={step + index}
          >
            <div className="w-[45%]">
              <h4 className="uppercase">{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
