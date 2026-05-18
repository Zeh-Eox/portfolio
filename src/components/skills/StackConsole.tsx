import { useTerminalSession } from "../../hooks/useTerminalSession";
import { consoleSession } from "./session";
import { TerminalCursor } from "./TerminalCursor";
import { TerminalLine } from "./TerminalLine";

export function StackConsole() {
  const progress = useTerminalSession(consoleSession);

  return (
    <div className="stack-console relative overflow-hidden rounded-md border border-line bg-[#0c0c0c] shadow-[0_30px_80px_-40px_rgba(198,255,61,0.22)]">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-[#101010] px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-fg-mute md:px-5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
        </div>
        <span className="flex-1 truncate text-center font-mono normal-case tracking-wide text-fg-dim">
          <span className="hidden sm:inline">~ /arnold/</span>stack.sh
        </span>
        <span className="hidden sm:inline">bash · v2.6</span>
        <span className="sm:hidden">zsh</span>
      </div>

      <div
        className="relative min-h-90 px-5 py-6 font-mono text-[13.5px] leading-relaxed md:min-h-100 md:px-8 md:py-7 md:text-[15px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(198,255,61,0.05), transparent 55%)",
        }}
      >
        {consoleSession.map((line, i) => {
          if (i > progress.line) return null;
          const isActive = i === progress.line && !progress.done;
          const typed = isActive
            ? progress.char
            : line.type === "blank"
              ? 0
              : (line as { text: string }).text.length;
          return (
            <TerminalLine
              key={i}
              line={line}
              typed={typed}
              cursor={isActive}
            />
          );
        })}
        {progress.done && (
          <div className="flex items-baseline gap-2.5">
            <span className="select-none text-accent">$</span>
            <TerminalCursor />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-line bg-bg px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-mute md:px-5">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent shadow-[0_0_6px_var(--color-accent)]" />
          live
        </span>
        <span className="hidden text-fg-dim sm:inline">utf-8 · main</span>
        <span>
          {String(Math.min(progress.line + 1, consoleSession.length)).padStart(
            2,
            "0",
          )}
          /{String(consoleSession.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
