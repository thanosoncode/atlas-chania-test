import React from "react";
import NewPost from "./NewPost";
import { getServerSession } from "next-auth";

export type Session = { user: { name: string; email: string; image: string } };

const NewPostPage = async () => {
  const session = (await getServerSession()) as Session | undefined;

  return <NewPost session={session} />;
};

export default NewPostPage;
