import { useEffect, useState } from "react";
import type { ConsoleLine } from "../components/skills/session";

export type TerminalProgress = { line: number; char: number; done: boolean };

type Options = {
  initialDelay?: number;
  restartDelay?: number;
  blankDelay?: number;
  promptDelay?: number;
  outputDelay?: number;
};

export function useTerminalSession(
  session: ConsoleLine[],
  options: Options = {},
): TerminalProgress {
  const {
    initialDelay = 500,
    restartDelay = 4500,
    blankDelay = 140,
    promptDelay = 320,
    outputDelay = 200,
  } = options;

  const [progress, setProgress] = useState<TerminalProgress>({
    line: 0,
    char: 0,
    done: false,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const schedule = (delay: number, fn: () => void) => {
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        fn();
      }, delay);
    };

    const step = (curLine: number, curChar: number) => {
      if (cancelled) return;
      const current = session[curLine];

      if (!current) {
        setProgress({ line: session.length, char: 0, done: true });
        schedule(restartDelay, () => {
          setProgress({ line: 0, char: 0, done: false });
          step(0, 0);
        });
        return;
      }

      if (current.type === "blank") {
        schedule(blankDelay, () => {
          setProgress({ line: curLine + 1, char: 0, done: false });
          step(curLine + 1, 0);
        });
        return;
      }

      if (curChar < current.text.length) {
        const delay =
          current.type === "prompt"
            ? 55 + Math.random() * 35
            : current.type === "comment"
              ? 28
              : 16 + Math.random() * 12;
        schedule(delay, () => {
          setProgress({ line: curLine, char: curChar + 1, done: false });
          step(curLine, curChar + 1);
        });
        return;
      }

      const delay = current.type === "prompt" ? promptDelay : outputDelay;
      schedule(delay, () => {
        setProgress({ line: curLine + 1, char: 0, done: false });
        step(curLine + 1, 0);
      });
    };

    schedule(initialDelay, () => step(0, 0));

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [session, initialDelay, restartDelay, blankDelay, promptDelay, outputDelay]);

  return progress;
}
