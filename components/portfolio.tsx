"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Portfolio() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);
  return (
    <section
      id="portfolio"
      className="container flex items-center flex-col gap-5 h-screen pt-16 border border-red-500 border-dashed"
    >
      <h4 className="text-start scroll-m-20 text-4xl font-light tracking-tight mb-6">
        Check out some of my work
      </h4>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid grid-cols-2 gap-4 w-2/3"
      >
        <motion.div className="col-span-2 bg-blue-500 h-20">
          Top Long Div
        </motion.div>
        <motion.div className="col-span-1 bg-green-500 h-20">
          Bottom Left Div
        </motion.div>
        <motion.div className="col-span-1 bg-red-500 h-20">
          Bottom Right Div
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
