import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const SportsCard = ({
  image,
  title,
  subtitle,
  href,
}: {
  image: StaticImageData;
  title: "Open gym" | "Powerlifting" | "Weightlifting" | "Crossfit";
  subtitle: string;
  href: string;
}) => {
  return (
    <div className="w-full md:w-[48%]">
      <Link
        href={href}
        className="relative w-full block h-[300px] overflow-hidden"
      >
        <Image
          src={image}
          alt="class-1"
          fill
          className="hover:scale-105 duration-200 object-cover"
          sizes="(min-width: 1280px) 560px, (min-width: 780px) calc(49.79vw - 38px), calc(100vw - 32px) "
        />
      </Link>
      <div className="text-neutral-300 mt-2 px-2">
        <h3 className="text-2xl  lg:text-3xl text-neutral-900 font-bold  sm:mb-1 tracking-wide">
          {title}
        </h3>
        <p className="text-base lg:text-lg block  font-semibold tracking-wide text-neutral-600 sm:mb-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default SportsCard;
