import RevealOnScroll from "@/components/RevealOnScroll";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "REST APIs", level: 72 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 88 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 70 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.2, 0, 0, 1], delay }}
      />
    </div>
  </div>
);

const Skills = () => (
  <div className="section-container">
    <RevealOnScroll>
      <h1 className="section-title">Skills</h1>
      <p className="section-subtitle">Technologies and tools I work with.</p>
    </RevealOnScroll>

    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, items], ci) => (
        <RevealOnScroll key={category} delay={ci * 0.1}>
          <div className="card-elevated p-6">
            <h3 className="font-semibold text-lg mb-6">{category}</h3>
            <div className="space-y-5">
              {items.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.1} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

export default Skills;
