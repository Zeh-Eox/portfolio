import { Fragment } from "react";

const lines: { text: string; italic?: boolean }[] = [
  { text: "Building digital" },
  { text: "things.", italic: true },
];

function AnimatedWord({ word }: { word: string }) {
  return (
    <span className="inline-block whitespace-nowrap align-top">
      {word.split("").map((c, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden whitespace-pre pb-[0.22em] mb-[-0.22em] align-top"
        >
          <span className="hero-char inline-block whitespace-pre">{c}</span>
        </span>
      ))}
    </span>
  );
}

function AnimatedLine({ text, italic }: { text: string; italic?: boolean }) {
  const words = text.split(" ");
  const content = words.map((w, i) => (
    <Fragment key={i}>
      <AnimatedWord word={w} />
      {i < words.length - 1 ? " " : null}
    </Fragment>
  ));
  return (
    <span className="block">
      {italic ? <span className="serif-italic">{content}</span> : content}
    </span>
  );
}

export function HeroTitle() {
  return (
    <h1 className="pointer-events-auto -mt-10 self-center h-display">
      {lines.map((l, i) => (
        <AnimatedLine key={i} text={l.text} italic={l.italic} />
      ))}
    </h1>
  );
}
