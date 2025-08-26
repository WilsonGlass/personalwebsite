export const LOGO_SRC: Record<string, string> = {
  python: "/logos/python.png",
  pytorch: "/logos/pytorch.png",
  flask: "/logos/flask.png",
  postgresql: "/logos/postgres.svg",
  redis: "/logos/redis.png",
  docker: "/logos/docker.png",
  linux: "/logos/linux.png",
  vue: "/logos/vue.png",
  typescript: "/logos/typescript.png",
  tailwindcss: "/logos/tailwind.png",
  jenkins: "/logos/jenkins.png",
  ansible: "/logos/ansible.png",
  node: "/logos/node.png",
  pydantic: "/logos/pydantic.png",
  langgraph: "/logos/langgraph.png",
  postgres: "/logos/postgres.svg",
};

export function logoSrc(name?: string): string {
  if (typeof name !== "string") return "";
  const key = name.trim().toLowerCase();
  return LOGO_SRC[key] ?? "";
}