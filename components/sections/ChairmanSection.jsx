"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";

const CHAIRMAN_IMAGE = "/chairman imamge.jpeg";

export default function ChairmanSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-amber-500 rounded-2xl"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src={CHAIRMAN_IMAGE}
                  alt={t("chairman.name")}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-xl rounded-xl px-8 py-4 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {t("chairman.name")}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 font-medium">
                  {t("chairman.position")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-amber-500 text-lg font-medium">✦</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
                {t("chairman.title")}
              </h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 text-amber-200 dark:text-amber-900/50" size={60} />
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 relative">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {t("chairman.message")}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  We are committed to providing the best banking services to our members 
                  with complete transparency and trust. Our goal is to empower every 
                  individual and help them achieve their financial dreams.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-amber-500"></div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">
                      {t("chairman.name")}
                    </p>
                    <p className="text-amber-600 dark:text-amber-400 text-sm">
                      {t("chairman.position")}, {t("bank.shortName")}
                    </p>
                  </div>
                </div>
              </div>
              <Quote className="absolute -bottom-4 -right-4 text-amber-200 dark:text-amber-900/50 rotate-180" size={60} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
