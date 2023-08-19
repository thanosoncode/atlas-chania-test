"use client";
import { motion } from "framer-motion";
import { BsCheck2 } from "react-icons/bs";

const headerVariants = {
  hidden: { y: "-100vh" },
  visible: { y: 0, transition: { delay: 0.5 } },
};

const MotionHeader = () => {
  return (
    <div className="w-full h-full">
      <motion.h1
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl xl:text-8xl text-white uppercase font-extrabold mb-6"
      >
        atlas chania
      </motion.h1>
      <p className="text-white w-full md:w-4/5 lg:w-1/2 text-base md:text-lg">
        Το Αtlas Chania είναι ένα σύγχρονο Strength & Condition Center που
        αποσκοπεί στο να μάθει τον σύγχρονο ασκούμενο να γυμνάζεται σωστά με μη
        συμβατικούς τρόπους &#40;κλασσικό γυμναστήριο&#41; ανάλογα με το τι
        χρειάζεται και τα θέλω του.
      </p>
      <p className="text-white w-full md:w-1/2 text-base md:text-lg mt-6">
        Η προπονητική βασίζεται πάνω στα εξής αθλήματα
      </p>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col gap-3  text-base md:text-lg mt-8"
      >
        <div className="flex gap-4">
          <BsCheck2 size={28} color="#fff" />
          <p className="uppercase  text-white font-bold">POWERLIFTING</p>
        </div>
        <div className="flex gap-4">
          <BsCheck2 size={28} color="fff" />
          <p className="uppercase  text-white font-bold">WEIGHTLIFTING</p>
        </div>
        <div className="flex gap-4">
          <BsCheck2 size={28} color="#fff" />
          <p className="uppercase  text-white font-bold">CROSSFIT</p>
        </div>
        <div className="flex gap-4">
          <BsCheck2 size={28} color="#fff" />
          <p className="uppercase  text-white font-bold">
            συνδυασμος των παραπανω
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default MotionHeader;
