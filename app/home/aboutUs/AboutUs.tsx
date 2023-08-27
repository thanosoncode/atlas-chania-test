import ShadowHeading from "../../components/shadowHeading/ShadowHeading";
import MotionImageTest from "./MotionImagesTest";

const AboutUs = () => {
  return (
    <div className="relative ">
      <div className="flex justify-center items-center pt-32 sm:pt-60 flex-col w-full px-4">
        <div>
          <div className="hidden lg:flex w-full h-full justify-center  ">
            <ShadowHeading title="about us" top="top-12" />
          </div>
          <div className="hidden md:flex lg:hidden w-full h-full justify-center  ">
            <ShadowHeading title="about us" top="top-24" size={150} />
          </div>
          <h1 className="flex gap-1 flex-col items-center text-5xl lg:text-7xl font-extrabold mb-8 duration-200 delay-100">
            <span className="text-center">WE ARE NOT JUST A GYM</span>
            <span className="text-center"> WE ARE A WHOLE COMMUNITY</span>
          </h1>
          <div className="text-2xl text-neutral-500 text-center">
            Unlock Your True Fitness Potential &ndash; Transform More Than Just
            Your Physical Self.
          </div>
        </div>
        <div className="mt-12 mb-28">
          <MotionImageTest />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
