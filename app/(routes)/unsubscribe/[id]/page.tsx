"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Unsubscribe = ({ params: { id } }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubDeleted, setIsSubDeleted] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const response = await fetch("/api/subscribe", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (response.status === 404) {
      setIsLoading(false);
      toast.error("User does not exist");
      return;
    }
    if (response.status === 400) {
      setIsLoading(false);
      toast.error("Bad request.");
      return;
    }
    setIsLoading(false);
    setIsSubDeleted(true);
    toast.success("User successfully deleted");
  };

  return (
    <div className="mt-40  flex items-center flex-col gap-12">
      <h1>We are sorry to see you go.</h1>
      {isSubDeleted ? (
        <div>You have successfully unsubscribed!</div>
      ) : (
        <button
          onClick={handleClick}
          disabled={isLoading}
          className="bg-transparent text-black border border-black hover:bg-black  hover:text-white duration-200  px-6 text-base  block py-3 w-min whitespace-nowrap font-bold"
        >
          Unsubscribe newletter
        </button>
      )}
    </div>
  );
};

export default Unsubscribe;
