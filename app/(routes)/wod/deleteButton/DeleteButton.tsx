"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openConfirmationDialog = () => {
    setIsDialogOpen(true);
  };
  const closeConfirmationDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    const response = await fetch(`api/wod/${id}`, { method: "DELETE" });
    if (response.ok) {
      closeConfirmationDialog();
      setIsDeleting(false);
      router.refresh();
      return;
    } else {
      closeConfirmationDialog();
      setIsDeleting(false);
      throw new Error("something went wrong");
    }
  };

  return (
    <>
      <div className=" cursor-pointer" onClick={openConfirmationDialog}>
        <AiOutlineDelete size="16px" />
      </div>
      <div className={`${isDialogOpen ? "fixed" : "hidden"} z-40 inset-0`}>
        <div className="bg-black  opacity-70 w-full h-full duration-300"></div>
        <div className="flex justify-center items-center absolute inset-0">
          <div className=" bg-white text-black flex justify-center items-center py-4 px-2 sm:py-10 flex-col sm:px-12 whitespace-nowrap">
            <h4>Are you sure you want to delete this wod?</h4>
            <div className="flex gap-12 mt-8 w-full mx-auto px-8 justify-center">
              <button onClick={closeConfirmationDialog} className="font-bold">
                Cancel
              </button>
              <button
                className="font-bold text-white px-3 py-1.5 bg-black hover:bg-neutral-800"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteButton;
