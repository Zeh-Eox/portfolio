import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "../../data/portfolio";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenuOverlay({ open, onClose }: Props) {
  return (
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
                    onClick={onClose}
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
  );
}
