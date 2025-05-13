"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

type GridItem =
  | { id: number; type: "image"; src: string; alt: string }
  | {
      id: number;
      type: "text";
      title: string;
      content: string;
      cta?: string;
      ctaLink?: string;
      bgColor: string;
      textColor?: string;
    }
  | { id: number; type: "color"; color: string };

interface GridLayoutProps {
  gridItems: GridItem[];
  footerText: string;
  features: string[];
}

export function GridLayout({
  gridItems,
  footerText,
  features,
}: GridLayoutProps) {
  // Create a 3x5 grid (15 cells)
  const [grid, setGrid] = useState<Array<GridItem | null>>(
    Array(15).fill(null)
  );
  const [animating, setAnimating] = useState<number | null>(null);

  // Initialize grid with items
  useEffect(() => {
    const initialGrid = Array(15).fill(null);
    gridItems.slice(0, 15).forEach((item, index) => {
      initialGrid[index] = item;
    });
    setGrid(initialGrid);
  }, [gridItems]);

  // Animation effect to swap items periodically
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick two random positions to swap
      const pos1 = Math.floor(Math.random() * 15);
      let pos2 = Math.floor(Math.random() * 15);

      // Make sure pos2 is different from pos1
      while (pos2 === pos1) {
        pos2 = Math.floor(Math.random() * 15);
      }

      // Animate the swap
      setAnimating(pos1);

      setTimeout(() => {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          const temp = newGrid[pos1];
          newGrid[pos1] = newGrid[pos2];
          newGrid[pos2] = temp;
          return newGrid;
        });

        setTimeout(() => {
          setAnimating(null);
        }, 300);
      }, 300);
    }, 10000); // Swap every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 grid-rows-3 gap-2 p-2 h-[80vh]">
        {grid.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-lg overflow-hidden transition-all duration-500",
              animating === index
                ? "scale-95 opacity-0"
                : "scale-100 opacity-100"
            )}
          >
            {item?.type === "image" && (
              <div className="relative w-full h-full">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 20vw, 20vw"
                  className="object-cover"
                  priority={index < 6} // Load the first 6 images immediately
                />

                {/* ✅ Overlay */}
                <div className="absolute inset-0 bg-primary-blue opacity-30 mix-blend-multiply pointer-events-none" />
              </div>
            )}

            {item?.type === "text" && (
              <div
                className={cn(
                  "p-4 h-full flex flex-col justify-center",
                  item.bgColor,
                  item.textColor || "text-near-black"
                )}
              >
                <h3 className="text-xl font-bold mb-2 text-center font-inter">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm font-inter">{item.content}</p>
                {item.cta && (
                  <Link
                    href={item.ctaLink || "#"}
                    className="flex items-center text-sm font-medium"
                  >
                    {item.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            )}

            {item?.type === "color" && (
              <div className={cn("w-full h-full", item.color)}></div>
            )}

            {!item && <div className="w-full h-full bg-gray-100"></div>}
          </div>
        ))}
      </div>

      <div className="p-4 mt-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-inter">
            <p className="text-near-black font-medium text-[24px] max-w-2xl">
              {footerText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center tracking-tighter text-[16px] flex-nowrap"
                >
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
