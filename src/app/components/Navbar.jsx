"use client";
import { Home, Menu } from "react-feather";

export default function Navbar() {
  const handleScrollClick = () => {
    document
      .getElementById("contactForm")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex gap-2 fixed bottom-[64px] left-1/2 translate-x-[-50%] z-50 bg-black p-2 rounded-xl">
      <div className="p-2 border-gray rounded-[12px] border-[1px] w-16 flex justify-center items-center">
        <Menu strokeWidth={1} color={`white`} />
      </div>
      <div className="p-2 border-gray rounded-[12px] border-[1px] w-fit flex justify-center items-center">
        <Home strokeWidth={1} color={`white`} />
      </div>
      <button
        className="uppercase whitespace-nowrap"
        onClick={handleScrollClick}
      >
        Get More Leads
      </button>
    </div>
  );
}
