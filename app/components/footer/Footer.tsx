import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/logo.jpeg";
import { getServerSession } from "next-auth";

const links = [
  { name: "Aρχική", href: "/" },
  { name: "Σχετικά με μας", href: "/about" },
  { name: "'Αρθρα & νέα", href: "/posts" },
  { name: "Αθλήματα", href: "/crossfit" },
  { name: "Συνδρομές", href: "/pricing" },
  { name: "Επικοινωνία", href: "/contact" },
];

const Footer = async () => {
  const session = await getServerSession();

  const adminPathname = session ? "/admin" : "/api/auth/signin";

  return (
    <footer className="bg-neutral-900">
      <div className="w-full px-4 xl:w-[1200px]  pt-6 mx-auto ">
        <div className=" border-b  border-neutral-300 pb-6">
          <div className="flex sm:gap-0 gap-4  items-start justify-between  sm:flex-row flex-col">
            <Link
              href="/"
              className="flex gap-2 md:gap-6 justify-center items-center hover:scale-105 duration-300 text-neutral-300 whitespace-nowrap"
            >
              <Image src={logo2} alt="logo" width={40} height={40} />
              <h4 className="text-xl">Atlas Chania</h4>
            </Link>
            <div className=" text-neutral-300">
              We teach you how to lift the world.
            </div>
          </div>
          <div className="flex w-full mt-6 flex-wrap justify-between gap-4 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-300"
              >
                {link.name}
              </Link>
            ))}
            <Link href={adminPathname} className="text-neutral-300">
              Admin
            </Link>
          </div>
        </div>
        <div className="flex justify-between text-neutral-300 py-6 ">
          <p className="text-sm">2023</p>
          <p className="text-sm">Built in Chania</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
