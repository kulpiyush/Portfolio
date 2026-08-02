"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

interface HireMeProps {
  isOpen: boolean;
  onClose: () => void;
}

const roleOptions = [
  "Data Engineer",
  "AI Engineer",
  "Data Scientist",
  "AI Consultant",
  "Other",
];

const inputClasses =
  "w-full rounded-lg border border-border bg-surface-light px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-shadow focus:ring-2 focus:ring-accent";

export default function HireMe({ isOpen, onClose }: HireMeProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSuccess(false);
      setError("");
      setLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d04b00f1-09b8-4583-8bd2-3052f5d4ce4d",
          name,
          email,
          role,
          message,
          subject: `Hire Me Inquiry — ${role}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setRole("");
        setMessage("");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 transition-colors hover:bg-surface-light hover:text-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1,
                  }}
                >
                  <CheckCircle size={64} className="text-accent" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white">
                  Let&apos;s Work Together
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Fill out the form below and I&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="hire-name"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="hire-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hire-email"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      id="hire-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClasses}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hire-role"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      What role are you hiring for?
                    </label>
                    <select
                      id="hire-role"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className={`${inputClasses} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
                      {roleOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="hire-message"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Brief message
                    </label>
                    <textarea
                      id="hire-message"
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-accent py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
