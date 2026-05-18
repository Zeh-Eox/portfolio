import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";
import type { SkillCategory } from "./session";

type Props = { category: SkillCategory };

export function SkillsList({ category }: Props) {
  const filtered = skills.filter((s) => s.category === category);

  return (
    <motion.div
      key={category}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24 grid border-t border-line md:grid-cols-2"
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
  );
}
