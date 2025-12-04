"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { key: "deposit", icon: "💰" },
    { key: "withdraw", icon: "💵" },
    { key: "newAccount", icon: "📋" },
    { key: "rtgs", icon: "🏦" },
    { key: "goldLoan", icon: "🪙" },
    { key: "depositLoan", icon: "📑" },
    { key: "passbook", icon: "📒" },
    { key: "fdWithdraw", icon: "🔓" },
    { key: "loanFacility", icon: "✅" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                    {t(`services.${service.key}.name`)}
                  </h3>
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <Clock size={16} />
                    <span className="font-medium">
                      {t(`services.${service.key}.time`)}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
