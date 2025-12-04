"use client";

import HeroSection from "@/components/sections/HeroSection";
import ChairmanSection from "@/components/sections/ChairmanSection";
import SchemesSlider from "@/components/sections/SchemesSlider";
import LoanSchemesSection from "@/components/sections/LoanSchemesSection";
import SavingSchemesSection from "@/components/sections/SavingSchemesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VisionSection from "@/components/sections/VisionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BranchSection from "@/components/sections/BranchSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChairmanSection />
      <SchemesSlider />
      <LoanSchemesSection />
      <SavingSchemesSection />
      <ServicesSection />
      <FeaturesSection />
      <VisionSection />
      <TestimonialsSection />
      <BranchSection />
      <CTASection />
    </>
  );
}
