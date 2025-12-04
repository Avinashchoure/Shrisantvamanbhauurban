"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

export default function SavingSchemesSection() {
  const { t, language } = useLanguage();

  const savings = [
    {
      key: "rd",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80",
      href: "/savings#rd",
      highlight: true,
    },
    {
      key: "fd",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      href: "/savings#fd",
      highlight: false,
    },
    {
      key: "daily",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80",
      href: "/savings#daily",
      highlight: false,
    },
    {
      key: "saving",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&q=80",
      href: "/savings#saving",
      highlight: false,
    },
    {
      key: "moneyDouble",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      href: "/savings#moneyDouble",
      highlight: true,
    },
    {
      key: "sukanya",
      image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&q=80",
      href: "/savings#sukanya",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("savings.title")}
          subtitle={t("savings.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {savings.map((saving, index) => (
            <motion.div
              key={saving.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative group ${
                saving.highlight
                  ? "ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-gray-900"
                  : ""
              }`}
            >
              {saving.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} fill="white" />
                    {language === "en" ? "Popular" : "लोकप्रिय"}
                  </span>
                </div>
              )}

              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={saving.image}
                  alt={t(`savings.${saving.key}.name`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t(`savings.${saving.key}.name`)}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {t(`savings.${saving.key}.description`)}
                </p>

                <Link
                  href={saving.href}
                  className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium hover:gap-3 transition-all"
                >
                  {t("common.applyNow")}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/savings" size="lg">
            {t("common.viewAll")} {t("savings.title")}
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
