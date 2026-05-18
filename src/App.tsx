import { useEffect, useState } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { Loader } from "./components/Loader";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    } else {
      document.documentElement.style.overflow = "hidden";
    }
  }, [loaded]);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <SmoothScroll />
          <CustomCursor />
          <div className="grain" />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
