
import HeroSection from "./components/HeroSection";
import ProgramsRibbon from "./components/ProgramsRibbon";
import Services from "./components/Services";

import FiveSteps from "./components/FiveSteps";
import Testimonials from "./components/Testimonial";
import PortfolioHeader from "./components/PortfolioHeader";
import InfiniteMarquee from "./components/LetsTalk";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center min-h-screen max-w-full">
      <Navbar/>
      <div className="px-64 py-8">
        <HeroSection />
      </div>
      <ProgramsRibbon />
      <Services/>
      {/* <MyProjects/> */}
      <FiveSteps/>
      <Testimonials/>
      <PortfolioHeader/>
      <InfiniteMarquee/>
    </div>

  );
}
