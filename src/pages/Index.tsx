import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <div className="section-container" style={{ paddingTop: "100px", paddingBottom: "100px", minHeight: "80vh", display: "flex", alignItems: "center" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <span className="badge-accent">Available for Internships</span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6 mb-4">
        Sree Padmapriya S
      </h1>
      <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground mb-6">
        I build <TypeWriter />
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
        Junior Software Developer specializing in backend systems. Currently scaling leadership roles as Department Secretary and NSS Coordinator.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/projects" className="btn-primary flex items-center gap-2">
          View Projects <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn-outline">
          Get in Touch
        </Link>
      </div>
    </motion.div>
  </div>
);

export default Index;
