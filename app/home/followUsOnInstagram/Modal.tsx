"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image, { StaticImageData } from "next/image";
import { FaXmark } from "react-icons/fa6";

const Modal = ({
  startIndex,
  open,
  onClose,
  images,
}: {
  startIndex: number;
  open: boolean;
  onClose: () => void;
  images: {
    id: number;
    src: StaticImageData;
    isMain: boolean;
    name: string;
  }[];
}) => {
  const [index, setIndex] = useState(startIndex);
  const handleNextImageClick = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImageClick = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <div className={`${open ? "fixed block" : "none hidden"}  inset-0 z-20 `}>
      <div className="bg-black absolute inset-0 z-30 opacity-80"></div>
      <div className="flex justify-center items-center h-full w-full mx-auto px-6 absolute inset-0 z-40">
        <div className=" xl:w-[1200px] w-full flex justify-center items-center relative">
          <div
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex w-8 h-8 justify-center items-center bg-neutral-200 active:bg-white hover:bg-neutral-400 duration-100 rounded-full cursor:pointer"
            onClick={handlePrevImageClick}
          >
            <BiChevronLeft color="#000" size="32px" />
          </div>
          <div
            className="absolute -right-4 top-1/2 -translate-y-1/2 flex justify-center w-8 h-8 items-center bg-neutral-200 active:bg-white hover:bg-neutral-400 duration-100 rounded-full cursor:pointer"
            onClick={handleNextImageClick}
          >
            <BiChevronRight color="#000" size="32px" />
          </div>
          <div
            className="absolute -right-4 -top-4    flex justify-center items-center w-8 h-8 bg-neutral-200 cursor:pointer active:bg-white hover:bg-neutral-400 duration-100 rounded-full cursor:pointer"
            onClick={onClose}
          >
            <FaXmark color="#000" size="18px" />
          </div>
          <div className="h-full overflow-hidden flex justify-center items-center w-full">
            <Image
              src={images[index].src}
              alt="main"
              className=" object-cover select-none h-[600px]  lg:w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
