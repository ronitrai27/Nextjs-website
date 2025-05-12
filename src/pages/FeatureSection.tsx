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
        src="/weshare.jpeg"
      />
      {/* FLOATING ICONS */}
      <div className=" gradient-primary p-2 rounded-full w-fit text-cool-gray absolute top-12 left-1/2 transform -translate-x-1/2 float-3d">
        <h1 className="flex items-center gap-2 font-inter font-medium text-[18px] z-50">
          <LuBadgeCheck className="text-[16px] md:text-[24px] text-near-black fill-cool-gray" />{" "}
          Experience Unmatched Transparency
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className=" absolute top-[35%] left-[70%] float-3d shadow-button rounded-lg  cursor-pointer">
        <div className=" p-1 text-cool-gray gradient-primary flex items-center gap-2 max-w-[20rem] rounded-lg">
          <Image
            src="/img4.png"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex flex-col gap-1 font-roboto text-[15px] font-light tracking-tight">
            <h1 className="text-center">
              Real-Time Tracking for Peace of Mind
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING ICONS */}
      <div className=" gradient-accent p-2 rounded-full w-fit text-white absolute bottom-36 left-[60%]  float-3d">
        <h1 className="flex items-center gap-2 font-inter font-medium text-[18px] z-50">
          <AiOutlineThunderbolt className="text-[16px] md:text-[24px]" />{" "}
          Instant Booking Made Easy
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className=" absolute top-[26%] left-[10%] float-3d shadow-button rounded-lg  cursor-pointer">
        <div className=" p-1 text-white gradient-accent flex items-center gap-2 max-w-[20rem] rounded-lg">
          <Image
            src="/img5.png"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex flex-col gap-1 font-roboto text-[15px] font-light tracking-tight">
            <h1 className="text-center">Earn Rewards with Every Booking</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING ICONS */}
      <div className=" gradient-accent p-2 rounded-full w-fit text-white absolute top-[60%] left-[16%]  float-3d">
        <h1 className="flex items-center gap-2 font-inter font-medium text-[18px] z-50">
          <AiOutlineThunderbolt className="text-[16px] md:text-[24px]" />{" "}
          Instant Booking Made Easy
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className=" absolute top-[74%] left-[19%] float-3d  shadow-button rounded-lg  cursor-pointer">
        <div className=" p-1 text-near-black bg-cool-gray flex items-center gap-2 max-w-[20rem] ">
          <Image
            src="/img5.png"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex flex-col gap-1 font-roboto text-[15px] font-light tracking-tight">
            <h1 className="text-center">
              Real-Time Tracking for Peace of Mind
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
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
