import { profile } from "../../data/portfolio";
import { bioSegments } from "./aboutData";

export function AboutBio() {
  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute -top-12 -left-3 select-none font-serif text-[180px] leading-none text-accent/15 md:text-[240px]"
        aria-hidden
      >
        &ldquo;
      </span>

      <div className="about-text relative max-w-205 text-[clamp(24px,3.5vw,46px)] font-normal leading-tight tracking-[-0.02em]">
        {bioSegments.map((seg, si) =>
          seg.text.split(" ").map((w, wi) => (
            <span
              key={`${si}-${wi}`}
              className={`about-word ${
                seg.italic ? "serif-italic text-accent" : ""
              }`}
              style={{ marginRight: "0.05em" }}
            >
              {w}{" "}
            </span>
          )),
        )}
      </div>

      <div className="about-sig mt-12 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-fg-mute">
        <span className="about-sig-line block h-px w-12 origin-left bg-fg-mute" />
        <span className="serif-italic text-lg tracking-normal text-fg normal-case">
          {profile.name}, 2026
        </span>
      </div>
    </div>
  );
}
