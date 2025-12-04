"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, Star, Phone } from "lucide-react";

export default function SavingsPage() {
  const { t, language } = useLanguage();

  const savings = [
    {
      key: "rd",
      id: "rd",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80",
      tenure: language === "en" ? "12-60 months" : "१२-६० महिने",
      features:
        language === "en"
          ? [
              "Start with just ₹500/month",
              "Flexible tenure options",
              "Attractive interest rates",
              "Loan against RD available",
              "Auto-debit facility",
            ]
          : [
              "फक्त ₹5००/महिना पासून सुरू करा",
              "लवचिक कालावधी पर्याय",
              "आकर्षक व्याज दर",
              "RD वर कर्ज उपलब्ध",
              "ऑटो-डेबिट सुविधा",
            ],
      highlight: true,
    },
    {
      key: "fd",
      id: "fd",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      tenure: language === "en" ? "7 days - 10 years" : "७ दिवस - १० वर्षे",
      features:
        language === "en"
          ? [
              "Guaranteed returns",
              "Senior citizen bonus rate",
              "Premature withdrawal allowed",
              "Loan against FD available",
              "Nomination facility",
            ]
          : [
              "हमी परतावा",
              "ज्येष्ठ नागरिक बोनस दर",
              "मुदतपूर्व पैसे काढण्याची परवानगी",
              "FD वर कर्ज उपलब्ध",
              "नामांकन सुविधा",
            ],
      highlight: false,
    },
    {
      key: "daily",
      id: "daily",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80",
      tenure: language === "en" ? "Daily collection" : "दैनिक संकलन",
      features:
        language === "en"
          ? [
              "Door-to-door collection",
              "Start from ₹100/day",
              "Builds saving habit",
              "No bank visits needed",
              "Pigmi agent at your service",
            ]
          : [
              "घरोघरी संकलन",
              "₹१०0/दिवस पासून सुरू",
              "बचत सवय तयार करते",
              "बँक भेटीची गरज नाही",
              "पिग्मी एजंट तुमच्या सेवेत",
            ],
      highlight: false,
    },
    {
      key: "saving",
      id: "saving",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&q=80",
      tenure: language === "en" ? "No lock-in" : "कोणताही लॉक-इन नाही",
      features:
        language === "en"
          ? [
              "Easy access to funds",
              "Free passbook",
              "Cheque book available",
              "Mobile banking enabled",
              "Nomination facility",
            ]
          : [
              "निधीमध्ये सहज प्रवेश",
              "मोफत पासबुक",
              "चेक बुक उपलब्ध",
              "मोबाईल बँकिंग सक्षम",
              "नामांकन सुविधा",
            ],
      highlight: false,
    },
    {
      key: "moneyDouble",
      id: "moneyDouble",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      tenure: "72 " + (language === "en" ? "months" : "महिने"),
      features:
        language === "en"
          ? [
              "Double your money",
              "Guaranteed returns",
              "Safe investment",
              "No market risk",
              "Certificate provided",
            ]
          : [
              "तुमचे पैसे दुप्पट करा",
              "हमी परतावा",
              "सुरक्षित गुंतवणूक",
              "बाजार जोखीम नाही",
              "प्रमाणपत्र दिले जाते",
            ],
      highlight: true,
    },
    {
      key: "sukanya",
      id: "sukanya",
      image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&q=80",
      tenure: "18 " + (language === "en" ? "years" : "वर्षे"),
      features:
        language === "en"
          ? [
              "Invest ₹15,000 once",
              "Get ₹1,00,000 after 18 years",
              "Secure your daughter's future",
              "Tax benefits applicable",
              "Gift for your child",
            ]
          : [
              "एकदा ₹१५,००० गुंतवा",
              "१८ वर्षांनंतर ₹१,००,००० मिळवा",
              "तुमच्या मुलीचे भविष्य सुरक्षित करा",
              "कर लाभ लागू",
              "तुमच्या मुलासाठी भेट",
            ],
      highlight: true,
    },
  ];

  const interestRates = [
    { period: language === "en" ? "15-30 days" : "१५-३० दिवस", rate: "5%" },
    { period: language === "en" ? "31-90 days" : "३१-९० दिवस", rate: "8%" },
    { period: language === "en" ? "91-180 days" : "९१-१८० दिवस", rate: "9%" },
    { period: language === "en" ? "181-365 days" : "१८१-३६५ दिवस", rate: "10%" },
    { period: language === "en" ? "1-3 years" : "१-३ वर्षे", rate: "10.50%" },
    { period: language === "en" ? "72 months (Double)" : "७२ महिने (दुप्पट)", rate: "~12%" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-500 to-green-700 overflow-hidden">
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
              {t("savings.title")}
            </h1>
            <p className="text-xl text-green-100">{t("savings.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Interest Rates Table */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === "en" ? "Attractive Interest Rates" : "आकर्षक व्याजदर"}
            subtitle={
              language === "en"
                ? "Best rates in the region"
                : "या प्रदेशातील सर्वोत्तम दर"
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-2 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 font-bold">
              <div>{language === "en" ? "Period" : "कालावधी"}</div>
              <div className="text-right">
                {language === "en" ? "Interest Rate" : "व्याज दर"}
              </div>
            </div>
            {interestRates.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 p-4 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-green-50/50 dark:bg-gray-800"
                }`}
              >
                <div className="text-gray-700 dark:text-gray-300">
                  {item.period}
                </div>
                <div className="text-right font-bold text-green-600 dark:text-green-400">
                  {item.rate}
                </div>
              </div>
            ))}
            <div className="p-4 bg-green-100 dark:bg-green-900/30 text-center text-sm text-gray-600 dark:text-gray-400">
              {language === "en"
                ? "* Senior citizens, ex-servicemen, widows & disabled get 0.5% extra"
                : "* ज्येष्ठ नागरिक, माजी सैनिक, विधवा आणि अपंगांना ०.५% जास्त मिळेल"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Savings Schemes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === "en" ? "Our Saving Schemes" : "आमच्या बचत योजना"}
            subtitle={
              language === "en"
                ? "Choose the perfect plan for your needs"
                : "तुमच्या गरजांसाठी योग्य योजना निवडा"
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savings.map((saving, index) => (
              <motion.div
                key={saving.key}
                id={saving.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden relative scroll-mt-24 group ${
                  saving.highlight
                    ? "ring-2 ring-green-500 ring-offset-2 dark:ring-offset-gray-800"
                    : ""
                }`}
              >
                {saving.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {t(`savings.${saving.key}.name`)}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {language === "en" ? "Tenure: " : "कालावधी: "}{saving.tenure}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {t(`savings.${saving.key}.description`)}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {saving.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-green-500 mt-0.5 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button href="/contact" className="flex-1">
                      {t("common.applyNow")}
                      <ArrowRight size={18} />
                    </Button>
                    <Button href="tel:9881845484" variant="secondary" className="px-4">
                      <Phone size={18} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === "en"
              ? "Start Your Savings Journey Today!"
              : "आजच तुमचा बचत प्रवास सुरू करा!"}
          </h2>
          <p className="text-green-100 text-lg mb-8">
            {language === "en"
              ? "Visit our nearest branch or contact us for more details"
              : "अधिक माहितीसाठी आमच्या जवळच्या शाखेला भेट द्या किंवा आमच्याशी संपर्क साधा"}
          </p>
          <Button href="/contact" variant="outline" size="lg">
            {language === "en" ? "Get Started" : "सुरुवात करा"}
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
}
