import Image from "next/image";
import crossfit from "../../public/crossfit-m.jpg";
import powerlifting from "../../public/powerlifting.jpg";
import opengym from "../../public/open-gym-1.jpg";
import { BiSolidCircle } from "react-icons/bi";
import MoreStylesCard from "../components/moreStylesCard/MoreStylesCard";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import { Metadata } from "next";
import weightlifting from "../../public/weightlifting.jpg";

export const metadata: Metadata = {
  title: "Crossfit",
  description:
    "Crossfit στo Atlas Chania! Προπονηθείτε αποτελεσματικά και έντονα για ολόκληρο το σώμα σε σύντομο χρονικό διάστημα υπό την καθοδήγηση έμπειρων προπονητών. Το Crossfit στο Atlas Chania προσφέρει εξατομικευμένα προγράμματα και προπόνηση σε διάφορα επίπεδα, από αρχάριους μέχρι προχωρημένους. Αναπτύξτε δύναμη, φυσική κατάσταση και δεξιότητες με το Crossfit στο Atlas Chania. Δείτε τον εξοπλισμό που προσφέρουμε και τα άλλα αθλήματα που μπορείτε να ασχοληθείτε.",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, Γιαννης Νταγκουνακης, προπόνηση με μηχανήματα, άρση βαρών, weightlifting, CrossFit, powerlifting, πρόγραμμα γυμναστικής, συμβουλές διατροφής",
};

const Crossfit = () => {
  return (
    <MotionWrapper>
      <div className="pt-4 sm:pt-16 relative pb-20 ">
        <div className="w-full px-4 xl:w-[1200px] mx-auto relative overflow-y-hidden mb-8">
          <h1 className="uppercase text-4xl sm:text-7xl  font-extrabold mt-24">
            crossfit
          </h1>
          <p className="text-lg text-neutral-700 mt-1 sm:mt-3">
            Aποτελεσματικό και έντονο προπονεί ολόκληρο το σώμα σε σύντομο χρόνο
          </p>
        </div>
        <div className="relative overflow-y-hidden">
          <div className="w-full px-4 xl:w-[1200px] mx-auto ">
            <Image
              src={crossfit}
              alt="crossfit"
              className="w-full md:w-4/5 xl:w-3/4 h-1/2 "
              sizes="(min-width: 1280px) 876px, (min-width: 780px) 80vw, calc(100vw - 32px)"
            />
          </div>
          <div className="absolute inset-0 bg-neutral-900 h-full -z-10 top-[100px]"></div>
        </div>
        <div className="bg-neutral-900">
          <div className="w-full px-4 xl:w-[1200px] mx-auto pt-12 pb-12 sm:pb-24">
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase mb-8">
              Pushing Limits, Forging Strength
            </h2>
            <p className="text-neutral-300 text-lg">
              Το Crossfit είναι εδώ. Weightlifting, powerlifting, καλισθενική,
              όλα μαζί γίνονται σε διάφορα μοτίβα χρόνων και επαναλήψεων. Η
              προπόνηση crossfit σχεδιάζεται εξατομικευμένα και χωρίζεται σε
              επίπεδα
            </p>
            <div className="flex flex-col gap-2 text-neutral-100 text-lg mt-8 pb-8 pl-8">
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>intro &#40;αρχάριοι&#41;</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>scaled &#40;μεσσαίο επίπεδο&#41;</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>rx &#40;προχωρημένοι&#41;</p>
              </div>
            </div>
            <p className="text-neutral-300 text-lg pb-6">
              Το crossfit αναπτύσει την δύναμη τη φυσική κατάσταση και τα skills
              σε κάθε ασκούμενο.
            </p>
            <p className="text-neutral-300 text-lg pb-6">
              Αποτελείται από το warmup, το core training, το anaerobic
              threshold, το strength και το τελικό wod. Έχει άριστα αποτελέσματα
              σε μικρό χρονικό διάστημα και ένα τέλειο αίσθημα wellbeing.
            </p>
            <p className="text-neutral-300 text-lg ">
              Στο Atlas Chania θα βρείτε όλο τον εξοπλισμό που χρειάζεστε για να
              προπονηθείτε σωστά:
            </p>
            <div className="flex flex-col gap-2 text-neutral-100 text-lg mt-8 pb-8 pl-8">
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Rows</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Assault Bikes</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Kettlebells</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Olympic Bars</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Rings</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Pull up Bars</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Battle Ropes</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Olympic Bars</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>GHD</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Wall Balls</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 xl:w-[1200px] mx-auto pt-12">
          <h4 className="text-2xl font-bold uppercase sm:text-4xl text-neutral-900 mb-6">
            Περισσοτερα αθληματα
          </h4>
          <div className="flex gap-12 sm:gap-4 lg:gap-12 md:flex-row flex-col">
            <MoreStylesCard
              title="Weightlifting"
              subtitle='Ο "πατέρας" των αθλημάτων της ισχύος'
              href="/weightlifting"
              image={weightlifting}
            />
            <MoreStylesCard
              title="Powerlifting"
              subtitle="Μάθε την τέχνη του powerlifting και εκτόξευσε την δύναμή σου"
              href="/powerlifting"
              image={powerlifting}
            />
            <MoreStylesCard
              title="Open gym"
              subtitle="Ενισχύστε την προπόνηση σας με μηχανήματα για αύξηση μυικής
                μάζας και για βελτίωση των main lifts"
              href="/opengym"
              image={opengym}
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
export default Crossfit;
