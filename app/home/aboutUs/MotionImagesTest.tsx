"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import motion1 from "../../../public/motion/motion-1.jpg";
import motion2 from "../../../public/motion/motion-2.jpg";
import motion3 from "../../../public/motion/motion-3.jpg";
import motion4 from "../../../public/motion/motion-4.jpg";
import { useRef } from "react";

const MotionImageTest = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    once: false,
    margin: "100px 0px 50px 0px",
  });

  const images = [motion1, motion2, motion3, motion4];

  return (
    <div className="w-full lg:w-[1200px] mx-auto" ref={containerRef}>
      <div className="flex gap-2 sm:gap-6 md:gap-12 flex-wrap justify-center px-0 sm:px-2">
        {images.map((image, index) => (
          <motion.div
            className="w-full sm:w-[45%]"
            initial={{ x: "100vw" }}
            animate={{ x: inView ? 0 : "100vw" }}
            transition={{ delay: 0.3 + index / 5 }}
          >
            <Image src={image} alt="incline" className="h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default MotionImageTest;
