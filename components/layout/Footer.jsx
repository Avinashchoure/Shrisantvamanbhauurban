"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.loans"), href: "/loans" },
    { name: t("nav.savings"), href: "/savings" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const loanLinks = [
    { name: t("loans.goldLoan.name"), href: "/loans#gold" },
    { name: t("loans.salaryLoan.name"), href: "/loans#salary" },
    { name: t("loans.mortgageLoan.name"), href: "/loans#mortgage" },
    { name: t("loans.personalLoan.name"), href: "/loans#personal" },
  ];

  const savingLinks = [
    { name: t("savings.rd.name"), href: "/savings#rd" },
    { name: t("savings.fd.name"), href: "/savings#fd" },
    { name: t("savings.moneyDouble.name"), href: "/savings#double" },
    { name: t("savings.sukanya.name"), href: "/savings#sukanya" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Bank Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/main logo.png"
                  alt="Bank Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">{t("bank.shortName")}</h3>
                <p className="text-amber-400 text-sm">{t("bank.since")}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("bank.mission")}
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              {t("footer.quickLinks")}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Schemes */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              {t("loans.title")}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {loanLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              {t("footer.contactInfo")}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{t("contact.address")}</p>
                  <p className="text-gray-400 text-sm">
                    Patoda Main Road, Near Bus Stand,
                    <br />
                    Patoda, Dist. Beed,
                    <br />
                    Maharashtra - 414204
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amber-500" />
                <div>
                  <p className="font-medium">+ 91 9881845484</p>
                  <p className="text-gray-400 text-sm">02444-295777</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-amber-500" />
                <p>vamanbhaus@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-amber-500 mt-1" />
                <div>
                  <p className="font-medium">{t("contact.timing")}</p>
                  <p className="text-gray-400 text-sm">
                    {t("contact.mondayFriday")}
                    <br />
                    {t("contact.morningTime")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t("footer.copyright")}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
