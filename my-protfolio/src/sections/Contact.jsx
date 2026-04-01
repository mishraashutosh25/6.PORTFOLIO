import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../components/ui/InputField";

const contactSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    service: z.string().min(1, "Service is required"),
    budget: z.string().optional(),
    idea: z.string().min(1, "Please explain your idea"),
  })
  .superRefine((data, ctx) => {
    if (data.service !== "Others") {
      if (!data.budget) {
        ctx.addIssue({
          path: ["budget"],
          message: "Budget is required",
          code: z.ZodIssueCode.custom,
        });
      } else if (!/^\d+$/.test(data.budget)) {
        ctx.addIssue({
          path: ["budget"],
          message: "Budget must be numbers only",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const SERVICES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Mobile App Developer",
  "Software Engineer",
  "Others"
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", service: "", budget: "", idea: "" },
  });

  const selectedService = watch("service");

  const onSubmit = async (data) => {
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...data, from_name: data.name, reply_to: data.email },
        PUBLIC_KEY
      );
      setStatus("success");
      reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />

      <div className="w-full flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Astra"
            className="w-72 md:w-96 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          className="w-full md:w-1/2 bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            
            <InputField
              label="Your Name"
              name="name"
              placeholder="Your Name"
              register={register}
              error={errors.name}
            />

            <InputField
              label="Your Email"
              name="email"
              type="email"
              placeholder="Your Email"
              register={register}
              error={errors.email}
            />

            <InputField
              label="Service Needed"
              name="service"
              type="select"
              options={SERVICES}
              register={register}
              error={errors.service}
            />

            {selectedService && selectedService !== "Others" && (
              <InputField
                label="Budget"
                name="budget"
                placeholder="Your Budget (e.g., 5000)"
                register={register}
                error={errors.budget}
              />
            )}

            <InputField
              label="Explain Your Idea"
              name="idea"
              type="textarea"
              placeholder="Enter Your Idea"
              register={register}
              error={errors.idea}
            />

            {/* Status */}
            {status && (
              <p
                className={`text-sm px-4 py-2 rounded-md mt-3 w-fit transition-all duration-300
                ${
                  status === "success"
                    ? "text-green-400 bg-green-400/10 border border-green-400/30"
                    : status === "error"
                    ? "text-red-400 bg-red-400/10 border border-red-400/30"
                    : "text-yellow-300 bg-yellow-300/10 border border-yellow-300/30"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent successfully!"
                  : status === "error"
                  ? "Something went wrong!"
                  : ""}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting || status === "sending"}
              type="submit"
            >
              {isSubmitting || status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
