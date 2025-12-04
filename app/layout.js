import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shri Sant Vamanbhau Urban Co - Credit Society  Limited  - Your Trusted Banking Partner",
  description:
    "Building the Economic Capacity of the Indian People Through Saving and Financial Literacy. Explore our loan schemes, saving facilities, and more.",
  keywords:
    "Shri Sant Vamanbhau Urban Co - Credit Society  Limited , bank, patoda, urban bank, loan, savings, gold loan, fixed deposit, RD, FD, Maharashtra, Beed",
  authors: [{ name: "Shri Sant Vamanbhau Urban Co - Credit Society  Limited " }],
  openGraph: {
    title: "Shri Sant Vamanbhau Urban Co - Credit Society  Limited ",
    description:
      "Your Trusted Banking Partner - Building Trust, Securing Future",
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    images: ["/big logo.jpeg"],
  },
  icons: {
    icon: "/main logo.png",
    apple: "/main logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
