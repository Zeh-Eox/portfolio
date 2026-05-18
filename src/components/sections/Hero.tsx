import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeroScene } from "../../three/HeroScene";
import { HeroStatus } from "../hero/HeroStatus";
import { HeroTitle } from "../hero/HeroTitle";
import { HeroMeta } from "../hero/HeroMeta";
import { ScrollCue } from "../hero/ScrollCue";

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
          <HeroStatus />
          <HeroTitle />
          <HeroMeta />
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}
