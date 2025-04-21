import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 ">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={20}
            className="object-cover h-fit w-auto"
          />
          <h1 className="text-3xl font-extrabold text-stone-950 dark:text-white">
            Beluga
          </h1>
        </div>
        <nav className="flex gap-4 my-10 text-lg font-bold text-white max-md:mt-10">
          <a
            href="https://www.linkedin.com/in/hassan-javaid159"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 bg-violet-600 rounded-full h-[42px] w-[42px] flex items-center justify-center"
          >
            LI
          </a>
          <a
            href="https://github.com/Hassanjavaid1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 bg-violet-600 rounded-full h-[42px] w-[42px] flex items-center justify-center"
          >
            GIT
          </a>
        </nav>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2971f33e3541497c855b8e4e5c5e46e4/302418718145c9e7fc2789c4487b19e8a3e20133?placeholderIfAbsent=true"
          alt="Decorative line"
          className="object-contain self-center mt-10 w-full aspect-[1000] max-w-[1294px] max-md:mt-10 max-md:max-w-full"
        />
        <p className="self-center my-6 ml-8 text-lg text-stone-950 dark:text-white max-md:mt-10">
          Copyright Beluga Inc © 2025. All Right Reserved
        </p>
      </div>
    </footer>
  );
}
