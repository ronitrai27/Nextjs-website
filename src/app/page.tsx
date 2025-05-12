// app/page.tsx
"use client";
import React from "react";
import HeroPage from "@/pages/HeroPage";
import FeatureSection from "@/pages/FeatureSection";
export default function Home() {
  return (
    <div>
      <HeroPage />
      <FeatureSection />
    </div>
  );
}
