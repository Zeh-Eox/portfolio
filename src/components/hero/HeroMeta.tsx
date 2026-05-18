import { profile } from "../../data/portfolio";

export function HeroMeta() {
  return (
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
  );
}
