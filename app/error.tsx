"use client";
import { useRouter } from "next/navigation";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const handleGoHome = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="pt-40 w-full px-4 mx-auto xl:w-[1200px]">
      <div className="mb-10 font-bold text-2xl">Oops</div>
      <div className="mb-10 font-bold text-xl">
        Something went wrong! Try again later...
      </div>
      <button
        className="border px-3 py-2 border-black uppercase hover:text-white hover:bg-black duration-200"
        onClick={handleGoHome}
      >
        go back home
      </button>
    </div>
  );
}
