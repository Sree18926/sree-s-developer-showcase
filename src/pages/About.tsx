import RevealOnScroll from "@/components/RevealOnScroll";
import { GraduationCap, Target, Users } from "lucide-react";

const About = () => (
  <div className="section-container">
    <RevealOnScroll>
      <h1 className="section-title">About Me</h1>
      <p className="section-subtitle">Get to know the person behind the code.</p>
    </RevealOnScroll>

    <div className="grid md:grid-cols-2 gap-12">
      <RevealOnScroll>
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Hi! I'm Sree Padmapriya S, a passionate computer science student with a deep interest in backend development and building reliable software systems. I love turning complex problems into clean, efficient solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I'm actively involved in campus leadership — serving as Department Secretary, NSS Coordinator, and Club Secretary. These roles have shaped my ability to lead teams, manage projects, and communicate effectively.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to secure a software development internship where I can apply my technical skills, learn from industry professionals, and contribute to meaningful projects.
          </p>
        </div>
      </RevealOnScroll>

      <div className="space-y-6">
        {[
          { icon: GraduationCap, title: "Education", desc: "B.Tech in Computer Science — Currently pursuing my degree with a focus on software engineering fundamentals and backend development." },
          { icon: Target, title: "Career Goal", desc: "Seeking a Software Development Internship to gain hands-on experience building production-grade backend systems and APIs." },
          { icon: Users, title: "Leadership", desc: "Department Secretary, NSS Coordinator, and Club Secretary — leading teams of 50+ students across multiple initiatives." },
        ].map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.1}>
            <div className="card-elevated p-6 flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </div>
);

export default About;
