import { motion } from "framer-motion";

export function TerminalCursor() {
  return (
    <motion.span
      className="ml-0.5 inline-block text-accent"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1.05,
        repeat: Infinity,
        times: [0, 0.5, 0.5, 1],
        ease: "linear",
      }}
    >
      ▌
    </motion.span>
  );
}
