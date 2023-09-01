import Image from "next/image";
import weightlifting from "../../../public/weightlifting.jpg";
import powerlifting from "../../../public/powerlifting.jpg";
import opengym from "../../../public/open-gym-1.jpg";
import crossfit from "../../../public/crossfit-m.jpg";
import Link from "next/link";
import "./Classes.css";
import ShadowHeadingBlack from "@/app/components/shadowHeading/ShadowHeadingBlack";
import SingleClass from "./SingleClass";

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
          <SingleClass
            title="Olympic Weightlifting"
            subtitle="Ο πατέρας των αθλημάτων ισχύος"
            image={weightlifting}
            href="/weightlifting"
          />
          <SingleClass
            title="Powerlifting"
            subtitle="Μάθε την τέχνη του powerlifting και εκτόξευσε την δύναμή σου"
            image={powerlifting}
            href="/powerlifting"
          />
          <SingleClass
            title="Crossfit"
            subtitle="Γυμνάσε ολοκληρωμένα το σώμα σου και σε σύντομο χρονικό διάστημα"
            image={crossfit}
            href="/crossfit"
          />
          <SingleClass
            title="Open gym"
            subtitle="Ενίσχυσαι την προπόνηση σου με μηχανήματα για αύξηση μυικής
            μάζας και για βελτίωση των main lifts"
            image={opengym}
            href="/opengym"
          />
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
