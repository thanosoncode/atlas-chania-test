import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { getServerSession } from "next-auth";
import { BiSolidChevronRight } from "react-icons/bi";

interface PostCardProps {
  image: string;
  title: string;
  id: string;
  createdAt: Date;
}

const PostCard: React.FC<PostCardProps> = async ({
  image,
  title,
  id,
  createdAt,
}) => {
  const date = new Date(createdAt).getDate();
  const month = new Date(createdAt).toLocaleString("default", {
    month: "long",
  });

  const session = await getServerSession();

  return (
    <div className="w-full h-full relative">
      {session ? <DeleteButton id={id} /> : null}
      <Link
        href={`/posts/${id}`}
        className="block relative w-full  h-[80%] overflow-hidden"
      >
        <Image
          src={image}
          alt="article-img"
          fill
          className="object-cover hover:scale-105 duration-200"
          sizes="(min-width: 1280px) 371px, (min-width: 1000px) calc(25.77vw + 46px), (min-width: 680px) calc(50vw - 34px), (min-width: 380px) calc(100vw - 48px), calc(20vw + 240px)"
        />
        <div className="absolute top-4 right-4 bg-white w-16 h-16  flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">{date}</p>
          <p className="text-sm font-bold">{month.slice(0, 3)}</p>
        </div>
      </Link>
      <div className="px-2">
        <h4 className="text-xl font-bold text-black mt-2 mb-2  leading-normal">
          {title}
        </h4>
        <Link href={`/posts/${id}`} className="flex gap-1.5 ">
          <h4 className=" text-base font-bold text-black tracking-wider hover:text-red-500 duration-200 flex">
            <span>Διάβασε περισσότερα</span>
            <BiSolidChevronRight size={"24px"} />
          </h4>
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
