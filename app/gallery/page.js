"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: t("gallery.categories.all") },
    { key: "events", label: t("gallery.categories.events") },
    { key: "branches", label: t("gallery.categories.branches") },
    { key: "schemes", label: language === "en" ? "Schemes" : "योजना" },
  ];

  const images = [
    // Events - Inauguration
    {
      id: 1,
      category: "events",
      title: language === "en" ? "Inauguration Ceremony" : "उद्घाटन समारंभ",
      src: "/anogration1.jpeg",
    },
    {
      id: 2,
      category: "events",
      title: language === "en" ? "Inauguration Event" : "उद्घाटन कार्यक्रम",
      src: "/anogration2.jpeg",
    },
    {
      id: 3,
      category: "events",
      title: language === "en" ? "Grand Opening" : "भव्य उद्घाटन",
      src: "/anogration3.jpeg",
    },
    // Events - Functions
    {
      id: 4,
      category: "events",
      title: language === "en" ? "Annual Function" : "वार्षिक कार्यक्रम",
      src: "/fuction1.jpeg",
    },
    {
      id: 5,
      category: "events",
      title: language === "en" ? "Bank Function" : "बँक कार्यक्रम",
      src: "/fuction2.jpeg",
    },
    {
      id: 6,
      category: "events",
      title: language === "en" ? "Special Event" : "विशेष कार्यक्रम",
      src: "/function3.jpeg",
    },
    {
      id: 7,
      category: "events",
      title: language === "en" ? "Celebration" : "उत्सव",
      src: "/function4.jpeg",
    },
    // Events - Festivals
    {
      id: 8,
      category: "events",
      title: language === "en" ? "Festival Celebration" : "सण उत्सव",
      src: "/festivalcelebration1.jpeg",
    },
    {
      id: 9,
      category: "events",
      title: language === "en" ? "Festival Event" : "सण कार्यक्रम",
      src: "/festivalcelebration2.jpeg",
    },
    // Customer Visits
    {
      id: 10,
      category: "events",
      title: language === "en" ? "Customer Visit" : "ग्राहक भेट",
      src: "/customerimg1.jpeg",
    },
    {
      id: 11,
      category: "events",
      title: language === "en" ? "Customer Meeting" : "ग्राहक बैठक",
      src: "/customersvistit.jpeg",
    },
    {
      id: 12,
      category: "events",
      title: language === "en" ? "Customer Interaction" : "ग्राहक संवाद",
      src: "/cusomervist2.jpeg",
    },
    // Branches
    {
      id: 13,
      category: "branches",
      title: language === "en" ? "Bank Building" : "बँक इमारत",
      src: "/bankimgage1.jpeg",
    },
    // Schemes
    {
      id: 14,
      category: "schemes",
      title: language === "en" ? "Scheme 1" : "योजना १",
      src: "/Schem1.jpeg",
    },
    {
      id: 15,
      category: "schemes",
      title: language === "en" ? "Scheme 2" : "योजना २",
      src: "/Schem2.jpeg",
    },
    {
      id: 16,
      category: "schemes",
      title: language === "en" ? "Scheme 3" : "योजना ३",
      src: "/Schem3.jpeg",
    },
    {
      id: 17,
      category: "schemes",
      title: language === "en" ? "Scheme 4" : "योजना ४",
      src: "/Schem4.jpeg",
    },
    {
      id: 18,
      category: "schemes",
      title: language === "en" ? "Scheme 5" : "योजना ५",
      src: "/Schem5.jpeg",
    },
    {
      id: 19,
      category: "schemes",
      title: language === "en" ? "Scheme 6" : "योजना ६",
      src: "/Schem6.jpeg",
    },
    {
      id: 20,
      category: "schemes",
      title: language === "en" ? "Scheme 7" : "योजना ७",
      src: "/Schem7.jpeg",
    },
    {
      id: 21,
      category: "schemes",
      title: language === "en" ? "Scheme 8" : "योजना ८",
      src: "/Schem8.jpeg",
    },
    {
      id: 22,
      category: "schemes",
      title: language === "en" ? "Scheme 9" : "योजना ९",
      src: "/Schem9.jpeg",
    },
    {
      id: 23,
      category: "schemes",
      title: language === "en" ? "Scheme 10" : "योजना १०",
      src: "/Schem10.jpeg",
    },
    {
      id: 24,
      category: "schemes",
      title: language === "en" ? "Scheme 11" : "योजना ११",
      src: "/Schem11.jpeg",
    },
    {
      id: 25,
      category: "schemes",
      title: language === "en" ? "Scheme 12" : "योजना १२",
      src: "/Schem12.jpeg",
    },
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-500 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("gallery.title")}
            </h1>
            <p className="text-xl text-purple-100">{t("gallery.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === cat.key
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(image)}
                  className="cursor-pointer group"
                >
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn size={32} className="text-white" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {categories.find((c) => c.key === image.category)?.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {language === "en"
                  ? "No images found in this category"
                  : "या श्रेणीमध्ये कोणतीही छायाचित्रे सापडली नाहीत"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {categories.find((c) => c.key === selectedImage.category)?.label}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
