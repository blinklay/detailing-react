import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <motion.header
      className="bg-header p-5 border-t-2 border-accent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      <div className="max-w-[1220px] mx-auto px-[10px]">
        <Navigation />
      </div>
    </motion.header>
  );
}
