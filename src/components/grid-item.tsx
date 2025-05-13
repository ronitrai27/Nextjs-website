import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type GridItemProps =
  | { type: "image"; src: string; alt: string; isAnimating: boolean }
  | {
      type: "text";
      title: string;
      content: string;
      cta?: string;
      ctaLink?: string;
      bgColor: string;
      textColor?: string;
      isAnimating: boolean;
    }
  | { type: "color"; color: string; isAnimating: boolean };

export function GridItem(props: GridItemProps) {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden transition-all duration-500",
        props.isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
      )}
    >
      {props.type === "image" && (
        <div className="relative w-full h-full">
          <Image
            src={props.src || "/placeholder.svg"}
            alt={props.alt}
            fill
            sizes="(max-width: 768px) 20vw, 20vw"
            className="object-cover"
          />
        </div>
      )}

      {props.type === "text" && (
        <div
          className={cn(
            "p-4 h-full flex flex-col justify-center",
            props.bgColor,
            props.textColor || "text-gray-800"
          )}
        >
          <h3 className="text-xl font-bold mb-2">{props.title}</h3>
          <p className="mb-4 text-sm">{props.content}</p>
          {props.cta && (
            <Link
              href={props.ctaLink || "#"}
              className="flex items-center text-sm font-medium"
            >
              {props.cta} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      {props.type === "color" && (
        <div className={cn("w-full h-full", props.color)}></div>
      )}
    </div>
  );
}
