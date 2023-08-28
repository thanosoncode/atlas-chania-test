import Image from "next/image";
import back from "../../public/back.jpeg";
import assaults from "../../public/assaults.jpeg";
import angle from "../../public/angle.jpeg";
import location from "../../public/location.jpeg";
import { PlayButton, PlayButtonMobile } from "../components/svgs/PlayButton";
import Passion from "../components/svgs/Passion";
import Community from "../components/svgs/Community";
import Commitment from "../components/svgs/Commitment";
import Growth from "../components/svgs/Growth";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import MotionHeader from "./MotionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σχετικά με μας",
  description:
    "Μάθετε την ιστορία πίσω από το γυμναστήριο Atlas Chania τις αξίες του, τις εγκαταστάσεις του και για τη δέσμευσή του για προσαρμοσμένη εκπαίδευση. Επισκεφτείτε μας σήμερα στα Χανιά, Ελλάδα.",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης",
};

const About = () => {
  return (
    <MotionWrapper>
      <div className="relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backdropFilter: "brightness(50%)",
          }}
        ></div>
        <div className="relative -z-20 w-full">
          <Image
            src={back}
            alt="about"
            className="h-[700px] xl:h-auto max-h-[900px] object-cover w-full"
            sizes="100vw"
          />
        </div>
        <div className="w-full xl:w-[1200px] mx-auto absolute top-36 md:top-40 xl:top-56 left-1/2 -translate-x-1/2 z-10 px-4">
          <MotionHeader />
        </div>
      </div>
      <div className="w-full xl:w-[1200px] mt-0 sm:mt-20 mx-auto px-4 sm:px-20 md:px-20 lg:px-4">
        <div className=" w-full h-full relative">
          <p
            className={`uppercase text-white font-extrabold absolute hidden sm:block top-28 left-0 -z-10`}
            style={{
              fontSize: 160,
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            Story
          </p>
          <h1 className="pt-20 sm:pt-36 mb-6 text-5xl uppercase font-extrabold flex flex-col text-neutral-900">
            <span>the story</span>
            <span>behind our gym</span>
          </h1>
        </div>
        <div className="flex gap-y-16  flex-col lg:flex-row lg:gap-12 ">
          <div className="w-full lg:w-1/2 relative mt-6">
            <p className="leading-7 text-neutral-700 text-lg">
              Το Atlas Chania ξεκίνησε δειλά το 2015 σε έναν χώρο 125 τμ και
              μοναδικό εξοπλισμό 2 bikes, 4 bars και 250 kg...
            </p>
            <p className="leading-7 text-neutral-700 font-bold text-lg mt-4">
              Ναι! Kαι μόνο αυτά!! Ξεκινήσαμε όμως έχοντας ένα όραμα:
            </p>

            <p className="leading-7 text-neutral-700 text-lg mt-4">
              Nα δείξουμε στον σύγχρονο ασκούμενο, γυμναστηριακό, νοικοκυρά,
              μαθητή κλπ κλπ πώς να γυμνάζεται σαν αθλητής! <br /> Να του
              μάθουμε έννοιες όπως: weightlifting, squat, deadlift, snatch,
              clean jerk, strength, periodisation, vo2max, emom, mobility και
              άλλες χιλιάδες ακόμα.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full relative">
              <Image
                src={assaults}
                alt="story-image"
                className="md:-mt-10 md:h-[450px] lg:h-auto lg:-mt-40 w-full md:w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 xl:w-[1200px] mt-10 sm:mt-20 mx-auto relative flex flex-col items-center">
        <div
          className={`uppercase text-white xl:block hidden font-extrabold absolute left-1/2 -translate-x-1/2 -z-10`}
          style={{
            fontSize: 160,
            textShadow:
              "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
          }}
        >
          facilities
        </div>
        <div
          className={`uppercase text-white xl:hidden hidden md:block font-extrabold absolute left-1/2 -translate-x-1/2 -z-10`}
          style={{
            fontSize: 120,
            textShadow:
              "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
          }}
        >
          facilities
        </div>
        <h4 className="mt-16 xl:mt-36 mb-6 text-5xl uppercase font-extrabold flex flex-col text-neutral-900 text-center">
          our facilities
        </h4>
        <p className="leading-7 text-neutral-700 text-lg  w-full md:w-4/5 xl:w-1/2 mb-12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          sociis morbi sed sagittis consectetur in quisque placerat enim. Vitae.
        </p>
        <div className="w-full  relative">
          <Image
            src={angle}
            alt="facilites"
            className="object-cover max-h-[500px]"
          />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <PlayButton />
          </div>
          <div className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <PlayButtonMobile />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute inset-0 bg-neutral-900 -top-[100px]  md:-top-[200px] lg:-top-[350px] -z-10"></div>
      </div>
      <div className="bg-neutral-900 text-white pt-[50px]">
        <div className="w-full px-4 xl:w-[1200px] mx-auto relative pt-16 pb-8 sm:py-24 sm:pt-0 sm:pb-[230px]">
          <div className="hidden sm:flex text-5xl lg:text-6xl whitespace-nowrap font-extrabold uppercase text-white absolute z-20 top-[100px] px-4 sm:top-[135px] left-0  justify-start items-center ">
            <span>κεντρικες</span>
            <span>αξιες</span>
          </div>
          <h4 className="text-white uppercase text-4xl text-center sm:hidden font-extrabold">
            κεντρικες αξιες
          </h4>
          <div
            className={`uppercase text-white lg:block hidden font-extrabold absolute  `}
            style={{
              fontSize: 170,
              color: "#171717",
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            Values
          </div>
          <div
            className={`uppercase text-white font-extrabold lg:hidden hidden  sm:block absolute  `}
            style={{
              fontSize: 150,
              color: "#171717",
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            Values
          </div>
        </div>
        <div className="w-full px-4 xl:w-[1200px] mx-auto pb-20">
          <div className="flex flex-col gap-8">
            <div className="flex md:flex-row flex-col gap-8">
              <div className="border border-neutral-400 p-6 sm:p-12 flex flex-col gap-5 w-full md:w-1/2">
                <Growth />

                <h4 className="text-2xl sm:text-3xl uppercase font-bold">
                  ατομο
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-7 ">
                  Δίνουμε έμφαση σε κάθε άτομο ξεχωριστά. Ανάλογα με τις ανάγκες
                  του και το θέλω του. Προτεραιότητα είναι να αγαπήσει την
                  άθληση.
                </p>
              </div>
              <div className="border border-neutral-400 p-6 sm:p-12 flex flex-col gap-5 w-full md:w-1/2">
                <Community />
                <h4 className="text-2xl sm:text-3xl uppercase font-bold">
                  εκμαθηση
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-7 ">
                  Το Atlas Chania είναι ένα κέντρο εκγύμνασης αλλά και
                  εκμάθησης-διδασκαλίας. Ο ασκούμενος μαθαίνει γιατί κάνει αυτό
                  που κάνει αλλά προπάντων μαθαίνει να το κάνει καλά.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8">
              <div className="border border-neutral-400 p-6 sm:p-12 flex flex-col gap-5 w-full md:w-1/2">
                <Commitment />
                <h4 className="text-2xl sm:text-3xl uppercase font-bold ">
                  μαθε καλα τη μπαρα
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-7 ">
                  Ότι και να έχεις στόχο crossfit , weightlifting,
                  powerlifting,gym κλπ κλπ η μπάρα είναι η καλή σου φίλη.. θα
                  την μάθεις και θα την αγαπήσεις.
                </p>
              </div>
              <div className="border border-neutral-400 p-6 sm:p-12 flex flex-col gap-5 w-full md:w-1/2">
                <Passion />
                <h4 className="text-2xl sm:text-3xl uppercase font-bold ">
                  ανθρωποκεντρικh προσeγγιση
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-7 ">
                  Στο Atlas Chania θεωρούμε ότι η εκγύμναση δεν πρέπει να
                  αποτελεί πολυτέλεια. Για αυτό έχουμε θέσει τον πήχη ψηλά όσον
                  αφορά την κοστολόγηση της υπηρεσίας μας. Είμαστε κοντά στον
                  ασκούμενο σε ότι χρειαστεί και τον βοηθάμε σε όλα τα επίπεδα.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[1200px] mx-auto relative flex flex-col items-center pb-20">
        <div
          className={`uppercase text-white font-extrabold md:block hidden absolute left-1/2 -translate-x-1/2 -z-10`}
          style={{
            fontSize: 160,
            textShadow:
              "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
          }}
        >
          location
        </div>
        <div
          className={`uppercase text-white font-extrabold hidden  md:hidden sm:block absolute left-1/2 -translate-x-1/2 -z-10`}
          style={{
            fontSize: 120,
            textShadow:
              "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
          }}
        >
          location
        </div>
        <h4 className="mt-24 md:mt-36 mb-10 text-5xl uppercase font-extrabold flex flex-col text-neutral-900 text-center">
          visit us today
        </h4>
        <div className="flex flex-col-reverse items-center w-full px-4">
          <div className="flex w-full  sm:w-2/3 sm:flex-row  flex-wrap items-start justify-between sm:justify-center sm:px-0 px-4 gap-x-12 gap-y-3 sm:gap-y-6 pt-6">
            <div className="flex gap-3 justify-center items-center">
              <BsTelephone size={24} color="#262626" />
              <div className=" font-semibold text-lg  mb-1">698 739 1659</div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <AiOutlineMail size={24} color="#262626" />
              <div className=" font-semibold text-lg  mb-1">
                giannisdagou@gmail.com
              </div>
            </div>
            <div className="flex gap-3 justify-center items-start sm:items-center">
              <SlLocationPin size={24} color="#262626" />
              <div className=" font-semibold text-lg  mb-1  sm:flex-row flex flex-col gap-2">
                <span>Αγίου Νεκταρίου 31-29 </span>
                <span>Πασακάκι, Χανιά</span>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-2/3 overflow-hidden">
            <Image
              src={location}
              alt="location"
              className="object-cover md:h-auto h-80 hover:scale-105 duration-200"
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
export default About;
