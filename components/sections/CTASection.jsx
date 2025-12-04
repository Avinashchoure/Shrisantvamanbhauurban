"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {language === "en"
              ? "Ready to Start Your Financial Journey?"
              : "तुमचा आर्थिक प्रवास सुरू करण्यास तयार आहात?"}
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            {language === "en"
              ? "Open an account today and enjoy the best interest rates in the region"
              : "आज खाते उघडा आणि या प्रदेशातील सर्वोत्तम व्याज दरांचा आनंद घ्या"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="outline" size="lg">
              {language === "en" ? "Open Account" : "खाते उघडा"}
              <ArrowRight size={20} />
            </Button>
            <Button
              href="tel:+911234567890"
              variant="outline"
              size="lg"
              className="bg-white/20"
            >
              <Phone size={20} />
              {language === "en" ? "Call Now" : "आता कॉल करा"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
