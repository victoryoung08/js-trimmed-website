export default function FeatureRow({ data = {}, index }) {
  return (
    <>
      {data && (
        <section className="py-12">
          <div className="flex">
            <div
              className={`w-full flex flex-col items-center justify-center ${
                index % 2 === 0 ? "order-0" : "order-1"
              }`}
            >
              <h3>{data.heading}</h3>
              <p>{data.body}</p>
            </div>
            <div className="w-full h-[300px] bg-white"></div>
          </div>
        </section>
      )}
    </>
  );
}
