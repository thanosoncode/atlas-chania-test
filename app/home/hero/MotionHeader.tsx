"use client";
import { motion } from "framer-motion";

import Link from "next/link";

const headerVariants = {
  hidden: { y: "-100vh" },
  visible: { y: 0, transition: { delay: 0.5 } },
};

const MotionHeader = () => {
  return (
    <div className="absolute top-48 sm:top-56 md:top-1/4 left-1/2 -translate-x-1/2   z-10  w-[calc(100%-32px)]">
      <div className="text-white text-center flex flex-col gap-8 items-center justify-center">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-col gap-6  text-5xl  md:text-6xl xl:text-8xl uppercase font-extrabold"
        >
          <span className="whitespace-nowrap">We teach you</span>
          <span className="whitespace-nowrap">how to lift the world</span>
        </motion.h1>
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden flex-col gap-6  text-[2.75rem] xs:text-5xl flex sm:text-6xl  uppercase font-extrabold"
        >
          <span className="whitespace-nowrap">We teach you</span>
          <span className="whitespace-nowrap">how to lift</span>
          <span className="whitespace-nowrap">the world</span>
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-neutral-200 text-base font-semibold sm:text-xl xl:w-1/2 mx-auto mt-3 md:mt-7"
        >
          Ξεκλείδωσε την δύναμη σου και μεταμόρφωσε το σώμα και το μυαλό σου
        </motion.h4>

        <div className="flex gap-6 md:gap-12 mt-10 w-full justify-center md:flex-row flex-col">
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/posts"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black duration-200 uppercase px-6 text-base  block md:px-16 py-5 md:w-min whitespace-nowrap font-bold md:text-lg"
            >
              αρθρα & νεα
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/wod"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black duration-200 uppercase px-6 text-base  block md:px-16 py-5 md:w-min whitespace-nowrap font-bold md:text-lg"
            >
              wod
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default MotionHeader;
