import Link from "next/link";
import { BsCheck2 } from "react-icons/bs";
import { ImArrowRight } from "react-icons/im";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Συνδρομές",
  description:
    "Eπίλεξε το πακέτο που εξυπηρετεί καλύτερα τις ανάγκες και τους στόχους σου! Πληροφορίες για τα πακέτα βασικού, personal training, και combo. Κέρδισε εκπτώσεις, απολαύσε το powerlifting, το weightlifting και το crossfit πρόγραμμα, και λάβε συμβουλές διατροφής. Επίσης, για φοιτητές, σώματα ασφαλείας και εκπαιδευτικούς έχει έκπτωση 20% στο βασικό πακέτο. Αποκτήστε εμπειρία και online training με ανατροφοδότηση βίντεο και live streaming!",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης, τιμές, πακέτα, συνδρομές, φθηνό, οικονομικό",
};

const Pricing = () => {
  return (
    <MotionWrapper>
      <div className="pt-20 sm:pt-40 pb-20">
        <div className="w-full xl:w-[1200px] mx-auto relative overflow-y-hidden px-4">
          <div
            className="uppercase text-white lg:block hidden font-extrabold absolute  pb-96 top-10 -z-10 left-1/2 -translate-x-1/2"
            style={{
              fontSize: 130,
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            συνδρομες
          </div>
          <div
            className="uppercase text-white  lg:hidden hidden md:block font-extrabold absolute  pb-96 top-10 -z-10 left-1/2 -translate-x-1/2"
            style={{
              fontSize: 110,
              textShadow:
                "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
            }}
          >
            συνδρομες
          </div>
          <div className="pt-6 md:pt-28  lg:px-14 w-full">
            <div className="flex flex-col gap-3 sm:gap-6 items-center mb-14">
              <h1 className="md:flex hidden font-extrabold text-5xl tracking-wider uppercase text-center  flex-col">
                <span>Βρες τη συνδρομη</span>
                <span>που σου ταιριαζει</span>
              </h1>
              <h1 className="md:hidden  font-extrabold text-5xl tracking-wider uppercase text-center block ">
                συνδρομες
              </h1>
              <p className="text-neutral-700 text-lg text-center w-full md:w-[700px]">
                Διάλεξε το πακέτο που εξυπηρετεί καλύτερα τις ανάγκες και τους
                στόχους σου!
              </p>
            </div>
            <div className="w-full">
              <h4 className="text-center text-3xl uppercase font-bold mb-8 sm:mb-12">
                MHNIAIΕΣ
              </h4>
              <div className="flex sm:flex-row flex-col sm:items-start items-center gap-y-20 gap-6 lg:gap-24 justify-center w-full px-8">
                <div className="border border-neutral-600 py-6 sm:py-12 px-4 sm:px-6 w-full sm:w-96 flex flex-col justify-between flex-grow-1">
                  <div className="pb-3 sm:pb-8 border-b border-neutral-600">
                    <h4 className="uppercase text-xl text-neutral-900 mb-3 font-bold">
                      βασικο
                    </h4>
                    <h4 className="text-3xl lg:text-5xl font-bold uppercase mb-2 sm:mb-5 text-neutral-800">
                      €50 EURO
                    </h4>
                    <p className="text-neutral-700 text-lg">
                      Το πιο δημοφιλές πακέτο του Atlas Chania!
                    </p>
                  </div>
                  <div className="py-8 flex flex-col gap-3 ">
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        POWERLIFTING
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        WEIGHTLIFTING
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        CROSSFIT
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        ΠΡΟΓΡΑΜΜΑ
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <div>
                        <p className="uppercase  text-neutral-900 font-semibold">
                          ΣΥΜΒΟΥΛΕΣ
                        </p>
                        <p className="uppercase  text-neutral-900 font-semibold">
                          ΔΙΑΤΡΟΦΗΣ
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-neutral-900 block text-white uppercase px-4  py-5 w-full whitespace-nowrap font-bold  text-center"
                  >
                    ρωτηστε μας περισσοτερα
                  </Link>
                </div>
                <div className="border border-neutral-600 py-6 sm:py-12 px-4 sm:px-6 w-full sm:w-96 flex  flex-col justify-between">
                  <div className="pb-3 sm:pb-8 border-b border-neutral-600">
                    <h4 className="uppercase text-xl text-neutral-900 mb-3 font-bold">
                      PERSONAL TRAINING
                    </h4>
                    <h4 className="text-3xl lg:text-5xl font-bold uppercase mb-2 sm:mb-5 text-neutral-800">
                      €120 EURO
                    </h4>
                    <p className="text-neutral-700 text-lg">
                      Το καλύτερο δώρο που μπορείς να κάνεις στον εαυτό σου!
                    </p>
                  </div>
                  <div className="py-8 flex flex-col gap-3 ">
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <div className="flex flex-col gap-2">
                        <span className="uppercase  text-neutral-900 text-lg font-semibold">
                          4 ΦΟΡΕΣ ΤΗΝ ΒΔΟΜΑΔΑ
                        </span>
                        <span className="uppercase  text-neutral-900 text-lg font-semibold">
                          PERSONAL TRAINING
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        POWERLIFTING
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        WEIGHTLIFTING
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        CROSSFIT
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <p className="uppercase  text-neutral-900 font-semibold">
                        ΠΡΟΓΡΑΜΜΑ
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <BsCheck2 size={28} color="#1f2937" />
                      <div>
                        <p className="uppercase  text-neutral-900 font-semibold">
                          ΣΥΜΒΟΥΛΕΣ
                        </p>
                        <p className="uppercase  text-neutral-900 font-semibold">
                          ΔΙΑΤΡΟΦΗΣ
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-neutral-900 block text-white uppercase px-4  py-5 w-full whitespace-nowrap font-bold  text-center"
                  >
                    ρωτηστε μας περισσοτερα
                  </Link>
                </div>
              </div>
              <div className="w-full mt-20 sm:mt-32">
                <h4 className="text-center text-3xl uppercase font-bold mb-8 sm:mb-12">
                  COMBO
                </h4>
                <div className="flex  sm:flex-row flex-col sm:items-start items-center  gap-y-20   gap-6 lg:gap-24 justify-center px-8">
                  <div className="border border-neutral-600 py-6 sm:py-12 px-4 sm:px-6 w-full sm:w-96 flex flex-col justify-between">
                    <div className="pb-3 sm:pb-8 border-b border-neutral-600">
                      <h4 className="uppercase text-xl text-neutral-900 mb-3 font-bold">
                        ΤΡΙΜΗΝΟ
                      </h4>
                      <h4 className="text-3xl lg:text-5xl font-bold uppercase mb-2 sm:mb-5 text-neutral-800">
                        €120 EURO
                      </h4>
                      <p className="text-neutral-700 text-lg">
                        Εξοικονόμησε 30€ το τρίμηνο!
                      </p>
                    </div>
                    <div className="py-8 flex flex-col gap-3 ">
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          POWERLIFTING
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          WEIGHTLIFTING
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          CROSSFIT
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          ΠΡΟΓΡΑΜΜΑ
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <div>
                          <p className="uppercase  text-neutral-900 font-semibold">
                            ΣΥΜΒΟΥΛΕΣ
                          </p>
                          <p className="uppercase  text-neutral-900 font-semibold">
                            ΔΙΑΤΡΟΦΗΣ
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-neutral-900 block text-white uppercase px-4  py-5 w-full whitespace-nowrap font-bold  text-center"
                    >
                      ρωτηστε μας περισσοτερα
                    </Link>
                  </div>
                  <div className="border border-neutral-600 py-6 sm:py-12 px-4 sm:px-6 w-full sm:w-96 flex flex-col justify-between">
                    <div className="pb-3 sm:pb-8 border-b border-neutral-600">
                      <h4 className="uppercase text-xl text-neutral-900 mb-3 font-bold">
                        ΕΞΑΜΗΝΟ
                      </h4>
                      <h4 className="text-3xl lg:text-5xl font-bold uppercase mb-2 sm:mb-5 text-neutral-800">
                        €200 EURO
                      </h4>
                      <p className="text-neutral-700 text-lg ">
                        Εξοικονόμησε 100€ το εξάμηνο!
                      </p>
                    </div>
                    <div className="py-8 flex flex-col gap-3 ">
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          POWERLIFTING
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          WEIGHTLIFTING
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          CROSSFIT
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <p className="uppercase  text-neutral-900 font-semibold">
                          ΠΡΟΓΡΑΜΜΑ
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <BsCheck2 size={28} color="#1f2937" />
                        <div>
                          <p className="uppercase  text-neutral-900 font-semibold">
                            ΣΥΜΒΟΥΛΕΣ
                          </p>
                          <p className="uppercase  text-neutral-900 font-semibold">
                            ΔΙΑΤΡΟΦΗΣ
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-neutral-900 block text-white uppercase px-4  py-5 w-full whitespace-nowrap font-bold  text-center"
                    >
                      ρωτηστε μας περισσοτερα
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex items-center flex-col gap-4">
            <div className="flex items-center gap-3">
              <div>
                <ImArrowRight size="20px" />
              </div>
              <h4 className="text-lg">
                Για τους φοιτητές, τα σώματα ασφαλείας και τους εκπαιδευτικούς{" "}
                <span className="text-lg font-bold">
                  έκπτωση 20% &#40;από 50€ στα 40€&#41;
                </span>{" "}
                στο βασικό πακέτο.
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <ImArrowRight size="20px" />
              </div>
              <h4 className="text-lg">
                Επίσης παρέχεται η δυνατότητα για{" "}
                <span className="text-lg font-bold">online training</span> με
                ανατροφοδότηση βίντεο και live streaming!
              </h4>
            </div>
            <Link
              href="/contact"
              className=" block text-black underline uppercase text-xl md:text-2xl mx-auto mt-6 font-bold  text-center w-min whitespace-nowrap"
            >
              περισσοτερες πληροφοριες
            </Link>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
export default Pricing;
