/* eslint-disable react/no-unescaped-entities */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function About() {
  return (
    <section id="about" className="flex mt-4 h-screen ">
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
              <TabsTrigger className="text-red-500" value="skills">
                Skills
              </TabsTrigger>
              <TabsTrigger className="text-yellow-500" value="expereience">
                Experiences
              </TabsTrigger>
              <TabsTrigger className="text-green-500" value="education">
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="skills"></TabsContent>
            <TabsContent value="expereience"></TabsContent>
            <TabsContent value="education"></TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default About;
