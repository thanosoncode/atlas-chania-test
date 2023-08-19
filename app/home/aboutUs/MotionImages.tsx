"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import incline from "../../../public/incline-barbell.jpg";
import girl from "../../../public/girl.jpg";
import { useRef } from "react";

const MotionImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, margin: "100px 0px" });

  return (
    <div
      className="flex h-[300px] md:h-[500px] lg:h-[600px] w-full max-w-[1200px] mt-32 relative"
      ref={containerRef}
    >
      <motion.div
        className="w-[68%] md:w-1/2 relative h-full"
        initial={{ x: 25, y: 15 }}
        animate={{ x: inView ? 0 : 25, y: inView ? 0 : 15 }}
        transition={{ duration: 5 }}
      >
        <Image
          src={incline}
          alt="incline"
          fill
          className="object-cover"
          sizes="(min-width: 1320px) 600px, (min-width: 780px) calc(43.46vw + 35px), calc(68.04vw - 22px)"
        />
      </motion.div>
      <div className="w-[60%] absolute h-[85%] right-0 top-24 md:top-40">
        <motion.div
          className="w-full h-full relative"
          initial={{ x: -25, y: 15 }}
          animate={{ x: inView ? 0 : -25, y: inView ? 0 : 15 }}
          transition={{ duration: 5 }}
        >
          <Image
            src={girl}
            alt="girl"
            fill
            className="object-cover"
            sizes="(min-width: 1300px) 720px, calc(57.04vw - 10px)"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default MotionImages;
