import type { Experience } from "../../data/portfolio";

export function ExperienceRow({ entry }: { entry: Experience }) {
  return (
    <li className="exp-row group relative grid items-start border-b border-line py-12 md:grid-cols-[180px_24px_1fr]">
      <span className="font-mono text-[12px] uppercase tracking-widest text-fg-dim md:pt-1.5">
        {entry.year}
      </span>

      <span
        className="absolute top-14 left-45 z-1 hidden h-2.75 w-2.75 -translate-x-1.25 rounded-full border border-line-strong bg-bg transition-colors duration-400 group-hover:border-accent group-hover:bg-accent md:block"
        aria-hidden
      />

      <div className="md:col-start-3 md:pl-8">
        <h3 className="mb-3 text-[clamp(20px,2.4vw,28px)] font-normal tracking-[-0.01em]">
          {entry.title}
          <span className="serif-italic text-fg-dim"> — {entry.company}</span>
        </h3>
        <p className="mb-4 max-w-160 text-[15px] leading-[1.6] text-fg-dim">
          {entry.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((t) => (
            <span
              key={t}
              className="inline-block rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-fg-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
