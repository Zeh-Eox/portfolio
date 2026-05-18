import { motion } from "framer-motion";

export function ScrollCue() {
  return (
    <motion.div
      className="hero-scroll pointer-events-auto absolute bottom-4.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span>scroll</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1V13M7 13L1 7M7 13L13 7"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}
