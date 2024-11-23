import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionHeader({ children, style }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.h1
      ref={ref}
      className="text-2xl text-[#000] uppercase font-bold"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      style={style}
    >
      {children}
    </motion.h1>
  );
}
