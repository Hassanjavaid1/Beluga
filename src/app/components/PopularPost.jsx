"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { contextApi } from "./MyContext";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingAnimation from "../../../public/loadingAnimation.json";
import Lottie from "lottie-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      let newCount = prev + 1;
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
            dataLength={postsData.length} //This is important field to render the next data
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
            <TransitionGroup>
              <div className="my-8 flex items-baseline justify-between flex-wrap gap-4 gap-y-8">
                {postsData.map(
                  ({
                    id,
                    title,
                    image,
                    publishedAt,
                    description,
                    category,
                  }) => (
                    <CSSTransition key={id} timeout={600} classNames="fade">
                      <div className="flex flex-col items-baseline gap-3 lg:min-w-[420px] lg:w-[420px] flex-1">
                        <Image
                          src={
                            image ||
                            "https://cdn.builder.io/api/v1/image/assets/2971f33e3541497c855b8e4e5c5e46e4/5fd6140a276c0932771d3e9f94485aea8759ac78?placeholderIfAbsent=true"
                          }
                          alt="card"
                          height={442}
                          width={410}
                          className="object-cover w-full min-h-[442px] h-[442px] !max-h-[500px] rounded-2xl"
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
                    </CSSTransition>
                  )
                )}
              </div>
            </TransitionGroup>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}
export default PopularPost;
