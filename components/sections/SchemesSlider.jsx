"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";

const schemes = [
  "/Schem1.jpeg",
  "/Schem2.jpeg",
  "/Schem3.jpeg",
  "/Schem4.jpeg",
  "/Schem5.jpeg",
  "/Schem6.jpeg",
  "/Schem7.jpeg",
  "/Schem8.jpeg",
  "/Schem9.jpeg",
  "/Schem10.jpeg",
  "/Schem11.jpeg",
  "/Schem12.jpeg",
  "/Schem13.jpeg",
  "/Schem14.jpeg",
  "/Schem15.jpeg",
  "/Schem16.jpeg",
  "/Schem17.jpeg",
  "/Schem18.jpeg",
  "/Schem19.jpeg",
  "/Schem20.jpeg",
  "/Schem21.jpeg",
  "/Schem22.jpeg",
];

export default function SchemesSlider() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % schemes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % schemes.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + schemes.length) % schemes.length);
  };

  const visibleSchemes = [];
  for (let i = 0; i < 3; i++) {
    visibleSchemes.push(schemes[(current + i) % schemes.length]);
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={language === "en" ? "Our Schemes" : "आमच्या योजना"}
          subtitle={
            language === "en"
              ? "Explore our various banking schemes"
              : "आमच्या विविध बँकिंग योजना पहा"
          }
        />

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-8">
            {visibleSchemes.map((scheme, index) => (
              <motion.div
                key={`${scheme}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={scheme}
                    alt={`Scheme ${current + index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {schemes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-amber-500 w-6"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
