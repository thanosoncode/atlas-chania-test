"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });

  return (
    <motion.div
      className="flex gap-12 mt-16 w-full"
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0 }}
      animate={{
        y: inView ? 0 : 50,
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0,
      }}
      transition={{ delay: 0.2, duration: 0.1 }}
    >
      <Link
        className="border border-white text-white  hover:bg-white hover:text-black duration-200 uppercase w-full mx-auto md:w-min md:px-16 py-5 text-center  whitespace-nowrap font-bold text-lg block"
        href="/contact"
      >
        κλεισε δοκιμαστικη προπονηση
      </Link>
    </motion.div>
  );
};
export default MotionButton;
