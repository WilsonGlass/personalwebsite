import type { Job } from "@/types";

export const experience: Job[] = [
  {
    company: "Nasdaq",
    role: "AI Software Engineer Intern — Nasdaq Labs",
    location: "Boston, MA",
    type: "Internship",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Built a RAG multi-agent pipeline to automate product development workflows for the GENAI platform.",
      "Prototyped a multi-agent RL environment with a research group; modeled tasks as MDPs to validate feasibility.",
    ],
    tech: [
      "Python",
      "Pydantic",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Linux",
      "LangGraph",
      "PyTorch",
      "Node"
    ],
  },
  {
    company: "GALT Aero",
    role: "Software Engineering Intern",
    location: "San Diego, CA",
    type: "Internship",
    dates: "Feb 2023 – Aug 2023",
    bullets: [
      "Prototyped SkyTower II features that helped secure a shortlist for a $150M DoD unmanned-systems contract.",
      "Built a Python/pytest suite with 100+ checks per merge; automated Jenkins emails and cut manual QA time ~80%.",
      "Shipped an operator-feedback microservice (Autobahn + Redis) used at live flight-test events.",
    ],
    tech: ["Python", "Jenkins", "Ansible", "Linux", "Docker", "Redis", "Vue", "Node"],
  },
  {
    company: "GALT Aero",
    role: "Software Engineering Intern",
    location: "San Diego, CA",
    type: "Internship",
    dates: "Jun 2022 – Aug 2022",
    bullets: [
      "Integrated, tested, and deployed software to aircraft pods; validated features on production hardware.",
      "Supported an $8.4M prototype UAV pod; wrote Selenium front-end tests and Ansible build playbooks.",
      "Improved a custom speech-recognition model for pilot voice commands.",
    ],
    tech: ["Python", "Ansible", "Linux", "Docker", "Vue", "Node"],
  },
];