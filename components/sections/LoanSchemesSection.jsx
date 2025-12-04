"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function LoanSchemesSection() {
  const { t } = useLanguage();

  const loans = [
    {
      key: "goldLoan",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
      href: "/loans#gold",
    },
    {
      key: "salaryLoan",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      href: "/loans#salary",
    },
    {
      key: "mortgageLoan",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      href: "/loans#mortgage",
    },
    {
      key: "depositLoan",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      href: "/loans#deposit",
    },
    {
      key: "personalLoan",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
      href: "/loans#personal",
    },
    {
      key: "womenSavingLoan",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      href: "/loans#women",
    },
    {
      key: "pigmiLoan",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80",
      href: "/loans#pigmi",
    },
    {
      key: "carLoan",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      href: "/loans#car",
    },
    {
      key: "bikeLoan",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      href: "/loans#bike",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title={t("loans.title")} subtitle={t("loans.subtitle")} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loans.map((loan, index) => (
            <motion.div
              key={loan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={loan.image}
                  alt={t(`loans.${loan.key}.name`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">
                    {t(`loans.${loan.key}.name`)}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {t(`loans.${loan.key}.description`)}
                </p>
                <Link 
                  href={loan.href}
                  className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium hover:gap-3 transition-all"
                >
                  {t("common.learnMore")}
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
          <Button href="/loans" size="lg">
            {t("common.viewAll")} {t("loans.title")}
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
