import LandingPage from "@/components/landing-page";
import About from "@/components/about";
import Services from "@/components/services";
export default function Home() {
  return (
    <main className="h-screen">
      <LandingPage />
      <About />
    </main>
  );
}
