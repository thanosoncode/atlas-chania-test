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
    <div className="w-full sm:w-[48%] relative">
      {session ? <DeleteButton id={id} /> : null}
      <Link
        href={`/posts/${id}`}
        className="block relative w-full h-[260px] sm:h-[300px] overflow-hidden shadow-[1px_1px_10px_2px_rgba(0,0,0,0.2)]"
      >
        <Image
          src={image}
          alt="article-img"
          fill
          className="object-contain hover:scale-105 duration-200"
          sizes="(min-width: 1280px) 371px, (min-width: 1000px) calc(25.77vw + 46px), (min-width: 680px) calc(50vw - 34px), (min-width: 380px) calc(100vw - 48px), calc(20vw + 240px)"
        />
        <div className="absolute top-4 right-4 bg-white w-16 h-16  flex flex-col justify-center items-center shadow-[1px_1px_10px_2px_rgba(0,0,0,0.2)]">
          <p className="font-bold text-2xl">{date}</p>
          <p className="text-sm font-bold">{month.slice(0, 3)}</p>
        </div>
      </Link>
      <Link href={`/posts/${id}`} className="px-2 block">
        <h4 className="text-lg font-semibold text-black mt-1  leading-normal">
          {title}
        </h4>
      </Link>
    </div>
  );
};
export default PostCard;
