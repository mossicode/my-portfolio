import Hero from "../Hero";
import Experience from "../Experience";
import Projects from "../Projects";
import Skills from "../Skills";
import Contact from "../Contact";

function RightSidebar() {
  return (
    <div className="w-full flex flex-col flex-1 md:mt-4">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  ); 
}

export default RightSidebar;