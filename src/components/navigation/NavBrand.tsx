import { profile } from "../../data/portfolio";

export function NavBrand() {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.06em]"
      data-cursor="hover"
    >
      <span className="h-2.5 w-2.5 rounded-xs bg-accent shadow-[0_0_12px_var(--color-accent)]" />
      <span>{profile.name}</span>
      <span className="text-fg-dim">/ portfolio</span>
    </a>
  );
}
