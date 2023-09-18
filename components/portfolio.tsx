"use client";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeInWhenInView";
import Link from "next/link";
import { Button } from "./ui/button";

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
      className="container flex items-center flex-col gap-5 h-screen pt-16"
    >
      <h1 className="scroll-m-20 text-4xl font-light tracking-tight mb-6">
        Check out some of my work
      </h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid grid-cols-2 gap-4 w-5/6 "
      >
        <div className="col-span-2 border h-40 flex gap-1 rounded ">
          <div className="flex items-center justify-evenly flex-col flex-1">
            <h2 className="text-center font-semibold text-xl">MealTracker</h2>
            <Button className="w-1/2 bg-red-500 text-white hover:opacity-90 transition-all">
              <Link target="_blank" href={GITHUB_LINKS[0]}>
                Check out the code{" "}
              </Link>
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
        <div className="col-span-1 border h-40 flex gap-1 rounded ">
          <div className="flex items-center justify-evenly flex-col flex-1">
            <h2 className="text-center font-semibold text-xl">Keystone</h2>
            <Button className="w-3/4 bg-red-500 text-white hover:opacity-90 transition-all">
              <Link target="_blank" href={GITHUB_LINKS[1]}>
                Check out the code
              </Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-2  justify-center text-sm p-4">
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
            <h2 className="text-center font-semibold text-xl">
              Idea generator
            </h2>
            <Button className="w-3/4 bg-red-500 text-white hover:opacity-90 transition-all">
              <Link target="_blank" href={GITHUB_LINKS[2]}>
                Check out the code
              </Link>
            </Button>
          </div>
          <div className="flex flex-col flex-1 gap-2  justify-center text-sm p-4">
            <span>
              Idea generator uses openAi APi to generate ideas for you to use
            </span>
            <span>
              This project was a fun way to learn about Next.js app directory
              structure and how to use the openAi API
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;
