"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormData = { email: string; message: string };

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = async (data: FormData) => {
    setLoading(true);
    setProgressMessage("Sending..");
    try {
      const response = await emailjs.sendForm(
        "service_wh4c1jj",
        "template_4x5wobq",
        form.current ?? "",
        "user_bm37QJFLQoyKqlOoNcG0e"
      );

      if (response.text !== "OK") {
        setLoading(false);
        setProgressMessage(response.text);
        form.current && form.current.reset();
        throw new Error(response.text);
      }
      setLoading(false);
      form.current && form.current.reset();
      setProgressMessage("Message sent successfully!");
      return;
    } catch (error) {
      setLoading(false);
      form.current && form.current.reset();
      setProgressMessage("Something went wrong. Please try again later");
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
        className="bg-black text-white uppercase px-16 py-5 w-full sm:w-min whitespace-nowrap font-bold text-lg hover:bg-red-500 duration-200"
      >
        Στειλε μηνυμα
      </button>
      <p>{progressMessage}</p>
      {loading && <p>loading</p>}
    </form>
  );
};
export default Form;
