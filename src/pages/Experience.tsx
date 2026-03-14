import RevealOnScroll from "@/components/RevealOnScroll";
import { Briefcase, Users, Award, Flag } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Department Secretary",
    org: "Computer Science Department",
    period: "2024 – Present",
    points: [
      "Coordinating departmental events and technical workshops for 200+ students",
      "Bridging communication between faculty and student body",
      "Organizing hackathons and coding competitions",
    ],
  },
  {
    icon: Flag,
    role: "NSS Coordinator",
    org: "National Service Scheme",
    period: "2023 – Present",
    points: [
      "Leading community service drives with 50+ volunteers",
      "Organizing blood donation camps and environmental campaigns",
      "Managing logistics for annual NSS camps",
    ],
  },
  {
    icon: Users,
    role: "Club Secretary",
    org: "Technical Club",
    period: "2023 – Present",
    points: [
      "Planning and executing weekly tech talks and workshops",
      "Growing club membership by 40% in one semester",
      "Mentoring junior members in web development fundamentals",
    ],
  },
];

const Experience = () => (
  <div className="section-container">
    <RevealOnScroll>
      <h1 className="section-title">Experience & Leadership</h1>
      <p className="section-subtitle">Roles that shaped my professional growth.</p>
    </RevealOnScroll>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <RevealOnScroll key={exp.role} delay={i * 0.1}>
            <div className="md:pl-14 relative">
              <div className="hidden md:flex absolute left-0 w-10 h-10 rounded-full bg-secondary items-center justify-center text-accent">
                <exp.icon size={18} />
              </div>
              <div className="card-elevated p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.org}</p>
                  </div>
                  <span className="badge-accent text-xs mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                      <Award size={14} className="shrink-0 mt-0.5 text-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
