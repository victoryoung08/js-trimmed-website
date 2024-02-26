"use client";
import { Home } from "react-feather";

export default function Navbar() {
  return (
    <div className="flex gap-2 fixed bottom-[64px] left-1/2 translate-x-[-50%] z-50 bg-black p-2 rounded-xl">
      <div className="p-2 border-gray rounded-[12px] border-[1px] w-fit flex justify-center items-center">
        <Home strokeWidth={1} color={`white`} />
      </div>
      <button className="uppercase whitespace-nowrap">Get More Leads</button>
    </div>
  );
}
