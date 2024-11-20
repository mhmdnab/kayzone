import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import RibbonSection from "./components/Ribbon";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <RibbonSection />
      <Services />
      <Portfolio />
    </div>
  );
}
