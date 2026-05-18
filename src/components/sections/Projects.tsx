import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/portfolio";
import { ProjectCard } from "../projects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".projects-header > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".projects-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.55,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={root} className="relative py-25 md:py-40">
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="projects-header mb-16 grid items-end gap-8 border-b border-line pb-8 md:grid-cols-[auto_1fr_auto]">
          <span className="eyebrow">Selected Work — 03</span>
          <h2 className="h-section">
            Recent <span className="serif-italic">projects</span>
          </h2>
          <p className="serif-italic max-w-[320px] text-lg text-fg-dim md:text-right">
            A few things I've built lately. Hover for accent, click to open.
          </p>
        </div>

        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="flex justify-between border-t border-line pt-8 font-mono text-[11px] uppercase tracking-widest text-fg-dim">
          <span>— end of selection</span>
          <span>More on demand</span>
        </div>
      </div>
    </section>
  );
}
