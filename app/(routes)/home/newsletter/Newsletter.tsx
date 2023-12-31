"use client";
import { isValidEmail } from "@/app/utils/helpers";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isConfirmEmailSent, setIsConfirmEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmEmailSent(false);
    setLoading(true);
    if (!isValidEmail(email)) {
      toast.error("Το email δεν είναι έγκυρο. Δοκιμάστε ξανά");
      setLoading(false);
      setEmail("");
      setIsConfirmEmailSent(false);
      return;
    }
    const response = await fetch("/api/confirmEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (response.status === 409) {
      toast.error("Αυτό το email υπάρχει ήδη στο newsletter");
      setLoading(false);
      setIsConfirmEmailSent(false);
      setEmail("");
      return;
    }

    if (response.status === 201) {
      setIsConfirmEmailSent(true);
      setLoading(false);
      setEmail("");
      return;
    } else {
      toast.error("Κάτι πήγε στραβά, δοκιμάστε αργότερα...");
      setLoading(false);
      setIsConfirmEmailSent(false);
      setEmail("");
      return;
    }
  };

  return (
    <div className="px-4 py-20 sm:py-32">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-semibold text-center">Join our Newsletter</h1>
        <p className="md:w-1/2 text-center">
          Εγγραφείτε στο newsletter μας για να λαμβάνετε τα τελευταία μας{" "}
          <span className="font-semibold">άρθρα, νέα και προσφορές</span>. No
          spam.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="email@gmail.com"
            className="border border-black py-3 px-3 hover:border-black duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-500 hover:opacity-80 py-3 px-5 text-white font-semibold"
            disabled={!email || loading}
          >
            Εγγραφή
          </button>
        </form>
        {isConfirmEmailSent && (
          <div className="flex flex-col items-center gap-2 py-4">
            <h1 className="font-semibold text-xl">
              Στάλθηκε email επιβεβαίωσης!
            </h1>
            <p className="w-1/2 text-center">
              Πηγαίνετε στο email σας και κάντε click στο link που σας στείλαμε!
            </p>
          </div>
        )}
      </div>
      <div className={`${loading ? "fixed" : "hidden"} z-40 inset-0`}>
        <div className="bg-black  opacity-70 w-full h-full duration-300"></div>
        <div className="flex justify-center items-center absolute inset-0">
          <div className=" bg-white text-black flex justify-center items-center py-3 px-6 whitespace-nowrap">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
