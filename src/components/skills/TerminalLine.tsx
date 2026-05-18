import type { ConsoleLine } from "./session";
import { TerminalCursor } from "./TerminalCursor";

type Props = {
  line: ConsoleLine;
  typed: number;
  cursor: boolean;
};

export function TerminalLine({ line, typed, cursor }: Props) {
  if (line.type === "blank") return <div className="h-3.5" />;

  if (line.type === "comment") {
    return (
      <div className="text-fg-mute italic">
        {line.text.slice(0, typed)}
        {cursor && <TerminalCursor />}
      </div>
    );
  }

  if (line.type === "prompt") {
    return (
      <div className="flex items-baseline gap-2.5">
        <span className="select-none text-accent">$</span>
        <span className="break-all text-fg">
          {line.text.slice(0, typed)}
          {cursor && <TerminalCursor />}
        </span>
      </div>
    );
  }

  const tone = line.tone ?? "default";
  const cls =
    tone === "accent"
      ? "text-accent"
      : tone === "dim"
        ? "text-fg-dim"
        : "text-fg";

  return (
    <div className="flex items-baseline gap-2.5">
      <span className="select-none text-fg-mute">›</span>
      <span className={`break-all ${cls}`}>
        {line.text.slice(0, typed)}
        {cursor && <TerminalCursor />}
      </span>
    </div>
  );
}
