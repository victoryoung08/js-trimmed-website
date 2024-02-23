"use client";
import { Home } from "react-feather";

export default function Navbar() {
  return (
    <div className="flex gap-2 fixed bottom-[64px] left-1/2 translate-x-[-50%] z-50 bg-black p-2 rounded-xl">
      <div className="p-2 border-gray rounded-[30%] border-[1px] w-fit">
        <Home strokeWidth={1} width={24} height={24} color={`white`} />
      </div>
      <button className="uppercase">Get More Leads</button>
    </div>
  );
}
