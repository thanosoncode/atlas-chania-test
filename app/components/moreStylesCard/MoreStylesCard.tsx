import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BiSolidChevronRight } from "react-icons/bi";

const MoreStylesCard = ({
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
        <h3 className="text-2xl sm:text-3xl text-neutral-900 font-bold mb-1 tracking-wide">
          {title}
        </h3>
        <p className="text-base sm:text-lg block  font-semibold tracking-wide text-neutral-600 mb-2">
          {subtitle}
        </p>
        <Link
          href={href}
          className="text-base sm:text-lg font-semibold tracking-wide text-neutral-900 flex gap-2  items-center test hover:text-red-500 duration-300 w-min whitespace-nowrap"
        >
          <span>Διάβασε περισσότερα</span>
          <BiSolidChevronRight size={"24px"} />
        </Link>
      </div>
    </div>
  );
};
export default MoreStylesCard;
