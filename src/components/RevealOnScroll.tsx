import { motion } from "framer-motion";
import { ReactNode } from "react";

const RevealOnScroll = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.2, 0, 0, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default RevealOnScroll;
