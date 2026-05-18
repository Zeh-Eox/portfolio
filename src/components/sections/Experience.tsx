import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../data/portfolio";

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
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={root}
      className="relative py-25 md:py-40"
    >
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
              <li
                key={i}
                className="exp-row group relative grid items-start border-b border-line py-12 md:grid-cols-[180px_24px_1fr]"
              >
                <span className="font-mono text-[12px] uppercase tracking-widest text-fg-dim md:pt-1.5">
                  {e.year}
                </span>

                <span
                  className="absolute top-14 left-45 z-1 hidden h-2.75 w-2.75 -translate-x-1.25 rounded-full border border-line-strong bg-bg transition-colors duration-400 group-hover:border-accent group-hover:bg-accent md:block"
                  aria-hidden
                />

                <div className="md:col-start-3 md:pl-8">
                  <h3 className="mb-3 text-[clamp(20px,2.4vw,28px)] font-normal tracking-[-0.01em]">
                    {e.title}
                    <span className="serif-italic text-fg-dim"> — {e.company}</span>
                  </h3>
                  <p className="mb-4 max-w-160 text-[15px] leading-[1.6] text-fg-dim">
                    {e.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-block rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-fg-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
