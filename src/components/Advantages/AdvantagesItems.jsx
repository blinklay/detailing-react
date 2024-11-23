import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AdvantagesItem({ text, title, url, delay }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ delay: delay * 0.3, duration: 0.5 }}
    >
      <img className="w-[70px]" src={url} alt="time icon" />
      <h3 className="font-bold text-[21px] text-center">{title}</h3>
      <div className="text-center text-[16px]">{text}</div>
    </motion.div>
  );
}
