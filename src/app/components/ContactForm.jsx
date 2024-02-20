"use client";
import { handleLeads } from "@/app/actions/leads";
export default function ContactForm({ type = "default" }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleLeads(formData);
  };
  return (
    <section className="section-y-padding max-w-[80%] mx-auto md:max-w-[450px]">
      {type === "strategy" && (
        <div className="flex flex-col items-center justify-center gap-4 py-12">
          <h2 className="uppercase">Book a FREE Strategy call</h2>
          <ul className="list-disc flex flex-col gap-1">
            <li>We'll review your lead generation strategy</li>
            <li>We'll identify the gaps in your current strategy</li>
            <li>
              We'll give you a plan to fix it (and see if we're a good fit)
            </li>
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-xl uppercase">Name</label>
          <input
            placeholder="Enter your first name"
            type="text"
            name="name"
            className="h-12 rounded-xl w-full text-black p-4"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-xl uppercase">Email</label>
          <input
            name="email"
            placeholder="Enter your best email"
            type="email"
            className="h-12 rounded-xl w-full text-black p-4"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <label className="text-xl uppercase">Phone</label>
          <input
            placeholder="Enter your phone number"
            name="phone"
            type="phone"
            className="h-12 rounded-xl w-full text-black p-4"
          />
        </div>
        <button className="button large mt-4">Get a FREE Strategy Call</button>
        {type === "strategy" && (
          <p className="text-gray text-center mt-[-10px]">Worth $799</p>
        )}
      </form>
    </section>
  );
}
