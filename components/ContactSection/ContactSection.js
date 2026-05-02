"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./schema";
import FormField from "./FormField";
import { motion } from "motion/react";

const ContactSection = () => {
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
        return;
      }

      reset();
      alert("Message sent successfully!");
    } catch (err) {
      setError("root", { message: "Network error. Please try again." });
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

          {/* Root-level error */}
          {errors.root && (
            <p className="text-red-500 text-sm text-center">
              {errors.root.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-[var(--primary-color)] text-[var(--background-color)] font-semibold shadow-md hover:bg-[var(--secondary-color)] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
