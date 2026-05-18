import { useMemo, useState } from "react";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { NavBrand } from "./navigation/NavBrand";
import { NavPill } from "./navigation/NavPill";
import { MobileMenuButton } from "./navigation/MobileMenuButton";
import { MobileMenuOverlay } from "./navigation/MobileMenuOverlay";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navLinks.map((n) => n.id), []);
  const active = useActiveSection(ids, "home");
  const scrolled = useScrolled(40);

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
          <NavBrand />
          <NavPill active={active} />
          <MobileMenuButton
            open={open}
            onToggle={() => setOpen((v) => !v)}
          />
        </div>
      </header>

      <MobileMenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
