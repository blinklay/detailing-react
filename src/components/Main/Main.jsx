import { motion } from "framer-motion";

export default function Main() {
  return (
    <motion.div
      className="bg-[url('./back.jpg')] bg-cover bg-center h-[760px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-[1220px] mx-auto px-[10px] flex justify-center items-center h-[100%]">
        <motion.div
          className="flex flex-col items-center gap-5 p-7 bg-[rgba(0,0,0,0.7)] w-[100%]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Детейлинг услуги в <span className="text-accent">Бузулуке</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p>
              Полировка, химчистка салона - профессиональный уход и защита
              автомобиля
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
