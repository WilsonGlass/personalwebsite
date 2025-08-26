import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Q",
    description: "A game where you can pit your AI agent against other players’ agents.",
    bullets: [
      "REST API to handle turns, signup, etc.",
      "Real-time cheat detection",
      "Spectators can watch through a UI",
    ],
    links: [{ label: "View Repo", href: "https://github.com/WilsonGlass/Q" }],
    tech: [
        "Python",
        "Linux"
    ],
  },
  {
    title: "Explainers",
    description:
      "Two post-hoc models explain how a baseline classifier reaches its decisions.",
    bullets: [
      "Baseline predicts MNIST digits",
      "Explainers highlight the most important pixels",
    ],
    links: [
      {
        label: "Read Report (PDF)",
        href: "https://github.com/WilsonGlass/Explainers/blob/master/report.pdf",
      },
      { label: "View Repo", href: "https://github.com/WilsonGlass/Explainers" },
    ],
    tech: ["Python", "PyTorch"],
  },
];