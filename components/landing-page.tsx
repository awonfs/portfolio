/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";
import { CornerRightDown } from "lucide-react";
import Link from "next/link";

function LandingPage() {
  const { ref, controls } = useFadeInWhenInView();

  return (
    <section
      id="home"
      className="flex flex-col items-center mt-20 min-h-screen"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="flex flex-col gap-0.5 items-center justify-center text-center"
      >
        <h2 className="text-6xl md:text-9xl font-thin">
          Hi, I'm <span className="text-red-500">Eetu</span>
        </h2>
        <span className="text-xs leading-7 md:text-2xl">
          I'm a <span className="text-red-500">Full stack developer</span> /{" "}
          <span className="text-yellow-500">Security system installer</span>
        </span>
      </motion.div>
    </section>
  );
}

export default LandingPage;
