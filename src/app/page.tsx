// app/page.tsx
"use client";
import React from "react";
import HeroPage from "@/pages/HeroPage";
import FeatureSection from "@/pages/FeatureSection";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ImageSection from "@/components/ImageSection";
import { LuFocus, LuScanEye } from "react-icons/lu";
// import { AuroraText } from "@/components/magicui/aurora-text";
// import ColorShowcase from "@/components/ColorShowcase";
export default function Home() {
  return (
    <div>
      <HeroPage />
      {/* -----heading---- */}
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
      {/* ----HEADING------ */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between w-full px-10 mt-20 gap-10">
        {/* ----- Left Side: Heading ----- */}
        <h1 className="self-start min-w-[40rem] max-w-[40rem] font-inter text-[22px] leading-snug text-gray-800">
          <span className="text-[48px] font-bold text-primary-blue">We</span>{" "}
          the people at{" "}
          <span className="text-[42px] font-semibold text-black">ZipServe</span>
          ,
          <br />
          <span className="text-gray-700">
            believe in <strong className="text-black">empowering lives</strong>{" "}
            and transforming India’s on-demand home services.
            <br />
            We’re building a more{" "}
            <strong className="text-black">
              connected, efficient, and dignified
            </strong>{" "}
            service ecosystem for all.
          </span>
        </h1>

        {/* ----- Right Side: Mission & Vision ----- */}
        <div className="flex flex-col gap-8 text-end max-w-[35rem] self-end">
          {/* Mission */}
          <div className="">
            <h2 className="uppercase font-semibold text-[18px] text-accent-gold flex items-center gap-2 justify-end tracking-wide mb-2">
              <LuFocus className="text-accent-gold" /> Mission
            </h2>
            <p className="font-light text-[15px] text-gray-600 leading-relaxed tracking-tight">
              To empower every Indian household with reliable, transparent, and
              instant access to trusted home service professionals through
              technology-driven solutions, seamless communication, and
              reward-based engagement. We aim to simplify the booking experience
              while building trust, convenience, and long-term value for our
              users and service providers alike.
            </p>
          </div>

          {/* Vision */}
          <div className="">
            <h2 className="uppercase font-semibold text-[18px] text-accent-gold flex items-center gap-2 justify-end tracking-wide mb-2">
              <LuScanEye className="text-accent-gold" /> Vision
            </h2>
            <p className="font-light text-[15px] text-gray-600 leading-relaxed tracking-tight">
              To become India’s most trusted and efficient platform for home
              services — redefining how people connect, communicate, and
              collaborate for everyday help, and leading a movement towards a
              more transparent and empowered service economy.
            </p>
          </div>
        </div>
      </div>

      <ImageSection />
      {/* <ColorShowcase /> */}
    </div>
  );
}
