import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { profile } from "../../data/portfolio";
import { HeroScene } from "../../three/HeroScene";

const splitChars = (text: string) =>
  text.split("").map((c) => (c === " " ? " " : c));

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-char", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.018,
        delay: 0.4,
      });
      gsap.from(".hero-meta > *", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        delay: 1.2,
      });
      gsap.from(".hero-scroll", {
        opacity: 0,
        y: 12,
        duration: 1,
        ease: "expo.out",
        delay: 1.6,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const lines = ["Building digital", "things."];

  return (
    <section
      id="home"
      ref={root}
      className="relative h-screen min-h-180 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="pointer-events-none absolute inset-0 z-2 flex flex-col justify-end">
        <div className="mx-auto grid h-full w-full max-w-360 grid-rows-[auto_1fr_auto_auto] px-5 pt-24 pb-14 md:px-8">
          <div className="pointer-events-auto flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.08em] text-fg-dim">
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="h-1.75 w-1.75 animate-pulse-soft rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
              {profile.status}
            </div>
            <div className="hidden gap-6 md:flex">
              <span>{profile.location}</span>
              <span>48.8566° N / 2.3522° E</span>
            </div>
          </div>

          <h1 className="pointer-events-auto -mt-10 self-center h-display">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="serif-italic">
                    {splitChars(line).map((c, idx) => (
                      <span
                        key={idx}
                        className="inline-block overflow-hidden whitespace-pre pb-[0.22em] mb-[-0.22em] align-top"
                      >
                        <span className="hero-char inline-block whitespace-pre">
                          {c}
                        </span>
                      </span>
                    ))}
                  </span>
                ) : (
                  splitChars(line).map((c, idx) => (
                    <span
                      key={idx}
                      className="inline-block overflow-hidden whitespace-pre pb-[0.22em] mb-[-0.22em] align-top"
                    >
                      <span className="hero-char inline-block whitespace-pre">
                        {c}
                      </span>
                    </span>
                  ))
                )}
              </span>
            ))}
          </h1>

          <div className="hero-meta pointer-events-auto grid items-end gap-4 pb-6 md:grid-cols-[1fr_1fr_1.6fr] md:gap-10">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
                Author
              </span>
              <span className="text-sm text-fg">
                {profile.fullName} — {profile.role}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
                Index
              </span>
              <span className="text-sm text-fg">2026 / portfolio</span>
            </div>
            <p className="serif-italic max-w-90 text-xl leading-snug text-fg-dim md:justify-self-end md:text-right">
              {profile.tagline}
            </p>
          </div>

          <motion.div
            className="hero-scroll pointer-events-auto absolute bottom-4.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>scroll</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1V13M7 13L1 7M7 13L13 7"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
