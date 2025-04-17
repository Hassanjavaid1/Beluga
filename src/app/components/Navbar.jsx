"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const hanldeToggle = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <>
      <header className="container mx-auto py-4 md:p-4 md:py-2">
        <div className="flex items-center justify-between gap-3 px-3 relative">
          <Link href={"/"}>
            <div className="flex items-center gap-2 px-4">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={30}
                height={20}
                className="object-cover h-auto w-auto"
              />
              <h1 className="text-3xl font-semibold">Beluga</h1>
            </div>
          </Link>
          <div
            className={`${isVisible ? "flex" : "hidden"} items-center flex-col gap-3 absolute inset-0 top-12 py-2 bg-white h-fit md:flex md:flex-row md:static`}
          >
            <Image
              src={"/user.jpg"}
              alt="user"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full object-cover border border-gray-400"
            />
            <span className="text-lg">Unknown</span>
            <button className="bg-[#7C4EE4] text-white font-semibold text-lg rounded-md cursor-pointer px-8 py-3">
              Logout
            </button>
          </div>
          <RxHamburgerMenu onClick={hanldeToggle} className="text-3xl md:hidden" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
