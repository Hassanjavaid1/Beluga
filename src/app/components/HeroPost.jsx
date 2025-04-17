"use client";
import React, { useContext } from "react";
import { contextApi } from "./MyContext";
import Image from "next/image";
import Link from "next/link";

const HeroPost = () => {
  const { heroPost } = useContext(contextApi);
  return (
    <article className="rounded-none">
      <section className="flex flex-col justify-center items-center w-full bg-violet-600 max-md:px-5 lg:max-md:py-24 max-md:max-w-full">
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
                  heroPost.image}
                height={600}
                width={628}
                priority
                alt="AI Future Illustration"
                className="object-cover grow w-full h-[360px] rounded-2xl aspect-[1.06] max-md:mt-10 max-md:max-w-full lg:h-[600px] lg:min-h-[550px]"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HeroPost;
