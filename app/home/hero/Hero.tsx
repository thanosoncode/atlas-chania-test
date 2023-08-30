import { BiTime } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import Image from "next/image";
import koritsaki from "../../../public/koritsaki-2.jpg";
import MotionHeader from "./MotionHeader";

const Hero = () => {
  return (
    <>
      <div className="pb-60 md:pb-40">
        <div className="relative w-full h-[1000px] sm:h-[1100px] ">
          <div
            className="absolute inset-0 z-10"
            style={{
              backdropFilter: "brightness(70%)",
            }}
          ></div>
          <div className="w-full h-full relative">
            <Image
              src={koritsaki}
              alt="hero"
              fill
              placeholder="blur"
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
          <MotionHeader />
        </div>
      </div>
      <div className="absolute top-[860px] sm:top-[960px] left-0 z-30 h-80 md:h-72 w-full  ">
        <div className="flex h-full">
          <div className="w-full bg-neutral-900 h-full"></div>
          <div className="w-full xl:w-[1200px] bg-neutral-900 shrink-0 text-white md:h-full px-4 lg:px-12 pt-8 md:pt-20 pb-8 md:pb-0 flex justify-center md:block h-[420px]">
            <div className="shrink-0 flex flex-col md:flex-row justify-between md:w-full  gap-2 md:gap-8 w-auto ">
              <div className="flex gap-3 lg:gap-8">
                <div className="hidden lg:block">
                  <BiTime size="56px" />
                </div>
                <div className="block lg:hidden">
                  <BiTime size="32px" />
                </div>
                <div>
                  <h4 className="uppercase text-[17px] sm:text-lg font-bold tracking-wider mb-3  ">
                    Open hours
                  </h4>
                  <div>
                    <div className="font-light mb-1 flex gap-5 justify-between">
                      <div className="uppercase whitespace-nowrap sm:text-base text-[15px]">
                        monday - friday
                      </div>
                      <div className="whitespace-nowrap sm:text-base text-[15px]">
                        8:30AM - 22:30PM
                      </div>
                    </div>
                    <div className="font-light mb-1 flex gap-5 justify-between">
                      <div className="uppercase whitespace-nowrap sm:text-base text-[15px]">
                        Saturday
                      </div>
                      <div className="whitespace-nowrap sm:text-base text-[15px]">
                        8:30AM - 18:30PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-8">
                <div className="hidden lg:block">
                  <MdOutlineLocationOn size="56px" />
                </div>
                <div className="block lg:hidden">
                  <MdOutlineLocationOn size="32px" />
                </div>
                <div>
                  <h4 className="uppercase text-[17px] sm:text-lg font-bold tracking-wider mb-3 ">
                    Location
                  </h4>
                  <p className="tracking-wider font-light sm:text-base text-[15px]  mb-1">
                    Αγίου Νεκταρίου 31-29
                  </p>
                  <p className="tracking-wider font-light sm:text-base text-[15px]">
                    Πασακάκι, Χανιά
                  </p>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-8">
                <div className="hidden lg:block">
                  <AiOutlineMail size="56px" />
                </div>
                <div className="block lg:hidden">
                  <AiOutlineMail size="32px" />
                </div>

                <div className="flex flex-col ">
                  <h4 className="uppercase text-[17px] sm:text-lg font-bold tracking-wider mb-3  ">
                    Contact
                  </h4>
                  <div>
                    <p className="tracking-wider sm:text-base text-[15px] font-light  mb-1">
                      giannisdagou@gmail.com
                    </p>
                    <p className="tracking-wider sm:text-base text-[15px] font-light ">
                      698 739 1659
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-transparent h-full"></div>
        </div>
      </div>
    </>
  );
};
export default Hero;
