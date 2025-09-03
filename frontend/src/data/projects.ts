import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Q",
    description: "A game where you can pit your AI agent against other players’ agents.",
    bullets: [
      "REST API to handle turns, signup, etc.",
      "Real-time cheat detection.",
      "Spectators can watch through a UI.",
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
      "An environment where two explainer models (L2X and SHAP) explain an original models decision process in recognizing handwritten digits.",
    bullets: [
      "Shows which pixels are deemed most important for a model's output.",
      "A simple example, but this process is used to show how blackbox models work at scale.",
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