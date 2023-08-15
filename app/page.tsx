import LandingPage from "@/components/landing-page";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
export default function Home() {
  return (
    <main className="h-screen">
      <LandingPage />
      <About />
      <Portfolio />
    </main>
  );
}
