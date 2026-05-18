import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/portfolio";

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
          y: 60,
          opacity: 0,
          duration: 1.1,
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
            <a
              key={p.id}
              href={p.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative flex flex-col gap-6 overflow-hidden rounded-sm border border-line bg-bg-elev p-6 transition-all duration-500 hover:-translate-y-1 hover:border-(--card-accent)/60 md:p-8"
              data-cursor="view"
              data-cursor-label="Open"
              style={{ ["--card-accent" as string]: p.accent }}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--card-accent) 8%, transparent) 0%, transparent 60%)",
                }}
                aria-hidden
              />

              <div className="relative z-1 flex items-center justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
                <span className="text-fg">{p.index}</span>
                <span>{p.year}</span>
              </div>

              <div
                className="relative z-1 grid h-44 place-items-center overflow-hidden rounded-[3px] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005)),var(--color-bg)] md:h-45"
                aria-hidden
              >
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    backgroundPosition: "-1px -1px",
                  }}
                />
                <div className="relative flex flex-col items-center gap-3.5">
                  <span className="h-3 w-3 rounded-full bg-fg-mute transition-all duration-500 group-hover:bg-(--card-accent) group-hover:shadow-[0_0_24px_var(--card-accent)]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim">
                    /{p.id}
                  </span>
                </div>
              </div>

              <div className="relative z-1 flex flex-1 flex-col gap-3.5">
                <h3 className="text-[clamp(28px,3vw,38px)] font-normal leading-[1.05] tracking-[-0.02em] transition-colors duration-500 group-hover:text-(--card-accent)">
                  {p.title}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-(--card-accent)">
                  {p.role}
                </span>
                <p className="max-w-[52ch] text-[15px] leading-[1.55] text-fg-dim">
                  {p.description}
                </p>
              </div>

              <div className="relative z-1 flex items-end justify-between gap-4 border-t border-line pt-5">
                <ul className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-2.5 py-1.5 font-mono text-[10.5px] tracking-[0.06em] text-fg-dim transition-all duration-400 group-hover:border-line-strong group-hover:text-fg"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex h-11 w-11 shrink-0 rotate-[-25deg] items-center justify-center rounded-full border border-line-strong text-fg-dim transition-all duration-500 group-hover:rotate-0 group-hover:border-(--card-accent) group-hover:bg-(--card-accent) group-hover:text-black">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 15L15 5M15 5H7M15 5V13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
              </div>
            </a>
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
