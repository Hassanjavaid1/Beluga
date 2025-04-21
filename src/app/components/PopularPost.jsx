"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { contextApi } from "./MyContext";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingAnimation from "../../../public/loadingAnimation.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import "../.././app/globals.css";

function PopularPost() {
  const { popularPosts } = useContext(contextApi);
  const [postsData, setPostsData] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (postsData.length >= popularPosts.length) {
      setHasMore(false);
      return;
    }

    setItemCount((prev) => {
      let newCount = prev + 3;
      setPostsData(popularPosts.slice(0, newCount));
      return newCount;
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 mt-16 mb-10">
        <h1 className="text-3xl font-semibold">Popular Post</h1>
        {postsData.length == 0 ? (
          <h1 className="text-2xl text-center my-10">
            No popular post found...
          </h1>
        ) : (
          <InfiniteScroll
            dataLength={postsData.length}
            next={fetchData}
            hasMore={hasMore}
            loader={
              <div className="w-[10%] mt-4 m-auto">
                <Lottie animationData={loadingAnimation} />
              </div>
            }
            endMessage={
              <p className="text-center text-violet-600 mt-5">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="my-8 flex items-baseline justify-between flex-col flex-wrap gap-4 gap-y-8 lg:flex-row">
              {postsData.map(
                ({ id, title, image, publishedAt, description, category }) => (
                  <div className="flex flex-col items-baseline gap-3 lg:min-w-[420px] lg:w-[420px] flex-1">
                    <Image
                      src={image}
                      alt="card"
                      height={442}
                      width={410}
                      loading="eager"
                      className="object-cover w-auto h-auto min-h-[350px] max-h-[500px] rounded-2xl md:min-h-[442px]"
                    />
                    <div className="flex items-center gap-3 mt-4">
                      <span className="uppercase font-semibold">
                        {category}
                      </span>
                      <span className="text-sm">
                        {new Date(publishedAt).toDateString()}
                      </span>
                    </div>
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <p>{description?.slice(0, 500)}...</p>
                    <Link
                      href={`/post/${id}`}
                      className="text-violet-600 font-semibold underline cursor-pointer"
                    >
                      Read More...
                    </Link>
                  </div>
                )
              )}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}
export default PopularPost;
