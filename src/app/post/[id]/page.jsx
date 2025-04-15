"use client";

import { useEffect, useState } from "react";
import PopularPost from "../../components/PopularPost";
import Image from "next/image";
import Loader from "@/app/components/Loader";

function page({ params }) {
  const [post, setPost] = useState([]);
  const [postLoading, setPostLoading] = useState(true);

  const fetchPost = async () => {
    try {
      const { id } = params;

      const url = await fetch(`/api/post/${id}`);
      const post = await url.json();
      setPost(post[0]);
      console.log("MY-POST", post);
      setPostLoading(false);
    } catch (err) {
      setPostLoading(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <article className="container mx-auto p-4">
      {postLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-baseline">
          <header className="flex gap-4 items-center ml-28 text-sm max-md:ml-2.5">
            <h2 className="grow font-bold text-zinc-800 text-lg">
              {post?.category}
            </h2>
            <time className="font-medium text-neutral-400">
              {new Date(post?.publishedAt).toLocaleDateString()}
            </time>
          </header>

          <h1 className="mt-5 mx-auto text-5xl font-bold leading-[67px] text-zinc-800 max-md:mr-2.5 max-md:text-4xl max-md:leading-[60px] lg:w-[86%]">
            {post?.title}
          </h1>

          <Image
            src={post?.image}
            priority
            alt="post"
            height={500}
            width={500}
            className="object-cover mt-14 rounded-2xl w-full min-w-full mx-auto"
          />

          <p className="my-10  mx-auto text-lg leading-loose text-stone-500 whitespace-pre-line lg:w-[86%]">
            {post.description}
          </p>
        </div>
      )}
      <PopularPost />
    </article>
  );
}

export default page;
