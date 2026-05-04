"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./schema";
import FormField from "./FormField";
import { motion } from "motion/react";
import { Transition } from "@headlessui/react";
import { FiCheckCircle } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";

const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError("root", {
          message: result.message || "Something went wrong.",
        });
        setSubmitStatus("error");
        return;
      }

      reset();
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (err) {
      setError("root", { message: "Network error. Please try again." });
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        {/* Success Banner */}
        <Transition
          show={submitStatus === "success"}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400">
            <FiCheckCircle size={20} className="flex-shrink-0" />
            <p className="text-sm font-medium">
              Message sent! I'll get back to you soon.
            </p>
          </div>
        </Transition>

        {/* Error Banner */}
        <Transition
          show={submitStatus === "error"}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400">
            <BiErrorCircle size={20} className="flex-shrink-0" />
            <p className="text-sm font-medium">
              {errors.root?.message ||
                "Something went wrong. Please try again."}
            </p>
          </div>
        </Transition>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="First Name" error={errors.firstName?.message}>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-[var(--primary-color)] focus:outline-none focus:border-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition"
              />
            </FormField>
            <FormField label="Last Name" error={errors.lastName?.message}>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-[var(--primary-color)] focus:outline-none focus:border-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition"
              />
            </FormField>
          </div>

          {/* Email */}
          <FormField label="Email" error={errors.email?.message}>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-2 rounded-full bg-transparent border border-white/30 text-[var(--primary-color)] focus:outline-none focus:border-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition"
            />
          </FormField>

          {/* Message */}
          <FormField label="Message" error={errors.message?.message}>
            <textarea
              placeholder="Your Message"
              rows={4}
              {...register("message")}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 text-[var(--primary-color)] focus:outline-none focus:border-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition"
            />
          </FormField>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-[var(--primary-color)] text-[var(--background-color)] font-semibold shadow-md hover:bg-[var(--secondary-color)] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
