import type { Project } from "../../data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group relative flex flex-col gap-6 overflow-hidden rounded-sm border border-line bg-bg-elev p-6 transition-all duration-500 hover:-translate-y-1 hover:border-(--card-accent)/60 md:p-8"
      data-cursor="view"
      data-cursor-label="Open"
      style={{ ["--card-accent" as string]: project.accent }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--card-accent) 8%, transparent) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-1 flex items-center justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
        <span className="text-fg">{project.index}</span>
        <span>{project.year}</span>
      </div>

      <div
        className="relative z-1 grid h-44 place-items-center overflow-hidden rounded-[3px] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005)),var(--color-bg)] md:h-45"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            backgroundPosition: "-1px -1px",
          }}
        />
        <div className="relative flex flex-col items-center gap-3.5">
          <span className="h-3 w-3 rounded-full bg-fg-mute transition-all duration-500 group-hover:bg-(--card-accent) group-hover:shadow-[0_0_24px_var(--card-accent)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim">
            /{project.id}
          </span>
        </div>
      </div>

      <div className="relative z-1 flex flex-1 flex-col gap-3.5">
        <h3 className="text-[clamp(28px,3vw,38px)] font-normal leading-[1.05] tracking-[-0.02em] transition-colors duration-500 group-hover:text-(--card-accent)">
          {project.title}
        </h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-(--card-accent)">
          {project.role}
        </span>
        <p className="max-w-[52ch] text-[15px] leading-[1.55] text-fg-dim">
          {project.description}
        </p>
      </div>

      <div className="relative z-1 flex items-end justify-between gap-4 border-t border-line pt-5">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-2.5 py-1.5 font-mono text-[10.5px] tracking-[0.06em] text-fg-dim transition-all duration-400 group-hover:border-line-strong group-hover:text-fg"
            >
              {s}
            </li>
          ))}
        </ul>
        <span className="inline-flex h-11 w-11 shrink-0 rotate-[-25deg] items-center justify-center rounded-full border border-line-strong text-fg-dim transition-all duration-500 group-hover:rotate-0 group-hover:border-(--card-accent) group-hover:bg-(--card-accent) group-hover:text-black">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 15L15 5M15 5H7M15 5V13"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
