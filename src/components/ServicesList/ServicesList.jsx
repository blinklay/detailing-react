import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const url = "./car.jpg";

export default function ServicesList() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div className="mt-10 grid grid-cols-3 gap-3">
      {[0, 2, 4, 5, 6, 7].map((item, index) => (
        <motion.div
          className={`relative h-[300px] bg-[#000] bg-[url('${url}')] bg-cover bg-center hover:filter hover:brightness-125`}
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
        >
          <Link to="/item" className={`inline-block h-[100%] w-[100%]`}>
            <p className="absolute bottom-5 left-5 pb-3 border-b-2 border-accent">
              Подсветка салона
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
