"use client";
import { BriefcaseBusiness, MessageSquareShare } from "lucide-react";
import { useEffect, useState } from "react";
import cn from "classnames";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/30 backdrop-blur-md shadow-md py-4 px-10"
          : "bg-white py-3 px-4"
      )}
    >
      <div className="flex items-center justify-between transition-all duration-300">
        {/* -------------logo------------ */}
        <div>
          <h1
            className={cn(
              "text-near-black tracking-tight font-roboto font-medium transition-all",
              isScrolled ? "text-[24px]" : "sm:text-[24px] md:text-[28px]"
            )}
          >
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
          {/* CALL TO ACTION BUTTONS */}
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
    </div>
  );
}
