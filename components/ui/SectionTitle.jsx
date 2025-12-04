"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gray-800 dark:text-white"
        }`}
      >
        <span className="text-amber-500">✦</span> {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
