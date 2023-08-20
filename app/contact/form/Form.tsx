"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = { email: string; message: string };

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setLoading(false);
        toast.error("Something went wrong, try again later");
        form.current && form.current.reset();
        throw new Error("Something went wrong.");
      }
      setLoading(false);
      form.current && form.current.reset();
      toast.success("Το μήνυμα εστάλη!");
      return;
    } catch (error) {
      setLoading(false);
      form.current && form.current.reset();
      toast.error("Something went wrong, try again later");
      throw new Error("Something went wrong.");
    }
  };
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(sendEmail)}
      ref={form}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="uppercase">
          Email
        </label>
        <input
          type="text"
          {...register("email", { required: true })}
          className="border border-gray-400 py-5 px-4 hover:border-black duration-200"
          placeholder="Το email σου..."
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Το πεδίο είναι υποχρεωτικό</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="uppercase">
          μηνυμα
        </label>
        <textarea
          {...register("message", { required: true })}
          className="resize-y border border-gray-500 px-4 min-h-[200px] py-4 hover:border-black duration-200"
          placeholder="Το μήνυμά σου..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm">Το πεδίο είναι υποχρεωτικό</p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white uppercase px-16 py-5 w-full sm:w-min whitespace-nowrap font-bold text-lg hover:bg-red-500 duration-200"
      >
        {loading ? "Loading..." : "Στειλε μηνυμα"}
      </button>
    </form>
  );
};
export default Form;
