import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NewWod from "./NewWod";

export type Session = { user: { name: string; email: string; image: string } };

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
