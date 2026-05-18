export type ConsoleLine =
  | { type: "prompt"; text: string }
  | { type: "output"; text: string; tone?: "default" | "accent" | "dim" }
  | { type: "comment"; text: string }
  | { type: "blank" };

export const consoleSession: ConsoleLine[] = [
  { type: "comment", text: "# booting stack.sh ..." },
  { type: "prompt", text: "whoami" },
  { type: "output", text: "Arnold — Full-Stack Developer" },
  { type: "blank" },
  { type: "prompt", text: "pwd" },
  { type: "output", text: "/ouagadougou/burkina-faso", tone: "dim" },
  { type: "blank" },
  { type: "prompt", text: "stack --daily" },
  {
    type: "output",
    text: "react · typescript · node · postgres · docker",
    tone: "accent",
  },
  { type: "blank" },
  { type: "prompt", text: "stack --currently-learning" },
  { type: "output", text: "java · springboot · angular" },
  { type: "blank" },
  { type: "prompt", text: "uptime --years" },
  { type: "output", text: "2y · still shipping" },
  { type: "blank" },
  { type: "prompt", text: "ls projects/ --recent | head -3" },
  {
    type: "output",
    text: "solar-system  nymea  gensite  +3 more",
    tone: "dim",
  },
  { type: "blank" },
  { type: "prompt", text: "echo $EMAIL" },
  { type: "output", text: "arnoldcnv99@gmail.com", tone: "accent" },
  { type: "blank" },
  { type: "comment", text: "# ready when you are." },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Tooling",
  "Design",
  "Scripting",
] as const;

export type SkillCategory = (typeof skillCategories)[number];
