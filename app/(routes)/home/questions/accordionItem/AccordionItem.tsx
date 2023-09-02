"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface AccordionItemProps {
  question: { question: string; answer: string };
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question: { question, answer },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [answerHeight, setAnswerHeight] = useState("");
  const answerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (answerRef.current) {
      const height = answerRef.current.scrollHeight + 20;

      setAnswerHeight(height.toString());
    }
  }, []);

  return (
    <div className="max-w-[800px] flex flex-col mx-auto overflow-hidden border-b  border-neutral-300">
      <div
        className="flex justify-between pb-2 cursor-pointer items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4
          className={`text-lg  sm:text-2xl pr-4 ${
            isOpen ? "text-neutral-300" : "text-neutral-100"
          } hover:text-neutral-300`}
        >
          {question}
        </h4>
        <div className={` ${isOpen ? "rotate-180" : ""}`}>
          <BsChevronDown fill="white" size="20px" />
        </div>
      </div>
      <div
        ref={answerRef}
        style={{ height: isOpen ? answerHeight + "px" : "0px" }}
        className=" duration-300 pt-4 text-base sm:text-lg text-neutral-300"
      >
        {answer}
      </div>
    </div>
  );
};
export default AccordionItem;
