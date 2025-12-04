"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        setError(language === "en" ? "Failed to send message. Please try again." : "संदेश पाठवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
      }
    } catch (err) {
      setError(language === "en" ? "Something went wrong. Please try again." : "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const branches = [
    {
      name: language === "en" ? "Head Office - Patoda" : "मुख्य कार्यालय - पाटोदा",
      address:
        language === "en"
          ? "Main Road, Near Bus Stand, Patoda, Dist. Beed, Maharashtra - 414204"
          : "मुख्य रस्ता, बस स्टँड जवळ, पाटोदा, जि. बीड, महाराष्ट्र - ४१४२०४",
      phone: ["+ 91 9881845484", "02444-295777"],
      email: "vamanbhaus@gmail.com",
      isMain: true,
    },
   
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-500 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-amber-100">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {language === "en" ? "Send us a Message" : "आम्हाला संदेश पाठवा"}
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 size={64} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {language === "en" ? "Message Sent!" : "संदेश पाठवला!"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "en"
                      ? "We'll get back to you soon."
                      : "आम्ही लवकरच तुमच्याशी संपर्क साधू."}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        {t("contact.form.subject")}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {language === "en" ? "Sending..." : "पाठवत आहे..."}
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Office Timing */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                    <Clock size={24} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {t("contact.timing")}
                  </h3>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>{t("contact.mondayFriday")}</span>
                    <span className="font-medium">{t("contact.morningTime")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.saturday")}</span>
                    <span className="font-medium">{t("contact.saturdayTime")}</span>
                  </div>
                  <div className="flex justify-between text-red-500">
                    <span>{t("contact.sunday")}</span>
                    <span className="font-medium">
                      {language === "en" ? "Closed" : "बंद"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Branches */}
              {branches.map((branch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 ${
                    branch.isMain ? "ring-2 ring-amber-500" : ""
                  }`}
                >
                  {branch.isMain && (
                    <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {language === "en" ? "Main Branch" : "मुख्य शाखा"}
                    </span>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                      <Building2
                        size={24}
                        className="text-amber-600 dark:text-amber-400"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {branch.name}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <MapPin
                        size={18}
                        className="text-amber-500 mt-1 flex-shrink-0"
                      />
                      <p>{branch.address}</p>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <Phone size={18} className="text-amber-500 mt-1" />
                      <div>
                        {branch.phone.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <Mail size={18} className="text-amber-500" />
                      <p>{branch.email}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={language === "en" ? "Find Us" : "आम्हाला शोधा"}
            subtitle={
              language === "en"
                ? "Visit our branch for personalized service"
                : "वैयक्तिक सेवेसाठी आमच्या शाखेला भेट द्या"
            }
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  size={64}
                  className="mx-auto mb-4 text-amber-600 dark:text-amber-400"
                />
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {language === "en"
                    ? "Google Map will be embedded here"
                    : "गूगल मॅप येथे एम्बेड केला जाईल"}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                  Patoda, Dist. Beed, Maharashtra - 414204
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
