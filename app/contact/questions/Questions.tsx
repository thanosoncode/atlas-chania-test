import Link from "next/link";
import AccordionItem from "./accordionItem/AccordionItem";

const qnas = [
  {
    question: "Για ποιούς είναι το Atlas Chania?",
    answer:
      "Κυριολεκτικά για όλους. Απευθυνόμαστε σε όλες τις ηλικίες και σε όλα τα επίπεδα . Από τον πιο αγύμναστο στον αθλητή που θέλει να προετοιμαστεί για ολυμπιακούς. Το πρόγραμμα φτιάχνεται εξατομικευμένα ανάλογα με τις ανάγκες (κάτι σαν περσοναλ).",
  },
  {
    question: "Χρειάζεται να αγοράσω εξοπλισμό για το Αtlas Chania?",
    answer:
      "Όχι, απολύτως τίποτα! Απλά φορέστε μια φόρμα ή ένα σορτς και αθλητικά παπούτσια και μια πετσέτα. Τίποτα άλλο.",
  },
  {
    question: "Μπορείτε να με βοηθήσετε με την διατροφή?",
    answer:
      "Φυσικά! Συνεργαζόμαστε με έμπειρο διατροφολόγο και μπορούμε να σας καθοδηγήσουμε σε θέματα διατροφής και συμπληρωμάτων για όποιον στόχο και να έχετε",
  },
  {
    question:
      "Είμαι γυναίκα και θέλω να δώσω έμφαση στους γλουτούς και στην κοιλιά. Τι μπορούμε να κάνουμε?",
    answer:
      "Οι γυναίκες αποτελούν το 50% πλέον των ασκουμένων του Atlas Chania. Και όλες θέλουν να δώσουν έμφαση στο προαναφερόμενα σημεία. Με τα χρόνια έχουμε αναπτύξει την μαγική συνταγή η οποία μαζί με την σωστή διατροφή αποδίδει στο μέγιστο ειδικά για την ανάπτυξη των γλουτιαιων και γενικότερα του lower body",
  },
  {
    question:
      "Θέλω να ασχοληθώ με την αγωνιστική άρση βαρών και να κατέβω σε αγώνες.",
    answer: "Και εμείς αυτό θέλουμε!",
  },
  {
    question: "Έχω ακούσει ότι το crossfit τραυματίζει...",
    answer:
      "Το λάθος crossfit τραυματίζει. Εδώ στο Atlas Chania έχουμε αφαιρέσει όλες τις ασκήσεις που εμπεριέχουν έστω και τον παραμικρό κίνδυνο και τις έχουμε αντικαταστήσει με το ίδιο αποτελεσματικές. Δεν κάνουμε pistol squats, κάνουμε step ups. Δεν κάνουμε γρήγορα με άσχημη τεχνική reos μόνο για να πετύχουμε καλούς χρόνους. Κάνουμε quality reps για να γυμναστούμε και γενικά προτεραιότητα είναι το: γυμνάζομαι σωστά και τεχνικά και όχι το σημειώνω χρόνους για να ικανοποιήσω τον εγωισμό μου.",
  },
  {
    question: "Έχετε ομαδικά προγράμματα;",
    answer:
      "Το Atlas Chania λειτουργεί με βάση τις αρχές της ατομικές ανάγκες του κάθε ασκούμενου. Ένας ασκούμενος π.χ. μπορεί να χρειάζεται περισσότερο χρόνο για να ολοκληρώσει ένα κυκλικό η ένα wod η γενικά μια άσκηση από κάποιον άλλον, ή ένας ασκούμενος πρέπει να αποφύγει μια άσκηση γιατί είναι τραυματισμένος ή εμάς ασκούμενος άργησε να έρθει η θέλει να έρθει οποία ώρα θέλει... οπότε όχι, δεν κάνουμε κυκλικά. Θεωρούμε ότι ο κάθε ασκούμενος έχει δικιες του ανάγκες και δεν πρέπει να τον τσουβαλιασουμε με τους υπόλοιπους.",
  },
  {
    question: "Μπορώ να έρθω ότι ώρα θέλω;",
    answer:
      "Ναι! Είμαστε ανοιχτά από τις 8:30 το πρωί έως και 22:00 το βράδυ και μπορείτε να έρθετε οποία ώρα θέλετε. Θα υπάρχει συνέχεια ένας η δύο προπονητές να σας βοηθήσουν και να σας επιβλέψουν οποιαδήποτε ώρα.",
  },
  {
    question: "Τι πρέπει να κάνω αν θέλω να αυξήσω βάρος; (Μυϊκό βάρος)",
    answer:
      "Αν είστε εκτομορφικός ή απλά θέλετε να αυξήσετε τους μύες σας, τότε το powerbuilding είναι για εσάς. Το powerbuilding είναι πρόγραμμα που χρησιμοποιει τις βασικές ασκήσεις του powerlifting και εντάσσει συμπληρωματικές ασκήσεις απομόνωσης (μηχανήματα η ελευθέρα) σε μοτίβα επαναλήψεων υπρτροφιας.",
  },
  {
    question: "Τι εγκαταστάσεις διαθέτετε;",
    answer:
      "Πλέον μετά την ανακαίνιση είμαστε περήφανοι για τις εγκαταστάσεις μας. Αποδυτήρια ανδρών-γυναικών με ντουζιέρες, WC ανδρών-γυναικών, ελεύθερο πάρκινγκ 8 θέσεων στο πίσω μέρος και 4 θέσεων μπροστά",
  },
  {
    question: "Από ασφάλεια;",
    answer:
      "Το Αtlas Chania διαθέτει τελευταίας τεχνολογίας φαρμακευτικό Κιτ, πυρασφάλεια και πίσω έξοδο σε περίπτωση σεισμού",
  },
  {
    question: "Αν αρρωστήσω ή φύγω διακοπές μπορώ να παγωσω τον μήνα μου;",
    answer:
      "Φυσικά! Απλά ενημερώστε πόσες μέρες θα λείψετε και σας παγώνουμε. Θα αρχίσουν να μετράνε ξανά με την επιστροφή σας",
  },
];

const Questions = () => {
  return (
    <div className="bg-neutral-900 pb-24">
      <div className="w-full xl:w-[1200px] mx-auto relative pb-20 sm:pb-80 lg:pb-[400px] px-4">
        <div className="text-5xl lg:text-7xl hidden sm:flex whitespace-nowrap font-extrabold uppercase text-white absolute z-20 top-[140px]  lg:top-[190px]  justify-between items-center w-full flex-col">
          <span> FREQUENTLY ASKED</span>
          <span>QUESTIONS</span>
        </div>
        <h4 className="block sm:hidden text-5xl font-extrabold uppercase text-white text-center">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <div
          className={`hidden lg:block uppercase text-white font-extrabold absolute left-1/2 -translate-x-1/2 `}
          style={{
            fontSize: 200,
            color: "#171717",
            textShadow:
              "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
          }}
        >
          QnAs
        </div>
        <div
          className={`hidden sm:block lg:hidden uppercase text-white font-extrabold absolute left-1/2 -translate-x-1/2 `}
          style={{
            fontSize: 170,
            color: "#171717",
            textShadow:
              "-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4",
          }}
        >
          QnAs
        </div>
      </div>
      <div className="text-white w-full xl:w-[1200px] mx-auto pb-24  gap-6 sm:gap-8 flex flex-col px-4">
        {qnas.map((q) => (
          <AccordionItem key={q.question} question={q}></AccordionItem>
        ))}
      </div>
      <div className="px-4">
        <Link
          className="border border-white text-white  hover:bg-white hover:text-black duration-200 uppercase w-full mx-auto md:w-min md:px-16 py-5 text-center  whitespace-nowrap font-bold text-lg block"
          href="/contact"
        >
          ρωτησε μας περισσοτερα
        </Link>
      </div>
    </div>
  );
};
export default Questions;
