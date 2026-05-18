import { navLinks } from "../../data/portfolio";

type Props = { active: string };

export function NavPill({ active }: Props) {
  return (
    <nav className="hidden gap-1 rounded-full border border-line bg-white/2 p-1.5 md:flex">
      {navLinks.map((l) => {
        const isActive = active === l.id;
        return (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors duration-400 ${
              isActive ? "bg-white/4 text-fg" : "text-fg-dim hover:text-fg"
            }`}
            data-cursor="hover"
          >
            <span
              className={`h-1 w-1 rounded-full transition-colors duration-400 ${
                isActive ? "bg-accent" : "bg-fg-mute"
              }`}
            />
            {l.label}
          </a>
        );
      })}
    </nav>
  );
}
