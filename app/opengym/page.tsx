import Image from "next/image";
import opengym from "../../public/open-gym-1.jpg";
import { BiSolidCircle } from "react-icons/bi";
import crossfit from "../../public/crossfit-m.jpg";
import weightlifting from "../../public/weightlifting.jpg";
import MoreStylesCard from "../components/moreStylesCard/MoreStylesCard";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Gym",
  description:
    "Προπόνηση με τελευταίας τεχνολογίας μηχανήματα στο Atlas Chania. Αυξήστε τη μυϊκή μάζα και βελτιώστε τα νούμερά σας στο powerlifing και στην άρση βαρών στο Atlas Chania. Οτι χρειαζεστε από μηχανήματα για να πετύχετε τους στόχους σας είναι εδώ",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, Γιαννης Νταγκουνακης, προπόνηση με μηχανήματα, άρση βαρών, weightlifting, CrossFit, powerlifting, πρόγραμμα γυμναστικής, συμβουλές διατροφής",
};

const OpenGym = () => {
  return (
    <MotionWrapper>
      <div className="pt-4 sm:pt-16 relative pb-20 ">
        <div className="w-full px-4 xl:w-[1200px] mx-auto relative overflow-y-hidden mb-16">
          <h1 className="uppercase text-4xl sm:text-7xl font-extrabold mt-24">
            open gym
          </h1>
          <p className="text-lg text-neutral-700 mt-1 sm:mt-3">
            Ενισχύστε την προπόνηση σας με μηχανήματα για αύξηση μυικής μάζας
            και για βελτίωση των main lifts
          </p>
        </div>
        <div className="relative overflow-y-hidden">
          <div className="w-full px-4 xl:w-[1200px] mx-auto">
            <Image
              src={opengym}
              alt="opengym"
              className="w-full md:w-4/5 xl:w-3/4 h-1/2"
              sizes="(min-width: 1280px) 876px, (min-width: 780px) 80vw, calc(100vw - 32px)"
            />
          </div>
          <div className="absolute inset-0 bg-neutral-900 h-full -z-10 top-[100px]"></div>
        </div>
        <div className="bg-neutral-900">
          <div className="w-full px-4 xl:w-[1200px] mx-auto pt-12 pb-12 sm:pb-24">
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase mb-8">
              Ολοκληρωμενη προπονηση με μηχανηματα
            </h2>
            <p className="text-neutral-300 text-lg mb-4">
              Με τον όρο Open Gym εννοούμε το συμβατικό γυμναστήριο με τα βασικά
              όργανα τα οποία συμπληρώνουν 100% την προπόνηση σου.
            </p>

            <p className="text-neutral-300 text-lg mb-10">
              Είτε προπονείσαι για υπeρτροφία είτε για δύναμη είτε για condition
              ή muscle definition &#40;μυϊκό καθορισμό&#41; είτε επειδή απλά
              βαρέθηκες να κάνεις Crossfit και θες ένα διάλλειμα , το Atlas
              Chania σου δίνει τη δυνατότητα να γυμνάστεις συμβατικά με τα πιο
              ολοκληρωμένα όργανα.
            </p>
            <p className="text-neutral-300 text-lg">
              Πιο συγκεκριμένα διαθέτουμε
            </p>
            <div className="flex flex-col gap-2 text-neutral-100 text-lg mt-6 pb-8 pl-8">
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Squat & bench racks</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Jammer arms racks</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Cross over machine &#40;ότι πιο σύγχρονο&#41;</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Τροχαλία πλάτης με όλες τις λαβές</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Cross over machine &#40;ότι πιο σύγχρονο&#41; </p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Chest supported row &#40;κωπηλατική πλάτης&#41;</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Hack squat machine </p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Leg extension</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Leg curl machine &#40;hamstrings&#41;</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Dumbells from 4-60 kg</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Benches &#40;flat-incline&#41;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[1200px] px-4 mx-auto pt-20">
          <h4 className="text-2xl font-bold uppercase sm:text-4xl text-neutral-900 mb-6">
            Περισσοτερα αθληματα
          </h4>
          <div className="flex gap-12 md:flex-row flex-col">
            <MoreStylesCard
              title="Crossfit"
              subtitle="Γυμνάσε ολοκληρωμένα το σώμα σου και σε σύντομο χρονικό διάστημα"
              href="/crossfit"
              image={crossfit}
            />
            <MoreStylesCard
              title="Weightlifting"
              subtitle='Ο "πατέρας" των αθλημάτων της ισχύος'
              href="/weightlifting"
              image={weightlifting}
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
export default OpenGym;
