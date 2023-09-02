import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NewWod from "./NewWod";
import { Session } from "@/app/utils/types";

const NewWodPage = async () => {
  const session = (await getServerSession()) as Session | undefined;

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <NewWod session={session} />
    </div>
  );
};

export default NewWodPage;
