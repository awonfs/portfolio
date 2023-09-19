"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";
import ContactForm from "./contact-form";

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
        <div className="flex flex-col text-center gap-2 ">
          <ContactForm />
          <div className="flex items-center gap-2 justify-center mt-4">
            <Separator />
            <span className="text-red-500">or </span>
            <Separator />
          </div>
          <span className="block">You can also find me on </span>
          <div className="flex gap-4 justify-center tems-center">
            <Link target="_blank" href="https://github.com/awonfs">
              <Github className="inline-block" size={24} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/eetu-r%C3%B6nkk%C3%B6-433289246/"
            >
              <Linkedin className="inline-block" size={24} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
