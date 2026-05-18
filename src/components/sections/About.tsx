import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

type Seg = { text: string; italic?: boolean };

const bioSegments: Seg[] = [
  { text: "I'm a" },
  { text: "full-stack developer", italic: true },
  { text: "obsessed with the intersection of" },
  { text: "code & craft.", italic: true },
  {
    text: "I build fast, accessible web products with thoughtful motion and a sharp eye for detail.",
  },
  {
    text: "From APIs to pixels, I love shipping things that don't just work —",
  },
  { text: "they feel right.", italic: true },
  {
    text: "Currently exploring Backend Engineering, Cloud - DevOps and Open Source.",
  },
];

const focusItems = [
  "Backend Engineering",
  "System Design",
  "Cloud & DevOps",
  "Platform Engineering",
  "Open Source",
];

const stats = [
  { num: "02+", label: "Years coding" },
  { num: "08+", label: "Projects shipped" },
  { num: "12", label: "Stacks fluent" },
];

function Equalizer() {
  const bars = 28;
  return (
    <div className="flex h-8 items-end gap-0.75">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="block w-0.75 origin-bottom rounded-[1px] bg-accent/80"
          animate={{
            scaleY: [0.2, 1, 0.4, 0.8, 0.3, 0.6, 0.2],
          }}
          style={{ height: "100%" }}
          transition={{
            duration: 1.6 + (i % 6) * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i * 0.07) % 1.4,
          }}
        />
      ))}
    </div>
  );
}

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
          {/* LEFT — bio */}
          <div className="relative">
            <span
              className="pointer-events-none absolute -top-12 -left-3 select-none font-serif text-[180px] leading-none text-accent/15 md:text-[240px]"
              aria-hidden
            >
              &ldquo;
            </span>

            <div className="about-text relative max-w-205 text-[clamp(24px,3.5vw,46px)] font-normal leading-tight tracking-[-0.02em]">
              {bioSegments.map((seg, si) =>
                seg.text.split(" ").map((w, wi) => (
                  <span
                    key={`${si}-${wi}`}
                    className={`about-word ${
                      seg.italic ? "serif-italic text-accent" : ""
                    }`}
                    style={{ marginRight: "0.05em" }}
                  >
                    {w}{" "}
                  </span>
                )),
              )}
            </div>

            <div className="about-sig mt-12 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-fg-mute">
              <span className="about-sig-line block h-px w-12 origin-left bg-fg-mute" />
              <span className="serif-italic text-lg tracking-normal text-fg normal-case">
                {profile.name}, 2026
              </span>
            </div>
          </div>

          {/* RIGHT — interactive panel */}
          <aside
            className="about-panel relative flex flex-col gap-8 overflow-hidden rounded-md border border-line bg-bg-elev p-6 md:p-8"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 0%, rgba(198,255,61,0.06), transparent 50%)",
            }}
          >
            <span
              className="pointer-events-none absolute -right-6 -bottom-12 select-none font-mono text-[180px] leading-none text-white/2.5"
              aria-hidden
            >
              01
            </span>

            <div className="about-panel-item relative flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
                <span className="text-fg-mute">Status</span>
                <span className="inline-flex items-center gap-2 text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
                  Live
                </span>
              </div>
              <p className="text-[19px] leading-snug text-fg">
                {profile.status}.{" "}
                <span className="text-fg-dim">
                  Based in {profile.location}.
                </span>
              </p>
              <Equalizer />
            </div>

            <div className="about-panel-item relative flex flex-col gap-4 border-t border-line pt-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-fg-mute">
                Currently into
              </span>
              <ul className="flex flex-col gap-3">
                {focusItems.map((it) => (
                  <li
                    key={it}
                    className="group flex items-center gap-4 text-[15px] text-fg"
                  >
                    <span className="block h-px w-5 origin-left bg-accent transition-all duration-500 group-hover:w-10" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-panel-item relative grid grid-cols-3 gap-4 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <span className="text-[clamp(28px,3vw,40px)] font-medium leading-none tracking-[-0.03em] text-fg">
                    {s.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase leading-snug tracking-widest text-fg-mute">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="about-panel-item group relative flex items-center justify-between border-t border-line pt-6 font-mono text-[12px] uppercase tracking-widest"
              data-cursor="hover"
              data-cursor-label="Email"
            >
              <span className="text-fg-mute">Reach out</span>
              <span className="inline-flex items-center gap-2 text-fg transition-colors duration-500 group-hover:text-accent">
                <span className="max-w-45 truncate sm:max-w-none">
                  {profile.email}
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 9L9 3M9 3H4M9 3V8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
