"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Experience
            <span className="mt-2 block h-1 w-16 rounded-full bg-accent" />
          </h2>
        </motion.div>

        <div className="relative mt-12">
          {/* Vertical timeline line — hidden on mobile */}
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border sm:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInLeft}
                className="relative sm:pl-10"
              >
                {/* Timeline dot — hidden on mobile */}
                <div
                  className="absolute left-0 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:block"
                  aria-hidden="true"
                />

                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="mt-1 text-accent">{exp.company}</p>
                    </div>
                    <div className="mt-2 shrink-0 text-right sm:mt-0">
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <p className="mt-0.5 flex items-center gap-1 text-sm text-gray-500 sm:justify-end">
                        <MapPin size={12} className="shrink-0" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 40)}
                        className="flex gap-2 text-sm leading-relaxed text-gray-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
