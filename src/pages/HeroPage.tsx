"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Navigation } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import Image from "next/image";
export default function HeroPage() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div
      style={{ height: "calc(100vh - 64px)" }}
      className="bg-white w-full flex items-center justify-center overflow-hidden relative"
    >
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-cool-gray/10"></div>
      {/* HERO CONTENT */}
      <div className="hero-grid bg-cool-gray/60 w-[80%] h-full mx-auto rounded-md shadow-card relative ">
        {/* small info */}
        <div className="flex items-center justify-between px-6 font-roboto tracking-wider text-gray-400 font-light pt-5">
          <p>
            <span className="text-gray-600">100%</span>transparency
          </p>
          <h1>Zipserve</h1>
        </div>
        {/* DETAILS AREA */}
        <div className="h-full">
          <div className="flex flex-col items-center justify-center -mt-28 h-full">
            <h1 className="font-inter md:text-[54px] text-4xl tracking-tighter text-near-black capitalize font-[500] leading-tight text-center animate-slide-up">
              <span className="color-cycle-bg transform-3d rounded-bl-2xl rounded-tr-2xl text-white px-2 py-1 shadow-button">
                TRANSFORMS
              </span>{" "}
              the way to connect <br />& book PROFESSIONALS online
            </h1>
            <p
              className="mt-4 font-roboto text-[18px] text-gray-600 text-center tracking-wide animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Zipserve is not a platform, it’s a movement to redefine <br />{" "}
              India’s home service marketplace
            </p>
          </div>
          <div className=" flex items-center -mt-48 justify-center gap-10 mb-10 animate-slide-up">
            <div className="flex flex-row items-center justify-center w-fit">
              <AnimatedTooltip items={people} />
            </div>
            <p className="font-light font-inter tracking-tighter capitalize">
              more than 200+ customers trust us
            </p>
          </div>
          {/* CALL TO ACTION BUTTON */}
          <div className="flex items-center justify-center mb-10 animate-slide-up">
            <button
              type="submit"
              className="group relative cursor-pointer w-44 border border-cool-gray bg-white rounded-xl overflow-hidden text-near-black font-inter font-medium shadow-button duration-300"
            >
              <span className="translate-x-4 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-500 ease-in-out inline-block  py-[8px]">
                Get Discounts !
              </span>
              <div className="flex font-inter gap-3 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <span>Book Now</span>
                <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="absolute top-[50%] left-[15%] -translate-y-1/2 h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-primary-blue scale-[1] group-hover:bg-primary-blue group-hover:scale-[1.8] transition-all duration-500 ease-out group-hover:top-[0%] group-hover:left-[0%] group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>
      </div>
      {/* FLOATING CARD */}
      <div className="hidden md:absolute md:bottom-16 md:left-6 md:block shadow-card float-3d z-20 max-w-sm transition-transform hover:scale-105 rotate-6  duration-300 ">
        <div className=" bg-white p-1 rounded-md border border-cool-gray flex gap-2">
          <Image
            src="/pixelcut-export (6).jpg"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-36 h-36 object-cover rounded-md"
          />
          <div className="flex flex-col items-center gap-3 bg-cool-gray rounded-lg p-2 justify-center">
            <h1 className="flex items-center gap-2 font-inter font-medium tracking-tighter text-near-black text-[15px]">
              Trusted Professionals <LuBadgeCheck size={16} />
            </h1>
            <p className="text-center text-[12px] font-roboto text-near-black tracking-tight font-light">
              Each worker needs to pass the verification and background check to
              ensure safety and reliability.
            </p>
          </div>
        </div>
      </div>
      {/* FLOATING CARD */}
      <div className="hidden md:absolute md:bottom-64 md:left-24 md:block bg-primary-blue p-1 rounded-md border border-cool-gray shadow-card float-3d z-20 max-w-sm transition-transform hover:scale-105 rotate-12  ">
        <h1 className="font-roboto tracking-tighter text-cool-gray font-light">
          Experience Unmatched Transparency
        </h1>
      </div>
      {/* FLOATING CARD */}
      <div className="hidden md:absolute md:bottom-[20rem] md:right-40 md:block gradient-accent p-1 rounded-md border border-cool-gray shadow-card float-3d z-20 max-w-sm transition-transform hover:scale-105 -rotate-12 ">
        <h1 className="font-roboto tracking-tighter text-white font-light">
          Redefining Home Services in India
        </h1>
      </div>
      {/* FLOATING CARD */}
      <div className="hidden md:absolute md:bottom-12 md:right-8 md:block shadow-card float-3d z-20 max-w-sm transition-transform hover:scale-105 -rotate-12  ">
        <div className=" bg-white p-2 rounded-md border border-cool-gray">
          <Image
            src="/img2.jpeg"
            alt="Trusted Worker"
            width={180}
            height={180}
            className="w-52 h-52 object-cover rounded-md"
          />
        </div>
      </div>
      {/* SOCIAL ICONS */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-cool-gray p-2 rounded-full border border-gray-300 shadow-sm hover:scale-110 transition-transform">
            <FaInstagram className="text-lg fill-red-500" />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-cool-gray p-2 rounded-full border border-gray-300 shadow-sm hover:scale-110 transition-transform">
            <FaLinkedin className="fill-blue-500 text-lg" />
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-cool-gray p-2 rounded-full border border-gray-300 shadow-sm hover:scale-110 transition-transform">
            <FaFacebook className="fill-blue-400 text-lg" />
          </div>
        </a>
      </div>
    </div>
  );
}
