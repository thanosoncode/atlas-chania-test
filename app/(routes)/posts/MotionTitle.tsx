"use client";
import { motion } from "framer-motion";

const MotionTitle = () => {
  return (
    <motion.h4
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-4 sm:my-6 uppercase font-bold text-3xl"
    >
      αρθρα &amp; νεα
    </motion.h4>
  );
};
export default MotionTitle;
