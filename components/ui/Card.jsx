"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardIcon({ icon: Icon, color = "amber" }) {
  const colors = {
    amber: "from-amber-500 to-amber-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
  };

  return (
    <div
      className={`w-16 h-16 bg-gradient-to-br ${colors[color]} rounded-xl flex items-center justify-center shadow-lg`}
    >
      <Icon size={28} className="text-white" />
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-xl font-bold text-gray-800 dark:text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-gray-600 dark:text-gray-400 ${className}`}>{children}</p>
  );
}

export function CardBadge({ children, variant = "primary" }) {
  const variants = {
    primary: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
    secondary: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
    success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}
