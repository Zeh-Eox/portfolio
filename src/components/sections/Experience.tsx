import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../data/portfolio";
import { ExperienceRow } from "../experience/ExperienceRow";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".exp-row", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".exp-list", start: "top 80%" },
      });

      gsap.fromTo(
        ".exp-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.8,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="relative py-25 md:py-40">
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="mb-20 grid gap-4 border-b border-line pb-8">
          <span className="eyebrow">Path — 04</span>
          <h2 className="h-section">
            From there <span className="serif-italic">to here</span>
          </h2>
        </div>

        <div className="relative grid">
          <div className="absolute top-0 bottom-0 left-45 z-0 hidden w-px bg-line md:block">
            <div className="exp-line-fill absolute inset-0 origin-top bg-accent" />
          </div>

          <ul className="exp-list relative list-none">
            {experiences.map((e, i) => (
              <ExperienceRow key={i} entry={e} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
