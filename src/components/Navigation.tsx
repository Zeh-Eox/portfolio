import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "../data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-100 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/55 py-3.5 backdrop-blur-md"
            : "py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-360 items-center justify-between px-5 md:px-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.06em]"
            data-cursor="hover"
          >
            <span className="h-2.5 w-2.5 rounded-xs bg-accent shadow-[0_0_12px_var(--color-accent)]" />
            <span>{profile.name}</span>
            <span className="text-fg-dim">/ portfolio</span>
          </a>

          <nav className="hidden gap-1 rounded-full border border-line bg-white/2 p-1.5 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors duration-400 ${
                  active === l.id
                    ? "bg-white/4 text-fg"
                    : "text-fg-dim hover:text-fg"
                }`}
                data-cursor="hover"
              >
                <span
                  className={`h-1 w-1 rounded-full transition-colors duration-400 ${
                    active === l.id ? "bg-accent" : "bg-fg-mute"
                  }`}
                />
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            <span className="relative h-3.5 w-5.5">
              <span
                className={`absolute right-0 left-0 h-px bg-fg transition-all duration-500 ${
                  open ? "top-1.75 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute right-0 left-0 h-px bg-fg transition-all duration-500 ${
                  open ? "top-1.75 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-90 flex items-center bg-[#050505]"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
          >
            <div className="mx-auto grid w-full max-w-360 gap-20 px-5 pt-20 md:px-8">
              <ul className="flex flex-col gap-2">
                {navLinks.map((l, i) => (
                  <li key={l.id}>
                    <motion.a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.3 + i * 0.06,
                      }}
                      className="inline-flex items-baseline gap-7 text-[clamp(48px,10vw,140px)] font-normal leading-none tracking-[-0.03em] transition-colors duration-400 hover:text-accent"
                      data-cursor="hover"
                    >
                      <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-fg-mute">
                        0{i + 1}
                      </span>
                      <span>{l.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.div
                className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:gap-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
                    Email
                  </span>
                  <a href={`mailto:${profile.email}`} className="text-base">
                    {profile.email}
                  </a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-mute">
                    Location
                  </span>
                  <span className="text-base">{profile.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
