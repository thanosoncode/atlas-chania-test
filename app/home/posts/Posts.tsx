import ShadowHeadingBlack from "@/app/components/shadowHeading/ShadowHeadingBlack";
import PostCard from "./PostCard";
import { prisma } from "@/prisma/prismaClient";

const Posts = async () => {
  const posts = await prisma.post.findMany();

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <div className="bg-neutral-900 pb-28  w-screen">
        <div className="w-full lg:w-[1200px] relative mx-auto px-6">
          <div className="top-28 sm:top-52 text-white absolute z-20 flex justify-between inset-0 items-center w-full">
            <h4 className="text-5xl sm:text-7xl uppercase text-center font-extrabold lg:whitespace-nowrap px-6">
              αρθρα &amp; νεα
            </h4>
          </div>
          <div className=" hidden sm:block w-full h-full   ">
            <ShadowHeadingBlack
              size={200}
              top="top-0"
              left="left-0"
              title="Blog"
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 pt-20 sm:pt-48  pb-24 ">
        <div className="px-4">
          <div className="grid-container-classes mx-auto ">
            {sortedPosts.slice(0, 4).map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                createdAt={post.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Posts;
