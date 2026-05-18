import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const easeInOut = [0.85, 0, 0.15, 1] as const;

export function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const loop = (t: number) => {
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) raf = requestAnimationFrame(loop);
      else {
        setTimeout(() => setExit(true), 200);
        setTimeout(() => onDone(), 1300);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-999 flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 1, ease: easeInOut },
          }}
        >
          <div className="grid h-full w-full max-w-360 grid-rows-[auto_1fr_auto] content-between gap-10 px-8 py-10 md:px-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim">
                Arnold / portfolio
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim">
                2026 — Edition I
              </span>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <motion.div
                className="text-[clamp(80px,18vw,280px)] font-normal leading-[0.9] tracking-[-0.04em] text-fg"
                key={count}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {String(count).padStart(3, "0")}
              </motion.div>
              <div className="relative h-px overflow-hidden bg-line">
                <motion.div
                  className="absolute inset-0 origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: count / 100 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim">
                Loading assets
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim">
                {count < 100 ? "—" : "ready"}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
