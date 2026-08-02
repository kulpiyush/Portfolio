"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, MapPin } from "lucide-react";
import { achievements, education } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  const [certification, publication] = achievements;

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Education & Certifications
            <span className="mx-auto mt-2 block h-1 w-16 rounded-full bg-accent" />
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-6">
          {education.map((entry, index) => (
            <motion.div
              key={entry.degree}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{entry.degree}</h3>
                  <p className="mt-1 text-accent">{entry.institution}</p>
                </div>
                <div className="mt-2 shrink-0 text-right sm:mt-0">
                  <p className="text-sm text-gray-500">{entry.period}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-gray-500 sm:justify-end">
                    <MapPin size={12} className="shrink-0" />
                    {entry.location}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {entry.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-surface-light px-3 py-1 text-xs text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeInUp}
          className="mt-12"
        >
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-300">
            Achievements & Certifications
          </h3>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
              <Award size={20} className="shrink-0 text-accent" />
              <span className="text-sm text-gray-300">{certification}</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
              <BookOpen size={20} className="shrink-0 text-accent" />
              <span className="text-sm text-gray-300">{publication}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
