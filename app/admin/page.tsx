import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export type Session = { user: { name: string; email: string; image: string } };

const AdminPage = async () => {
  const session = (await getServerSession()) as Session | undefined;

  if (!session) {
    redirect("/");
  }

  return (
    <div className="pt-60 pb-28">
      <div className="flex items-center justify-center gap-20">
        <Link
          className="bg-transparent text-black border border-black hover:bg-black  hover:text-white duration-200  px-6 text-base  block py-5 w-min whitespace-nowrap font-bold "
          href="/admin/new-post"
        >
          New Post
        </Link>
        <Link
          className="bg-transparent text-black border border-black hover:bg-black  hover:text-white duration-200  px-6 text-base  block py-5 w-min whitespace-nowrap font-bold "
          href="/admin/new-wod"
        >
          New wod
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
