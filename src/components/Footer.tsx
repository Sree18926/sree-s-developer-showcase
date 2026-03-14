import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sree Padmapriya S. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
        <a href="mailto:sreepadmapriya@email.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
