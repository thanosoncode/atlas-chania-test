"use client";
import TextShadow from "../../../components/textShadow/TextShadow";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionTItle = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div ref={ref}>
      <div className="hidden lg:flex w-full h-full justify-center  ">
        <TextShadow title="about us" top="top-12" />
      </div>
      <div className="hidden md:flex lg:hidden w-full h-full justify-center  ">
        <TextShadow title="about us" top="top-24" size={150} />
      </div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex gap-1 flex-col items-center text-5xl lg:text-7xl font-extrabold mb-8 duration-200 delay-100"
      >
        <span className="text-center">WE ARE NOT JUST A GYM</span>
        <span className="text-center"> WE ARE A WHOLE COMMUNITY</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-2xl text-neutral-500 text-center"
      >
        Unlock Your True Fitness Potential &ndash; Transform More Than Just Your
        Physical Self.
      </motion.div>
    </div>
  );
};
export default MotionTItle;
