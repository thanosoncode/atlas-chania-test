"use client";

import Image from "next/image";
import ShadowHeading from "../../components/shadowHeading/ShadowHeading";
import "./FollowUsOnInstagram.css";
import item1 from "../../../public/koritsaki-2.jpeg";
import item2 from "../../../public/instagram/item-2.jpeg";
import item3 from "../../../public/instagram/item-3.jpeg";
import item4 from "../../../public/instagram/item-4.jpeg";
import item5 from "../../../public/instagram/item-5.jpeg";
import item6 from "../../../public/instagram/item-6.jpeg";
import item7 from "../../../public/instagram/item-7.jpeg";
import item8 from "../../../public/instagram/item-8.jpeg";
import main from "../../../public/koritsaki-1.jpeg";
import Modal from "./Modal";
import { useState } from "react";

const FollowUsOnInstagram = () => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    { id: 0, src: item1, isMain: false, name: "item1" },
    { id: 1, src: item2, isMain: false, name: "item2" },
    { id: 2, src: item3, isMain: false, name: "item3" },
    { id: 3, src: item4, isMain: false, name: "item4" },
    { id: 4, src: item5, isMain: false, name: "item5" },
    { id: 5, src: item6, isMain: false, name: "item6" },
    { id: 6, src: item7, isMain: false, name: "item7" },
    { id: 7, src: item8, isMain: false, name: "item8" },
    { id: 8, src: main, isMain: true, name: "main" },
  ];

  const handleImageSelect = (id: number) => {
    setStartIndex(id);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  return (
    <div className="mb-20 sm:mb-32 relative">
      <div className="w-full lg:w-[1200px] relative mx-auto px-4">
        <div className="hidden xl:flex justify-center ">
          <ShadowHeading title="instagram" top="top-12" />
        </div>
        <div className="xl:hidden hidden md:flex justify-center">
          <ShadowHeading title="instagram" top="top-24" size={150} />
        </div>
      </div>
      <div className="pt-16 md:pt-48 px-4">
        <a
          href="https://www.instagram.com/johnatlas_elitefitness/?hl=el"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase  text-5xl sm:text-7xl  font-extrabold flex flex-col gap-2 justify-center items-center mb-10 sm:mb-20 hover:underline"
        >
          <span className="text-center">follow us</span>
          <span className="text-center">on instagram</span>
        </a>
        <div className="grid-container-instagram">
          {images.map((item) =>
            item.isMain ? (
              <div
                key={item.name}
                className="relative active:scale-110  hover:scale-110 hover:-rotate-3 duration-200"
                style={{ gridArea: item.name }}
                onClick={() => handleImageSelect(item.id)}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1320px) 387px, (min-width: 980px) calc(26.25vw + 46px), calc(48.79vw - 14px)"
                />
              </div>
            ) : (
              <div
                key={item.name}
                className="relative active:scale-110  hover:scale-110 hover:-rotate-3 duration-200"
                style={{ gridArea: item.name }}
                onClick={() => handleImageSelect(item.id)}
              >
                <Image
                  src={item.src}
                  alt=""
                  className="object-cover"
                  fill
                  sizes="(min-width: 1320px) 183px, (min-width: 980px) calc(13.13vw + 12px), (min-width: 740px) calc(25vw - 23px), calc(23.81vw - 8px)"
                />
              </div>
            )
          )}
        </div>
      </div>
      {open && (
        <Modal
          open={open}
          startIndex={startIndex}
          onClose={handleCloseModal}
          images={images}
        />
      )}
    </div>
  );
};
export default FollowUsOnInstagram;
