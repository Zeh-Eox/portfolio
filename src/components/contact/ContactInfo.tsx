import { profile } from "../../data/portfolio";

export function ContactInfo() {
  return (
    <div className="contact-info grid gap-10 border-t border-line pt-14 md:grid-cols-3">
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
          Socials
        </span>
        <ul className="flex flex-col gap-2.5">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                className="group/social relative inline-flex w-fit items-center gap-2.5 text-[17px] text-fg"
                data-cursor="hover"
                data-cursor-label="Visit"
                target="_blank"
                rel="noreferrer"
              >
                <span>{s.label}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-fg-mute transition-colors duration-400 group-hover/social:text-accent"
                >
                  <path
                    d="M3 9L9 3M9 3H4M9 3V8"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out-quart group-hover/social:origin-left group-hover/social:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
          Currently
        </span>
        <p className="inline-flex items-center gap-2.5 text-base">
          <span className="h-1.75 w-1.75 animate-pulse-soft rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
          {profile.status}
        </p>
        <p className="text-[13px] leading-[1.6] text-fg-dim">
          Based in {profile.location}. Open to remote & on-site projects.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
          Index
        </span>
        <p className="text-[13px] leading-[1.6] text-fg-dim">
          Designed & built in 2026 with React, Three.js, GSAP, Framer Motion
          and Tailwind CSS. Crafted in Ouagadougou.
        </p>
      </div>
    </div>
  );
}
