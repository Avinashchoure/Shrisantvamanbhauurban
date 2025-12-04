"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: language === "en" ? "Avinash Choure" : "अविनाश चौरे",
      role: language === "en" ? "Farmer" : "शेतकरी",
      content:
        language === "en"
          ? "The gold loan process was so quick and hassle-free. I got the money within 30 minutes. Excellent service!"
          : "सोने कर्जाची प्रक्रिया खूप जलद आणि सोपी होती. मला ३० मिनिटांत पैसे मिळाले. उत्कृष्ट सेवा!",
      rating: 5,
      image: "/customerimg1.jpeg",
    },
    {
      name: language === "en" ? "Sunita Jadhav" : "सुनीता जाधव",
      role: language === "en" ? "Business Owner" : "व्यवसाय मालक",
      content:
        language === "en"
          ? "I have been a member for 3 years. The staff is very helpful and the interest rates are the best in the area."
          : "मी ३ वर्षांपासून सदस्य आहे. कर्मचारी खूप मदतशील आहेत आणि व्याज दर परिसरातील सर्वोत्तम आहेत.",
      rating: 5,
      image: "/customersvistit.jpeg",
    },
    {
      name: language === "en" ? "Ganesh Shinde" : "गणेश शिंदे",
      role: language === "en" ? "Teacher" : "शिक्षक",
      content:
        language === "en"
          ? "The Sukanya Yojana scheme is perfect for my daughter's future. Great returns and safe investment."
          : "सुकन्या योजना माझ्या मुलीच्या भविष्यासाठी परिपूर्ण आहे. उत्तम परतावा आणि सुरक्षित गुंतवणूक.",
      rating: 5,
      image: "/cusomervist2.jpeg",
    },
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={language === "en" ? "What Our Members Say" : "आमचे सदस्य काय म्हणतात"}
          subtitle={
            language === "en"
              ? "Hear from our valued members about their experience"
              : "त्यांच्या अनुभवाबद्दल आमच्या मौल्यवान सदस्यांकडून ऐका"
          }
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 relative"
            >
              <Quote
                size={60}
                className="absolute top-6 left-6 text-amber-200 dark:text-amber-900/50"
              />

              <div className="relative z-10">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </p>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-amber-600 dark:text-amber-400">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current
                    ? "bg-amber-500"
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
