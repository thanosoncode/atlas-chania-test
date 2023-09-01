import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SingleClassProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  href: string;
}

const SingleClass: React.FC<SingleClassProps> = ({
  image,
  title,
  subtitle,
  href,
}) => {
  return (
    <Link href={href} className="w-full h-full block">
      <div className="relative w-full  h-[70%] overflow-hidden">
        <Image
          src={image}
          alt="class-1"
          className="hover:scale-105 duration-200 object-cover"
          fill
          placeholder="blur"
          sizes="(min-width: 1320px) 584px, (min-width: 860px) calc(42.27vw + 34px), (min-width: 400px) calc(100vw - 32px), calc(28.75vw + 239px)"
        />
      </div>
      <div className="text-neutral-400 mt-2 ">
        <h3 className="text-3xl text-white uppercase font-bold tracking-wide">
          {title}
        </h3>
        <p className="text-base sm:text-lg block  font-semibold tracking-wide text-neutral-300 mb-1 md:mb-2">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};
export default SingleClass;
