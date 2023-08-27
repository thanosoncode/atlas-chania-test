import Image from "next/image";
import weightlifting from "../../../public/weightlifting.jpg";
import powerlifting from "../../../public/powerlifting.jpg";
import opengym from "../../../public/open-gym-1.jpg";
import crossfit from "../../../public/crossfit-m.jpg";
import Link from "next/link";
import "./Classes.css";
import ShadowHeadingBlack from "@/app/components/shadowHeading/ShadowHeadingBlack";

const Classes = () => {
  return (
    <div className="bg-neutral-900  pb-16 sm:pb-[120px] flex flex-col items-center">
      <div className="w-full lg:w-[1200px] mx-auto relative px-4">
        <div className="top-[70px]   md:top-36 lg:top-52 text-white absolute z-20 flex justify-between inset-0 items-center w-full">
          <h4 className="block sm:hidden text-5xl xl:text-6xl w-full uppercase text-center font-extrabold lg:whitespace-nowrap px-2 sm:px-6">
            αθληματα
          </h4>
          <h4 className="sm:block hidden text-5xl xl:text-6xl w-full uppercase text-center font-extrabold lg:whitespace-nowrap px-2 sm:px-6">
            βρες το αθλημα που σου ταιριαζει
          </h4>
        </div>
        <div className="hidden lg:block w-full h-full">
          <ShadowHeadingBlack
            size={200}
            top="top-0"
            left="left-0"
            title="styles"
          />
        </div>
        <div className="hidden md:block lg:hidden w-full h-full ">
          <ShadowHeadingBlack
            size={150}
            top="top-0"
            left="left-0"
            title="styles"
          />
        </div>
      </div>
      <div className="pt-[140px] md:pt-[240px] lg:pt-[280px] px-4 ">
        <div className="grid-container-classes">
          <Link href="/weightlifting" className="w-full h-full block">
            <div className="relative w-full  h-[70%] overflow-hidden">
              <Image
                src={weightlifting}
                alt="class-1"
                className="hover:scale-105 duration-200 object-cover"
                fill
                sizes="(min-width: 1320px) 584px, (min-width: 860px) calc(42.27vw + 34px), (min-width: 400px) calc(100vw - 32px), calc(28.75vw + 239px)"
              />
            </div>
            <div className="text-neutral-400 mt-2 ">
              <h3 className="text-3xl text-white font-bold   tracking-wide uppercase">
                Olympic Weightlifting
              </h3>
              <p className="text-base sm:text-lg  block  font-semibold tracking-wide text-neutral-300 mb-1 md:mb-2">
                Ο &quot;πατέρας&quot; των αθλημάτων της ισχύος
              </p>
            </div>
          </Link>
          <Link href="/powerlifting" className="w-full h-full block ">
            <div className="relative w-full  h-[70%] overflow-hidden">
              <Image
                src={powerlifting}
                alt="class-1"
                className="hover:scale-105 duration-200 object-cover"
                fill
                sizes="(min-width: 1320px) 584px, (min-width: 860px) calc(42.27vw + 34px), (min-width: 400px) calc(100vw - 32px), calc(28.75vw + 239px)"
              />
            </div>
            <div className="text-neutral-400 mt-2 ">
              <h3 className="text-3xl text-white font-bold tracking-wide uppercase">
                Powerlifting
              </h3>
              <p className="text-base sm:text-lg  block  font-semibold tracking-wide text-neutral-300 mb-1 md:mb-2">
                Μάθε την τέχνη του powerlifting και εκτόξευσε την δύναμή σου
              </p>
            </div>
          </Link>
          <Link href="/crossfit" className="w-full h-full block">
            <div className="relative w-full  h-[70%] overflow-hidden">
              <Image
                src={crossfit}
                alt="class-1"
                className="hover:scale-105 duration-200 object-cover"
                fill
                sizes="(min-width: 1320px) 584px, (min-width: 860px) calc(42.27vw + 34px), (min-width: 400px) calc(100vw - 32px), calc(28.75vw + 239px)"
              />
            </div>
            <div className="text-neutral-400 mt-2 ">
              <h3 className="text-3xl text-white uppercase font-bold tracking-wide">
                Crossfit
              </h3>
              <p className="text-base sm:text-lg block  font-semibold tracking-wide text-neutral-300 mb-1 md:mb-2">
                Γυμνάσε ολοκληρωμένα το σώμα σου και σε σύντομο χρονικό διάστημα
              </p>
            </div>
          </Link>
          <Link href="/opengym" className="w-full h-full block">
            <div className="relative w-full  h-[70%] overflow-hidden">
              <Image
                src={opengym}
                alt="class-1"
                className="hover:scale-105 duration-200 object-cover"
                fill
                sizes="(min-width: 1320px) 584px, (min-width: 860px) calc(42.27vw + 34px), (min-width: 400px) calc(100vw - 32px), calc(28.75vw + 239px)"
              />
            </div>
            <div className="text-neutral-400 mt-2 ">
              <h3 className="text-3xl text-white font-bold  tracking-wide uppercase">
                Open gym
              </h3>
              <p className="text-base sm:text-lg  block  font-semibold tracking-wide text-neutral-300 mb-1 md:mb-2">
                Ενισχύστε την προπόνηση σας με μηχανήματα για αύξηση μυικής
                μάζας και για βελτίωση των main lifts
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-12 mt-16 w-full">
          <Link
            className="border border-white text-white  hover:bg-white hover:text-black duration-200 uppercase w-full mx-auto md:w-min md:px-16 py-5 text-center  whitespace-nowrap font-bold text-lg block"
            href="/contact"
          >
            κλεισε δοκιμαστικη προπονηση
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Classes;
