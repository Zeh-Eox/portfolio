import { profile } from "../../data/portfolio";
import { Equalizer } from "./Equalizer";
import { aboutStats, focusItems } from "./aboutData";

export function AboutPanel() {
  return (
    <aside
      className="about-panel relative flex flex-col gap-8 overflow-hidden rounded-md border border-line bg-bg-elev p-6 md:p-8"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgba(198,255,61,0.06), transparent 50%)",
      }}
    >
      <span
        className="pointer-events-none absolute -right-6 -bottom-12 select-none font-mono text-[180px] leading-none text-white/2.5"
        aria-hidden
      >
        01
      </span>

      <div className="about-panel-item relative flex flex-col gap-4">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
          <span className="text-fg-mute">Status</span>
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
            Live
          </span>
        </div>
        <p className="text-[19px] leading-snug text-fg">
          {profile.status}.{" "}
          <span className="text-fg-dim">Based in {profile.location}.</span>
        </p>
        <Equalizer />
      </div>

      <div className="about-panel-item relative flex flex-col gap-4 border-t border-line pt-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-fg-mute">
          Currently into
        </span>
        <ul className="flex flex-col gap-3">
          {focusItems.map((it) => (
            <li
              key={it}
              className="group flex items-center gap-4 text-[15px] text-fg"
            >
              <span className="block h-px w-5 origin-left bg-accent transition-all duration-500 group-hover:w-10" />
              {it}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-panel-item relative grid grid-cols-3 gap-4 border-t border-line pt-6">
        {aboutStats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5">
            <span className="text-[clamp(28px,3vw,40px)] font-medium leading-none tracking-[-0.03em] text-fg">
              {s.num}
            </span>
            <span className="font-mono text-[10px] uppercase leading-snug tracking-widest text-fg-mute">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="about-panel-item group relative flex items-center justify-between border-t border-line pt-6 font-mono text-[12px] uppercase tracking-widest"
        data-cursor="hover"
        data-cursor-label="Email"
      >
        <span className="text-fg-mute">Reach out</span>
        <span className="inline-flex items-center gap-2 text-fg transition-colors duration-500 group-hover:text-accent">
          <span className="max-w-45 truncate sm:max-w-none">
            {profile.email}
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 9L9 3M9 3H4M9 3V8"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </span>
      </a>
    </aside>
  );
}
