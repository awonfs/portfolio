/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import programicon from "../assets/programicon.png";
import { CornerRightDown } from "lucide-react";
import Link from "next/link";

function LandingPage() {
  return (
    <section id="home" className="flex flex-col items-center min-h-screen mt-6">
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center">
        <div className="flex flex-col gap-2 items-center mb-4 md:mb-0 h-2/3">
          <h2 className="text-6xl md:text-8xl font-thin">
            Hi, I'm <span className="text-red-500">Eetu</span>
          </h2>
          <span className="ml-1 text-xs leading-7 md:ml-10 md:text-xl">
            I'm a <span className="text-red-500">Full stack developer</span> /{" "}
            <span className="text-yellow-500">Security system installer</span>
          </span>
          <div className="flex w-full relative md:mt-4">
            <h3 className="scroll-m-20 tracking-tight font-light ml-4 text-sm md:text-2xl md:ml-10">
              Learn more about{" "}
              <span className="text-red-500 font-light border-b border-red-500">
                <Link href="#about">me</Link>
              </span>{" "}
              down below
            </h3>
            <div className="absolute right-0 top-0 md:top-2 md:right-10">
              <Link href="#about">
                <CornerRightDown className="w-16 h-16 text-red-700" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0">
          <Image
            src={programicon}
            alt="landing icon"
            height={320}
            width={310}
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
