import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutBio } from "../about/AboutBio";
import { AboutPanel } from "../about/AboutPanel";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".about-word");
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.03,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );

      gsap.from(".about-panel-item", {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".about-panel", start: "top 80%" },
      });

      gsap.fromTo(
        ".about-sig-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".about-sig", start: "top 80%" },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative py-25 md:py-40">
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="mb-16 flex items-center justify-between font-mono text-[12px] uppercase tracking-widest text-fg-dim">
          <span className="eyebrow">About — 01</span>
          <div>/me</div>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.55fr_1fr] lg:gap-20">
          <AboutBio />
          <AboutPanel />
        </div>
      </div>
    </section>
  );
}
