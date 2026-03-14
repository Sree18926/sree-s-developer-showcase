import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! (Demo — connect a backend to make this functional)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="section-container">
      <RevealOnScroll>
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">Let's connect and build something great.</p>
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-12">
        <RevealOnScroll>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="btn-primary inline-flex items-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </form>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just chatting about tech. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "sreepadmapriya@email.com", href: "mailto:sreepadmapriya@email.com" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com" },
                { icon: Github, label: "GitHub Profile", href: "https://github.com" },
                { icon: MapPin, label: "India", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-accent">
                    <item.icon size={16} />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Contact;
