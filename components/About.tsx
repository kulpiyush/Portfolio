"use client";

import { motion } from "framer-motion";
import { aboutSummary, stats } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight">
            About Me
            <span className="mt-2 block h-1 w-16 rounded-full bg-accent" />
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeInUp}
          className="mt-8 text-lg leading-relaxed text-gray-400"
        >
          {aboutSummary}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface px-4 py-6 text-center"
            >
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
