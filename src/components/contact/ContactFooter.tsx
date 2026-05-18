import { profile } from "../../data/portfolio";

export function ContactFooter() {
  return (
    <div className="mt-20 flex justify-between border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em]">
      <span>{profile.fullName}</span>
      <span className="text-fg-dim">v1.0 — refreshed daily</span>
    </div>
  );
}
