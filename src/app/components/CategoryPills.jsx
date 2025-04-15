"use client";
import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "./MyContext";

function CategoryPills() {
  const {
    data,
    setData,
    setPopularPosts,
    setFeaturedPost,
    setCategoryLoading
  } = useContext(contextApi);

  const [activePill, setActivePill] = useState("Frontend");

  const handlePill = (pill) => {
    setCategoryLoading(true)
    
    setActivePill(pill);

    // Filter Posts.

    const filterPosts = data?.filter((item) => item.category == pill);

    //Featured Post;
    setFeaturedPost(filterPosts?.slice(0, 1)[0]);
    // Popular Posts;
    setPopularPosts(filterPosts.slice(1));

    setTimeout(() => {
      setCategoryLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="container w-[50%] mx-auto mt-14">
        <ul className="flex items-center justify-around gap-4 rounded-md bg-gray-200 p-2">
          <li
            onClick={() => handlePill("Frontend")}
            className={`${activePill == "Frontend" && "bg-white rounded-md py-1"} text-lg cursor-pointer w-full text-center`}
          >
            Frontend
          </li>
          <li
            onClick={() => handlePill("Backend")}
            className={`${activePill == "Backend" && "bg-white rounded-md py-1"} text-lg cursor-pointer w-full text-center`}
          >
            Backend
          </li>
          <li
            onClick={() => handlePill("FullStack")}
            className={`${activePill == "FullStack" && "bg-white rounded-md py-1"} text-lg cursor-pointer w-full text-center`}
          >
            FullStack
          </li>
          <li
            onClick={() => handlePill("Cyber Security")}
            className={`${activePill == "Cyber Security" && "bg-white rounded-md py-1"} text-lg cursor-pointer w-full text-center`}
          >
            Cyber Security
          </li>
          <li
            onClick={() => handlePill("AI")}
            className={`${activePill == "AI" && "bg-white rounded-md py-1"} text-lg cursor-pointer w-full text-center`}
          >
            AI
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategoryPills;
