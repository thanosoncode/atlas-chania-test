import Image from "next/image";
import weightlifting from "../../public/weightlifting.jpg";
import powerlifting from "../../public/powerlifting.jpg";
import { BiSolidCircle } from "react-icons/bi";
import crossfit from "../../public/crossfit-m.jpg";
import MoreStylesCard from "../components/moreStylesCard/MoreStylesCard";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weightlifting",
  description:
    "Προόνηση άρσης αρών στο Atlas Chania! Οι έμπειροι προπονητές μας και ο Γιάννης Νταγκουνάκης με περισσότερα από 20 χρόνια εμπειρίας θα σας καθοδηγήσουν σε σωστές τεχνικές και προγράμματα προπόνησης. Γίνετε μέλος της ομάδας μας για να ανυψώσετε, να ενισχύσετε και να κατακτήσετε τους στόχους σας μέσα από την τέχνη της Ολυμπιακής άρσης βαρών.",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, Γιαννης Νταγκουνακης, προπόνηση με μηχανήματα, άρση βαρών, weightlifting, CrossFit, powerlifting, πρόγραμμα γυμναστικής, συμβουλές διατροφής",
};

const Weightlifting = () => {
  return (
    <MotionWrapper>
      <div className="pt-4 sm:pt-16 relative pb-20 ">
        <div className="px-4 w-full xl:w-[1200px] mx-auto relative overflow-y-hidden mb-8">
          <h1 className="uppercase text-4xl md:text-7xl font-extrabold mt-24">
            Weightlifting
          </h1>
          <p className="text-lg text-neutral-700 mt-1 sm:mt-3">
            Ο &quot;πατέρας&quot; των αθλημάτων της ισχύος.
          </p>
        </div>
        <div className="relative overflow-y-hidden">
          <div className="w-full px-4 xl:w-[1200px] mx-auto">
            <Image
              src={weightlifting}
              alt="weightlifting"
              placeholder="blur"
              priority
              className="w-full md:w-4/5 xl:w-3/4 h-1/2"
              sizes="(min-width: 1280px) 876px, (min-width: 780px) 80vw, calc(100vw - 32px)"
            />
          </div>
          <div className="absolute inset-0 bg-neutral-900 h-full -z-10 top-[100px]"></div>
        </div>
        <div className="bg-neutral-900">
          <div className="w-full px-4 xl:w-[1200px] mx-auto pt-12 pb-12 sm:pb-24">
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase mb-8">
              Raw Power, Ultimate technique
            </h2>
            <p className="text-neutral-300 text-lg">
              Η πολλή γνωστή σε όλους άρση βαρών, το εθνικό κατά πολλούς άθλημα
              μας αποτελείται από και έχει στόχο την τελειοποίηση των
            </p>
            <div className="flex flex-col gap-2 text-neutral-100 text-lg mt-8 pb-8 pl-8">
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                <p>Αρασέ &#40;snatch&#41;</p>
              </div>
              <div className="flex gap-4 items-center">
                <BiSolidCircle size={"10px"} fill="#f5f5f5" />
                Επολέ Ζετέ &#40;clean &amp; jerk&#41;
              </div>
            </div>
            <p className="text-neutral-300 text-lg pb-6">
              Η άρση βαρών &#40;weightlifting&#41; χρησιμοποιειται από όλους
              σχεδόν τους αθλητές και από τους crossfit και έχει τρομερά
              αποτελέσματα στην ισχύ και τη δύναμη.
            </p>
            <p className="text-neutral-300 text-lg pb-6">
              Στο Αtlas Chania σχεδιάζουμε προσεκτικά την προπόνηση και το
              πρόγραμμα του κάθε ασκούμενου επαναπροσδιορίζοντας συνεχώς τις
              ανάγκες του.
            </p>
            <p className="text-neutral-300 text-lg pb-6">
              Να σημειώσουμε ότι και εδώ το Ατlas Chania έχει σημειώσει
              αξιοσημείωτες επιδόσεις επί σειρά ετών, και μάλιστα έχουμε στο
              ενεργητικό μας τη συμμετοχή 2 αθλητών μας στην εθνική ομάδα.
            </p>
          </div>
        </div>
        <div className="w-full px-4 xl:w-[1200px] mx-auto pt-12">
          <h4 className="text-2xl font-bold uppercase sm:text-4xl text-neutral-900 mb-6">
            Περισσοτερα αθληματα
          </h4>
          <div className="flex gap-12 md:flex-row flex-col">
            <MoreStylesCard
              title="Powerlifting"
              subtitle="Μάθε την τέχνη του powerlifting και εκτόξευσε την δύναμή σου"
              href="/powerlifting"
              image={powerlifting}
            />
            <MoreStylesCard
              title="Crossfit"
              subtitle="Γυμνάσε ολοκληρωμένα το σώμα σου και σε σύντομο χρονικό διάστημα"
              href="/crossfit"
              image={crossfit}
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
export default Weightlifting;
