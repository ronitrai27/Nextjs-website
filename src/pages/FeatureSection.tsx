// components/FeatureSection.tsx
import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
function FeatureSection() {
  return (
    <section className="w-full h-screen pt-20 bg-white feature-gradient relative ">
      {/* heading */}
      <div className="flex items-center justify-center w-full ">
        <h1 className="font-inter text-[3rem] text-center capitalize tracking-tighter font-medium ">
          <span className="uppercase text-[3.5rem] gradient-text font-bold">
            Seamless
          </span>{" "}
          Booking <br />
          <PointerHighlight>
            transparency{" "}
            <span className=" uppercase text-[3.5rem] gradient-text font-bold">
              everywhere
            </span>
          </PointerHighlight>
        </h1>
      </div>
    </section>
  );
}

export default FeatureSection;
