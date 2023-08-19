import Image from "next/image";
import crossover from "../../../public/cable-crossover.jpeg";
import { PlayButton } from "../../components/svgs/PlayButton";

const WhatMakesItDifferent = () => {
  return (
    <div className="w-screen h-[660px] relative">
      <div
        className="absolute inset-0 z-10"
        style={{
          backdropFilter: "brightness(50%)",
        }}
      ></div>
      <div className="w-full h-full relative">
        <Image src={crossover} alt="" fill />
      </div>
      <div className="absolute inset-0 z-20  justify-center items-center flex max-w-[1200px] mx-auto">
        <div className="">
          <h4 className="text-white text-7xl font-extrabold uppercase mb-10">
            Discover what makes our gym different
          </h4>
          <button className="bg-white text-black border border-black uppercase px-16 py-5 w-min whitespace-nowrap font-bold text-lg">
            Subscribe now
          </button>
        </div>
        <div>
          <PlayButton />
        </div>
      </div>
    </div>
  );
};
export default WhatMakesItDifferent;
