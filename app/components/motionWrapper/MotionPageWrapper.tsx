"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export const MotionPageWrapper = ({ children }: { children: ReactNode }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
