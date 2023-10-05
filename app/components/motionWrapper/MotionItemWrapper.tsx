"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MotionItemWrapperProps {
  children: React.ReactNode;
  classes?: string;
}

const MotionItemWrapper: React.FC<MotionItemWrapperProps> = ({
  children,
  classes,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      ref={ref}
      className={classes}
    >
      {children}
    </motion.div>
  );
};
export default MotionItemWrapper;
