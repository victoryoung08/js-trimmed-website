"use client";
import Image from "next/image";
// import { generateLogoIds } from "../utils/contentful";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function LogoGrid({ data }) {
  const scrollVariants = {
    animate: {
      x: [0, -1000], // Adjust the x value to fit the total width of your logos
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, // Adjust duration for speed control
          ease: "linear",
        },
      },
    },
  };
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
          speed: 1,
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
      {/* </motion.div> */}
    </Splide>
  );
}
