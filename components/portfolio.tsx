"use client";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";

function Portfolio() {
  const { ref, controls } = useFadeInWhenInView();
  return (
    <section
      id="portfolio"
      className="container flex items-center flex-col gap-5 h-screen pt-16 border border-red-500 border-dashed"
    >
      <h4 className="scroll-m-20 text-4xl font-light tracking-tight mb-6">
        Check out some of my work
      </h4>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid grid-cols-2 gap-4 w-2/3"
      >
        <div className="col-span-2 bg-blue-500 h-20 hover:cursor-pointer">
          Top Long Div
        </div>
        <div className="col-span-1 bg-green-500 h-20">Bottom Left Div</div>
        <div className="col-span-1 bg-red-500 h-20">Bottom Right Div</div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
