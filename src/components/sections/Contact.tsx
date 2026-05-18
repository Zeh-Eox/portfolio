import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../../data/portfolio";
import { MagneticButton } from "../MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".contact-main", start: "top 75%" },
      });
      gsap.from(".contact-info > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".contact-info", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative border-t border-line py-25 pb-14 md:py-40"
    >
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="mb-20 flex items-center justify-between font-mono text-[12px] uppercase tracking-widest text-fg-dim">
          <span className="eyebrow">Contact — 05</span>
          <span>{new Date().getFullYear()} · all rights reserved</span>
        </div>

        <div className="contact-main mb-16">
          <div className="overflow-hidden leading-[0.95]">
            <h2 className="contact-line inline-block text-[clamp(60px,13vw,200px)] font-normal leading-[0.95] tracking-[-0.04em]">
              Let's build
            </h2>
          </div>
          <div className="overflow-hidden leading-[0.95]">
            <h2 className="contact-line inline-block text-[clamp(60px,13vw,200px)] font-normal leading-[0.95] tracking-[-0.04em]">
              <span className="serif-italic">something</span>
            </h2>
          </div>
          <div className="overflow-hidden leading-[0.95]">
            <h2 className="contact-line inline-block text-[clamp(60px,13vw,200px)] font-normal leading-[0.95] tracking-[-0.04em]">
              together.
            </h2>
          </div>
        </div>

        <div className="mb-30 flex w-full md:justify-end">
          <MagneticButton href={`mailto:${profile.email}`} strength={0.4}>
            <span className="group inline-flex max-w-full items-center gap-3 rounded-full border border-line-strong px-6 py-5 text-base tracking-[-0.01em] transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-black md:gap-4 md:px-10 md:py-7 md:text-[22px]">
              <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {profile.email}
              </span>
              <span className="inline-flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border border-current transition-transform duration-700 ease-out-quart group-hover:rotate-45 md:h-9 md:w-9">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 15L15 5M15 5H7M15 5V13"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </span>
            </span>
          </MagneticButton>
        </div>

        <div className="contact-info grid gap-10 border-t border-line pt-14 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
              Socials
            </span>
            <ul className="flex flex-col gap-2.5">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    className="group/social relative inline-flex w-fit items-center gap-2.5 text-[17px] text-fg"
                    data-cursor="hover"
                    data-cursor-label="Visit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{s.label}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-fg-mute transition-colors duration-400 group-hover/social:text-accent"
                    >
                      <path
                        d="M3 9L9 3M9 3H4M9 3V8"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out-quart group-hover/social:origin-left group-hover/social:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
              Currently
            </span>
            <p className="inline-flex items-center gap-2.5 text-base">
              <span className="h-1.75 w-1.75 animate-pulse-soft rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
              {profile.status}
            </p>
            <p className="text-[13px] leading-[1.6] text-fg-dim">
              Based in {profile.location}. Open to remote & on-site projects.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
              Index
            </span>
            <p className="text-[13px] leading-[1.6] text-fg-dim">
              Designed & built in 2026 with React, Three.js, GSAP, Framer
              Motion and Tailwind CSS. Crafted in Ouagadougou.
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-between border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em]">
          <span>{profile.fullName}</span>
          <span className="text-fg-dim">v1.0 — refreshed daily</span>
        </div>
      </div>
    </section>
  );
}
