import React from "react";
import NewPost from "./NewPost";
import { getServerSession } from "next-auth";
import { Session } from "@/app/utils/types";

const NewPostPage = async () => {
  const session = (await getServerSession()) as Session | undefined;

  return <NewPost session={session} />;
};

export default NewPostPage;
