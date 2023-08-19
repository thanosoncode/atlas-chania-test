"use client";

import { FcLike } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../components/spinner/Spinner";

const LikeButton = ({ id, likes }: { id: string; likes: number }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLikeClient = async () => {
    const retrieveId = localStorage.getItem("id");

    if (retrieveId === id) {
      return;
    }
    setLoading(true);
    const response = await fetch(`/api/posts/${id}`, {
      method: "GET",
    });
    if (response.status !== 200) {
      setLoading(false);
      throw new Error("Something went wrong");
    }
    setLoading(false);
    localStorage.setItem("id", id);
    router.refresh();
    return;
  };

  return (
    <div className="flex gap-1 mt-4 sm:px-4 mb-12 cursor-pointer w-min">
      <button
        type="submit"
        className="flex gap-1 justify-center items-center"
        onClick={handleLikeClient}
        disabled={loading}
      >
        <div className="flex justify-center items-center">
          <FcLike size="24px" />
        </div>
        {loading ? <Spinner /> : <div>{likes}</div>}
      </button>
    </div>
  );
};
export default LikeButton;
