import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  image: string;
  title: string;
  id: string;
  createdAt: Date;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, id, createdAt }) => {
  const date = new Date(createdAt).getDate();
  const month = new Date(createdAt).toLocaleString("default", {
    month: "long",
  });

  return (
    <div>
      <Link
        href={`/posts/${id}`}
        className="block relative w-full h-[260px] sm:h-[300px]  overflow-hidden  shadow-grey"
      >
        <Image
          src={image}
          alt="article-img"
          fill
          className="object-contain hover:scale-105 duration-200"
          sizes="(min-width: 1280px) 371px, (min-width: 1000px) calc(25.77vw + 46px), (min-width: 680px) calc(50vw - 34px), (min-width: 380px) calc(100vw - 48px), calc(20vw + 240px)"
        />
        <div className="absolute top-4 right-4 bg-white w-16 h-16  flex flex-col justify-center items-center  shadow-lg">
          <p className="font-bold text-2xl">{date}</p>
          <p className="text-sm font-bold">{month.slice(0, 3)}</p>
        </div>
      </Link>
      <Link
        href={`/posts/${id}`}
        className="px-2 text-lg font-semibold text-white block mt-1 sm:mt-2"
      >
        {title}
      </Link>
    </div>
  );
};
export default PostCard;
