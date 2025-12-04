"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Target,
  Heart,
  Award,
  Users,
  Building2,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      key: "gratitude",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
    },
    {
      key: "integrity",
      icon: Award,
      color: "from-blue-500 to-blue-600",
    },
    {
      key: "trust",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      key: "service",
      icon: Star,
      color: "from-amber-500 to-amber-600",
    },
    {
      key: "responsibility",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const achievements = [
    { value: "5000+", label: language === "en" ? "Happy Members" : "आनंदी सदस्य" },
    { value: "₹10Cr+", label: language === "en" ? "Total Deposits" : "एकूण ठेवी" },
    { value: "₹8Cr+", label: language === "en" ? "Loans Disbursed" : "वितरित कर्ज" },
    { value: "4+", label: language === "en" ? "Years of Service" : "सेवेची वर्षे" },
  ];

  const team = [
    {
      name: language === "en" ? "Sachin Dhakane" : "सचिन ढाकणे",
      position: language === "en" ? "Chairman" : "अध्यक्ष",
    },
    {
      name: language === "en" ? "Vice Chairman" : "उपाध्यक्ष",
      position: language === "en" ? "Vice Chairman" : "उपाध्यक्ष",
    },
    {
      name: language === "en" ? "Secretary" : "सचिव",
      position: language === "en" ? "Secretary" : "सचिव",
    },
    {
      name: language === "en" ? "Manager" : "व्यवस्थापक",
      position: language === "en" ? "Manager" : "व्यवस्थापक",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-500 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("about.title")}
            </h1>
            <p className="text-xl text-amber-100">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/bankimgage1.jpeg"
                    alt="Bank Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  {t("bank.since")}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                <span className="text-amber-500">✦</span> {t("about.historyTitle")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {t("about.history")}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {language === "en"
                  ? "We started with a small group of dedicated individuals who believed in the power of community banking. Today, we serve thousands of members across the region, offering a wide range of financial services designed to meet the needs of every individual and family."
                  : "आम्ही समुदाय बँकिंगच्या शक्तीवर विश्वास ठेवणाऱ्या समर्पित व्यक्तींच्या एका छोट्या गटाने सुरुवात केली. आज, आम्ही संपूर्ण प्रदेशातील हजारो सदस्यांना सेवा देतो, प्रत्येक व्यक्ती आणि कुटुंबाच्या गरजा पूर्ण करण्यासाठी डिझाइन केलेल्या विविध प्रकारच्या आर्थिक सेवा देतो."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t("about.missionTitle")}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {t("bank.mission")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Star size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t("about.visionTitle")}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {t("bank.vision")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("about.valuesTitle")}
            subtitle={
              language === "en"
                ? "The principles that guide everything we do"
                : "जी तत्त्वे आम्ही करत असलेल्या प्रत्येक गोष्टीला मार्गदर्शन करतात"
            }
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center`}
                >
                  <value.icon size={32} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">
                  {t(`about.values.${value.key}`)}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("about.achievements")}
            subtitle={
              language === "en"
                ? "Our journey of growth and success"
                : "आमचा वाढ आणि यशाचा प्रवास"
            }
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur rounded-2xl p-8"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {item.value}
                </p>
                <p className="text-amber-100 text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("about.team")}
            subtitle={
              language === "en"
                ? "Meet the people behind our success"
                : "आमच्या यशामागील लोकांना भेटा"
            }
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden text-center"
              >
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center relative overflow-hidden">
                  {index === 0 ? (
                    <Image
                      src="/chairman imamge.jpeg"
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {member.name[0]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-amber-600 dark:text-amber-400">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
