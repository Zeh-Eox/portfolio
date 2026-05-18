import { skills } from "../../data/portfolio";
import {
  skillCategories,
  type SkillCategory,
} from "./session";

type Props = {
  active: SkillCategory;
  onChange: (cat: SkillCategory) => void;
};

export function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="mb-14 flex flex-wrap gap-2">
      {skillCategories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            className={`inline-flex items-center gap-3 rounded-full border px-5 py-3.5 font-mono text-[12px] uppercase tracking-[0.08em] transition-all duration-400 ${
              isActive
                ? "border-accent bg-accent text-black"
                : "border-line text-fg-dim hover:border-line-strong hover:text-fg"
            }`}
            onClick={() => onChange(cat)}
            data-cursor="hover"
          >
            <span
              className={`text-[10px] ${
                isActive ? "text-black/60" : "text-fg-mute"
              }`}
            >
              0{skillCategories.indexOf(cat) + 1}
            </span>
            <span>{cat}</span>
            <span
              className={`text-[10px] ${
                isActive ? "text-black/60" : "text-fg-mute"
              }`}
            >
              {skills.filter((s) => s.category === cat).length}
            </span>
          </button>
        );
      })}
    </div>
  );
}
