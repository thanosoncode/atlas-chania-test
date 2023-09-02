"use client";

import Image from "next/image";
import { formatDate } from "../../utils/helpers";
import { useState } from "react";
import xss from "xss";
import Quotes from "../../components/svgs/Quotes";
import wodBg from "../../../public/wod-bg.jpg";
import Chevron from "../../components/svgs/Chevron";
import { motion } from "framer-motion";
import DeleteButton from "./deleteButton/DeleteButton";
import { Session } from "@/app/utils/types";

const wodVariants = {
  hidden: { y: "-100vh" },
  visible: { y: 0, transition: { delay: 0.5 } },
};

const Wod = ({
  session,
  allWods,
}: {
  session: Session | undefined;
  allWods: {
    id: string;
    wodTitle: string;
    wodContent: string;
    createdAt: Date;
  }[];
}) => {
  const [currentWod, setCurrentWod] = useState(allWods[0]);

  const step = 5;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const handleWodClick = (id: string) => {
    const selected = allWods.find((w) => w.id === id);

    if (selected) {
      setCurrentWod(selected);
    }
  };

  const handlePrevious = () => {
    setStart((prevValue) => (prevValue >= step ? prevValue - 5 : prevValue));
    setEnd((prevValue) => (prevValue > step ? prevValue - step : prevValue));
  };

  const handleNext = () => {
    setStart((prevValue) =>
      allWods.length - step > prevValue ? prevValue + step : prevValue
    );
    setEnd((prevValue) =>
      allWods.length > prevValue ? prevValue + step : prevValue
    );
  };

  return (
    <div className="py-12 md:py-28 relative" key={Math.random()}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backdropFilter: "brightness(30%)",
        }}
      ></div>
      <Image
        src={wodBg}
        alt="bg-image"
        fill
        className="-z-20  object-cover opacity-90"
        priority
        placeholder="blur"
        sizes="100vw"
      />
      <div className="w-full xl:w-[1200px] mx-auto overflow-y-hidden px-4 mt-12 text-white">
        <motion.div
          variants={wodVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center"
        >
          <div className="flex gap-8 items-center justify-center">
            <h1 className="text-3xl">WOD</h1>
            <h2 className="text-xl">{formatDate(currentWod.createdAt)}</h2>
          </div>
          <div className="border-2 py-4 px-4 sm:px-16 border-white mt-12 w-full md:w-auto">
            <div className="flex gap-4 mt-8">
              <div>
                <Quotes />
              </div>
              <div className="text-6xl sm:text-7xl font-bold">
                {currentWod.wodTitle}
              </div>
              <div className="self-end rotate-180">
                <Quotes />
              </div>
            </div>

            <div
              className="mt-12"
              dangerouslySetInnerHTML={{ __html: xss(currentWod.wodContent) }}
            ></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-full md:w-1/2 mx-auto"
        >
          <table className="w-full mx-auto text-sm text-left text-white mt-24">
            <thead className="text-xs  uppercase bg-neutral-900">
              <tr>
                <th scope="col" className="px-6 py-3">
                  WOD
                </th>
                <th scope="col" className="px-1 py-3">
                  Date
                </th>
                {session && (
                  <th scope="col" className="px-1 py-3">
                    Remove
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {allWods.slice(start, end).map((w) => {
                return (
                  <tr
                    key={w.id}
                    className="bg-neutral-800 border-b hover:bg-neutral-700 duration-200 cursor-pointer"
                    onClick={() => handleWodClick(w.id)}
                  >
                    <td className="px-6 py-3">{w.wodTitle}</td>
                    <td className="px-1 py-3">{formatDate(w.createdAt)}</td>
                    {session && (
                      <td className="px-1 py-3">
                        <DeleteButton id={w.id} />
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex gap-4 text-white items-center justify-end mt-2">
            <button
              className="cursor-pointer"
              onClick={handlePrevious}
              disabled={start - step < 0}
            >
              <Chevron
                size="16px"
                fill={start - step < 0 ? "#545454" : "#fff"}
              />
            </button>
            <p className="text-sm">
              {start + 1} - {end}
            </p>
            <button
              className="rotate-180 cursor-pointer"
              onClick={handleNext}
              disabled={end - 1 + step > allWods.length + 1}
            >
              <Chevron
                size="16px"
                fill={end - 1 + step > allWods.length + 1 ? "#545454" : "#fff"}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Wod;
