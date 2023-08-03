/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import LandingPage from "@/components/landing-page";
import About from "@/components/about";
export default function Home() {
  return (
    <main className="h-screen">
      <LandingPage />
      <About />
    </main>
  );
}
