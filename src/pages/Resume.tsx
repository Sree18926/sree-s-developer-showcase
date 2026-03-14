import RevealOnScroll from "@/components/RevealOnScroll";
import { Download, FileText, Printer } from "lucide-react";

const handlePrint = () => {
  window.print();
};

const Resume = () => (
  <div className="section-container">
    <style jsx>{`
      @media print {
        .section-container { padding: 0; max-width: none; }
        .card-elevated { box-shadow: none; border: 1px solid #ccc; }
        .resume-content { font-family: Arial, sans-serif; line-height: 1.4; }
        button, .btn-primary, .btn-outline { display: none; }
      }
    `}</style>
    <RevealOnScroll>
      <h1 className="section-title">Resume</h1>
      <p className="section-subtitle">Download my ATS-friendly resume.</p>
    </RevealOnScroll>

    <div className="flex gap-4 mb-8">
      <button onClick={handlePrint} className="btn-primary inline-flex items-center gap-2">
        <Printer size={16} /> Print/Save as PDF
      </button>
      <a href="/resume.txt" download="SREEPADMAPRIYA_S_Resume.txt" className="btn-outline inline-flex items-center gap-2">
        <Download size={16} /> Download as Text
      </a>
    </div>

    <RevealOnScroll>
      <div className="card-elevated p-8 max-w-4xl resume-content">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">SREEPADMAPRIYA S</h2>
          <p className="text-xl text-muted-foreground mb-4">Junior Software Developer</p>
          <p className="text-muted-foreground">adirapadmapadma@gmail.com | +918428816538</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">WEBSITES AND SOCIAL LINKS</h3>
          <p className="text-sm">
            <strong>LINKEDIN:</strong><br />
            https://www.linkedin.com/in/sree-padma-priya-3b4bb6341?utm_source=share_via&utm_content=profile&utm_medium=member_android
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">SUMMARY</h3>
          <p className="text-sm leading-relaxed">
            As a passionate and driven junior software developer, I am eager to contribute my skills and enthusiasm to your dynamic team. With a solid foundation in programming languages and a commitment to continuous learning, I am excited about the opportunity to collaborate on innovative projects. I am dedicated to delivering high-quality solutions and am ready to embrace challenges that will help me grow both personally and professionally within your esteemed organization.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">EDUCATION</h3>
          <div className="text-sm">
            <p className="font-medium">Prapavaathy Metric Higher Secondary School</p>
            <p>2024 — 2027</p>
            <p>BSc Computer Science, Graduated with First Class Honours</p>
            <p>Salem</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">SKILLS</h3>
          <div className="flex flex-wrap gap-2">
            {["JavaScript Programming", "Problem-Solving", "Leadership", "Node.js", "Presentation"].map((skill) => (
              <span key={skill} className="bg-secondary px-3 py-1 rounded text-sm">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">LANGUAGES</h3>
          <ul className="text-sm list-disc list-inside">
            <li>English</li>
            <li>Tamil</li>
            <li>Telugu</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">ACHIEVEMENTS</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Academic Topper</li>
            <li>Department Secretary</li>
            <li>Club Vice Secretary</li>
            <li>Organiser of Club Activities</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">CERTIFICATIONS AND LICENSES</h3>
          <ul className="text-sm list-disc list-inside">
            <li>NSS Volunteer</li>
            <li>Certificate of Proficiency</li>
            <li>Attendance Certificate</li>
            <li>Presentation of Paper - 4</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">HOBBIES AND INTERESTS</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Book Reading</li>
            <li>Poetry</li>
            <li>Doodles</li>
          </ul>
        </div>
      </div>
    </RevealOnScroll>
  </div>
);
        <p className="text-xs text-muted-foreground mt-3">
          Add your resume PDF to <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">public/resume.pdf</code> and update the link.
        </p>
      </div>
    </RevealOnScroll>
  </div>
);

export default Resume;
