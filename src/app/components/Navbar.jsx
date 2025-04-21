"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {
  const { data: session } = useSession();

  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState(null);

  const hanldeToggle = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleTheme = () => {
    if (theme) {
      localStorage.setItem("theme", "light");
      setTheme(false);
    } else {
      localStorage.setItem("theme", "dark");
      setTheme(true);
    }
  };

  useEffect(() => {
    let root = window.document.documentElement;
    let saveTheme = localStorage.getItem("theme") || "light";
    setTheme(saveTheme == "dark");
    if (theme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="dark:bg-[#121212] dark:text-white">
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
              className={`${isVisible ? "flex" : "hidden"} items-center flex-col gap-3 absolute inset-0 top-12 py-2 bg-white dark:bg-[#121212] dark:text-white h-fit md:flex md:flex-row md:static`}
            >
              <Image
                src={session?.user?.image || "/user.jpg"}
                alt="user"
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover border border-gray-400"
              />
              <span className="text-lg">
                {session?.user?.name || "Loading"}
              </span>

              <button
                onClick={() => signOut()}
                className="bg-[#7C4EE4] text-white font-semibold text-lg rounded-md cursor-pointer px-8 py-3"
              >
                Logout
              </button>

              {theme ? (
                <MdOutlineLightMode
                  onClick={handleTheme}
                  className="text-[2.5rem] cursor-pointer"
                />
              ) : (
                <CiDark
                  onClick={handleTheme}
                  className="text-[2.5rem] cursor-pointer"
                />
              )}
            </div>
            <RxHamburgerMenu
              onClick={hanldeToggle}
              className="text-3xl md:hidden"
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
