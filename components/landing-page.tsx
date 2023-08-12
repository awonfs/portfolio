/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import programicon from "../assets/programicon.png";

function LandingPage() {
  return (
    <section id="home" className="flex flex-col items-center h-5/6 mt-12 pt-8">
      <div className="flex w-full justify-evenly ">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-6xl md:text-8xl font-thin">
            Hi, I'm <span className="text-red-500">Eetu</span>
          </h2>
          <span className="ml-1 text-sm leading-7 md:ml-10 md:text-xl ">
            I'm a <span className="text-red-500">Full stack developer</span> /{" "}
            <span className="text-yellow-500">Security system installer</span>
          </span>
        </div>
        <div className="flex">
          <Image
            className=""
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
