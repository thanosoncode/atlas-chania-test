import Image from "next/image";
import ShadowHeading from "../../components/shadowHeading/ShadowHeading";
import johnAtlas from "../../../public/john-atlas.jpg";
import katerina from "../../../public/katerina.jpg";
import Link from "next/link";
import "./Trainers.css";

const Trainers = () => {
  return (
    <div className="relative  pb-12  px-4">
      <div className="hidden lg:flex w-full h-full justify-center  ">
        <ShadowHeading title="trainers" top="top-14" />
      </div>
      <div className="hidden md:flex lg:hidden w-full h-full justify-center  ">
        <ShadowHeading title="trainers" top="top-24" size={150} />
      </div>
      <div className="pt-12 sm:pb-20 md:pt-56">
        <h4 className="uppercase text-5xl md:text-7xl  font-extrabold flex flex-col gap-2 justify-center items-center text-center">
          προπονητες
        </h4>
        <div className="flex w-full xl:w-[1200px] mx-auto px-0 xs:px-12 sm:px-20 md:px-0 pt-8">
          <Link className=" block cursor-pointer h-full" href="/ntagkounakis">
            <div className="overflow-hidden w-full h-full">
              <Image
                src={johnAtlas}
                alt="/"
                placeholder="blur"
                className="object-contain w-full  h-full duration-200 hover:scale-105 object-center"
                sizes="(min-width: 1300px) 387px, (min-width: 780px) 30.2vw, calc(100vw - 32px)"
              />
            </div>
            <div className="flex flex-col items-center gap-0 md:gap-2 mt-3">
              <h4 className="uppercase text-2xl   lg:text-2xl font-bold hover:text-red-500 duration-200">
                Γιαννης νταγκουνακης
              </h4>
              <h4 className="uppercase  text-base md:text-lg font-bold text-gray-500 mt-0">
                ασπαστος
              </h4>
            </div>
          </Link>
          {/* <Link className=" block cursor-pointer " href="/katerina">
            <div className="overflow-hidden max-h-[400px] w-full h-full">
              <Image
                src={katerina}
                alt="/"
                className="object-contain w-full  h-full duration-200 hover:scale-105 object-center"
                sizes="(min-width: 1300px) 387px, (min-width: 780px) 30.2vw, calc(100vw - 32px)"
              />
            </div>
            <div className="flex flex-col items-center gap-0 md:gap-2 mt-3">
              <h4 className="uppercase text-2xl   lg:text-2xl font-bold hover:text-red-500 duration-200">
                Κατερινα
              </h4>
              <h4 className="uppercase  text-base md:text-lg font-bold text-gray-500 mt-0">
                personal coach
              </h4>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default Trainers;
