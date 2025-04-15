"use client";
import React, { useContext } from "react";
import { contextApi } from "./MyContext";
import Link from "next/link";
import Loader from "./Loader";

const FeaturedPost = () => {
  const { featuredPost, setFeaturedPost } = useContext(contextApi);

  return (
    <section className="container mx-auto">
      {!featuredPost | (featuredPost?.length == 0) ? (
        <h1 className="text-2xl text-center my-10">No Result found...</h1>
      ) : (
        <div className="flex relative flex-col items-end px-20 pt-55 mt-20 ml-4 max-w-full rounded-2xl min-h-[604px] w-[1294px] !mx-auto max-md:pt-24 max-md:pl-5 max-md:mt-10 max-md:mr-1.5">
          <img
            src={featuredPost?.image}
            alt="featuredPost"
            className="object-cover absolute inset-0 size-full rounded-2xl"
          />
          <div className="box-border flex relative flex-col shrink-0">
            <article className="flex relative z-10 flex-col items-start py-10 pr-20 pl-9 mb-0 max-w-full bg-white rounded-2xl w-[966px] max-md:px-5 max-md:mb-2.5">
              <header className="flex gap-2 text-sm">
                <h2 className="grow font-bold text-zinc-800">
                  {featuredPost.category}
                </h2>
                <time className="font-medium text-neutral-400">
                  {new Date(featuredPost?.publishedAt).toDateString()}
                </time>
              </header>

              <h1 className="mt-7 text-4xl font-bold tracking-tighter leading-10 text-zinc-800 max-md:max-w-full">
                {featuredPost?.title}
              </h1>

              <p className="self-stretch mt-5 text-lg leading-6 text-stone-500 max-md:max-w-full">
                {featuredPost?.description?.slice(0, 470)}...
              </p>

              <Link
                href={`/post/${featuredPost.id}`}
                className="gap-3 self-stretch py-2.5 pr-8 pl-7 mt-10 text-base font-bold text-center text-violet-600 rounded-lg border border-violet-600 border-solid duration-100 hover:bg-violet-600 hover:text-white min-h-[42px] max-md:px-5"
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
