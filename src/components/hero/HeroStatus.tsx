import { profile } from "../../data/portfolio";

export function HeroStatus() {
  return (
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
  );
}
