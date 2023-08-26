import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import Form from "./form/Form";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επικοινωνήστε μαζί μας σήμερα",
  description:
    "Μην το σκεφτεσαι! Έλα από το γυμναστήριο ή επικοινώνησε μαζί μας για οποιαδήποτε απορία, ιδέα ή αίτημα έχεις. Παρέχουμε online coaching. Επικοινωνήστε με το Atlas Chania σήμερα στα Χανιά, Ελλάδα.",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης, οικονομικό, φθηνό, το καλυτερο γυμναστηριο στσ Χανιά, οι καλυτεροι προπονητές στα Χανιά, συμβουλές διατροφής, πρόγραμμα γυμναστικής, πρόγραμμα ενδυνάμωσης",
};

const Contact = () => {
  return (
    <MotionWrapper>
      <div className="pt-12 md:pt-40 pb-20">
        <div className="w-full px-4 xl:w-[1200px] mx-auto relative overflow-y-hidden sm:mb-20">
          <div
            className="uppercase text-white xl:block hidden font-extrabold absolute  pb-96 -top-4 -z-10"
            style={{
              fontSize: 180,
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            Contact
          </div>
          <div
            className="uppercase text-white xl:hidden hidden md:block font-extrabold absolute  pb-96 top-4 -z-10"
            style={{
              fontSize: 140,
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            Contact
          </div>
          <div className="flex gap-12 sm:gap-20 md:gap-4 md:flex-row flex-col lg:gap-16 pt-20 md:pt-36 lg:px-14 overflow-x-hidden">
            <div className="w-full md:w-[50%] lg:w-[40%]">
              <h1 className="text-5xl text-black font-extrabold uppercase mb-6">
                μην το σκεφτεσαι
              </h1>
              <p className="text-lg text-gray-600">
                Έλα από το γυμναστήριο ή επικοινώνησε μαζί μας για οποιαδήποτε
                απορία, ιδέα, ή αίτημα έχεις ή αν θέλεις online coaching και θα
                μιλήσουμε αμέσως!
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex gap-6">
                  <AiOutlineMail size={24} color="#000" />
                  <div className="  font-bold mb-1">giannisdagou@gmail.com</div>
                </div>
                <div className="flex gap-6">
                  <BsTelephone size={24} color="#000" />
                  <div className=" font-bold  mb-1">698 739 1659</div>
                </div>
                <div className="flex gap-6">
                  <SlLocationPin size={24} color="#000" />
                  <div className="  font-bold mb-1">
                    Αγίου Νεκταρίου 31-29, Πασακάκι, Χανιά
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] lg:w-[60%]">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
export default Contact;
