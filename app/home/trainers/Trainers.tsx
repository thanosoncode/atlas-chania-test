import ShadowHeading from "../../components/shadowHeading/ShadowHeading";
import johnAtlas from "../../../public/john-atlas.jpg";
import "./Trainers.css";
import SignleTrainer from "./SingleTrainer";

const Trainers = () => {
  return (
    <div className="relative  pb-12  px-4">
      <div className="hidden lg:flex w-full h-full justify-center  ">
        <ShadowHeading title="trainers" top="top-0" />
      </div>
      <div className="hidden md:flex lg:hidden w-full h-full justify-center  ">
        <ShadowHeading title="trainers" top="top-12" size={150} />
      </div>
      <div className="pt-12 sm:pb-10 md:pt-40">
        <h4 className="uppercase text-4xl md:text-7xl  font-extrabold flex flex-col gap-2 justify-center items-center text-center">
          προπονητες
        </h4>
        <div className="flex w-full xl:w-[1200px] mx-auto sm:flex-row flex-col pt-8 gap-6 lg:gap-12">
          <SignleTrainer
            title="Γιαννης νταγκουνακης"
            subtitle="ασπαστος"
            href="/ntagkounakis"
            image={johnAtlas}
          />
          {/* <SignleTrainer
            title="Γιαννης νταγκουνακης"
            subtitle="ασπαστος"
            href="/ntagkounakis"
            image={johnAtlas}
          />
          <SignleTrainer
            title="Γιαννης νταγκουνακης"
            subtitle="ασπαστος"
            href="/ntagkounakis"
            image={johnAtlas}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default Trainers;
