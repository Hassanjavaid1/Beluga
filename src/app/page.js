"use client";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { contextApi } from "./components/MyContext";
import Loader from "./components/Loader";

const HeroPost = dynamic(() => import("./components/HeroPost"));
const CategoryPills = dynamic(() => import("./components/CategoryPills"));
const FeaturedPost = dynamic(() => import("./components/FeaturedPost"));
const PopularPost = dynamic(() => import("./components/PopularPost"));
const Newsletter = dynamic(() => import("./components/Newsletter"));

export default function Home({session}) {
  const { loading, categoryLoading } = useContext(contextApi);

  return (
    <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HeroPost />
            <CategoryPills />
            {categoryLoading ? (
              <Loader />
            ) : (
              <>
                <FeaturedPost />
                <PopularPost />
              </>
            )}
            <Newsletter />
          </>
        )}
    </>
  );
}
