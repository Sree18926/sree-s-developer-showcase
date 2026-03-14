import RevealOnScroll from "@/components/RevealOnScroll";
import { Download, FileText } from "lucide-react";

const Resume = () => (
  <div className="section-container">
    <RevealOnScroll>
      <h1 className="section-title">Resume</h1>
      <p className="section-subtitle">Download my ATS-friendly resume.</p>
    </RevealOnScroll>

    <RevealOnScroll>
      <div className="card-elevated p-8 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Sree Padmapriya S</h2>
            <p className="text-sm text-muted-foreground">Junior Software Developer</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Summary</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Motivated computer science student with strong foundations in backend development, leadership experience, and a passion for building scalable software solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Git", "GitHub", "REST APIs", "Postman"].map((s) => (
                <span key={s} className="badge-accent text-xs">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Leadership</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Department Secretary — Computer Science Department</li>
              <li>• NSS Coordinator — National Service Scheme</li>
              <li>• Club Secretary — Technical Club</li>
            </ul>
          </div>
        </div>

        <a href="#" className="btn-primary inline-flex items-center gap-2">
          <Download size={16} /> Download Resume (PDF)
        </a>
        <p className="text-xs text-muted-foreground mt-3">
          Add your resume PDF to <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">public/resume.pdf</code> and update the link.
        </p>
      </div>
    </RevealOnScroll>
  </div>
);

export default Resume;
