import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "Frontend",
  "Backend",
  "Tooling",
  "Design",
  "Scripting",
] as const;

type FeaturedSkill = {
  name: string;
  category: string;
  x: number;
  y: number;
  size: number;
};

const featuredSkills: FeaturedSkill[] = [
  { name: "React", category: "Frontend", x: 16, y: 28, size: 150 },
  { name: "TypeScript", category: "Frontend", x: 50, y: 18, size: 175 },
  { name: "Three.js", category: "Frontend", x: 82, y: 30, size: 135 },
  { name: "Node.js", category: "Backend", x: 30, y: 58, size: 155 },
  { name: "GSAP", category: "Frontend", x: 68, y: 64, size: 130 },
  { name: "Next.js", category: "Frontend", x: 12, y: 76, size: 135 },
  { name: "Postgres", category: "Backend", x: 90, y: 70, size: 115 },
  { name: "Docker", category: "Tooling", x: 48, y: 86, size: 125 },
];

function SkillBubble({
  skill,
  index,
  pinned,
  onClick,
}: {
  skill: FeaturedSkill;
  index: number;
  pinned: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
    >
      <motion.button
        type="button"
        onClick={onClick}
        className={`group relative flex flex-col items-center justify-center gap-1 rounded-full border p-3 backdrop-blur-md transition-[background,border-color,color,box-shadow] duration-500 will-change-transform ${
          pinned
            ? "border-accent bg-accent text-black shadow-[0_0_50px_color-mix(in_srgb,var(--color-accent)_38%,transparent)]"
            : "border-line-strong bg-[#121212]/65 text-fg hover:border-accent hover:bg-[#1c1c1c]/72 hover:shadow-[0_0_80px_color-mix(in_srgb,var(--color-accent)_28%,transparent),inset_0_0_30px_color-mix(in_srgb,var(--color-accent)_8%,transparent)]"
        }`}
        style={{ width: skill.size, height: skill.size }}
        animate={{
          y: [0, -14, 0, 12, 0],
          x: [0, 8, 0, -6, 0],
        }}
        transition={{
          duration: 8 + (index % 3) * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        whileHover={{ scale: 1.12, zIndex: 4 }}
        whileTap={{ scale: 0.94 }}
        data-cursor="hover"
        data-cursor-label={pinned ? "Unpin" : "Pin"}
      >
        <span
          className={`pointer-events-none absolute inset-0 rounded-full ${
            pinned
              ? "bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.5),transparent_60%)]"
              : "bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.08),transparent_55%)]"
          }`}
        />
        <span className="relative z-1 text-[17px] font-medium tracking-[-0.01em]">
          {skill.name}
        </span>
        <span
          className={`relative z-1 font-mono text-[9.5px] uppercase tracking-[0.14em] transition-colors duration-400 ${
            pinned ? "text-black/55" : "text-fg-mute group-hover:text-accent"
          }`}
        >
          {skill.category}
        </span>
        {pinned && (
          <motion.span
            className="absolute top-[14%] right-[14%] z-2 grid h-5.5 w-5.5 place-items-center rounded-full bg-black text-accent"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}

export function Skills() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof categories)[number]>("Frontend");
  const [pinned, setPinned] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".skills-cluster-stage", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".skills-cluster", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const togglePin = (name: string) => {
    setPinned((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const filtered = skills.filter((s) => s.category === active);

  return (
    <section id="skills" ref={root} className="relative py-25 md:py-40">
      <div className="mx-auto w-full max-w-360 px-5 md:px-8">
        <div className="mb-16 grid items-end gap-6 border-b border-line pb-8 md:grid-cols-[1fr_auto]">
          <span className="eyebrow">Skills — 02</span>
          <h2 className="h-section">
            Toolbox <span className="serif-italic">&amp; craft</span>
          </h2>
        </div>

        <div className="mb-14 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`inline-flex items-center gap-3 rounded-full border px-5 py-3.5 font-mono text-[12px] uppercase tracking-[0.08em] transition-all duration-400 ${
                active === cat
                  ? "border-accent bg-accent text-black"
                  : "border-line text-fg-dim hover:border-line-strong hover:text-fg"
              }`}
              onClick={() => setActive(cat)}
              data-cursor="hover"
            >
              <span
                className={`text-[10px] ${
                  active === cat ? "text-black/60" : "text-fg-mute"
                }`}
              >
                0{categories.indexOf(cat) + 1}
              </span>
              <span>{cat}</span>
              <span
                className={`text-[10px] ${
                  active === cat ? "text-black/60" : "text-fg-mute"
                }`}
              >
                {skills.filter((s) => s.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-30 grid border-t border-line md:grid-cols-2"
        >
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              className={`group relative grid grid-cols-[50px_1fr_80px] items-center gap-6 border-b border-line py-5.5 text-[22px] md:grid-cols-[60px_1fr_120px] md:py-7 ${
                i % 2 === 0 ? "md:border-r md:border-line md:pr-8" : "md:pl-8"
              }`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.04,
              }}
            >
              <span className="font-mono text-[11px] tracking-widest text-fg-mute">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-normal">{s.name}</span>
              <span className="relative block h-px overflow-hidden bg-line">
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-1000 ease-out-quart group-hover:scale-x-100" />
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="skills-cluster border-t border-line pt-14">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow">Featured — Float</span>
            <span className="inline-flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-widest text-fg">
              <span>
                {pinned.size}/{featuredSkills.length} pinned
              </span>
              <span className="text-fg-dim">— click to toggle</span>
              {pinned.size > 0 && (
                <button
                  type="button"
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-dim transition-colors duration-400 hover:border-accent hover:bg-accent hover:text-black"
                  onClick={() => setPinned(new Set())}
                  data-cursor="hover"
                >
                  Clear
                </button>
              )}
            </span>
          </div>

          <div className="skills-cluster-stage relative h-110 w-full overflow-hidden rounded-md border border-line bg-[radial-gradient(circle_at_50%_50%,rgba(198,255,61,0.04),transparent_60%),rgba(255,255,255,0.01)] md:h-130 xl:h-145">
            <div
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />
            {featuredSkills.map((s, i) => (
              <SkillBubble
                key={s.name}
                skill={s}
                index={i}
                pinned={pinned.has(s.name)}
                onClick={() => togglePin(s.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
