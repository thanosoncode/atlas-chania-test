"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "./newpost.css";
import { useRouter } from "next/navigation";
import { MotionPageWrapper } from "../../../components/motionWrapper/MotionPageWrapper";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { Session, UploadedImageData } from "@/app/utils/types";
import { imageTypes } from "@/app/utils/constants";

interface NewPostProps {
  session: Session | undefined;
}

const NewPost: React.FC<NewPostProps> = ({ session }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
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

  const uploadImage = async (formData: FormData) => {
    const cloudName = process.env.CLOUD_NAME ?? "";
    try {
      const uploadImageResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "post",
          body: formData,
        }
      );
      const imageData = (await uploadImageResponse.json()) as UploadedImageData;
      return imageData;
    } catch (error) {
      throw new Error("Error uploading image");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (inputImageRef.current) {
      const file =
        inputImageRef.current.files && inputImageRef.current.files[0];
      if (!file || !blogContent || !blogTitle) {
        toast.error("Title, Content or Image are missing");
        return;
      }
      formData.append("file", file);
      formData.append("upload_preset", "my_uploads");
      try {
        setIsLoading(true);
        setMessage("Uploading image...");
        const uploadedImage = await uploadImage(formData);
        const imageUrl = uploadedImage.secure_url;

        setMessage("Creating post...");
        const blogResponse = await fetch("/api/admin/new-post", {
          method: "POST",
          body: JSON.stringify({
            title: blogTitle,
            content: blogContent,
            image: imageUrl,
          }),
        });

        if (blogResponse.status === 201) {
          toast.success("Post created!");
          setMessage("Sending newsletter emails...");
          const blog = await blogResponse.json();
          await fetch("/api/sendNewsletter", {
            method: "POST",
            body: JSON.stringify({ blog }),
          });
          setIsLoading(false);
          toast.success("Newsletter sent!");
          setIsLoading(false);
          setMessage("");
          router.refresh();
          router.push("/posts");
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setIsLoading(false);
        setMessage("");
        throw new Error("Something went wrong");
      }
    }
  };

  if (!session) {
    redirect("/");
  }

  return (
    <MotionPageWrapper>
      <div className="pt-24 md:pt-40 pb-10">
        <div className="xl:w-[1200px] w-full px-4 mx-auto">
          <h1 className="text-center mb-10">New Post</h1>
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 sm:gap-4">
              <label htmlFor="title" className="text-xl font-bold uppercase">
                τιτλος
              </label>
              <input
                id="title"
                type="text"
                placeholder="How to lose fat and build muscle"
                className="border border-gray-400 py-5 px-4 hover:border-black duration-200"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <label htmlFor="image" className="text-xl font-bold uppercase">
                φωτογραφια
              </label>
              <input
                id="image"
                type="file"
                className="border border-gray-400 py-5 px-4 hover:border-black duration-200"
                ref={inputImageRef}
                accept={imageTypes}
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <label htmlFor="title" className="text-xl font-bold uppercase">
                περιεχομενο
              </label>
              <div className="editor-container">
                <ReactQuill
                  theme="snow"
                  value={blogContent}
                  onChange={setBlogContent}
                  modules={modules}
                  className=""
                  placeholder="The best way to lose fat and build muscle is... 1. join Atlas Chania 2..."
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
      </div>
      <div className={`${isLoading ? "fixed" : "hidden"} z-40 inset-0`}>
        <div className="bg-black  opacity-70 w-full h-full duration-300"></div>
        <div className="flex justify-center items-center absolute inset-0">
          <div className=" bg-white text-black flex justify-center items-center py-3 px-6 whitespace-nowrap">
            {message}
          </div>
        </div>
      </div>
    </MotionPageWrapper>
  );
};
export default NewPost;
