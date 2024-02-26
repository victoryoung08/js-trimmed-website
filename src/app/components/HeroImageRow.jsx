"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function HeroImageRow() {
  const heroImages = [
    {
      name: "Strong Living EP",
      src: "/strongLiving.png",
    },
    {
      name: "Hands Physio",
      src: "/handsPhysio.png",
    },
    {
      name: "Blossom68 Cafe",
      src: "/blossom.png",
    },
    {
      name: "On The Chair Productions",
      src: "/otc.png",
    },
    {
      name: "Pic Up Media",
      src: "/picup.png",
    },

    {
      name: "HyAVu Advisory",
      src: "/accounting.png",
    },
    {
      name: "Mancave Barbershop Australia",
      src: "/barbershop.png",
    },
  ];
  return (
    <Splide
      className="flex gap-1 w-full py-8"
      options={{
        padding: "",
        gap: "12px",
        perPage: `${Number(heroImages.length)}`,
        arrows: false,
      }}
    >
      {heroImages.map((hero) => (
        <SplideSlide key={hero.name}>
          <Image src={hero.src} alt={hero.name} width={80} height={150} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
