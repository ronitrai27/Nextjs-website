"use client";
import {
  BriefcaseBusiness,
  MessageSquareShare,
  //   Navigation,
} from "lucide-react";
export default function Navbar() {
  return (
    // NAVBAR
    <div className="bg-white flex items-center justify-between px-4 py-3">
      {/* -------------logo------------ */}
      <div>
        <h1 className="text-near-black tracking-tight font-roboto font-medium sm:text-[24px] md:text-[28px] shrink-0">
          Zipserve
        </h1>
      </div>

      <div className="hidden sm:flex items-center sm:gap-8 md:gap-12">
        {/* ------------BUTTONS ------------- */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-4 md:gap-8 text-near-black">
          <p className="flex items-center gap-1 font-inter tracking-tight font-light text-[12px] md:text-[15px] w-fit p-1 md:p-2 border-[.8px] border-cool-gray rounded-md shadow-inner">
            Reach us <MessageSquareShare size={16} />
          </p>
          <p className="flex items-center gap-1 font-inter tracking-tight font-light text-[12px] md:text-[15px] p-1 md:p-2 border-[.8px] border-cool-gray rounded-md shadow-inner">
            Work With Us <BriefcaseBusiness size={16} />
          </p>
        </div>
        {/* CALL TO ACTION BUTTON */}
        <div className="hidden sm:flex items-center sm:gap-2 md:gap-5">
          <button className="bg-primary-blue font-inter text-white text-[12px] md:text-[15px] rounded-md shadow-button cursor-pointer sm:px-3 sm:py-1 md:px-4 md:py-2 ">
            Book Now
          </button>
          <button className="gradient-accent font-inter text-white text-[12px] md:text-[15px] rounded-md shadow-button cursor-pointer sm:px-3 sm:py-1 md:px-4 md:py-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
