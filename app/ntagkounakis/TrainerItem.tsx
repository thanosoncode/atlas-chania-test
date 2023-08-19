import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

interface TrainerItemProps {
  name: string;
  href: string;
  image: StaticImageData;
}

const TrainerItem: React.FC<TrainerItemProps> = ({ href, image, name }) => {
  return (
    <div>
      <Link href={href} className="block w-[200px] h-[300px] relative ">
        <Image src={image} alt={name} className="object-cover h-full" />
      </Link>
      <Link
        href={href}
        className="mt-2 font-semibold uppercase text-lg text-center block"
      >
        {name}
      </Link>
    </div>
  );
};
export default TrainerItem;
