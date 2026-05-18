type Props = {
  open: boolean;
  onToggle: () => void;
};

export function MobileMenuButton({ open, onToggle }: Props) {
  return (
    <button
      className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest md:hidden"
      onClick={onToggle}
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
  );
}
