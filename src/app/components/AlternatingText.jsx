export default function AlternatingText({ data = {}, index }) {
  return (
    <div
      className={`max-w-[75%] py-20 flex flex-col mx-auto ${
        index % 2 === 0 ? "text-left" : "text-right"
      }`}
    >
      <h3 className="uppercase pb-2">{data.heading}</h3>
      <p>{data.body}</p>
    </div>
  );
}
