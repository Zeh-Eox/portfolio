import { motion } from "framer-motion";

export function Equalizer({ bars = 28 }: { bars?: number }) {
  return (
    <div className="flex h-8 items-end gap-0.75">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="block w-0.75 origin-bottom rounded-[1px] bg-accent/80"
          animate={{ scaleY: [0.2, 1, 0.4, 0.8, 0.3, 0.6, 0.2] }}
          style={{ height: "100%" }}
          transition={{
            duration: 1.6 + (i % 6) * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i * 0.07) % 1.4,
          }}
        />
      ))}
    </div>
  );
}
