import Image from "next/image";
import johnAtlas from "../../../../public/john-atlas.jpg";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { MotionPageWrapper } from "../../../components/motionWrapper/MotionPageWrapper";
import { BsFillTrophyFill, BsCheck2 } from "react-icons/bs";
import { Metadata } from "next";
import katerina from "../../../../public/katerina.jpg";
import TrainerItem from "./TrainerItem";

export const metadata: Metadata = {
  title: "Γιάννης Νταγκουνάκης",
  description:
    "Γιάννης Νταγκουνάκης, πρωταθλητή στην άρση βαρών και στο powerlifting. Ανακαλύψτε τις εντυπωσιακές επιδόσεις του, τα πρωταθλήματα που έχει κατακτήσει και το άσπαστο ρεκόρ IPF points. Προπονητής και ιδιοκτήτης του Atlas Chania. Ενημερωθείτε για τις επιτυχίες του στην άρση βαρών, με εντυπωσιακά 325kg squat, 210kg bench και 330kg deadlift. Ακολουθήστε τον στα μέσα κοινωνικής δικτύωσης και εμπνευστείτε από τον προσωπικό προπονητή του Atlas Chania.",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης",
};

const SingleTrainer = () => {
  return (
    <MotionPageWrapper>
      <div className="pt-6 sm:pt-12 md:pt-28 pb-20">
        <div className="w-full xl:w-[1200px] mx-auto relative overflow-y-hidden px-4">
          <p
            className="md:block hidden uppercase text-white font-extrabold absolute  pb-96 top-24 right-0 -z-10"
            style={{
              fontSize: 180,
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            trainer
          </p>
          <div className="flex gap-2 sm:gap-6  pt-16 sm:pt-28 px-0 lg:px-14  items-center md:flex-row flex-col">
            <div className="relative w-full md:w-[48%] h-full px-0 sm:px-6 md:px-0 overflow-hidden">
              <Image
                src={johnAtlas}
                alt="trainer"
                className="w-full md:w-auto  min-h-[440px] object-cover hover:scale-105 duration-200 h-full"
                width={465}
                height={465}
                priority
                placeholder="blur"
              />
            </div>
            <div className="pt-4 sm:pt-8 md:pt-0 w-full md:w-[48%] self-start">
              <h1 className=" md:text-4xl lg:text-6xl text-black font-extrabold uppercase mb-3">
                Γιαννης Νταγκουνακης
              </h1>

              <p className="text-xl md:text-2xl   mb-6">
                Πρωταθλητής στην άρση βαρών και στο powerlifting
              </p>
              <div className="flex gap-3 items-center ">
                <div className="shrink-0">
                  <BsFillTrophyFill size="20px" />
                </div>
                <p className="text-base md:text-lg text-neutral-600 mt-2 font-bold">
                  Πρωταθλητής στην άρση βαρών με 155 snatch & 190 clean and
                  jerk!
                </p>
              </div>
              <div className="flex gap-3 items-center ">
                <div className="shrink-0">
                  <BsFillTrophyFill size="20px" />
                </div>
                <p className="text-base md:text-lg text-neutral-600 mt-2 font-bold">
                  Πρωταθλητής στο powerlifting &#40;IPF&#41; με άσπαστο ρεκόρ
                  IPF points εδώ και 5 χρόνια!
                </p>
              </div>

              <p className="text-xl text-neutral-800 font-bold mt-8 mb-2">
                865kg total στα 104kg
              </p>
              <div className="flex gap-3 items-center ">
                <div className="shrink-0">
                  <BsCheck2 size="20px" />
                </div>
                <p className="text-bases md:text-lg text-neutral-950 ">
                  325kg Squat
                </p>
              </div>
              <div className="flex gap-3 items-center ">
                <div className="shrink-0">
                  <BsCheck2 size="20px" />
                </div>
                <p className="text-bases md:text-lg text-neutral-950 ">
                  210kg Bench
                </p>
              </div>
              <div className="flex gap-3 items-center ">
                <div className="shrink-0">
                  <BsCheck2 size="20px" />
                </div>
                <p className="text-bases md:text-lg text-neutral-950 ">
                  325kg Squat
                </p>
              </div>

              <div className="flex gap-2 mt-8 sm:mt-4">
                <a
                  href="https://www.instagram.com/johnatlas_elitefitness/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={30} />
                </a>
                <a
                  href="https://el-gr.facebook.com/john.atlas.900/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook size={30} />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="mt-20 px-0 lg:px-14">
            <div className="flex gap-4 flex-wrap">
              <TrainerItem href="/katerina" name="κατερινα" image={katerina} />
            </div>
          </div> */}
        </div>
      </div>
    </MotionPageWrapper>
  );
};
export default SingleTrainer;
