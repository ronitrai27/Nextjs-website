// app/page.tsx
"use client";
import React from "react";
import HeroPage from "@/pages/HeroPage";
import FeatureSection from "@/pages/FeatureSection";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
// import { AuroraText } from "@/components/magicui/aurora-text";
import ColorShowcase from "@/components/ColorShowcase";
export default function Home() {
  return (
    <div>
      <HeroPage />
      {/* heading */}
      <div className="flex items-center justify-center w-full mt-20 pb-10 bg-gradient-to-b from-white via-white to-blue-100">
        <h1 className="font-inter text-[1.6rem] sm:text-[2.2rem] md:text-[3rem] text-center capitalize tracking-tighter font-medium ">
          <span className="uppercase gradient-text text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] font-bold">
            Seamless
          </span>{" "}
          Booking <br />
          <PointerHighlight>
            transparency{" "}
            <span className=" uppercase text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] gradient-text font-bold">
              everywhere
            </span>
          </PointerHighlight>
        </h1>
      </div>
      <FeatureSection />
      <ColorShowcase />
    </div>
  );
}
