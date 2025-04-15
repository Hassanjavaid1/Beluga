"use client";
import React, { useContext } from "react";
import { contextApi } from "./MyContext";
import Image from "next/image";
import Link from "next/link";

const HeroPost = () => {
  const { heroPost } = useContext(contextApi);
  return (
    <article className="rounded-none">
      <section className="flex flex-col justify-center items-center px-4 py-12 w-full bg-violet-600 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="mb-0 w-full max-w-[1296px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex items-center gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-4 text-lg font-bold text-white max-md:mt-10 max-md:max-w-full">
                <header className="tracking-widest uppercase">
                  {heroPost.category}
                </header>
                <h1 className="self-stretch mt-4 text-6xl leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                  {heroPost.title?.slice(0, 50)}...
                </h1>
                <p className="mt-7 leading-6  max-md:max-w-full">
                  {heroPost.description?.slice(0, 300)}...
                </p>
                <Link
                  href={`/post/${heroPost.id}`}
                  className="px-12 py-4 mt-10 cursor-pointer text-base text-center bg-white rounded-lg text-neutral-700 max-md:px-5 max-md:mt-10 hover:bg-gray-100 transition-colors"
                  aria-label="Read more"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                src={
                  heroPost.image ||
                  "https://cdn.builder.io/api/v1/image/assets/2971f33e3541497c855b8e4e5c5e46e4/f53f83bb0f23a02e70ad412353a5ab4162c55af7?placeholderIfAbsent=true"
                }
                height={600}
                width={628}
                priority
                alt="AI Future Illustration"
                className="object-cover grow w-full min-h-[550px] h-[600px] rounded-2xl aspect-[1.06] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HeroPost;
