export default function CardwithTag() {
  return (
    <section className="section-y-padding flex flex-col gap-24">
      <h2 className="uppercase">Services</h2>

      <div className="flex flex-col items-center justify-center border-white border-[0.5px] relative max-w-[80%] h-full max-h-[180px] min-h-[180px] rounded-[32px] w-fit">
        <div className="h-12 w-fit px-4 py-8 rounded-[24px] bg-primary flex items-center justify-center absolute top-[-1.5rem]">
          <h3 className="uppercase ">GET LEADS</h3>
        </div>
        <ul className="flex flex-col items-center justify-center p-4 h-full">
          <li>Social Content that Converts</li>
          <li>Get in front of customers with Paid Ads </li>
          <li>Followers to Leads with Landing Pages</li>
        </ul>
      </div>
    </section>
  );
}
