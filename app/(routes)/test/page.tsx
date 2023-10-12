"use client";
import { isValidEmail } from "@/app/utils/helpers";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isConfirmEmailSent, setIsConfirmEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmEmailSent(false);

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    const response = await fetch("/api/confirmEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      toast.error("Something went wrong. Try again later");
      return;
    }

    setIsConfirmEmailSent(true);

    console.log("response", response);
  };

  return (
    <div className="mt-40">
      <div className="flex flex-col items-center gap-2 py-12">
        <h1 className="font-semibold">Join our Newsletter</h1>
        <p className="w-1/2 text-center">
          Εγγραφείτε στο newsletter μας για να λαμβάνετε τα τελευταία μας άρθρα,
          νέα και προσφορές. No spam.
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
            className="bg-black hover:opacity-80 py-3 px-5 text-white"
          >
            Subscribe
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
    </div>
  );
};

export default Newsletter;
