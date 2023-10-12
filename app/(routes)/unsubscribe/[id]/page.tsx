import { prisma } from "@/prisma/prismaClient";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

const Unsubscribe = async ({ params: { id } }: { params: { id: string } }) => {
  const subscriber = await prisma.subscriber.delete({
    where: { id },
  });

  if (!subscriber) {
    redirect("/");
  }

  return (
    <div className="my-40  flex items-center flex-col gap-12">
      <h1>Θα μας λείψεις!</h1>
      <p>Απγγράφηκες με επιτυχία από Newsletter του Atlas Chania!</p>
      <Link
        href="/"
        className="border border-black p-3 hover:bg-black hover:text-white duration-200"
      >
        Go to home page
      </Link>
    </div>
  );
};

export default Unsubscribe;
