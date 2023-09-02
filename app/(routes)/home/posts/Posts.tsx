import MotionItemWrapper from "@/app/components/motionWrapper/MotionItemWrapper";
import TextShadowBlack from "../../../components/textShadow/TextShadowBlack";
import PostCard from "./PostCard";
import { prisma } from "@/prisma/prismaClient";

const Posts = async () => {
  const posts = await prisma.post.findMany();

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <div className="bg-neutral-900 pb-[60px] sm:pb-28  w-screen">
        <div className="w-full lg:w-[1200px] relative mx-auto px-6">
          <div className="top-[60px] sm:top-52 text-white absolute z-20 flex justify-center sm:justify-between inset-0 items-center w-full">
            <h4 className="text-4xl sm:text-7xl uppercase text-center font-extrabold lg:whitespace-nowrap px-6">
              αρθρα &amp; νεα
            </h4>
          </div>
          <div className=" hidden sm:block w-full h-full   ">
            <TextShadowBlack
              size={200}
              top="top-0"
              left="left-0"
              title="Blog"
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 pt-12 sm:pt-48  sm:pb-12  pb-20">
        <div className="px-4">
          <div className="grid-container-classes mx-auto ">
            {sortedPosts.slice(0, 4).map((post) => (
              <MotionItemWrapper key={post.id}>
                <PostCard
                  id={post.id}
                  image={post.image}
                  title={post.title}
                  createdAt={post.createdAt}
                />
              </MotionItemWrapper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Posts;
