"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";

function Portfolio() {
  const GITHUB_LINKS = [
    "https://github.com/awonfs/mealtracker",
    "https://github.com/awonfs/keystone",
    "https://github.com/awonfs/ideas-generator",
  ];
  const { ref, controls } = useFadeInWhenInView();
  return (
    <section
      id="portfolio"
      className="md:container flex items-center flex-col gap-5 h-auto md:h-screen pt-16 mt-48 md:mt-0"
    >
      <h1 className="scroll-m-20 text-xl md:text-4xl font-light tracking-tight md:mb-6">
        Check out some of my work
      </h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-5/6 "
      >
        <div className="md:col-span-2 border h-40 flex gap-4 rounded px-4 md:px-0">
          <div className="flex items-center justify-evenly flex-col flex-1">
            <h2 className="text-center font-semibold text-xl">MealTracker</h2>
            <Button className="w-full md:w-1/2 bg-red-500 text-white text-xs hover:opacity-90 transition-all">
              <Link target="_blank" href={GITHUB_LINKS[0]}>
                Check out the code{" "}
              </Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-2 items-center justify-center md:p-6 text-xs md:text-lg">
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
        <div className="col-span-1 border h-40 flex gap-1 rounded ">
          <div className="flex items-center justify-evenly flex-col flex-1">
            <h2 className="text-center font-semibold text-base md:text-xl">
              Keystone
            </h2>
            <Button className="w-3/4 bg-red-500 text-white text-xs hover:opacity-90 transition-all">
              <Link target="_blank" href={GITHUB_LINKS[1]}>
                Check out the code
              </Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-2  justify-center text-xs md:text-sm p-4">
            <span>
              Learn about keystone{" "}
              <Link
                className="text-red-500 underline"
                target="_blank"
                href="https://keystone-psi.vercel.app/about"
              >
                here
              </Link>
            </span>
            <span>
              Keystone is built with{" "}
              <span className="text-red-500">Next.js</span>,{" "}
              <span className="text-blue-300">TailwindCSS</span>,{" "}
              <span className="text-yellow-600">Prisma</span>,{" "}
              <span className="text-purple-500">Clerk</span> and{" "}
              <span className="text-yellow-500">Planetscale</span>
            </span>
          </div>
        </div>
        <div className="col-span-1 border h-40 flex gap-1 rounded ">
          <div className="flex items-center justify-evenly flex-col flex-1">
            <h2 className="text-center font-semibold text-base md:text-xl">
              Idea generator
            </h2>
            <Button className="w-3/4 bg-red-500 text-white text-xs hover:opacity-90 transition-all">
              <Link target="_blank" href={GITHUB_LINKS[1]}>
                Check out the code
              </Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-2  justify-center text-xs md:text-sm p-4">
            <span>
              Idea generator uses the openAi api to generate ideas for you
            </span>
            <span>
              This project was fun way to learn about the openAi api and Next.js
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
