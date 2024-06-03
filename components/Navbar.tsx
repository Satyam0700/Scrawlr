import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/" className="">
          {/* <Image src="/logo" alt="logo" width={55} height={40} /> */}
          <h1 className="text-2xl text-white !font-bold">
            {" "}
            <span className="text-gradient_blue-purple !font-bold">!</span>
            Scrawlr
          </h1>
        </Link>
        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="">Hello Bachoo!</Link>
          </li>
          {/* <li className="body-text !font-normal">
            <Link href="" target="_blank">
                Book
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
