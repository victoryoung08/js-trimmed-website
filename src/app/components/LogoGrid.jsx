"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function LogoGrid({ data }) {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "8rem",
        pagination: false,
        arrows: false,
        perPage: 4,
        autoWidth: true,
        autoScroll: {
          speed: 1.25,
        },
      }}
      extensions={{ AutoScroll }}
      className="flex overflow-hidden"
    >
      {data.map((logo, index) => (
        <SplideSlide className="flex justify-center items-center" key={""}>
          <Image
            src={logo}
            height={80}
            width={120}
            key={index}
            style={{ objectFit: "contain" }}
            alt={index}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
