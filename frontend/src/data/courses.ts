import type { Course } from "@/types";

export const courses: Course[] = [
  {
    code: "MATH 4571",
    title: "Advanced Linear Algebra",
    url: "https://dummit.cos.northeastern.edu/teaching_sp25_4571",
    tags: [
      "Vector Spaces",
      "Lin. Transforms",
      "Inner Products",
      "Eigen/Diag",
      "Jordan Form",
      "SVD",
    ],
  },
  {
    code: "CS 4500",
    title: "Software Development",
    url: "https://course.ccs.neu.edu/cs4500f23/",
    tags: ["Client-Server", "API Creation", "Remote Proxy", "Protocol Design", "TDD"],
  },
  {
    code: "CS 4100",
    title: "Artificial Intelligence",
    url: "https://www.ccs.neu.edu/home/camato/4100summaryS25.html",
    tags: ["Adversarial", "MDPs", "Bayes Nets", "HMMs", "RL"],
  },
  {
    code: "CS 3000",
    title: "Algorithms",
    url: "http://behnezhad.com/cs3000-spr24/",
    tags: ["Greedy", "DP", "Graphs"],
  },
  {
    code: "MATH 3175",
    title: "Group Theory",
    url: null,
    tags: ["Abstract Algebra"],
    note: "No public course page available",
  },
  {
    code: "MATH 4581",
    title: "Statistics and Stochastic Processes",
    url: null,
    tags: ["Probability", "Markov", "Inference"],
  },
  {
    code: "CS 3800",
    title: "Theory of Computation",
    url: null,
    tags: ["Automata", "Turing", "Decidability", "Reduction", "P vs NP"],
  },
  {
    code: "MATH 4996",
    title: "Mathematics Behind ML",
    url: null,
    tags: ["Explainer Models", "Trustable AI"],
  },
  {
    code: "COMP 332",
    title: "Human-Centered Systems",
    url: null,
    tags: ["Human-Computer Interaction", "Inclusive Design", "Visual Design"],
  },
];