"use client";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";
import Link from "next/link";
import { Button } from "./ui/button";

function Portfolio() {
  const GITHUB_LINKS = ["https://github.com/awonfs/mealtracker"];
  const { ref, controls } = useFadeInWhenInView();
  return (
    <section
      id="portfolio"
      className="container flex items-center flex-col gap-5 h-screen pt-16"
    >
      <h1 className="scroll-m-20 text-4xl font-light tracking-tight mb-6">
        Check out some of my work
      </h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid grid-cols-2 gap-4 w-2/3"
      >
        <div className="col-span-2 border h-40 flex gap-1 rounded hover:cursor-pointer">
          <div className="flex items-center justify-evenly flex-col flex-1">
            <h2 className="text-center font-semibold text-xl">MealTracker</h2>
            <Button className="w-2/3">
              <Link href={GITHUB_LINKS[0]}>Code</Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-2 items-center justify-center p-6">
            <span>
              A web app that allows users to track their meals on a week by week
              basis.
            </span>
            <span>
              The app is built with{" "}
              <span className="text-red-500">Next.js</span>,{" "}
              <span className="text-blue-300">TailwindCSS</span>,{" "}
              <span className="text-green-500">Drizzle</span>,{" "}
              <span className="text-blue-500">tRPC</span> and{" "}
              <span className="text-yellow-500">Sqlite</span>
            </span>
          </div>
        </div>
        <div className="col-span-1 bg-green-500 h-20">Bottom Left Div</div>
        <div className="col-span-1 bg-red-500 h-20">Bottom Right Div</div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
