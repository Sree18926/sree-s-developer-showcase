import RevealOnScroll from "@/components/RevealOnScroll";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "API Rate Limiter",
    desc: "A Node.js middleware for handling traffic spikes with sliding window algorithm and Redis-backed storage.",
    tags: ["Node.js", "Redis", "Express"],
    github: "https://github.com",
  },
  {
    title: "Student Management System",
    desc: "Full-stack CRUD application for managing student records with authentication and role-based access.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather data dashboard consuming a public API with clean UI and responsive design.",
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    desc: "This very website — a modern, animated portfolio built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com",
  },
];

const Projects = () => (
  <div className="section-container">
    <RevealOnScroll>
      <h1 className="section-title">Projects</h1>
      <p className="section-subtitle">Things I've built and shipped.</p>
    </RevealOnScroll>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <RevealOnScroll key={p.title} delay={i * 0.08}>
          <div className="card-elevated p-6 flex flex-col h-full">
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="badge-accent text-xs">{t}</span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <Github size={14} /> View Source <ExternalLink size={12} />
            </a>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

export default Projects;
