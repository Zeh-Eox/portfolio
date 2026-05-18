export type BioSegment = { text: string; italic?: boolean };

export const bioSegments: BioSegment[] = [
  { text: "I'm a" },
  { text: "full-stack developer", italic: true },
  { text: "obsessed with the intersection of" },
  { text: "code & craft.", italic: true },
  {
    text: "I build fast, accessible web products with thoughtful motion and a sharp eye for detail.",
  },
  {
    text: "From APIs to pixels, I love shipping things that don't just work —",
  },
  { text: "they feel right.", italic: true },
  {
    text: "Currently exploring Backend Engineering, Cloud - DevOps and Open Source.",
  },
];

export const focusItems = [
  "Backend Engineering",
  "System Design",
  "Cloud & DevOps",
  "Platform Engineering",
  "Open Source",
];

export const aboutStats = [
  { num: "02+", label: "Years coding" },
  { num: "08+", label: "Projects shipped" },
  { num: "12", label: "Stacks fluent" },
];
