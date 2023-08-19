"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionTItle = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div className="top-0 sm:top-10 md:top-32 text-white absolute z-20 flex justify-between inset-0 items-center w-full">
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        ref={ref}
        className="text-5xl lg:text-6xl xl:text-7xl uppercase text-center font-extrabold lg:whitespace-nowrap px-6"
      >
        Βρες το άθλημα που σου ταιριάζει
      </motion.h4>
    </div>
  );
};
export default MotionTItle;
