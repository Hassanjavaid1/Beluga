"use client";
import React, { useContext } from "react";
import { contextApi } from "./MyContext";
import Link from "next/link";
import Loader from "./Loader";

const FeaturedPost = () => {
  const { featuredPost, setFeaturedPost } = useContext(contextApi);

  return (
    <section className="container mx-auto">
      {featuredPost?.length == 0 ? (
        <h1 className="text-2xl text-center my-10">No Result found...</h1>
      ) : (
        <div className="flex relative flex-col items-end max-w-full w-[99%] rounded-2xl !mx-auto max-lg:pt-24 max-lg:pl-5 max-lg:mt-10 max-lg:mr-1.5 lg:px-20 lg:pt-55 lg:mt-20 lg:ml-4 lg:min-h-[604px] lg:w-[1294px]">
          <img
            src={featuredPost?.image}
            alt="featuredPost"
            className="object-cover absolute inset-0 size-full rounded-2xl"
          />
          <div className="box-border flex relative flex-col shrink-0">
            <article className="flex relative z-10 flex-col items-start mb-0 w-full max-w-full p-4 bg-white dark:bg-[#1c1c1d] rounded-2xl max-lg:px-5 max-lg:mb-2.5 lg:w-[966px] lg:py-10 lg:pr-20 lg:pl-9">
              <header className="flex gap-2 text-sm">
                <h2 className="grow font-bold text-zinc-800 dark:text-white">
                  {featuredPost.category}
                </h2>
                <time className="font-medium text-neutral-400">
                  {new Date(featuredPost?.publishedAt).toDateString()}
                </time>
              </header>

              <h1 className="mt-2 text-4xl font-bold tracking-tighter leading-10 text-zinc-800 dark:text-white max-lg:max-w-full md:mt-7">
                {featuredPost?.title}
              </h1>

              <p className="self-stretch mt-5 text-lg leading-6 hidden text-stone-500 dark:text-stone-300 max-lg:max-w-full lg:block">
                {featuredPost?.description?.slice(0, 400)}...
              </p>

              <Link
                href={`/post/${featuredPost.id}`}
                className="gap-3 self-stretch py-2.5 pr-8 pl-7 mt-4 text-base font-bold text-center text-violet-600 rounded-lg border border-violet-600 border-solid duration-100 hover:bg-violet-600 hover:text-white min-h-[42px] max-lg:px-5 md:mt-10"
              >
                Read More
              </Link>
            </article>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPost;
