"use client";

import React, { useMemo, useRef, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "./newwod.css";
import toast from "react-hot-toast";
import { Session } from "@/app/utils/types";

const NewWod = ({ session }: { session: Session | undefined }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [wodTitle, setWodTitle] = useState("");
  const [wodContent, setWodContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setMessage("Creating Wod...");
      if (!wodTitle || !wodContent) {
        toast.error("Wod title or wod content missing");
        setIsLoading(false);
        setMessage("");
        return;
      }
      let wodPlainText = "";
      if (quillContainerRef.current) {
        wodPlainText =
          quillContainerRef.current.querySelector(".ql-editor")?.textContent ??
          "";
      }
      const response = await fetch("/api/admin/new-wod", {
        method: "POST",
        body: JSON.stringify({ wodTitle, wodContent, wodPlainText }),
      });
      if (response.ok) {
        setIsLoading(false);
        toast.success("Wod created!");

        setWodTitle("");
        setWodContent("");
        setMessage("");
        router.refresh();
        router.push("/wod");
      }
    } catch (error) {
      setIsLoading(false);
      setWodTitle("");
      setWodContent("");
      setMessage("");
      throw new Error("Something went wrong, try again later...");
    }
  };

  const quillContainerRef = useRef<HTMLDivElement>(null);

  if (!session) {
    redirect("/");
  }
  return (
    <div className="pt-24 md:pt-40 pb-10">
      <div className="xl:w-[1200px] w-full px-4 mx-auto">
        <h1 className="text-center mb-10">New Wod</h1>
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 sm:gap-4">
            <label htmlFor="title" className="text-xl font-bold uppercase">
              τιτλος
            </label>
            <input
              id="title"
              type="text"
              placeholder="Barbara or Cindie or whatever"
              className="border border-gray-400 py-5 px-4 hover:border-black duration-200"
              value={wodTitle}
              onChange={(e) => setWodTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-4">
            <label htmlFor="title" className="text-xl font-bold uppercase">
              wod
            </label>
            <div className="editor-container" ref={quillContainerRef}>
              <ReactQuill
                theme="snow"
                value={wodContent}
                onChange={setWodContent}
                modules={modules}
                className=""
                placeholder="20 Pull Ups
                30 Push Ups
                40 Sit Ups
                50 Squats
                Rest 3 Mins
                Repeat All For 5 Rounds"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-1/2 mx-auto uppercase bg-neutral-900 text-white mt-12 py-4 hover:bg-neutral-700 duration-200"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div className={`${isLoading ? "fixed" : "hidden"} z-40 inset-0`}>
        <div className="bg-black  opacity-70 w-full h-full duration-300"></div>
        <div className="flex justify-center items-center absolute inset-0">
          <div className=" bg-white text-black flex justify-center items-center py-3 px-6 whitespace-nowrap">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWod;
