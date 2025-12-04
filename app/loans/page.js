"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import {
  CheckCircle2,
  FileText,
  User,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function LoansPage() {
  const { t, language } = useLanguage();

  const loans = [
    {
      key: "goldLoan",
      id: "gold",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
      eligibility:
        language === "en"
          ? ["18+ years old", "Valid gold ornaments", "ID proof required"]
          : ["१८+ वर्षे वय", "वैध सोन्याचे दागिने", "ओळखपत्र आवश्यक"],
      documents:
        language === "en"
          ? ["Aadhaar Card", "PAN Card", "Passport Photo", "Gold ornaments"]
          : ["आधार कार्ड", "पॅन कार्ड", "पासपोर्ट फोटो", "सोन्याचे दागिने"],
      features:
        language === "en"
          ? [
              "Quick processing in 30 minutes",
              "No hidden charges",
              "Safe storage of ornaments",
              "Flexible repayment options",
            ]
          : [
              "३० मिनिटांत जलद प्रक्रिया",
              "कोणतेही छुपे शुल्क नाही",
              "दागिन्यांची सुरक्षित साठवण",
              "लवचिक परतफेड पर्याय",
            ],
    },
    {
      key: "salaryLoan",
      id: "salary",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Salaried employee",
              "Minimum 1 year in current job",
              "Age 21-58 years",
            ]
          : ["पगारदार कर्मचारी", "सध्याच्या नोकरीत किमान १ वर्ष", "वय २१-५८ वर्षे"],
      documents:
        language === "en"
          ? [
              "Salary slips (3 months)",
              "Bank statements (6 months)",
              "ID proof",
              "Address proof",
            ]
          : [
              "पगार स्लिप (३ महिने)",
              "बँक स्टेटमेंट (६ महिने)",
              "ओळखपत्र",
              "पत्ता पुरावा",
            ],
      features:
        language === "en"
          ? [
              "Up to 20x monthly salary",
              "Quick approval",
              "No collateral required",
              "EMI as low as ₹1000",
            ]
          : [
              "मासिक पगाराच्या २० पट पर्यंत",
              "जलद मंजुरी",
              "कोणतीही तारण आवश्यक नाही",
              "₹१००० पर्यंत कमी EMI",
            ],
    },
    {
      key: "mortgageLoan",
      id: "mortgage",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Property owner",
              "Clear property title",
              "Age 21-65 years",
            ]
          : ["मालमत्ता मालक", "स्पष्ट मालमत्ता शीर्षक", "वय २१-६५ वर्षे"],
      documents:
        language === "en"
          ? [
              "Property documents",
              "ID & Address proof",
              "Income proof",
              "Property valuation report",
            ]
          : [
              "मालमत्ता कागदपत्रे",
              "ओळख व पत्ता पुरावा",
              "उत्पन्न पुरावा",
              "मालमत्ता मूल्यांकन अहवाल",
            ],
      features:
        language === "en"
          ? [
              "High loan amount",
              "Long repayment tenure",
              "Competitive interest rates",
              "Minimal documentation",
            ]
          : [
              "उच्च कर्ज रक्कम",
              "दीर्घ परतफेड कालावधी",
              "स्पर्धात्मक व्याज दर",
              "किमान दस्तऐवज",
            ],
    },
    {
      key: "depositLoan",
      id: "deposit",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "FD holder with our bank",
              "Minimum 3 months old FD",
              "Valid FD receipt",
            ]
          : [
              "आमच्या बँकेचे FD धारक",
              "किमान ३ महिने जुना FD",
              "वैध FD पावती",
            ],
      documents:
        language === "en"
          ? ["FD Receipt", "ID proof", "Application form"]
          : ["FD पावती", "ओळखपत्र", "अर्ज फॉर्म"],
      features:
        language === "en"
          ? [
              "Up to 90% of FD value",
              "No break of FD",
              "Continue earning interest on FD",
              "Quick processing",
            ]
          : [
              "FD मूल्याच्या ९०% पर्यंत",
              "FD तोडण्याची गरज नाही",
              "FD वर व्याज मिळत राहते",
              "जलद प्रक्रिया",
            ],
    },
    {
      key: "personalLoan",
      id: "personal",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Age 21-60 years",
              "Steady income source",
              "Good credit history",
            ]
          : ["वय २१-६० वर्षे", "स्थिर उत्पन्न स्रोत", "चांगला क्रेडिट इतिहास"],
      documents:
        language === "en"
          ? [
              "ID & Address proof",
              "Income proof",
              "Bank statements",
              "Passport photos",
            ]
          : ["ओळख व पत्ता पुरावा", "उत्पन्न पुरावा", "बँक स्टेटमेंट", "पासपोर्ट फोटो"],
      features:
        language === "en"
          ? [
              "No collateral required",
              "Flexible amount",
              "Quick disbursement",
              "Simple EMI options",
            ]
          : [
              "कोणतीही तारण आवश्यक नाही",
              "लवचिक रक्कम",
              "जलद वितरण",
              "सोपे EMI पर्याय",
            ],
    },
    {
      key: "womenSavingLoan",
      id: "women",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Women applicants only",
              "Age 18-60 years",
              "Part of women SHG preferred",
            ]
          : [
              "फक्त महिला अर्जदार",
              "वय १८-६० वर्षे",
              "महिला बचत गटाचा भाग असणे प्राधान्य",
            ],
      documents:
        language === "en"
          ? ["ID proof", "Address proof", "SHG membership (if any)", "Photo"]
          : ["ओळखपत्र", "पत्ता पुरावा", "बचत गट सदस्यत्व (असल्यास)", "फोटो"],
      features:
        language === "en"
          ? [
              "Special rates for women",
              "Empowerment focused",
              "Group support",
              "Flexible terms",
            ]
          : [
              "महिलांसाठी विशेष दर",
              "सशक्तीकरण केंद्रित",
              "गट समर्थन",
              "लवचिक अटी",
            ],
    },
    {
      key: "pigmiLoan",
      id: "pigmi",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Pigmi account holder",
              "Regular deposits for 3 months",
              "Good payment history",
            ]
          : [
              "पिग्मी खाते धारक",
              "३ महिने नियमित ठेवी",
              "चांगला पेमेंट इतिहास",
            ],
      documents:
        language === "en"
          ? ["Pigmi passbook", "ID proof", "Application form"]
          : ["पिग्मी पासबुक", "ओळखपत्र", "अर्ज फॉर्म"],
      features:
        language === "en"
          ? [
              "Based on daily savings",
              "Quick approval",
              "Builds saving habit",
              "Door-to-door service",
            ]
          : [
              "दैनिक बचतीवर आधारित",
              "जलद मंजुरी",
              "बचत सवय तयार करते",
              "घरोघरी सेवा",
            ],
    },
    {
      key: "carLoan",
      id: "car",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Age 21-60 years",
              "Stable income source",
              "Valid driving license",
              "Good credit history",
            ]
          : [
              "वय २१-६० वर्षे",
              "स्थिर उत्पन्न स्रोत",
              "वैध ड्रायव्हिंग लायसन्स",
              "चांगला क्रेडिट इतिहास",
            ],
      documents:
        language === "en"
          ? [
              "ID & Address proof",
              "Income proof / Salary slips",
              "Bank statements (6 months)",
              "Driving license",
              "Vehicle quotation",
            ]
          : [
              "ओळख व पत्ता पुरावा",
              "उत्पन्न पुरावा / पगार स्लिप",
              "बँक स्टेटमेंट (६ महिने)",
              "ड्रायव्हिंग लायसन्स",
              "वाहन कोटेशन",
            ],
      features:
        language === "en"
          ? [
              "Up to 90% on-road funding",
              "Flexible tenure up to 7 years",
              "Quick approval process",
              "Competitive interest rates",
              "New & used car financing",
            ]
          : [
              "९०% पर्यंत ऑन-रोड फंडिंग",
              "७ वर्षांपर्यंत लवचिक कालावधी",
              "जलद मंजुरी प्रक्रिया",
              "स्पर्धात्मक व्याज दर",
              "नवीन आणि वापरलेल्या कार फायनान्सिंग",
            ],
    },
    {
      key: "bikeLoan",
      id: "bike",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      eligibility:
        language === "en"
          ? [
              "Age 18-60 years",
              "Stable income source",
              "Valid driving license",
              "Employed or self-employed",
            ]
          : [
              "वय १८-६० वर्षे",
              "स्थिर उत्पन्न स्रोत",
              "वैध ड्रायव्हिंग लायसन्स",
              "नोकरी किंवा स्वयंरोजगार",
            ],
      documents:
        language === "en"
          ? [
              "ID & Address proof",
              "Income proof",
              "Driving license",
              "Vehicle quotation",
              "Passport photos",
            ]
          : [
              "ओळख व पत्ता पुरावा",
              "उत्पन्न पुरावा",
              "ड्रायव्हिंग लायसन्स",
              "वाहन कोटेशन",
              "पासपोर्ट फोटो",
            ],
      features:
        language === "en"
          ? [
              "Up to 100% financing",
              "Low EMI options",
              "Quick disbursement",
              "Tenure up to 5 years",
              "No hidden charges",
            ]
          : [
              "१००% पर्यंत वित्तपुरवठा",
              "कमी EMI पर्याय",
              "जलद वितरण",
              "५ वर्षांपर्यंत कालावधी",
              "कोणतेही छुपे शुल्क नाही",
            ],
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
              {t("loans.title")}
            </h1>
            <p className="text-xl text-amber-100">{t("loans.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Loans Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {loans.map((loan, index) => (
              <motion.div
                key={loan.key}
                id={loan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-3 gap-0 ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image Side */}
                  <div className={`relative h-64 lg:h-auto lg:min-h-[400px] ${index % 2 !== 0 ? 'lg:col-start-3' : ''}`}>
                    <Image
                      src={loan.image}
                      alt={t(`loans.${loan.key}.name`)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r"></div>
                    <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {t(`loans.${loan.key}.name`)}
                      </h2>
                      <p className="text-white/90 text-lg">
                        {t(`loans.${loan.key}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Details Side */}
                  <div className={`lg:col-span-2 p-8 lg:p-12 ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Eligibility */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                            <User size={20} className="text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-bold text-gray-800 dark:text-white">
                            {t("common.eligibility")}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {loan.eligibility.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-green-500 mt-1 flex-shrink-0"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Documents */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <FileText size={20} className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="font-bold text-gray-800 dark:text-white">
                            {t("common.documents")}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {loan.documents.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-blue-500 mt-1 flex-shrink-0"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                            <CheckCircle2 size={20} className="text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="font-bold text-gray-800 dark:text-white">
                            {t("common.features")}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {loan.features.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-amber-500 mt-1 flex-shrink-0"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href="/contact">
                        {t("common.applyNow")}
                        <ArrowRight size={18} />
                      </Button>
                      <Button href="tel:+911234567890" variant="secondary">
                        <Phone size={18} />
                        {language === "en" ? "Call Now" : "आता कॉल करा"}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === "en"
              ? "Need Help Choosing the Right Loan?"
              : "योग्य कर्ज निवडण्यात मदत हवी आहे?"}
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            {language === "en"
              ? "Contact our experts for personalized assistance"
              : "वैयक्तिक मदतीसाठी आमच्या तज्ञांशी संपर्क साधा"}
          </p>
          <Button href="/contact" variant="outline" size="lg">
            {language === "en" ? "Contact Us" : "संपर्क साधा"}
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
}
