export default function ContactForm() {
  return (
    <section className="section-y-padding max-w-[80%] mx-auto md:max-w-[450px]">
      <form action="" className="flex flex-col gap-4">
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-xl uppercase">Name</label>
          <input
            placeholder="Enter your first name"
            type="text"
            className="h-12 rounded-xl w-full text-black p-4"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-xl uppercase">Email</label>
          <input
            placeholder="Enter your best email"
            type="email"
            className="h-12 rounded-xl w-full text-black p-4"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-xl uppercase">Phone</label>
          <input
            placeholder="Enter your phone number"
            type="phone"
            className="h-12 rounded-xl w-full text-black p-4"
          />
        </div>
        <button className="button large mt-4">Get a FREE Strategy Call</button>
      </form>
    </section>
  );
}
