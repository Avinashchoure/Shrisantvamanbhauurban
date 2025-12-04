"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { Target, Heart, CheckCircle2 } from "lucide-react";

export default function VisionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("vision.title")}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t("vision.subtitle")}
              </p>
              <ul className="space-y-4">
                {t("vision.points").map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-amber-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Heart size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("social.title")}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t("social.subtitle")}
              </p>
              <ul className="space-y-4">
                {t("social.points").map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-rose-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
