import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <header className="container mx-auto p-4">
        <div className="flex items-center justify-between gap-3">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
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
          <div className="flex items-center gap-3">
            <Image
              src={"/user.jpg"}
              alt="user"
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full object-cover border border-gray-400"
            />
            <span className="text-lg">Unknown</span>
            <button className="bg-[#7C4EE4] text-white font-semibold text-lg rounded-md cursor-pointer px-8 py-3">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
