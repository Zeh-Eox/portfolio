import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });

  const [variant, setVariant] = useState<"default" | "hover" | "view">(
    "default",
  );
  const [label, setLabel] = useState("");
  const lastMove = useRef(performance.now());

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      lastMove.current = performance.now();
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor]",
      );
      if (target) {
        const kind = target.dataset.cursor;
        const text = target.dataset.cursorLabel || "";
        setLabel(text);
        if (kind === "view") setVariant("view");
        else setVariant("hover");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  const isHover = variant !== "default";
  const isView = variant === "view";

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 -mt-0.75 -ml-0.75 h-1.5 w-1.5 rounded-full bg-fg mix-blend-difference will-change-transform max-lg:hidden"
        style={{ x, y }}
        animate={{ scale: isHover ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-9999 grid h-9 w-9 -mt-4.5 -ml-4.5 place-items-center rounded-full border will-change-transform max-lg:hidden ${
          isView
            ? "border-accent bg-accent text-black"
            : "border-fg mix-blend-difference"
        }`}
        style={{ x: springX, y: springY }}
        animate={{ scale: isView ? 4 : isHover ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label && (
          <span className="scale-[0.45] whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-black">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
