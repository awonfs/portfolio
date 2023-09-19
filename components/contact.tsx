"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";

function Contact() {
  const { ref, controls } = useFadeInWhenInView();
  return (
    <section
      id="contact"
      className="md:container flex items-center flex-col gap-5 h-screen pt-16 mt-32 md:mt-0"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className=""
      >
        <h1 className="scroll-m-20 text-xl md:text-4xl font-light tracking-tight md:mb-6">
          Contact me
        </h1>
      </motion.div>
    </section>
  );
}

export default Contact;
