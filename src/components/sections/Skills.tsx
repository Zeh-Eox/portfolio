import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CategoryTabs } from "../skills/CategoryTabs";
import { SkillsList } from "../skills/SkillsList";
import { StackConsole } from "../skills/StackConsole";
import type { SkillCategory } from "../skills/session";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<SkillCategory>("Frontend");

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".stack-console", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".stack-console-wrap", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={root} className="relative py-25 md:py-40">
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="mb-16 grid items-end gap-6 border-b border-line pb-8 md:grid-cols-[1fr_auto]">
          <span className="eyebrow">Skills — 02</span>
          <h2 className="h-section">
            Toolbox <span className="serif-italic">&amp; craft</span>
          </h2>
        </div>

        <CategoryTabs active={active} onChange={setActive} />
        <SkillsList category={active} />

        <div className="stack-console-wrap border-t border-line pt-14">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow">Stack — Console</span>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-fg-dim">
              <span>Auto-playing</span>
              <span className="serif-italic normal-case text-fg-mute">
                — what I build with
              </span>
            </span>
          </div>
          <StackConsole />
        </div>
      </div>
    </section>
  );
}
