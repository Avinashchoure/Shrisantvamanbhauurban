"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import {
  Clock,
  Smartphone,
  CreditCard,
  Shield,
  Building2,
  FileText,
  Banknote,
  Send,
  Lock,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  const quickServices = [
    {
      name: language === "en" ? "Amount Deposited" : "रक्कम जमा",
      time: language === "en" ? "7 Minutes" : "७ मिनिटे",
      icon: "💰",
    },
    {
      name: language === "en" ? "Amount Withdraw" : "रक्कम काढणे",
      time: language === "en" ? "7 Minutes" : "७ मिनिटे",
      icon: "💵",
    },
    {
      name: language === "en" ? "New Account Opening" : "नवीन खाते उघडणे",
      time: language === "en" ? "15 Minutes" : "१५ मिनिटे",
      icon: "📋",
    },
    {
      name: language === "en" ? "RTGS/NEFT/DD" : "RTGS/NEFT/DD",
      time: language === "en" ? "10 Minutes" : "१० मिनिटे",
      icon: "🏦",
    },
    {
      name: language === "en" ? "Gold Loan" : "सोने कर्ज",
      time: language === "en" ? "30 Minutes" : "३० मिनिटे",
      icon: "🪙",
    },
    {
      name: language === "en" ? "Loan Against Deposits" : "ठेवीवर कर्ज",
      time: language === "en" ? "15 Minutes" : "१५ मिनिटे",
      icon: "📑",
    },
    {
      name: language === "en" ? "Passbook Update" : "पासबुक अपडेट",
      time: language === "en" ? "7 Minutes" : "७ मिनिटे",
      icon: "📒",
    },
    {
      name: language === "en" ? "FD Withdraw" : "FD काढणे",
      time: language === "en" ? "15 Minutes" : "१५ मिनिटे",
      icon: "🔓",
    },
    {
      name: language === "en" ? "Loan Facility" : "कर्ज सुविधा",
      time: language === "en" ? "6 Days" : "६ दिवस",
      icon: "✅",
    },
  ];

  const mainServices = [
    {
      title: language === "en" ? "Mobile Banking" : "मोबाईल बँकिंग",
      description:
        language === "en"
          ? "Access your account anytime, anywhere with our mobile banking app. Check balance, transfer funds, and more."
          : "आमच्या मोबाईल बँकिंग ॲपसह कधीही, कुठेही तुमच्या खात्यात प्रवेश करा. शिल्लक तपासा, निधी हस्तांतरित करा आणि बरेच काही.",
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      features:
        language === "en"
          ? ["Balance Enquiry", "Fund Transfer", "Mini Statement", "Bill Payment"]
          : ["शिल्लक चौकशी", "निधी हस्तांतरण", "मिनी स्टेटमेंट", "बिल पेमेंट"],
    },
    {
      title: language === "en" ? "ATM Services" : "ATM सेवा",
      description:
        language === "en"
          ? "Withdraw cash anytime with our ATM facility. Compatible with all major bank cards."
          : "आमच्या ATM सुविधेसह कधीही रोख रक्कम काढा. सर्व प्रमुख बँक कार्डांशी सुसंगत.",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
      features:
        language === "en"
          ? ["24/7 Access", "No Transaction Charges", "Cash Withdrawal", "Balance Check"]
          : ["२४/७ प्रवेश", "कोणतेही व्यवहार शुल्क नाही", "रोख काढणे", "शिल्लक तपासणी"],
    },
    {
      title: language === "en" ? "Locker Facility" : "लॉकर सुविधा",
      description:
        language === "en"
          ? "Keep your valuables safe and secure in our bank lockers. Available in multiple sizes."
          : "आमच्या बँक लॉकरमध्ये तुमची मौल्यवान वस्तू सुरक्षित ठेवा. अनेक आकारांमध्ये उपलब्ध.",
      icon: Lock,
      color: "from-purple-500 to-purple-600",
      features:
        language === "en"
          ? ["High Security", "Multiple Sizes", "Annual Rental", "Insurance Option"]
          : ["उच्च सुरक्षा", "अनेक आकार", "वार्षिक भाडे", "विमा पर्याय"],
    },
    {
      title: language === "en" ? "RTGS/NEFT" : "RTGS/NEFT",
      description:
        language === "en"
          ? "Fast and secure fund transfer to any bank in India through RTGS and NEFT."
          : "RTGS आणि NEFT द्वारे भारतातील कोणत्याही बँकेत जलद आणि सुरक्षित निधी हस्तांतरण.",
      icon: Send,
      color: "from-amber-500 to-amber-600",
      features:
        language === "en"
          ? ["Same Day Transfer", "Low Charges", "High Limit", "Secure Transaction"]
          : ["त्याच दिवशी हस्तांतरण", "कमी शुल्क", "उच्च मर्यादा", "सुरक्षित व्यवहार"],
    },
    {
      title: language === "en" ? "Demand Draft" : "डिमांड ड्राफ्ट",
      description:
        language === "en"
          ? "Issue demand drafts for secure payments. Widely accepted for official transactions."
          : "सुरक्षित पेमेंटसाठी डिमांड ड्राफ्ट जारी करा. अधिकृत व्यवहारांसाठी मोठ्या प्रमाणावर स्वीकारले.",
      icon: FileText,
      color: "from-pink-500 to-pink-600",
      features:
        language === "en"
          ? ["Quick Issue", "Nationwide Valid", "Secure", "Low Charges"]
          : ["जलद जारी", "देशव्यापी वैध", "सुरक्षित", "कमी शुल्क"],
    },
    {
      title: language === "en" ? "Customer Support" : "ग्राहक समर्थन",
      description:
        language === "en"
          ? "Our dedicated team is always ready to help you with any banking queries."
          : "आमची समर्पित टीम तुम्हाला कोणत्याही बँकिंग प्रश्नांमध्ये मदत करण्यासाठी नेहमी तयार असते.",
      icon: HeadphonesIcon,
      color: "from-red-500 to-red-600",
      features:
        language === "en"
          ? ["Phone Support", "Email Support", "Branch Visit", "Quick Resolution"]
          : ["फोन समर्थन", "ईमेल समर्थन", "शाखा भेट", "जलद निराकरण"],
    },
  ];

  const bankFeatures = [
    { icon: Building2, text: language === "en" ? "Own Building" : "स्वतःची इमारत" },
    {
      icon: Shield,
      text: language === "en" ? "Complete Online Transactions" : "संपूर्ण ऑनलाईन व्यवहार",
    },
    {
      icon: HeadphonesIcon,
      text: language === "en" ? "Prompt & Humble Service" : "तत्पर व विनम्र सेवा",
    },
    { icon: CreditCard, text: language === "en" ? "ATM & Locker Facility" : "ATM व लॉकर सुविधा" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("services.title")}
            </h1>
            <p className="text-xl text-blue-100">{t("services.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === "en" ? "Quick Service Commitment" : "जलद सेवा वचनबद्धता"}
            subtitle={
              language === "en"
                ? "We value your time - here's our service time commitment"
                : "आम्ही तुमच्या वेळेचे मूल्य देतो - येथे आमची सेवा वेळ वचनबद्धता आहे"
            }
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <Clock size={16} />
                      <span className="font-medium">{service.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === "en" ? "Our Banking Services" : "आमच्या बँकिंग सेवा"}
            subtitle={
              language === "en"
                ? "Comprehensive banking solutions for all your needs"
                : "तुमच्या सर्व गरजांसाठी सर्वसमावेशक बँकिंग सोल्यूशन्स"
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${service.color} p-6`}>
                  <service.icon size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-green-500 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Features */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === "en" ? "Why Choose Us?" : "आम्हाला का निवडा?"}
            subtitle={
              language === "en"
                ? "Features that make us your ideal banking partner"
                : "जी वैशिष्ट्ये आम्हाला तुमचा आदर्श बँकिंग भागीदार बनवतात"
            }
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bankFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <feature.icon
                  size={48}
                  className="mx-auto mb-4 text-white"
                />
                <p className="text-white font-semibold">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {language === "en"
              ? "Need More Information?"
              : "अधिक माहिती हवी आहे?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            {language === "en"
              ? "Contact us or visit our nearest branch"
              : "आमच्याशी संपर्क साधा किंवा आमच्या जवळच्या शाखेला भेट द्या"}
          </p>
          <Button href="/contact" size="lg">
            {language === "en" ? "Contact Us" : "संपर्क साधा"}
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
}
