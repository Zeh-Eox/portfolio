import { profile } from "../../data/portfolio";
import { MagneticButton } from "../MagneticButton";

export function ContactCTA() {
  return (
    <div className="mb-30 flex w-full md:justify-end">
      <MagneticButton href={`mailto:${profile.email}`} strength={0.4}>
        <span className="group inline-flex max-w-full items-center gap-3 rounded-full border border-line-strong px-6 py-5 text-base tracking-[-0.01em] transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-black md:gap-4 md:px-10 md:py-7 md:text-[22px]">
          <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {profile.email}
          </span>
          <span className="inline-flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border border-current transition-transform duration-700 ease-out-quart group-hover:rotate-45 md:h-9 md:w-9">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 15L15 5M15 5H7M15 5V13"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>
        </span>
      </MagneticButton>
    </div>
  );
}
