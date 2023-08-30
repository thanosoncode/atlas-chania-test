import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/prisma/prismaClient";
import john from "../../../public/john-close.png";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import xss from "xss";
import { MotionWrapper } from "@/app/components/motionWrapper/MotionWrapper";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import LikeButton from "../LikeButton";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await prisma.post.findFirst({
    where: { id },
  });

  return {
    title: post?.title,
    description: post?.content,
    openGraph: {
      images: post?.image,
    },
  };
}

export const generateStaticParams = async () => {
  const posts = await prisma.post.findMany();
  return posts.map((post) => ({ id: post.id }));
};

const Post = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await prisma.post.findFirst({
    where: { id },
  });

  if (!post) {
    return notFound();
  }

  const dayName = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <MotionWrapper>
      <div className="pt-20 relative w-full px-4 lg:w-[900px] mx-auto flex flex-col overflow-y-hidden">
        <div className=" relative overflow-y-hidden mb-20 overflow-x-hidden flex flex-col gap-10">
          <h1 className="text-3xl sm:text-5xl  font-extrabold mt-4 sm:mt-24 ">
            {post.title}
          </h1>
          <div className="flex gap-3 sm:gap-6 w-full ">
            <div className="rounded-full overflow-hidden">
              <Image
                src={john}
                alt="john atlas"
                width={60}
                height={60}
                className="w-16 h-16 sm:w-20 sm:h-20 "
              />
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-2 text-black ">
              <p className="uppercase font-bold text-lg sm:text-xl">
                Γιαννης Νταγκουνακης
              </p>
              <p className="text-base sm:text-lg">{dayName}</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-y-hidden">
          <div className="w-full ">
            <Image
              src={post?.image}
              alt="post-image"
              width={650}
              height={350}
              className="w-full sm:h-[460px] h-[400px] object-cover"
              sizes="(min-width: 1280px) 876px, (min-width: 780px) 80vw, calc(100vw - 32px)"
            />
          </div>
        </div>
        <div className="">
          <div
            className=" pt-16 pb-4 text-black sm:px-4 "
            dangerouslySetInnerHTML={{ __html: xss(post.content) }}
          ></div>
          <div className="">
            <LikeButton id={post.id} likes={post.likes} />
          </div>
          <div className="bg-neutral-900 p-4 sm:gap-8 sm:p-16 flex sm:flex-row flex-col gap-2">
            <div className="flex-shrink-0">
              <Image
                src={john}
                alt="john atlas"
                width={60}
                height={60}
                className="w-24 h-24 sm:w-32 sm:h-32 "
              />
            </div>
            <div className="text-neutral-200 ">
              <div className="flex justify-between items-start sm:items-center">
                <Link
                  href="/ntagkounakis"
                  className=" block text-lg sm:text-xl uppercase font-bold "
                >
                  Γιαννης νταγκουνακης
                </Link>
                <div className="flex justify-center items-center gap-2 sm:gap-4">
                  <FiFacebook size="20px" /> <BsInstagram size="20px" />
                </div>
              </div>
              <p className="text-base sm:text-lg mb-2 sm:mb-4 text-neutral-400">
                Atlas Chania
              </p>
              <p className="text-base sm:text-lg">
                &#34;Be the best, not just better... and eat your protein ρε
                συυυ!&#34;
              </p>
            </div>
          </div>
        </div>
        <div className="] mx-auto pt-16">
          <Link
            href="/posts"
            className="text-xl md:text-2xl uppercase text-neutral-900 font-extrabold mb-12 underline"
          >
            περισσοτερα αρθρα
          </Link>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Post;
