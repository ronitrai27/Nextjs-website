// components/FeatureSection.tsx
import React from "react";
import { Ripple } from "@/components/magicui/ripple";
// import { PulsatingButton } from "@/components/magicui/pulsating-button";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { FiDownload } from "react-icons/fi";
import {
  LuSquareCheckBig,
  // LuStar,
  LuBadgeCheck,
  // LuBrainCircuit,
} from "react-icons/lu";
// import { PiCoins } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Image from "next/image";

function FeatureSection() {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-100 to-white">
      <Ripple />
      <Iphone15Pro
        className="size-[40%] md:size-[50%]  absolute top-50 left-1/2 transform -translate-x-1/2"
        src="/imgnewss.png"
      />
      {/* FLOATING ICONS */}
      <div className=" gradient-primary p-2 rounded-full w-fit text-cool-gray absolute top-12 left-1/2 transform -translate-x-1/2 float-4d">
        <h1 className="flex items-center gap-2 font-inter font-medium text-[18px] z-50 tracking-tight">
          <LuBadgeCheck className="text-[16px] md:text-[24px] text-near-black fill-cool-gray" />{" "}
          Experience Unmatched Transparency
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className=" absolute top-[35%] left-[68%] float-4d shadow-button rounded-lg  cursor-pointer">
        <div className=" p-2 text-cool-gray gradient-primary flex  gap-2 min-w-[20rem] max-w-[25rem] rounded-lg">
          <Image
            src="/img4.png"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-32 h-32 object-cover rounded-md scale-125"
          />
          <div className="flex flex-col gap-1 font-roboto text-[15px] bg-cool-gray text-near-black rounded-md p-2 justify-center">
            <h1 className="flex items-center gap-1 justify-center font-medium tracking-wide">
              <LuSquareCheckBig className="text-[18px]" /> Live Tracking
            </h1>
            <p className="text-center tracking-tight font-light font-inter">
              Real time precise tracking for peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING ICONS */}
      <div className=" gradient-primary p-2 rounded-full w-fit text-white absolute bottom-36 left-[60%]  float-4d">
        <h1 className="flex items-center gap-2 font-inter font-medium text-[18px] z-50">
          <AiOutlineThunderbolt className="text-[16px] md:text-[24px]" />{" "}
          Instant Booking Made Easy
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className=" absolute top-[22%] left-[6%] float-3d shadow-button rounded-lg  cursor-pointer">
        <div className=" p-2 text-white gradient-primary flex  gap-5 min-w-[20rem] max-w-[25rem] rounded-lg">
          <div className="flex flex-col gap-1 font-roboto text-[15px] bg-cool-gray text-near-black rounded-md p-2 justify-center">
            <h1 className="flex items-center gap-1 justify-center font-medium tracking-wide">
              <LuSquareCheckBig className="text-[18px]" /> Live Tracking
            </h1>
            <p className="text-center tracking-tight font-light font-inter">
              Real time precise tracking for peace of mind.
            </p>
          </div>
          <Image
            src="/img5.png"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-32 h-32 object-cover rounded-md scale-125"
          />
        </div>
      </div>

      {/* FLOATING ICONS */}
      <div className=" gradient-primary p-2 rounded-full w-fit text-white absolute top-[54%] left-[12%]  float-4d">
        <h1 className="flex items-center gap-2 font-inter font-medium text-[18px] z-50">
          <AiOutlineThunderbolt className="text-[16px] md:text-[24px]" />{" "}
          Instant Booking Made Easy
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className=" absolute top-[70%] left-[10%] float-4d shadow-button rounded-lg  cursor-pointer">
        <div className=" p-2 text-white gradient-primary flex  gap-5 min-w-[20rem] max-w-[25rem] rounded-lg">
          <div className="flex flex-col gap-1 font-roboto text-[15px] bg-cool-gray text-near-black rounded-md p-2 justify-center">
            <h1 className="flex items-center gap-1 justify-center font-medium tracking-wide">
              <LuSquareCheckBig className="text-[18px]" /> Live Tracking
            </h1>
            <p className="text-center tracking-tight font-light font-inter">
              Real time precise tracking for peace of mind.
            </p>
          </div>
          <Image
            src="/img5.png"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-32 h-32 object-cover rounded-md scale-125"
          />
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="absolute top-[16%] left-1/2 transform -translate-x-1/2 text-center">
        <h1 className=" capitalize font-inter font-bold text-[18px] tracking-tight text-near-black flex items-center gap-2">
          <LuSquareCheckBig className="text-[24px]" /> Download our mobile App
        </h1>
        <button className="flex items-center gap-2 px-2 py-1 rounded-full bg-primary-blue text-cool-gray mx-auto mt-2 tracking-tighter">
          <FiDownload /> Download
        </button>
      </div>
    </section>
  );
}

export default FeatureSection;
