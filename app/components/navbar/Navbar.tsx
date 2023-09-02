"use client";

import Image from "next/image";
import Link from "next/link";
import logo2 from "../../../public/logo.jpeg";
import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";
import { Session } from "../../utils/types";

const links = [
  { name: "αρχικη", href: "/" },
  { name: "σχετικα με μας", href: "/about" },
  { name: "αρθρα & νεα", href: "/posts" },
  { name: "wod", href: "/wod" },
  { name: "αθληματα", href: "/crossfit" },
  { name: "προπονητες", href: "/ntagkounakis" },
  { name: "συνδρομες", href: "/pricing" },
  { name: "επικοινωνια", href: "/contact" },
];

const Navbar = ({ session }: { session: Session | undefined }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current) {
      const x = event.clientX;
      const y = event.clientY;

      const { left, top, right, bottom } =
        dropdownRef.current.getBoundingClientRect();

      const clickedInside =
        x > left && x < right && y > top - 122 && y < bottom;

      if (clickedInside) {
        return;
      }
      setOpen(false);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="w-screen xl:w-[1200px] px-6 py-3 md:py-9 mx-auto bg-neutral-950 text-white h-auto md:h-[112px] relative">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-6 justify-center items-center hover:scale-105 duration-300"
          onClick={() => setOpen(false)}
        >
          <Image src={logo2} alt="logo" width={40} height={40} />
          <h4 className="hidden md:block text-3xl">Atlas Chania</h4>
        </Link>
        <div
          ref={dropdownRef}
          className={` w-full absolute mx-auto flex flex-col  bg-neutral-950 gap-2  px-6 pb-4  transition-all duration-300 ease-in-out -z-10 left-0 ${
            open ? "top-[64px] md:top-[112px] " : "-top-[360px]"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 uppercase text-lg hover:text-red-500 duration-300 text-white font-bold ${
                open ? "" : ""
              } `}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className=" flex gap-4 items-center">
          <Menu open={open} onClick={() => setOpen(!open)} />
          {/* {session && (
            <div className="w-7 h-7  text-black flex justify-center items-center shrink-0 rounded-full bg-white">
              {session.user.email.slice(0, 1).toUpperCase()}
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
