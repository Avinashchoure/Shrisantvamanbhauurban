"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";

export default function BranchSection() {
  const { language } = useLanguage();

  const branches = [
    {
      name: language === "en" ? "Head Office - Patoda" : "मुख्य कार्यालय - पाटोदा",
      address:
        language === "en"
          ? "Main Road, Near Bus Stand, Patoda, Dist. Beed, Maharashtra - 414204"
          : "मुख्य रस्ता, बस स्टँड जवळ, पाटोदा, जि. बीड, महाराष्ट्र - ४१४२०४",
      phone: "+ 91 9881845484",
      timing:
        language === "en"
          ? "Mon-Fri: 10AM-6PM, Sat: 10AM-4PM"
          : "सोम-शुक्र: सकाळी १०-संध्या ६, शनि: सकाळी १०-दुपारी ४",
      isMain: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={language === "en" ? "Our Branches" : "आमच्या शाखा"}
          subtitle={
            language === "en"
              ? "Visit us at our convenient locations"
              : "आमच्या सोयीस्कर ठिकाणी भेट द्या"
          }
          light
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl ${
                branch.isMain ? "ring-2 ring-amber-500" : ""
              }`}
            >
              {branch.isMain && (
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {language === "en" ? "Main Branch" : "मुख्य शाखा"}
                  </span>
                </div>
              )}

              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 relative overflow-hidden">
                {branch.isMain ? (
                  <Image
                    src="/bankimgage1.jpeg"
                    alt={branch.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 size={80} className="text-amber-600 dark:text-amber-400" />
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {branch.name}
                </h3>

                <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                  <p>{branch.address}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Phone size={20} className="text-amber-500" />
                  <p>{branch.phone}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Clock size={20} className="text-amber-500" />
                  <p>{branch.timing}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
