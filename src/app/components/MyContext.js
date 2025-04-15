"use client";

import { createContext, useEffect, useState } from "react";

export const contextApi = createContext("");

function MyContext({ children }) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState([]);
  const [heroPost, setHeroPost] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);

  const fetchData = async () => {
    try {
      const url = await fetch("/api/posts");
      const res = await url.json();
      setData(res);
      setHeroPost(res?.slice(-1)[0]);
      setFeaturedPost(res?.slice(-2)[0]);
      setPopularPosts(res?.slice(0, -2));
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <contextApi.Provider
      value={{
        heroPost,
        setHeroPost,
        popularPosts,
        setPopularPosts,
        featuredPost,
        setFeaturedPost,
        loading,
        setLoading,
        setData,
        data,
        categoryLoading,
        setCategoryLoading,
      }}
    >
      {children}
    </contextApi.Provider>
  );
}

export default MyContext;
