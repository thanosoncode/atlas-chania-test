import Link from "next/link";

const NotFound = () => {
  return (
    <div className="pt-40 w-full px-4 mx-auto xl:w-[1200px]">
      <div className="mb-10 font-bold text-2xl">404</div>
      <div className="mb-10 font-bold text-xl">
        It looks like that you&apos;re lost!
      </div>
      <Link
        href="/"
        className="border px-3 py-2 border-black uppercase hover:text-white hover:bg-black duration-200"
      >
        return home
      </Link>
    </div>
  );
};
export default NotFound;
