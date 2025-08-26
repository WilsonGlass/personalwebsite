export type Link = { label: string; href: string };
export type Project = {
    title: string;
    description: string;
    bullets: string[];
    links: Link[];
    tech: string[];
};
export type Job = {
    company: string;
    role: string;
    location: string;
    type?: string;
    dates: string;
    bullets: string[];
    tech: string[];
};
export type Course = {
    code: string;
    title: string;
    url: string | null;
    tags: string[];
    note?: string | null;
};