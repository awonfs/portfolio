/* eslint-disable react/no-unescaped-entities */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabCard from "./cards/tab-card";

function About() {
  return (
    <section id="about-me" className="flex h-screen pt-16 mt-16">
      <div className="flex justify-evenly w-full gap-4">
        <div className="w-1/2 break-normal">
          <h3 className="scroll-m-20 text-5xl font-light tracking-tight">
            About <span className="text-red-500">me</span>
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am a 25 years old developer from Finland. I am starting my
            bachelors degree in Computer Science this august.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            I have been working as as security system installer for 4,5 years
            now. I have specialized in critical infrastructure projects such as
            hospitals, banks, and large-scale ventures like office buildings and
            educational institutions. My expertise lies in installing a variety
            of security systems, including access control systems, CCTV, and
            alarm systems. Beyond the technical aspects of my work, I have also
            trained few new installers, passing on the skills and knowledge that
            I've acquired over the years.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            I have been interested in technology always and since early 2022 i
            have been programming as a hobby. I am looking forward to change my
            field of work to web development in the future.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Tabs defaultValue="skills" className="">
            <TabsList className="px-3">
              <TabsTrigger
                className="text-red-500 text-xl focus:text-2xl"
                value="skills"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                className="text-yellow-500 text-xl focus:text-2xl"
                value="expereience"
              >
                Experiences
              </TabsTrigger>
              <TabsTrigger
                className="text-green-500 text-xl focus:text-2xl"
                value="education"
              >
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <TabCard
                title="Skills"
                titleColor="text-red-500"
                listWords={[
                  "Typescript",
                  "Next.js",
                  "TailwindCSS",
                  "Git",
                  "Node.js",
                  "Express.js",
                  "REST",
                  "Prisma",
                  "PostgreSQL",
                  "Access control systems",
                  "CCTV",
                  "Alarm systems",
                ]}
              />
            </TabsContent>
            <TabsContent value="expereience">
              <TabCard
                title="Experiences"
                titleColor="text-yellow-500"
                listWords={["Security system installer (2019 - present)"]}
              />
            </TabsContent>
            <TabsContent value="education">
              <TabCard
                title="Education"
                titleColor="text-green-500"
                listWords={[
                  "ICT @RPKK (2015 - 2018)",
                  "BBA in Computer Science @HAMK (2023 - 2026)",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default About;
