import { GridLayout } from "@/components/grid-layout";

export default function ImageSection() {
  // Content data - easy to replace later
  const gridItems = [
    { id: 1, type: "image", src: "/f1.jpg", alt: "Image 1" },
    { id: 2, type: "image", src: "/f2.jpg", alt: "Image 2" },
    { id: 3, type: "image", src: "/f3.jpg", alt: "Image 3" },

    // ✅ Text Card 1: Transparent Pricing
    {
      id: 4,
      type: "text",
      title: "Transparent Pricing",
      content: "Know exactly what you pay for — no hidden fees, ever.",
      cta: "Learn More",
      ctaLink: "#",
      bgColor: "bg-gray-100",
    },

    { id: 5, type: "image", src: "/f4.jpg", alt: "Image 4" },
    { id: 6, type: "image", src: "/f5.jpg", alt: "Image 5" },
    { id: 7, type: "image", src: "/f6.jpg", alt: "Image 6" },
    { id: 8, type: "image", src: "/f7.jpg", alt: "Image 7" },

    // ✅ Text Card 2: Trust & Impact
    {
      id: 9,
      type: "text",
      title: "Over 200+ Households",
      content: "trust ZipServe for reliable, on-demand home services.",
      cta: "View Stories",
      ctaLink: "#",
      bgColor: "bg-white",
      textColor: "text-primary-blue",
    },

    { id: 10, type: "image", src: "/f8.jpg", alt: "Image 8" },
    { id: 11, type: "image", src: "/f9.jpg", alt: "Image 9" },
    { id: 12, type: "image", src: "/f10.jpg", alt: "Image 10" },
    { id: 13, type: "image", src: "/f11.jpg", alt: "Image 11" },
    { id: 14, type: "image", src: "/f12.jpg", alt: "Image 12" },

    // ✅ Color Block - Primary Branding
    { id: 15, type: "color", color: "bg-primary-blue" },
  ];

  const footerText =
    "From instant bookings to real-time tracking, ZipServe is the all-in-one home services platform that India’s households trust every day.";

  const features = ["Verified & trusted workers", "Rewards with every booking"];

  return (
    <main className="min-h-screen mt-20">
      <GridLayout
        gridItems={gridItems}
        footerText={footerText}
        features={features}
      />
    </main>
  );
}
